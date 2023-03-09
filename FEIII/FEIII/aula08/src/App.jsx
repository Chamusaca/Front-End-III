import { useState } from 'react'

function App() {

    const [listaTrainers, setListaTrainers] = useState([]);
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [pokemon, setPokemon] = useState("");

    function register(event) {
        event.preventDefault();
        setListaTrainers([...listaTrainers, {nome: nome, idade: idade, pokemon: pokemon}])

        setNome("");
        setIdade("");
        setPokemon("");
    }


    return (
        <form>
            <h1>Trainers Pokemon</h1>

            <input value={nome} placeholder='Nome' onChange={(event) => setNome(event.target.value)} />
            <input value={idade} placeholder='Idade' onChange={(event) => setIdade(event.target.value)} />
            <input value={pokemon} placeholder='Pokemon Favorito' onChange={(event) => setPokemon(event.target.value)} />

            <button onClick={register}>Registrar</button>

            <ul>
                {listaTrainers.map((item, index) => <li key={index}> {item.nome} - {item.idade} - {item.pokemon} </li>)}
            </ul>


        </form>
    )
}

export default App;
