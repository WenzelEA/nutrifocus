import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, Calendar, Target } from "lucide-react";

interface DadoProgresso {
  data: string;
  peso: number;
  imc: number;
}

export default function ProgressChart() {
  // Dados de exemplo
  const dados: DadoProgresso[] = [
    { data: "01/11", peso: 85, imc: 29.5 },
    { data: "05/11", peso: 84.2, imc: 29.2 },
    { data: "10/11", peso: 83.5, imc: 28.9 },
    { data: "15/11", peso: 82.8, imc: 28.6 },
  ];

  const pesoInicial = 85;
  const pesoAtual = dados[dados.length - 1].peso;
  const pesoPerda = pesoInicial - pesoAtual;
  const percentualPerda = ((pesoPerda / pesoInicial) * 100).toFixed(1);

  const imcInicial = dados[0].imc;
  const imcAtual = dados[dados.length - 1].imc;
  const imcMelhora = imcInicial - imcAtual;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Seu Progresso</h2>
        <p className="text-slate-600 dark:text-slate-400">Acompanhe sua evolução no emagrecimento</p>
      </div>

      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-emerald-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingDown className="w-5 h-5 text-emerald-600" />
              Peso Perdido
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-emerald-600">{pesoPerda.toFixed(1)} kg</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{percentualPerda}% do peso inicial</p>
          </CardContent>
        </Card>

        <Card className="border-emerald-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="w-5 h-5 text-blue-600" />
              Peso Atual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">{pesoAtual} kg</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Meta: 75 kg</p>
          </CardContent>
        </Card>

        <Card className="border-emerald-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calendar className="w-5 h-5 text-purple-600" />
              IMC Atual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-purple-600">{imcAtual}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Melhora: {imcMelhora.toFixed(1)} pontos</p>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico de Peso */}
      <Card className="border-emerald-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle>Evolução do Peso</CardTitle>
          <CardDescription>Últimas medições</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dados.map((dado, idx) => {
              const minPeso = Math.min(...dados.map((d) => d.peso));
              const maxPeso = Math.max(...dados.map((d) => d.peso));
              const range = maxPeso - minPeso;
              const percentual = ((dado.peso - minPeso) / range) * 100;

              return (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{dado.data}</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{dado.peso} kg</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all"
                      style={{ width: `${percentual}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Gráfico de IMC */}
      <Card className="border-emerald-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle>Evolução do IMC</CardTitle>
          <CardDescription>Classificação de estado nutricional</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dados.map((dado, idx) => {
              let classificacao = "";
              let cor = "";

              if (dado.imc < 18.5) {
                classificacao = "Baixo Peso";
                cor = "bg-blue-500";
              } else if (dado.imc < 25) {
                classificacao = "Peso Normal";
                cor = "bg-green-500";
              } else if (dado.imc < 30) {
                classificacao = "Sobrepeso";
                cor = "bg-yellow-500";
              } else {
                classificacao = "Obesidade";
                cor = "bg-red-500";
              }

              return (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{dado.data}</span>
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{dado.imc}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{classificacao}</p>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className={`h-2 rounded-full ${cor} transition-all`} style={{ width: `${(dado.imc / 40) * 100}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Dicas de Progresso */}
      <Card className="border-emerald-200 dark:border-slate-700 bg-emerald-50 dark:bg-emerald-900/20">
        <CardHeader>
          <CardTitle className="text-emerald-700 dark:text-emerald-400">Parabéns pelo seu progresso!</CardTitle>
        </CardHeader>
        <CardContent className="text-emerald-700 dark:text-emerald-300">
          <ul className="space-y-2">
            <li>✓ Você perdeu {pesoPerda.toFixed(1)} kg em 2 semanas</li>
            <li>✓ Seu IMC melhorou em {imcMelhora.toFixed(1)} pontos</li>
            <li>✓ Continue mantendo a consistência na dieta e exercícios</li>
            <li>✓ Você está no caminho certo para atingir sua meta!</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
