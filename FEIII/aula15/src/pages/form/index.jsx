import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

function FormPage() {
    const navigate = useNavigate()
    const {id} = useParams();
    const [aluno, setAluno] = useState("")
    const [nome, setNome] = useState("")
    const [matricula, setMatricula] = useState("")
    const [curso, setCurso] = useState("")
    const [bimestre, setBimestre] = useState("")

    async function getAluno(i) {
        try {
            const response = await axios.get(`https://api-aluno.vercel.app/aluno/${i}`)
            setAluno(response.data)
            console.log(aluno)

        } catch (erro) {
            alert("Erro ao buscar aluno para edição")
        }
    }

    async function cadastrar(event) {
        event.preventDefault();
        try {
            await axios.post("https://api-aluno.vercel.app/aluno", {nome: nome, matricula: matricula, curso: curso, bimestre: bimestre})
            navigate("/")
        } catch (erro) {
            alert("Erro ao cadastrar aluno")
        }
    }


    {id ?  
    useEffect(() => {
        getAluno(id);
    },[]) : null}

    return (
        <div>
            <h1>Formulário Aluno</h1>
            <form>
                <label>Nome <input value={nome} onChange={(event) => setNome(event.target.value)} placeholder="Preencha o nome"/></label> <br />
                <label>Matrícula <input value={matricula} onChange={(event) => setMatricula(event.target.value)} placeholder="Preencha a matrícula"/></label> <br />
                <label>Curso <input input value={curso} onChange={(event) => setCurso(event.target.value)} placeholder="Preencha o curso" /></label> <br />
                <label>Bimestre <input input value={bimestre} onChange={(event) => setBimestre(event.target.value)} placeholder="Preencha o nome"/></label> <br />
                <button onClick={() => cadastrar()} >Salvar</button>
                <button onClick={() => navigate("/")} >Retornar</button>
            </form>
        </div>
    )
}

export default FormPage