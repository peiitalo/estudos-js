import { useState } from "react";
import "./App.css";
import { Produto } from "./components/Produto";

function App() {
  // const [disponivel, setDisponivel] = useState(true);
  // const [quantidade, setQuantidade] = useState(0);

  const [nome, setNome] = useState("");
  const [ehFruta, setEhFruta] = useState("");
  const [produtos, setProdutos] = useState([{
    nome: "",
    
  }]);
  const [quantidade, setQuantidade] = useState(0)

  const verificarEhFruta = () => {
    if (ehFruta === "sim") return true;
    else if (ehFruta === "nao") return false;
    else {
      return -1;
    }
  };

  // const produtos = [
  //   {
  //     id: 1,
  //     nome: "Maçã",
  //     ehFruta: true,
  //     disponivel,
  //     quantidade,
  //   },
  //   {
  //     id: 2,
  //     nome: "Beterraba",
  //     ehFruta: false,
  //     disponivel: true,
  //     quantidade: 1,
  //   },
  //   {
  //     id: 3,
  //     nome: "Morango",
  //     ehFruta: true,
  //     disponivel: false,
  //     quantidade: 1,
  //   },
  // ];

  return (
    <div className="main">
      <ul>
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            excluirProduto={() => {
              setProdutos(produtos.filter((item) => item.id !== produto.id));
            }}
          />
        ))}
      </ul>

      {/* <button onClick={() => setDisponivel(!disponivel)}>
        Trocar disponibilidade
      </button>

      <button onClick={() => setQuantidade(quantidade + 1)}>
        Aumentar quanntidade
      </button>
      <button
        onClick={() =>
          quantidade === 0
            ? setQuantidade(quantidade)
            : setQuantidade(quantidade - 1)
        }
      >
        Diminuir quantidade
      </button> */}

      <div>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome do produto"
        />

        <input
          type="text"
          value={ehFruta}
          onChange={(e) => setEhFruta(e.target.value)}
          placeholder="O produto é uma fruta? (sim/nao)"
        />

        <input 
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />

        <button
          onClick={() => {
            let verificaçãoFruta = verificarEhFruta();
            if (nome.trim() === "") {
              alert(
                "O input do nome é invalído! Você não pode criar um produto sem nome.",
              );
            } else if (verificaçãoFruta === -1) {
              alert(
                "Input de validação de frutas invalido! O valor deve ser 'sim' ou 'nao'.",
              );
            } else {
              setProdutos([
                ...produtos,
                {
                  id: Date.now(),
                  nome: nome.trim(),
                  ehFruta: verificaçãoFruta,
                  disponivel: true,
                  quantidade: 1,
                },
              ]);
            }
            setNome("");
            setEhFruta("");
          }}
        >
          Criar Produto
        </button>
      </div>
    </div>
  );
}

export default App;
