import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

import "./styles.css"

function App() {

  return (
    <div className="container">
      <Header />

      <main>
        <h1>Fast-Food House</h1>

        <section>
          <Card title="Feijoada" description="Prato principal" img="https://picsum.photos/40" />
          <Card title="Camarão" description="Frutos do mar" img="https://picsum.photos/40" />
          <Card title="Coxinha" description="Salgadinho" img="https://picsum.photos/40" />
        </section>

        <section>
          <Card title="Torta de Limão" description="Sobremesa" img="https://picsum.photos/40" />
          <Card title="Coca-Cola" description="Bebida" img="https://picsum.photos/40" />
        </section>
        
      </main>

      <Footer />
    </div>
  )
}

export default App;
