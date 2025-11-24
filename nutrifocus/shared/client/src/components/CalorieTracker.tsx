import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, Plus } from "lucide-react";
import { alimentosPredefinidos } from "@/data/alimentos";

interface Alimento {
  id: string;
  nome: string;
  calorias: number;
  proteina: number;
  carboidrato: number;
  gordura: number;
  porcao: string;
}

const alimentosDisplay: Alimento[] = alimentosPredefinidos;

export default function CalorieTracker() {
  const [alimentos, setAlimentos] = useState<Alimento[]>([]);
  const [selecionado, setSelecionado] = useState("");

  const adicionarAlimento = () => {
    if (!selecionado) return;
    const alimento = alimentosDisplay.find((a) => a.id === selecionado);
    if (alimento) {
      setAlimentos([...alimentos, { ...alimento, id: Date.now().toString() }]);
    }
  };

  const removerAlimento = (id: string) => {
    setAlimentos(alimentos.filter((a) => a.id !== id));
  };

  const totalCalorias = alimentos.reduce((sum, a) => sum + a.calorias, 0);
  const totalProteina = alimentos.reduce((sum, a) => sum + a.proteina, 0);
  const totalCarboidrato = alimentos.reduce((sum, a) => sum + a.carboidrato, 0);
  const totalGordura = alimentos.reduce((sum, a) => sum + a.gordura, 0);

  const metaCalorias = 2000;
  const metaProteina = 150;
  const metaCarboidrato = 250;
  const metaGordura = 65;

  const percentualCalorias = (totalCalorias / metaCalorias) * 100;
  const percentualProteina = (totalProteina / metaProteina) * 100;
  const percentualCarboidrato = (totalCarboidrato / metaCarboidrato) * 100;
  const percentualGordura = (totalGordura / metaGordura) * 100;

  const getBarColor = (percentual: number) => {
    if (percentual <= 100) return "bg-green-500";
    if (percentual <= 110) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Diário de Calorias</h2>
        <p className="text-slate-600 dark:text-slate-400">Registre seus alimentos e acompanhe sua ingestão nutricional</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Adicionar Alimento */}
        <Card className="border-emerald-200 dark:border-slate-700 lg:col-span-1">
          <CardHeader>
            <CardTitle>Adicionar Alimento</CardTitle>
            <CardDescription>Selecione um alimento da lista</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="alimento" className="text-slate-700 dark:text-slate-300">
                Alimento
              </Label>
              <select
                id="alimento"
                value={selecionado}
                onChange={(e) => setSelecionado(e.target.value)}
                className="w-full mt-2 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="">Selecione um alimento</option>
                {alimentosDisplay.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.nome} - {a.porcao} ({a.calorias} kcal)
                  </option>
                ))}
              </select>
            </div>
            <Button
              onClick={adicionarAlimento}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Adicionar
            </Button>
          </CardContent>
        </Card>

        {/* Resumo Nutricional */}
        <Card className="border-emerald-200 dark:border-slate-700 lg:col-span-2">
          <CardHeader>
            <CardTitle>Resumo do Dia</CardTitle>
            <CardDescription>Total de nutrientes consumidos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Calorias */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Calorias</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {Math.round(totalCalorias)} / {metaCalorias} kcal
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${getBarColor(percentualCalorias)}`}
                  style={{ width: `${Math.min(percentualCalorias, 100)}%` }}
                />
              </div>
            </div>

            {/* Proteína */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Proteína</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {Math.round(totalProteina * 10) / 10} / {metaProteina} g
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${getBarColor(percentualProteina)}`}
                  style={{ width: `${Math.min(percentualProteina, 100)}%` }}
                />
              </div>
            </div>

            {/* Carboidrato */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Carboidrato</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {Math.round(totalCarboidrato * 10) / 10} / {metaCarboidrato} g
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${getBarColor(percentualCarboidrato)}`}
                  style={{ width: `${Math.min(percentualCarboidrato, 100)}%` }}
                />
              </div>
            </div>

            {/* Gordura */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Gordura</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {Math.round(totalGordura * 10) / 10} / {metaGordura} g
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${getBarColor(percentualGordura)}`}
                  style={{ width: `${Math.min(percentualGordura, 100)}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Alimentos */}
      <Card className="border-emerald-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle>Alimentos Registrados</CardTitle>
          <CardDescription>Alimentos consumidos hoje</CardDescription>
        </CardHeader>
        <CardContent>
          {alimentos.length === 0 ? (
            <p className="text-slate-600 dark:text-slate-400 text-center py-8">Nenhum alimento registrado ainda</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left py-2 px-4 font-semibold text-slate-700 dark:text-slate-300">Alimento</th>
                    <th className="text-right py-2 px-4 font-semibold text-slate-700 dark:text-slate-300">Calorias</th>
                    <th className="text-right py-2 px-4 font-semibold text-slate-700 dark:text-slate-300">Proteína (g)</th>
                    <th className="text-right py-2 px-4 font-semibold text-slate-700 dark:text-slate-300">Carbo (g)</th>
                    <th className="text-right py-2 px-4 font-semibold text-slate-700 dark:text-slate-300">Gordura (g)</th>
                    <th className="text-center py-2 px-4 font-semibold text-slate-700 dark:text-slate-300">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {alimentos.map((alimento) => (
                    <tr key={alimento.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="py-2 px-4 text-slate-900 dark:text-white">{alimento.nome}</td>
                      <td className="text-right py-2 px-4 text-slate-900 dark:text-white">{alimento.calorias}</td>
                      <td className="text-right py-2 px-4 text-slate-900 dark:text-white">{Math.round(alimento.proteina * 10) / 10}</td>
                      <td className="text-right py-2 px-4 text-slate-900 dark:text-white">{Math.round(alimento.carboidrato * 10) / 10}</td>
                      <td className="text-right py-2 px-4 text-slate-900 dark:text-white">{Math.round(alimento.gordura * 10) / 10}</td>
                      <td className="text-center py-2 px-4">
                        <button
                          onClick={() => removerAlimento(alimento.id)}
                          className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
