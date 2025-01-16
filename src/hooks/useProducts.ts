/* eslint-disable @typescript-eslint/no-explicit-any */
// src/hooks/useProducts.ts
import { useEffect, useState } from 'react';

async function fetchProducts(ids: number[]) {
  const productPromises = ids.map(id => fetch(`http://localhost:4000/${id}`).then(res => res.json()));
  return Promise.all(productPromises);
}

export function useProducts(ids: number[]) {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts(ids);
        setProducts(fetchedProducts);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [ids]);

  return { products, loading, error };
}
