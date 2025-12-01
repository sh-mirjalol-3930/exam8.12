export type Product = {
  id: string;
  title?: string;
  name: string;
  image: string;
  description: string;
  price: string;
};

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(
    "https://68f19be0b36f9750dee9beb3.mockapi.io/franki/products",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data as Product[];
}
