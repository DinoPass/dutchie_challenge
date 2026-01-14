
const API_URL = 'http://localhost:1337/get-products';

type Product = {
  id: string;
  name: string;
  prices: number[];
  image: string;
  title: string;
  strainType: string;
  thcContent: string;
  cbdContent: string;
};
async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('failed to fetch');
  return res.json();
}

async function fetchProduct(id: string) {

  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch products');
  const products = await res.json();
  return products.find((p: any) => String(p.id) === String(id))
  
}