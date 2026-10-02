import { useState } from "react";
import "./App.css";
import { Produto } from "./components/Produto";

function App() {
  const [disponivel, setDisponivel] = useState(true)
  const [quantidade, setQuantidade] = useState(0)
  const [nome, setNome] = useState("")
  const produtos = [
    {
      id: 1,
      nome: "Maçã",
      ehFruta: true,
      disponivel,
      quantidade
    },
    {
      id: 2,
      nome: "Beterraba",
      ehFruta: false,
      disponivel: true,
      quantidade: 1
    },
    {
      id: 3,
      nome: "Morango",
      ehFruta: true,
      disponivel: false,
      quantidade: 1
    },
  ];

  return (
    <div className="main">
      <ul>
        {produtos.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </ul>

      <button onClick={() => setDisponivel(!disponivel)}>Trocar disponibilidade</button>

      <button onClick={() => setQuantidade(quantidade + 1)}>Aumentar quanntidade</button>
      <button onClick={() => quantidade === 0 ? setQuantidade(quantidade) : setQuantidade(quantidade - 1)}>Diminuir quantidade</button>

      <form>
        <input type="text" placeholder="Nome do produto" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default App;
