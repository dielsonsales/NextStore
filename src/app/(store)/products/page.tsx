import Link from "next/link";
import styles from "./page.module.css";

export default function ProductsPage() {
  const MOCK_PRODUCTS = [
    { id: 1, title: "Product 1", description: "Um produto muito bom" },
    { id: 2, title: "Product 2", description: "Outro producto muito bom" },
    { id: 3, title: "Product 3", description: "Esse já não é tão bom" },
    { id: 4, title: "Product 4", description: "Esse já não é tão bom" },
    { id: 5, title: "Product 5", description: "Esse já não é tão bom" },
    { id: 6, title: "Product 6", description: "Esse já não é tão bom" },
    { id: 7, title: "Product 7", description: "Esse já não é tão bom" },
    { id: 8, title: "Product 8", description: "Esse já não é tão bom" },
    { id: 9, title: "Product 9", description: "Esse já não é tão bom" },
    { id: 10, title: "Product 10", description: "Esse já não é tão bom" },
  ];

  return (
    <>
      <h1>Produtos</h1>
      <ul className={styles.productsGrid}>
        {MOCK_PRODUCTS.map((product) => (
          <li key={product.id} className={styles.productCard}>
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
