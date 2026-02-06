import { Product } from "./types";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Camisa feminina",
    description:
      "linda camisa florida, mod.croped, mangas longas, elástico no punho",
    image: "2e694b2fa2aa5e020ab5f461665aac6a.jpg",
  },
  {
    id: 2,
    title: "Blusa feminina",
    description:
      "blusa feminina sem manga, confeccionada em tecido leve e fluido",
    image: "7b70718c8fad11a5a03b3e2a292f3d7c.jpg",
  },
  {
    id: 3,
    title: "louis vuitton boulogne mm - original - vintage - monograma",
    description: "modelo vintage - original. Made in France.",
    image: "69cffd174c76d5f046c725a58f3563a7.jpg",
  },
  {
    id: 4,
    title: "Short jeans",
    description: "tamanho 42, peça conservada",
    image: "89f5fe35d4023e8c5642076d02d12b05.jpg",
  },
  {
    id: 5,
    title: "Tênis adidas feminino gazelle collegiate green",
    description: "muito moda na europa",
    image: "d55c59d06303bc42881fc45a8e204947.jpg",
  },
  {
    id: 6,
    title: "Vestido amarelo mob",
    description:
      "detalhe de conservação: estado bom 8/10 (médio uso, tecido desfiado na foto)",
    image: "f38346e74a6a29d5f16837611c91e6b6.jpg",
  },
];

// Fake Database search
export async function getProductById(id: string): Promise<Product | undefined> {
  return MOCK_PRODUCTS.find((p) => p.id.toString() == id);
}
