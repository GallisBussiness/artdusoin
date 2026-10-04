import { Link } from 'react-router-dom'
import LegalPage from './LegalPage'

const sections = [
  {
    title: "Éditeur du site",
    paragraphs: [
      "L'Art du Soin by CK — Institut d'esthétique",
      "81 Rue de la République, 57240 Knutange, France",
      "Directrice de la publication : Mme CHIRARA Karina",
      "Téléphone : +33 7 85 15 36 21",
      "Email : artsoin.ck@gmail.com",
      "SIRET : en cours d'immatriculation",
    ],
  },
  {
    title: "Hébergement",
    paragraphs: [
      "Ce site est hébergé par un prestataire professionnel. Les coordonnées complètes de l'hébergeur sont disponibles sur simple demande auprès de l'éditeur.",
    ],
  },
  {
    title: "Propriété intellectuelle",
    paragraphs: [
      "L'ensemble des contenus présents sur ce site (textes, photographies, logo, charte graphique) est protégé par le droit de la propriété intellectuelle. Toute reproduction ou utilisation sans autorisation préalable est interdite.",
      "Les marques THALGO, LPG, Planity et Alma citées sur ce site appartiennent à leurs titulaires respectifs.",
    ],
  },
  {
    title: "Données personnelles",
    paragraphs: [
      <>Les traitements de données personnelles réalisés via ce site sont décrits dans notre <Link to="/politique-de-confidentialite" className="text-gold-700 underline underline-offset-2 hover:text-gold-900">politique de confidentialité</Link>.</>,
    ],
  },
  {
    title: "Liens externes",
    paragraphs: [
      "Ce site contient des liens vers des sites tiers (Planity, THALGO, réseaux sociaux). L'éditeur ne saurait être tenu responsable du contenu de ces sites externes.",
    ],
  },
  {
    title: "Droit applicable",
    paragraphs: [
      "Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.",
    ],
  },
]

function MentionsLegales() {
  return (
    <LegalPage
      eyebrow="Informations"
      title="Mentions légales"
      intro="Informations légales relatives à l'éditeur et à l'hébergement de ce site."
      sections={sections}
    />
  )
}

export default MentionsLegales
