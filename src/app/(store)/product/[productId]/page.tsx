import styles from "./page.module.css";

export const dynamicParams = true; // allows dynamic routes too
export const revalidate = 3600; // 1 hour

export async function generateStaticParams() {
  const productIds = ["1", "2", "3"];
  return productIds.map((id) => ({
    productId: id,
  }));
}

interface ProductDetailPageProps {
  params: Promise<{ productId: string }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { productId } = await params;
  return (
    <>
      <h1>Product {productId}</h1>
      <p>This page was generated/update via ISR.</p>
    </>
  );
}
