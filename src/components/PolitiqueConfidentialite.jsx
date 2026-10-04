import LegalPage from './LegalPage'

const sections = [
  {
    title: "Responsable de traitement",
    paragraphs: [
      "L'Art du Soin by CK — 81 Rue de la République, 57240 Knutange, France.",
      "Contact pour toute question relative à vos données : artsoin.ck@gmail.com — +33 7 85 15 36 21.",
    ],
  },
  {
    title: "Données collectées",
    paragraphs: [
      "Via le formulaire de contact : nom, adresse email, sujet et contenu de votre message.",
      "Via la réservation en ligne : les rendez-vous sont pris sur la plateforme Planity, qui traite vos données selon sa propre politique de confidentialité.",
      "Ce site ne dépose aucun cookie de suivi ou de mesure d'audience sur votre navigateur.",
    ],
  },
  {
    title: "Finalités et base légale",
    paragraphs: [
      "Vos données sont utilisées uniquement pour répondre à vos demandes de contact et gérer vos rendez-vous.",
      "Ces traitements reposent sur votre consentement et sur l'exécution de mesures précontractuelles (demande de rendez-vous ou d'information).",
    ],
  },
  {
    title: "Durée de conservation",
    paragraphs: [
      "Les données issues du formulaire de contact sont conservées au maximum 3 ans à compter de votre dernier échange avec nous.",
    ],
  },
  {
    title: "Destinataires",
    paragraphs: [
      "Vos données sont destinées exclusivement à l'équipe de l'institut L'Art du Soin by CK. Elles ne sont ni vendues, ni cédées à des tiers à des fins commerciales.",
      "Seule la plateforme Planity reçoit les données nécessaires à la prise de rendez-vous en ligne.",
    ],
  },
  {
    title: "Vos droits",
    paragraphs: [
      "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données.",
      "Pour exercer ces droits, écrivez à artsoin.ck@gmail.com. Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).",
    ],
  },
  {
    title: "Sécurité",
    paragraphs: [
      "Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès, perte ou divulgation non autorisés.",
    ],
  },
]

function PolitiqueConfidentialite() {
  return (
    <LegalPage
      eyebrow="Vos données"
      title="Politique de confidentialité"
      intro="Comment nous collectons, utilisons et protégeons vos données personnelles."
      sections={sections}
    />
  )
}

export default PolitiqueConfidentialite
