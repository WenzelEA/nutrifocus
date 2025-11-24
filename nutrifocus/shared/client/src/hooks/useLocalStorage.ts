import { useState, useEffect } from 'react';

/**
 * Hook para persistir dados no localStorage
 * @param key - Chave do localStorage
 * @param initialValue - Valor inicial se não existir no localStorage
 * @returns [valor, função para atualizar]
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Erro ao ler localStorage para chave "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      // Disparar evento para sincronizar entre abas
      window.dispatchEvent(new Event('local-storage'));
    } catch (error) {
      console.error(`Erro ao salvar no localStorage para chave "${key}":`, error);
    }
  };

  // Sincronizar entre abas
  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const item = window.localStorage.getItem(key);
        if (item) {
          setStoredValue(JSON.parse(item));
        }
      } catch (error) {
        console.error(`Erro ao sincronizar localStorage para chave "${key}":`, error);
      }
    };

    window.addEventListener('local-storage', handleStorageChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('local-storage', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];
}
