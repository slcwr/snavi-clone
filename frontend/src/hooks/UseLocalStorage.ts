// hooks/useConfigurationStorage.ts
import { useState, useCallback } from 'react';

interface Configuration {
  id: string;
  name: string;
  items: ConfigurationItem[];
  createdAt: string;
  updatedAt: string;
}

interface ConfigurationItem {
  productId: string;
  quantity: number;
  // 他の必要な項目
}

export const useConfigurationStorage = () => {
  // 現在の構成リストを取得
  const [configurations, setConfigurations] = useState<Configuration[]>(() => {
    if (typeof window === 'undefined') return [];
    
    try {
      const stored = localStorage.getItem('configurations');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Failed to load configurations:', error);
      return [];
    }
  });

  // 構成リストを保存
  const saveConfiguration = useCallback((configuration: Configuration) => {
    try {
      const newConfigurations = [...configurations];
      const existingIndex = newConfigurations.findIndex(c => c.id === configuration.id);
      
      if (existingIndex >= 0) {
        // 既存の構成を更新
        newConfigurations[existingIndex] = {
          ...configuration,
          updatedAt: new Date().toISOString()
        };
      } else {
        // 新規構成を追加
        newConfigurations.push({
          ...configuration,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
      }

      setConfigurations(newConfigurations);
      localStorage.setItem('configurations', JSON.stringify(newConfigurations));
      return true;
    } catch (error) {
      console.error('Failed to save configuration:', error);
      return false;
    }
  }, [configurations]);

  // 構成リストを削除
  const deleteConfiguration = useCallback((configId: string) => {
    try {
      const newConfigurations = configurations.filter(c => c.id !== configId);
      setConfigurations(newConfigurations);
      localStorage.setItem('configurations', JSON.stringify(newConfigurations));
      return true;
    } catch (error) {
      console.error('Failed to delete configuration:', error);
      return false;
    }
  }, [configurations]);

  // 構成リストを取得
  const getConfiguration = useCallback((configId: string) => {
    return configurations.find(c => c.id === configId);
  }, [configurations]);

  return {
    configurations,
    saveConfiguration,
    deleteConfiguration,
    getConfiguration
  };
};