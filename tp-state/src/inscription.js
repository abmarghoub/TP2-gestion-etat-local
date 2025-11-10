import { useState } from 'react';

function Inscription() {
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "prenom") {
      setPrenom(value);
    } else if (name === "email") {
      setEmail(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Le prenom : ${prenom} \n L'email : ${email}`);
  }

  return (
    <div>
      <h2>Exercice 2 : Formulaire d’inscription</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Prenom :
        <input type="text" name="prenom" value={prenom} onChange={handleChange} />
      </label>
        <label>
        Email :
        <input type="email" name="email" value={email} onChange={handleChange} />
        </label>
      <button type="submit">Soumettre</button>
    </form>
    </div>
  );
}

export default Inscription;