/*
 * Génération du PDF du bordereau de comptage — entièrement dans le
 * navigateur (jsPDF), aucune donnée ne quitte l'appareil.
 *
 * Maquette : format lettre, fond crème pâle, wordmark VESTIA en ocre
 * plein, bandeau de tableau nuit pétrole, filets or, deux blocs
 * d'attestation côte à côte (celui du retour reste vide sur le PDF de
 * cueillette), pied de page portant le lien de reprise sur la phrase
 * « L'intendance de votre quotidien ».
 */
import { jsPDF } from 'jspdf';
import {
  POLICE_BODONI,
  POLICE_BASKERVILLE,
  POLICE_BASKERVILLE_ITALIQUE,
  POLICE_MONTSERRAT,
  POLICE_MONTSERRAT_MEDIUM,
} from '../config/polices-pdf';
import { TAXES, CATEGORIES, COORDONNEES } from '../config/comptage';

export interface DonneesBordereau {
  mode: 'cueillette' | 'retour';
  prenom: string;
  nom: string;
  adresse: string;
  appartement: string;
  codePostal: string;
  telephone: string;
  courriel: string;
  quantites: number[];
  /* En mode retour : le compte d'origine, pour faire apparaître l'écart */
  quantitesCueillette?: number[];
  paiement: string;
  notes: string;
  numero: string;
  horodatageCueillette: string; /* ISO */
  signatureCueillette: string; /* PNG (data URL), encre nuit sur fond transparent */
  horodatageRetour?: string;
  signatureRetour?: string;
  lienReprise?: string;
}

/* Palette de la maquette */
const CREME = '#FAF6EE';
const NUIT = '#091E35';
const OCRE = '#C4A03C';
const GRIS = '#77705F';
const FILET_CLAIR = '#E6DEC9';

const PAGE_L = 612;
const PAGE_H = 792;
const MARGE = 54;
const DROITE = PAGE_L - MARGE;

export function formaterMontant(n: number): string {
  const entier = Math.abs(n - Math.round(n)) < 0.005;
  const texte = entier
    ? String(Math.round(n))
    : n.toFixed(2).replace('.', ',');
  return `${texte} $`;
}

export function formaterDateHeure(iso: string): string {
  const d = new Date(iso);
  const date = d.toLocaleDateString('fr-CA', { day: 'numeric', month: 'long', year: 'numeric' });
  const minutes = String(d.getMinutes()).padStart(2, '0');
  return `Le ${date}, ${d.getHours()} h ${minutes}`;
}

/* Largeur d'un texte, espacement des lettres compris */
function largeur(doc: jsPDF, texte: string, espacement = 0): number {
  return doc.getTextWidth(texte) + espacement * Math.max(0, texte.length - 1);
}

function texteEspace(
  doc: jsPDF,
  texte: string,
  x: number,
  y: number,
  espacement: number,
  alignerDroite = false
): void {
  doc.setCharSpace(espacement);
  const dx = alignerDroite ? x - largeur(doc, texte, espacement) : x;
  doc.text(texte, dx, y);
  doc.setCharSpace(0);
}

