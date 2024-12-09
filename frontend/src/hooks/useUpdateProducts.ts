import { useEffect, useState } from 'react';
import { useProducts } from './useProducts';

interface Product {
    id: string;
    productno: string;
    productname: string;
    description: string;
}


// 編集完了時の処理
export const useUpdateProduct = (
    setProducts: React.Dispatch<React.SetStateAction<any[]>>
) => {
const handleCellEditCommit = async (updatedRow: Product, originalRow:Product ) => {
    try {
      const updateData = {
        productno: updatedRow.productno,
        productname: updatedRow.productname,
        description: updatedRow.description,
        updatedAt: new Date().toISOString() // 現在の日時を追加
      };

      // APIを呼び出して更新
      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/products/${updatedRow.id}`, {
        method: 'PUT',
        headers: {
          'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json'
        } as HeadersInit,
        body: JSON.stringify(updateData),
      });
      console.log('送信するデータ:', {
        updatedRow,
        updateData,
        url: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/products/${updatedRow.id}`,
        key: `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`   
      });

      if (!response.ok) {
        throw new Error('更新に失敗しました');
      }
    } catch (error) {
      console.error('更新エラー:', error);
      alert('更新に失敗しました');
    }
   }

   // オブジェクトとして関数を返す
   return {
    handleCellEditCommit
   };
  };