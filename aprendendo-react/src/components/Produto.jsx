export function Produto({ produto }) {
  return (
    <li
      style={{
        color: produto.ehFruta ? "magenta" : "green",
        opacity: produto.disponivel ? 1.0 : 0.5,
      }}
    >
      {produto.nome} - {produto.disponivel ? "Disponível" : "Indisponível"} - Quantidade: {produto.quantidade}
    </li>
  );
}