export function genererBordereau(d: DonneesBordereau): Blob {
  const doc = new jsPDF({ unit: 'pt', format: 'letter' });

  /* Polices de la marque, embarquées */
  doc.addFileToVFS('Bodoni.ttf', POLICE_BODONI);
  doc.addFont('Bodoni.ttf', 'Bodoni', 'normal');
  doc.addFileToVFS('Baskerville.ttf', POLICE_BASKERVILLE);
  doc.addFont('Baskerville.ttf', 'Baskerville', 'normal');
  doc.addFileToVFS('Baskerville-It.ttf', POLICE_BASKERVILLE_ITALIQUE);
  doc.addFont('Baskerville-It.ttf', 'Baskerville', 'italic');
  doc.addFileToVFS('Montserrat.ttf', POLICE_MONTSERRAT);
  doc.addFont('Montserrat.ttf', 'Montserrat', 'normal');
  doc.addFileToVFS('Montserrat-Md.ttf', POLICE_MONTSERRAT_MEDIUM);
  doc.addFont('Montserrat-Md.ttf', 'Montserrat', 'bold');

  /* Fond crème pleine page — jamais de blanc pur */
  doc.setFillColor(CREME);
  doc.rect(0, 0, PAGE_L, PAGE_H, 'F');

  /* ---------- En-tête ---------- */
  doc.setFont('Bodoni', 'normal');
  doc.setFontSize(27);
  doc.setTextColor(OCRE);
  texteEspace(doc, 'VESTIA', MARGE, 90, 5.5);

  doc.setFont('Montserrat', 'bold');
  doc.setFontSize(6.8);
  doc.setTextColor(GRIS);
  texteEspace(doc, 'REPASSAGE · CUEILLETTE À DOMICILE', MARGE, 106, 2);

  texteEspace(doc, 'BORDEREAU', DROITE, 78, 2.4, true);
  doc.setFont('Baskerville', 'normal');
  doc.setFontSize(13.5);
  doc.setTextColor(NUIT);
  doc.text(d.numero, DROITE, 98, { align: 'right' });

  /* Filet or */
  doc.setDrawColor(OCRE);
  doc.setLineWidth(0.8);
  doc.line(MARGE, 124, DROITE, 124);

  /* ---------- Bloc client ---------- */
  doc.setFont('Montserrat', 'bold');
  doc.setFontSize(7.2);
  doc.setTextColor(OCRE);
  texteEspace(doc, 'CLIENT', MARGE, 150, 1.8);
  /* À la cueillette le paiement est attendu ; à la livraison, c'est le
     mode retenu — même traitement visuel */
  texteEspace(doc, d.mode === 'retour' ? 'MODE DE PAIEMENT' : 'PAIEMENT ATTENDU', 356, 150, 1.8);

  doc.setTextColor(NUIT);
  doc.setFontSize(10.5);
  doc.text(`${d.prenom} ${d.nom}`.trim(), MARGE, 168);
  doc.setFont('Montserrat', 'normal');
  doc.setFontSize(9.5);
  /* Adresse avec appartement, puis la ligne de ville portant le code
     postal ; téléphone, et courriel seulement s'il est renseigné */
  const lignesClient = [
    d.appartement ? `${d.adresse}, app. ${d.appartement}` : d.adresse,
    d.codePostal ? `Montréal (Québec) ${d.codePostal}` : 'Montréal (Québec)',
  ];
  if (d.telephone) lignesClient.push(d.telephone);
  if (d.courriel) lignesClient.push(d.courriel);
  lignesClient.forEach((ligne, i) => doc.text(ligne, MARGE, 183 + i * 14));
  doc.setFontSize(10.5);
  doc.text(d.paiement, 356, 168);

  /* ---------- Tableau des pièces ---------- */
  const tableauY = Math.max(226, 183 + lignesClient.length * 14 + 26);
  const colQte = 348;
  const colUnite = 448;
  const colSousTotal = DROITE - 12;

  doc.setFillColor(NUIT);
  doc.rect(MARGE, tableauY, DROITE - MARGE, 24, 'F');
  doc.setFont('Montserrat', 'bold');
  doc.setFontSize(7.2);
  doc.setTextColor(CREME);
  texteEspace(doc, 'CATÉGORIE', MARGE + 12, tableauY + 15, 1.8);
  texteEspace(doc, 'QTÉ', colQte, tableauY + 15, 1.8, true);
  texteEspace(doc, 'UNITÉ', colUnite, tableauY + 15, 1.8, true);
  texteEspace(doc, 'SOUS-TOTAL', colSousTotal, tableauY + 15, 1.8, true);

  /* Une ligne par catégorie ayant une quantité non nulle — au retour,
     une catégorie comptée à la cueillette reste visible même ramenée
     à zéro, pour que l'écart se lise */
  const anciennes = d.quantitesCueillette;
  let y = tableauY + 24;
  let totalPieces = 0;
  let montant = 0;
  CATEGORIES.forEach((cat, i) => {
    const qte = d.quantites[i] ?? 0;
    const avant = anciennes ? (anciennes[i] ?? 0) : qte;
    if (qte === 0 && avant === 0) return;
    y += 26;
    totalPieces += qte;
    montant += qte * cat.prix;

    doc.setFont('Montserrat', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(NUIT);
    doc.text(cat.nom, MARGE + 12, y - 8);
    const qteTexte = anciennes && avant !== qte ? `${avant} → ${qte}` : String(qte);
    doc.text(qteTexte, colQte, y - 8, { align: 'right' });
    doc.text(formaterMontant(cat.prix), colUnite, y - 8, { align: 'right' });
    doc.text(formaterMontant(qte * cat.prix), colSousTotal, y - 8, { align: 'right' });

    doc.setDrawColor(FILET_CLAIR);
    doc.setLineWidth(0.6);
    doc.line(MARGE, y, DROITE, y);
  });

  /* Taxes : structure prête, invisible tant que `TAXES.inscrit` est faux */
  const lignesTaxes: Array<[string, string]> = [];
  let montantFinal = montant;
  if (TAXES.inscrit) {
    const tps = montant * TAXES.tauxTPS;
    const tvq = montant * TAXES.tauxTVQ;
    montantFinal = montant + tps + tvq;
    lignesTaxes.push(
      ['Sous-total avant taxes', formaterMontant(montant)],
      [`TPS (${(TAXES.tauxTPS * 100).toLocaleString('fr-CA')} %)`, formaterMontant(tps)],
      [`TVQ (${(TAXES.tauxTVQ * 100).toLocaleString('fr-CA')} %)`, formaterMontant(tvq)]
    );
  }
  doc.setFont('Montserrat', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(NUIT);
  for (const [libelle, valeur] of lignesTaxes) {
    y += 20;
    doc.text(libelle, colUnite, y - 4, { align: 'right' });
    doc.text(valeur, colSousTotal, y - 4, { align: 'right' });
  }

  /* Ligne de total : le montant, seul élément qui attire l'œil */
  y += 36;
  doc.setFont('Montserrat', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(NUIT);
  const pieces = `${totalPieces} ${totalPieces > 1 ? 'pièces' : 'pièce'}`;
  doc.text(pieces, MARGE + 12, y - 8);
  if (TAXES.inscrit) {
    doc.setFont('Montserrat', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(GRIS);
    doc.text('Total taxes incluses', colUnite, y - 8, { align: 'right' });
  }
  doc.setFont('Baskerville', 'normal');
  doc.setFontSize(16.5);
  doc.setTextColor(OCRE);
  doc.text(formaterMontant(montantFinal), colSousTotal, y - 6, { align: 'right' });

  doc.setFont('Baskerville', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(GRIS);
  /* La réserve n'a de sens qu'à la cueillette : au retour, les
     quantités sont ajustées et le montant est définitif */
  if (d.mode !== 'retour') {
    y += 14;
    doc.text('Montant estimé, sous réserve que toutes les pièces puissent être traitées.', MARGE + 12, y);
  }

  /* Écart de compte au retour, en toutes lettres */
  if (anciennes) {
    const piecesCueillette = anciennes.reduce((s, n) => s + n, 0);
    if (piecesCueillette !== totalPieces) {
      y += 14;
      doc.text(
        `Compte ajusté au retour — cueillette : ${piecesCueillette} pièces · retour : ${totalPieces} pièces.`,
        MARGE + 12,
        y
      );
    }
  }

  /* Notes éventuelles */
  if (d.notes) {
    y += 20;
    doc.setFont('Montserrat', 'bold');
    doc.setFontSize(7.2);
    doc.setTextColor(OCRE);
    texteEspace(doc, 'NOTES', MARGE + 12, y, 1.8);
    doc.setFont('Montserrat', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(NUIT);
    const lignes = doc.splitTextToSize(d.notes, DROITE - MARGE - 24);
    doc.text(lignes.slice(0, 3), MARGE + 12, y + 13);
    y += 13 + Math.min(lignes.length, 3) * 11;
  }

  /* ---------- Blocs d'attestation ---------- */
  const attY = Math.max(y + 30, 520);
  const attH = 150;
  const attL = 240;
  const attX2 = DROITE - attL;

  const bloc = (
    x: number,
    titre: string,
    horodatage?: string,
    signature?: string
  ) => {
    doc.setDrawColor(OCRE);
    doc.setLineWidth(0.8);
    doc.roundedRect(x, attY, attL, attH, 6, 6, 'S');
    doc.setFont('Montserrat', 'bold');
    doc.setFontSize(7.2);
    doc.setTextColor(OCRE);
    texteEspace(doc, titre, x + 16, attY + 22, 1.8);
    if (horodatage) {
      doc.setFont('Montserrat', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(NUIT);
      doc.text(formaterDateHeure(horodatage), x + 16, attY + 38);
    }
    if (signature) {
      /* Encre nuit sur transparent : se pose telle quelle sur la crème */
      doc.addImage(signature, 'PNG', x + 16, attY + 46, attL - 32, 66);
    }
    doc.setDrawColor(FILET_CLAIR);
    doc.setLineWidth(0.6);
    doc.line(x + 16, attY + attH - 26, x + attL - 16, attY + attH - 26);
    doc.setFont('Montserrat', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(GRIS);
    doc.text('Signature du client', x + 16, attY + attH - 14);
  };

  bloc(MARGE, 'CUEILLETTE', d.horodatageCueillette, d.signatureCueillette);
  /* Sur le PDF de cueillette, le bloc du retour reste volontairement
     vide : il annonce au client la seconde signature à la livraison */
  bloc(attX2, 'LIVRAISON RETOUR', d.horodatageRetour, d.signatureRetour);

  /* ---------- Pied de page ---------- */
  const piedY = 726;
  doc.setDrawColor(OCRE);
  doc.setLineWidth(0.8);
  doc.line(MARGE, piedY, DROITE, piedY);

  doc.setFont('Montserrat', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(GRIS);
  doc.text(`${COORDONNEES.telephone} · ${COORDONNEES.courriel} · ${COORDONNEES.site}`, MARGE, piedY + 16);
  doc.text(COORDONNEES.quartiers, MARGE, piedY + 28);
  if (TAXES.inscrit) {
    doc.text(`TPS ${TAXES.numeroTPS} · TVQ ${TAXES.numeroTVQ}`, MARGE, piedY + 40);
  }

  /* La signature de marque — et, dessous, le lien de reprise invisible :
     ni soulignement ni changement de couleur */
  doc.setFont('Baskerville', 'italic');
  doc.setFontSize(11.5);
  doc.setTextColor(OCRE);
  const phrase = 'L’intendance de votre quotidien';
  const phraseL = doc.getTextWidth(phrase);
  doc.text(phrase, DROITE, piedY + 22, { align: 'right' });
  if (d.lienReprise) {
    doc.link(DROITE - phraseL, piedY + 11, phraseL, 14, { url: d.lienReprise });
  }

  return doc.output('blob');
}
