/* const API_URL = "https://mybusiness.googleapis.com/v4";
const accountId = "2791793362"
const locationId = "ChIJGa4iYUPgwkcRHSCGJHXYhyY"


export async function fetchReviews() {
  const url = `${API_URL}/accounts/${accountId}/locations/${locationId}/reviews`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw new Error("Failed to fetch reviews");
  }
} */

export function fetchReviews() {
  const review = [
    {
      auteur: "Alex endrone",
      date: "il y a 3 mois",
      commentaire:
        "Je passais dans le coin pour faire quelques photos des étangs par drone, et je suis tombé sur votre Paintball Concept. Gros potentiel de votre espace de jeux.",
    },
    {
      auteur: "Emilie Balcaen",
      date: "il y a 3 mois",
      commentaire:
        "Moment de détente en famille pour un anniversaire. Le personnel est accueillant et chaleureux.",
    },
    {
      auteur: "Walid Bomaye",
      date: "il y a un an",
      commentaire:
        "Nous nous y sommes rendus avec mon équipe de paintball un jour d'airsoft. Le gérant nous a proposé un petit terrain sympa.",
    },
    {
      auteur: "Gaetan Parsy",
      date: "il y a 5 ans",
      commentaire:
        "Mon fils de 8 ans a fêté son anniversaire avec ses copains. Les lanceurs sont adaptés à leur âge, un casque est fourni et la sécurité est bien gérée.",
    },
    {
      auteur: "Cathy Gilmet",
      date: "il y a 11 mois",
      commentaire:
        "Pour un anniversaire, les enfants de 11-12 ans ont adoré. A refaire.",
    },
    {
      auteur: "CUVELLIER Camille",
      date: "il y a 7 mois",
      commentaire:
        "Je suis venue pour un teambuilding, avec pas mal de stress. Celui-ci a très vite disparu ! Merci l'équipe, j'ai passé une excellente journée.",
    },
    {
      auteur: "Vincent Leclercq",
      date: "il y a 3 semaines",
      commentaire:
        "Nous y avons célébré un enterrement de vie de garçon. C’était très défoulant pour un tarif attractif !",
    },
    {
      auteur: "Ludivine Hazar",
      date: "il y a 5 mois",
      commentaire:
        "Mon fils y a fait son anniversaire avec ses copains. C'était top !",
    },
    {
      auteur: "Jordan De Landtsheer",
      date: "il y a 7 mois",
      commentaire:
        "Venu pour un teambuilding, superbe après-midi. Moniteur très agréable, pro, convivial. Le terrain est tout aussi chouette. Toute l'équipe est ravie !",
    },
    {
      auteur: "LEILA BELAABIDIA",
      date: "il y a un an",
      commentaire:
        "Organisation au top, animateur hyper sympa que nos jeunes ont promis de défier une prochaine fois ! Je recommande à 100%.",
    },
    {
      auteur: "Tony Staelens",
      date: "il y a 4 ans",
      commentaire:
        "Mon fils a été invité pour une fête d'anniversaire enfants (8 ans), il est revenu enchanté ! Matériel spécifique pour les enfants, grands terrains, excellent accompagnement.",
    },
    {
      auteur: "Adrien Morais",
      date: "il y a 4 ans",
      commentaire:
        "Trop bien ! Très bon accueil, explications claires. Possibilité de faire un barbecue sur place et activité 'boxe'.",
    },
    {
      auteur: "hugo desmet",
      date: "il y a 7 mois",
      commentaire: "Superbe activité et très bon encadrement.",
    },
    {
      auteur: "Soso Nounours",
      date: "il y a un an",
      commentaire: "Au top je vous le recommande, accueil au top bon terrain.",
    },
    {
      auteur: "jonathan auchain",
      date: "il y a 5 ans",
      commentaire:
        "Hésitez pas personnel sympa et détendu n'hésite pas le terrain et grand et ces pure amusements.",
    },
    {
      auteur: "yohan Kubicki",
      date: "il y a 6 ans",
      commentaire:
        "Trop bien, le terrain est suffisamment grand pour donner libre court à votre imagination.",
    },
    {
      auteur: "Destro Gary",
      date: "il y a 3 ans",
      commentaire: "Le terrain le plus mortel de tousse !!!",
    },
    {
      auteur: "Shandro Ernst",
      date: "il y a 2 ans",
      commentaire:
        "Nous y sommes allés pour un enterrement de vie de garçon. C'était l'un des meilleurs clubs de paintball où nous sommes allés !",
    },
    {
      auteur: "Nelson Corvera",
      date: "il y a 4 ans",
      commentaire: "Amusant.",
    },
    {
      auteur: "Dextro Batiment",
      date: "il y a 5 ans",
      commentaire: "Bel endroit.",
    },
    {
      auteur: "Quentin Rotiers",
      date: "il y a 5 jours",
      commentaire: "À venir.",
    },
  ];

  return review;
}
