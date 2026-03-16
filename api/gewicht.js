export default function handler(req, res) {
  const { who } = req.query;
  const user = who || "Jemand";

  // Würfelt ein Gewicht zwischen 50 und 150 kg
  const gewicht = Math.floor(Math.random() * 101) + 50;
  
  // Verschiedene lustige Zusätze
  const sprüche = [
    "Respekt!",
    "Da geht noch was!",
    "Stabil!",
    "Oha!",
    "Zeit für Gym?",
    "Vollschlank!"
  ];
  const spruch = sprüche[Math.floor(Math.random() * sprüche.length)];

  res.status(200).send(`${user} wiegt stolze ${gewicht} kg. ${spruch}`);
}
