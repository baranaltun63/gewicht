export default function handler(req, res) {
  // Gewicht zwischen 50 und 150 kg würfeln
  const gewicht = Math.floor(Math.random() * 101) + 50;
  let spruch = "";

  // Logik für die verschiedenen Gewichtsklassen
  if (gewicht >= 50 && gewicht <= 65) {
    const s = ["Magersucht oder so?!", "Dünner Kelb!", "Iss mal was, Lauch!", "Streichholzbeine!"];
    spruch = s[Math.floor(Math.random() * s.length)];
  } 
  else if (gewicht > 65 && gewicht < 80) {
    const s = ["Leaner Hund!", "Iss mal was aber chill", "Tmm Bra wir wissen du bist dünn"];
    spruch = s[Math.floor(Math.random() * s.length)];
  } 
  else if (gewicht >= 80 && gewicht < 90) {
    const s = ["Halbfetter Bastard!", "Tmm Arnold Dünnerhund.", "Geht noch mehr."];
    spruch = s[Math.floor(Math.random() * s.length)];
  } 
  else if (gewicht >= 90 && gewicht <= 110) {
    const s = ["Was ein Schrank!", "Cüsh Rücken wie Gorilla!", "Kante amk aber nicht der Fussballspieler haha"];
    spruch = s[Math.floor(Math.random() * s.length)];
  } 
  else if (gewicht > 110 && gewicht < 125) {
    const s = ["Voll Dünn lo!", "Ähnlichkeit mit Rawmen, einfach Twins.", "Ibonaldo 2.0!"];
    spruch = s[Math.floor(Math.random() * s.length)];
  } 
  else { // Über 125 kg
    const s = ["OHA LAN!", "Fettsack Junge!", "Geh ins gym fetter hund!", "Schwerlasttransport nötig!"];
    spruch = s[Math.floor(Math.random() * s.length)];
  }

  // Rückgabe an den Bot
  res.status(200).send(`${gewicht} kg. ${spruch}`);
}
