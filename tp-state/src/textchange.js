import { useState } from "react";

function TextChange() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const getText = () => {
    if (count === 0) return "Cliquez pour commencer !";
    if (count === 1) return "Premier clic";
    if (count === 2) return "Deuxième clic";
    if (count === 3) return "Troisième clic";
    return `${count}ᵉ clic`;
  };

  return (
    <div>
      <h2>Exercice 1 : Affichage dynamique</h2>
      <p>{getText()}</p>
      <button onClick={handleClick}>Changer le texte</button>
    </div>
  );
}

export default TextChange;
