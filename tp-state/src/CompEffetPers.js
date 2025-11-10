import { useState, useEffect } from "react";

function CompEffetPers() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Compteur : ${count} clic(s)`;
  }, [count]);

  return (
    <div>
      <h2>Exercice 3 : Compteur avec effet personnalisé</h2>
      <p>Nombre de clics : {count}</p>
      <button onClick={() => setCount(count + 1)}>Cliquer</button>
    </div>
  );
}

export default CompEffetPers;
