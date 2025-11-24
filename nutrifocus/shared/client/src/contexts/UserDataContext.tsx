import React, { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export interface IMCData {
  altura: number; // em cm
  peso: number; // em kg
  dataCalculo: string;
  imc: number;
  classificacao: string;
}

export interface CalorieEntry {
  id: string;
  data: string;
  alimento: string;
  calorias: number;
  proteina: number;
  carboidrato: number;
  gordura: number;
  horario: string;
}

export interface ReceitaFavorita {
  id: string;
  nome: string;
  categoria: string;
  dataAdicionada: string;
}

export interface ProgressoData {
  data: string;
  peso: number;
  imc: number;
  caloriasDiarias: number;
}

export interface UserData {
  imc: IMCData | null;
  calorias: CalorieEntry[];
  receitasFavoritas: ReceitaFavorita[];
  progresso: ProgressoData[];
  ultimaAtualizacao: string;
}

interface UserDataContextType {
  userData: UserData;
  atualizarIMC: (dados: IMCData) => void;
  adicionarCaloria: (entrada: CalorieEntry) => void;
  removerCaloria: (id: string) => void;
  adicionarReceitaFavorita: (receita: ReceitaFavorita) => void;
  removerReceitaFavorita: (id: string) => void;
  adicionarProgresso: (progresso: ProgressoData) => void;
  obterCaloriasDia: (data: string) => CalorieEntry[];
  obterTotalCaloriasDia: (data: string) => number;
  limparDados: () => void;
}

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

const initialUserData: UserData = {
  imc: null,
  calorias: [],
  receitasFavoritas: [],
  progresso: [],
  ultimaAtualizacao: new Date().toISOString(),
};

export function UserDataProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useLocalStorage<UserData>('nutrifocus_userData', initialUserData);

  const atualizarIMC = (dados: IMCData) => {
    setUserData((prev) => ({
      ...prev,
      imc: dados,
      ultimaAtualizacao: new Date().toISOString(),
    }));
  };

  const adicionarCaloria = (entrada: CalorieEntry) => {
    setUserData((prev) => ({
      ...prev,
      calorias: [...prev.calorias, entrada],
      ultimaAtualizacao: new Date().toISOString(),
    }));
  };

  const removerCaloria = (id: string) => {
    setUserData((prev) => ({
      ...prev,
      calorias: prev.calorias.filter((c) => c.id !== id),
      ultimaAtualizacao: new Date().toISOString(),
    }));
  };

  const adicionarReceitaFavorita = (receita: ReceitaFavorita) => {
    setUserData((prev) => ({
      ...prev,
      receitasFavoritas: [...prev.receitasFavoritas, receita],
      ultimaAtualizacao: new Date().toISOString(),
    }));
  };

  const removerReceitaFavorita = (id: string) => {
    setUserData((prev) => ({
      ...prev,
      receitasFavoritas: prev.receitasFavoritas.filter((r) => r.id !== id),
      ultimaAtualizacao: new Date().toISOString(),
    }));
  };

  const adicionarProgresso = (progresso: ProgressoData) => {
    setUserData((prev) => ({
      ...prev,
      progresso: [...prev.progresso, progresso],
      ultimaAtualizacao: new Date().toISOString(),
    }));
  };

  const obterCaloriasDia = (data: string): CalorieEntry[] => {
    return userData.calorias.filter((c) => c.data === data);
  };

  const obterTotalCaloriasDia = (data: string): number => {
    return userData.calorias
      .filter((c) => c.data === data)
      .reduce((total, c) => total + c.calorias, 0);
  };

  const limparDados = () => {
    setUserData(initialUserData);
  };

  const value: UserDataContextType = {
    userData,
    atualizarIMC,
    adicionarCaloria,
    removerCaloria,
    adicionarReceitaFavorita,
    removerReceitaFavorita,
    adicionarProgresso,
    obterCaloriasDia,
    obterTotalCaloriasDia,
    limparDados,
  };

  return <UserDataContext.Provider value={value}>{children}</UserDataContext.Provider>;
}

export function useUserData(): UserDataContextType {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error('useUserData deve ser usado dentro de UserDataProvider');
  }
  return context;
}
