import { useEffect, useState } from 'react'

function App() {

  const [usuarios, setUsuarios] = useState([])

  async function getUsuarios() {
    try{
    const response = await fetch("https://dummyjson.com/users")
    const apiUsuarios = await response.json()
    setUsuarios(apiUsuarios.users)
    }catch (erro){
      alert("Erro ao buscar lista de usuários")
    }
  }

  useEffect(() => {
    getUsuarios();
  }, [])

  return (
    
    <div>
      <ul>
        {usuarios.map((usuario) => (
          <li style={{border: "1px solid black", marginBottom: "15px" }}>
            <p>Id: {usuario.id}</p>
            <p>Nome: {usuario.firstName}</p>
            <p>Email: {usuario.email}</p>
            <p>Altura: {usuario.height}cm</p>
            <p>Universidade: {usuario.university}</p>
          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default App
