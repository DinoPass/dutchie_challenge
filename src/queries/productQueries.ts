// TODO move to dotenv file
const API_URL = 'http://localhost:1337/get-products';

export type Product = {
  id: string;
  name: string;
  prices: number[];
  image: string;
  title: string;
  description?: string;
  strainType: string;
  thcContent: string;
  cbdContent: string;
};
export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('failed to fetch');
  return res.json();
}

export async function fetchProduct(id: string): Promise<Product | undefined> {
  const products = await fetchProducts();
  return products.find(p => p.id === id);
}
