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
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${productToDelete}`, 
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',  // これを追加
          mode: 'cors',           // これを追加
        }
      );
  
      if (!response.ok) {
        throw new Error('削除に失敗しました');
      }

      // レスポンスの確認
      const result = await response.json();
      

      if (!response.ok) {
        throw new Error('削除に失敗しました');
      }

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