import Link from "next/link";
import styles from "./page.module.css";

export default function ProductsPage() {
  const MOCK_PRODUCTS = [
    { id: 1, title: "Product A", description: "Um produto muito bom" },
    { id: 2, title: "Product B", description: "Outro producto muito bom" },
    { id: 3, title: "Product C", description: "Esse já não é tão bom" },
  ];

  return (
    <>
      <h1>Produtos</h1>
      <ul>
        {MOCK_PRODUCTS.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <Link href={`/product/${product.id}`}>Ver detalhes</Link>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
