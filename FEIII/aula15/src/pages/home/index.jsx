import axios from "axios"
import { useState, useEffect } from "react"
import {useNavigate} from "react-router-dom"

function HomePage() {

    const navigate = useNavigate()
    const [alunos, setAlunos] = useState([])

    async function getAlunos() {
        try {
            const response = await axios.get("https://api-aluno.vercel.app/aluno")
            setAlunos(response.data)
        } catch (erro) {
            alert("Erro ao buscar lista de alunos")
        }
    }

    async function deleteAluno(id) {
        try {
            await axios.delete(`https://api-aluno.vercel.app/aluno/${id}`);
            getAlunos();
        } catch (erro) {
            alert("Erro ao deletar aluno")
        }
    }

    useEffect(() => {
        getAlunos();
    }, [])

    return (

        <div>
            <h1>Seja bem vindo!</h1>
            <h2>Lista de Alunos</h2>
            <p>Para cadastrar um novo aluno clique abaixo</p>
            <button onClick={() => navigate("/form")}>cadastrar</button>
            <ul>
                {alunos.map((aluno) => (
                    <li key={aluno._id} style={{ border: "1px solid black", marginBottom: "15px" }}>
                        <p>Id: {aluno._id}</p>
                        <p>Nome: {aluno.nome}</p>
                        <p>Matricula: {aluno.matricula}</p>
                        <p>Curso: {aluno.curso}</p>
                        <p>Bimestre: {aluno.bimestre}</p>
                        <button onClick={() => deleteAluno(aluno._id)}>apagar</button>
                        <button onClick={() => navigate(`/form/${aluno._id}`)}>editar</button>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default HomePage