import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import { MOCK_PRODUCTS } from "@/lib/data";

export default function ProductsPage() {
  return (
    <>
      <h1 className={styles.productsPageTitle}>Next Store</h1>
      <ul className={styles.productsGrid}>
        {MOCK_PRODUCTS.map((product) => (
          <li key={product.id} className={styles.productCard}>
            <article>
              <Image
                className={styles.productImage}
                src={`/images/${product.image}`}
                alt={product.title}
                width={500}
                height={500}
              />
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productText}>{product.description}</p>
              <Link href={`/product/${product.id}`}>
                <span className={styles.productText}>Ver detalhes</span>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
