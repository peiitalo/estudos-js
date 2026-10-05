export function Produto({ produto,  excluirProduto}) {
  return (
    <li
      style={{
        color: produto.ehFruta ? "magenta" : "green",
        opacity: produto.disponivel ? 1.0 : 0.5,
      }}
    >
      {produto.nome} - {produto.disponivel ? "Disponível" : "Indisponível"} - Quantidade: {produto.quantidade}

      <button onClick={excluirProduto}>Excluir esse produto</button> 
    </li>
  );
}
