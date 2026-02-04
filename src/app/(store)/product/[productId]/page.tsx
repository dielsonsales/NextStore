import styles from "./page.module.css";

interface ProductDetailPageProps {
  params: Promise<{ productId: string }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { productId } = await params;
  return <h1>Product {productId}</h1>;
}
