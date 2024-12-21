'use client';
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
    const handleCellEditCommit = async (updatedRow: Product, originalRow: Product) => {
        try {
            const updateData = {
                productno: updatedRow.productno,
                productname: updatedRow.productname,
                description: updatedRow.description,
                updated_at: new Date().toISOString()
            };
    
            // URLにクエリパラメータを正しく設定
            //本番用
            const url = new URL(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/products`);
            url.searchParams.append('id', `eq.${updatedRow.id}`);
    
            const response = await fetch(url.toString(), {
                method: 'PATCH',
                headers: {
                    'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=minimal'
                },
                body: JSON.stringify(updateData)
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Update error details:', errorData);
                throw new Error(`更新に失敗しました: ${response.status}`);
            }
    
            // 成功時の処理
            setProducts(prevProducts =>
                prevProducts.map(product =>
                    product.id === updatedRow.id 
                        ? { ...product, ...updateData, id: updatedRow.id }
                        : product
                )
            );
    
            return updatedRow;
        } catch (error) {
            console.error('更新エラー:', error);
            return originalRow;
        }
    };

   // オブジェクトとして関数を返す
   return {
    handleCellEditCommit
   };
  };