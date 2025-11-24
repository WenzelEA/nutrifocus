import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import { useUserData } from "@/contexts/UserDataContext";

interface IMCResult {
  imc: number;
  classificacao: string;
  cor: string;
  descricao: string;
}

export default function IMCCalculator() {
  const { atualizarIMC, userData } = useUserData();
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState<IMCResult | null>(null);

  // Carregar dados salvos ao montar o componente
  useEffect(() => {
    if (userData.imc) {
      setPeso(userData.imc.peso.toString());
      setAltura(userData.imc.altura.toString());
      setResultado({
        imc: userData.imc.imc,
        classificacao: userData.imc.classificacao,
        cor: obterCorClassificacao(userData.imc.classificacao),
        descricao: obterDescricao(userData.imc.classificacao),
      });
    }
  }, [userData.imc]);

  const obterCorClassificacao = (classificacao: string): string => {
    switch (classificacao) {
      case "Baixo Peso":
        return "text-blue-600 dark:text-blue-400";
      case "Peso Normal":
        return "text-green-600 dark:text-green-400";
      case "Sobrepeso":
        return "text-yellow-600 dark:text-yellow-400";
      case "Obesidade Grau I":
        return "text-orange-600 dark:text-orange-400";
      case "Obesidade Grau II":
        return "text-red-600 dark:text-red-400";
      case "Obesidade Grau III":
        return "text-red-700 dark:text-red-500";
      default:
        return "text-slate-600 dark:text-slate-400";
    }
  };

  const obterDescricao = (classificacao: string): string => {
    switch (classificacao) {
      case "Baixo Peso":
        return "Você está abaixo do peso ideal. Consulte um nutricionista para ganhar peso de forma saudável e segura.";
      case "Peso Normal":
        return "Parabéns! Você está com o peso ideal. Mantenha seus hábitos saudáveis e continue se exercitando.";
      case "Sobrepeso":
        return "Você está acima do peso ideal. Use o NutriFocus para monitorar suas calorias e emagrecer de forma saudável.";
      case "Obesidade Grau I":
        return "Você está com obesidade grau I. Recomendamos consultar um médico e usar o NutriFocus para acompanhamento.";
      case "Obesidade Grau II":
        return "Você está com obesidade grau II. Procure um profissional de saúde para orientação personalizada.";
      case "Obesidade Grau III":
        return "Você está com obesidade grau III. Consulte urgentemente um médico para avaliação e acompanhamento.";
      default:
        return "";
    }
  };

  const calcularIMC = () => {
    if (!peso || !altura) {
      alert("Por favor, preencha seu peso e altura para continuar");
      return;
    }

    const p = parseFloat(peso);
    const a = parseFloat(altura) / 100;

    if (p <= 0 || a <= 0) {
      alert("Os valores devem ser maiores que zero");
      return;
    }

    const imc = p / (a * a);

    let classificacao = "";
    let cor = "";
    let descricao = "";

    if (imc < 18.5) {
      classificacao = "Baixo Peso";
      cor = "text-blue-600 dark:text-blue-400";
      descricao = obterDescricao("Baixo Peso");
    } else if (imc < 25) {
      classificacao = "Peso Normal";
      cor = "text-green-600 dark:text-green-400";
      descricao = obterDescricao("Peso Normal");
    } else if (imc < 30) {
      classificacao = "Sobrepeso";
      cor = "text-yellow-600 dark:text-yellow-400";
      descricao = obterDescricao("Sobrepeso");
    } else if (imc < 35) {
      classificacao = "Obesidade Grau I";
      cor = "text-orange-600 dark:text-orange-400";
      descricao = obterDescricao("Obesidade Grau I");
    } else if (imc < 40) {
      classificacao = "Obesidade Grau II";
      cor = "text-red-600 dark:text-red-400";
      descricao = obterDescricao("Obesidade Grau II");
    } else {
      classificacao = "Obesidade Grau III";
      cor = "text-red-700 dark:text-red-500";
      descricao = obterDescricao("Obesidade Grau III");
    }

    const novoResultado: IMCResult = {
      imc: parseFloat(imc.toFixed(1)),
      classificacao,
      cor,
      descricao,
    };

    setResultado(novoResultado);

    // Salvar no localStorage via contexto
    atualizarIMC({
      altura: parseFloat(altura),
      peso: p,
      imc: novoResultado.imc,
      classificacao: novoResultado.classificacao,
      dataCalculo: new Date().toISOString(),
    });
  };

  return (
    <div className="space-y-6">
      <Card className="border-emerald-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle>Cálculo de IMC Preciso</CardTitle>
          <CardDescription>Descubra seu índice de massa corporal com classificação personalizada</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="peso">Peso (kg)</Label>
              <Input
                id="peso"
                type="number"
                placeholder="Ex: 75"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                className="border-emerald-200 dark:border-slate-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="altura">Altura (cm)</Label>
              <Input
                id="altura"
                type="number"
                placeholder="Ex: 175"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                className="border-emerald-200 dark:border-slate-600"
              />
            </div>
          </div>
          <Button onClick={calcularIMC} className="w-full bg-emerald-600 hover:bg-emerald-700">
            Calcular IMC
          </Button>
        </CardContent>
      </Card>

      {resultado && (
        <Card className="border-emerald-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-center">Seu Resultado</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className={`text-5xl font-bold ${resultado.cor} mb-2`}>
                {resultado.imc}
              </div>
              <div className={`text-2xl font-semibold ${resultado.cor}`}>
                {resultado.classificacao}
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
              <p className="text-slate-700 dark:text-slate-300 text-center">
                {resultado.descricao}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                <p className="text-sm text-slate-600 dark:text-slate-400">Peso</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">{peso} kg</p>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded">
                <p className="text-sm text-slate-600 dark:text-slate-400">Altura</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">{altura} cm</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded">
                <p className="text-sm text-slate-600 dark:text-slate-400">IMC</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">{resultado.imc}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Dados salvos automaticamente. Você pode voltar a qualquer momento.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
