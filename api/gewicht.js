export default function handler(req, res) {
  // Wir würfeln nur das Gewicht und den Spruch aus
  const gewicht = Math.floor(Math.random() * 101) + 50;
  
  const sprüche = ["Fettsack Junge!", "OHA LAN!", "Dünner Kelb!", "Zeit für Gym?", "Magersucht oder so?!", "Was ein Schrank!"];
  const spruch = sprüche[Math.floor(Math.random() * sprüche.length)];

  // Wir senden NUR das Gewicht und den Spruch zurück (ohne Namen)
  res.status(200).send(`${gewicht} kg. ${spruch}`);
}
