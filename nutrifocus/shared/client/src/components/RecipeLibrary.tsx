import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Flame } from "lucide-react";
import { receitas } from "@/data/receitas";

interface Receita {
  id: string;
  nome: string;
  descricao: string;
  tempo: number;
  porcoes: number;
  calorias: number;
  proteina: number;
  carboidrato: number;
  gordura: number;
  ingredientes: string[];
  modo: string;
  categoria: string;
}

export default function RecipeLibrary() {
  const [filtro, setFiltro] = useState("Todos");
  const [receitaSelecionada, setReceitaSelecionada] = useState<Receita | null>(null);

  const categorias = ["Todos", ...Array.from(new Set(receitas.map((r) => r.categoria)))];
  const receitasFiltradas = filtro === "Todos" ? receitas : receitas.filter((r) => r.categoria === filtro);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Biblioteca de Receitas</h2>
        <p className="text-slate-600 dark:text-slate-400">Receitas saudáveis e nutritivas para sua dieta</p>
      </div>

      {/* Filtros */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categorias.map((cat) => (
          <Button
            key={cat}
            onClick={() => setFiltro(cat)}
            variant={filtro === cat ? "default" : "outline"}
            className={filtro === cat ? "bg-emerald-600 hover:bg-emerald-700" : ""}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Grid de Receitas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {receitasFiltradas.map((receita) => (
          <Card
            key={receita.id}
            className="border-emerald-200 dark:border-slate-700 cursor-pointer hover:shadow-lg transition"
            onClick={() => setReceitaSelecionada(receita)}
          >
            <CardHeader>
              <CardTitle className="text-lg">{receita.nome}</CardTitle>
              <CardDescription>{receita.descricao}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-4 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {receita.tempo} min
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {receita.porcoes} porção(ões)
                </div>
                <div className="flex items-center gap-1">
                  <Flame className="w-4 h-4" />
                  {receita.calorias} kcal
                </div>
              </div>
              <Button
                onClick={() => setReceitaSelecionada(receita)}
                className="w-full bg-emerald-600 hover:bg-emerald-700"
              >
                Ver Detalhes
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal de Detalhes */}
      {receitaSelecionada && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl border-emerald-200 dark:border-slate-700 max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{receitaSelecionada.nome}</CardTitle>
                  <CardDescription>{receitaSelecionada.descricao}</CardDescription>
                </div>
                <button
                  onClick={() => setReceitaSelecionada(null)}
                  className="text-2xl font-bold text-slate-400 hover:text-slate-600"
                >
                  ×
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Informações Nutricionais */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400">Calorias</p>
                  <p className="text-2xl font-bold text-emerald-600">{receitaSelecionada.calorias}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400">Proteína</p>
                  <p className="text-2xl font-bold text-blue-600">{receitaSelecionada.proteina}g</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400">Carboidrato</p>
                  <p className="text-2xl font-bold text-yellow-600">{receitaSelecionada.carboidrato}g</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400">Gordura</p>
                  <p className="text-2xl font-bold text-red-600">{receitaSelecionada.gordura}g</p>
                </div>
              </div>

              {/* Ingredientes */}
              <div>
                <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Ingredientes</h3>
                <ul className="space-y-2">
                  {receitaSelecionada.ingredientes.map((ing, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                      <span className="text-emerald-600 font-bold">•</span>
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modo de Preparo */}
              <div>
                <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Modo de Preparo</h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{receitaSelecionada.modo}</p>
              </div>

              <Button
                onClick={() => setReceitaSelecionada(null)}
                className="w-full bg-emerald-600 hover:bg-emerald-700"
              >
                Fechar
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
