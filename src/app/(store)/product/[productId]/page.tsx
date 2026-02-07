import { getProductById, MOCK_PRODUCTS } from "@/lib/data";
import styles from "./page.module.css";
import Image from "next/image";

export const dynamicParams = true; // allows dynamic routes too
export const revalidate = 3600; // 1 hour

export async function generateStaticParams() {
  return MOCK_PRODUCTS.map((p) => ({
    productId: p.id.toString(),
  }));
}

interface ProductDetailPageProps {
  params: Promise<{ productId: string }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { productId } = await params;
  const product = await getProductById(productId);
  return (
    <div className={styles.productPageContainer}>
      <div className={styles.productImageWrapper}>
        {product && (
          <Image
            src={`/images/${product.image}`}
            alt={product.title}
            width={800}
            height={800}
            priority
          />
        )}
      </div>
      <div className={styles.productDetailsWrapper}>
        <h1 className="pageTitle1">{product?.title}</h1>
        <p className={styles.productDetailsText}>{product?.description}</p>
        <p className={styles.productDetailsText}>
          This page was generated/update via ISR.
        </p>
      </div>
    </div>
  );
}
