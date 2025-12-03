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

export async function getProduct(id: string): Promise<Product> {
  const url = `https://68f19be0b36f9750dee9beb3.mockapi.io/franki/products/${id}`;
  try {
    console.debug("getProduct: fetching", url);
    const res = await fetch(url, { cache: "no-store" });
    console.debug("getProduct: response status", res.status);
    if (!res.ok) throw new Error(`Request failed: ${res.status} ${res.statusText}`);
    const data = await res.json();
    console.debug("getProduct: got data", data);
    return data as Product;
  } catch (err) {
    console.debug("getProduct: single fetch failed, trying fallback", err);
    try {
      const all = await getProducts();
      const found = all.find((p) => String(p.id) === String(id));
      console.debug("getProduct: fallback found", found);
      if (found) return found;
    } catch (e) {
      console.debug("getProduct: fallback also failed", e);
    }
    throw err instanceof Error ? err : new Error("Failed to fetch product");
  }
}
