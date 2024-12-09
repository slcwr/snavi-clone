// hooks/useDeleteProduct.ts
import { useState } from 'react';

interface UseDeleteProduct {
  deleteDialogOpen: boolean;
  productToDelete: string | null;
  handleDelete: (productId: string) => void;
  executeDelete: () => Promise<void>;
  handleCloseDialog: () => void;
}

export const useDeleteProduct = (
  setProducts: React.Dispatch<React.SetStateAction<any[]>>
): UseDeleteProduct => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);

  const handleDelete = (productId: string) => {
    setProductToDelete(productId);
    setDeleteDialogOpen(true);
  };

  const executeDelete = async () => {
    if (!productToDelete) return;
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/products?id=${productToDelete}`,
        {
          method: 'DELETE',
          headers: {
            'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json'
          } as HeadersInit,
        }
      );

       // レスポンスが空の場合は空オブジェクトを返す
      const text = await response.text();
      const data = text ? JSON.parse(text) : {};
      return data;

      // UI上のデータを更新
      setProducts(prevProducts =>
        prevProducts.filter(product => product.id !== productToDelete)
      );

      alert('製品が正常に削除されました');
    } catch (error) {
      console.error('削除エラー:', error);
      alert('削除中にエラーが発生しました');
    } finally {
      setDeleteDialogOpen(false);
      setProductToDelete(null);
    }
  };

  const handleCloseDialog = () => {
    setDeleteDialogOpen(false);
    setProductToDelete(null);
  };

  return {
    deleteDialogOpen,
    productToDelete,
    handleDelete,
    executeDelete,
    handleCloseDialog,
  };
};