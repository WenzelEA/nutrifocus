import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Calculator, Utensils, TrendingUp, LogOut } from "lucide-react";
import IMCCalculator from "@/components/IMCCalculator";
import CalorieTracker from "@/components/CalorieTracker";
import RecipeLibrary from "@/components/RecipeLibrary";
import ProgressChart from "@/components/ProgressChart";
import { useLocation } from "wouter";

export default function AppPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [, navigate] = useLocation();

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: Heart },
    { id: "imc", label: "Cálculo de IMC", icon: Calculator },
    { id: "calories", label: "Diário de Calorias", icon: Utensils },
    { id: "recipes", label: "Receitas Saudáveis", icon: Utensils },
    { id: "progress", label: "Meu Progresso", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-emerald-200 dark:border-slate-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-bold text-emerald-600">NutriFocus</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600 dark:text-slate-400">Bem-vindo ao NutriFocus!</span>
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              size="sm"
              className="text-slate-600 hover:text-emerald-600"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Voltar para Home
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-slate-800 border-r border-emerald-200 dark:border-slate-700 min-h-screen">
          <nav className="p-6 space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === tab.id
                      ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Dashboard Tab */}
            {activeTab === "dashboard" && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                    Bem-vindo ao NutriFocus
                  </h1>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    Seu assistente nutricional digital para emagrecimento sustentável. Escolha uma opção abaixo para começar.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-emerald-200 dark:border-slate-700">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                        <Calculator className="w-6 h-6 text-emerald-600" />
                      </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Cálculo de IMC</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Descubra seu índice de massa corporal
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Calcule seu IMC e receba uma classificação personalizada do seu estado nutricional com recomendações específicas. Pagamento único de R$ 19,90.
                  </p>
                    <Button
                      onClick={() => setActiveTab("imc")}
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                    >
                      Calcular IMC
                    </Button>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-emerald-200 dark:border-slate-700">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                        <Utensils className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">Diário de Calorias</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Monitore sua ingestão diária
                        </p>
                      </div>
                    </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Registre seus alimentos e acompanhe calorias, proteínas, carboidratos e gorduras automaticamente. Acesso vitalicio com pagamento único.
                  </p>       <Button
                      onClick={() => setActiveTab("calories")}
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                    >
                      Abrir Diário
                    </Button>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-emerald-200 dark:border-slate-700">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                        <Utensils className="w-6 h-6 text-emerald-600" />
                      </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Receitas Saudáveis</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        120 receitas deliciosas e saudáveis
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Explore 120 receitas saudáveis divididas por tipo de refeição com informações nutricionais completas. Tudo por apenas R$ 19,90.
                  </p>
                    <Button
                      onClick={() => setActiveTab("recipes")}
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                    >
                      Ver Receitas
                    </Button>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-emerald-200 dark:border-slate-700">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">Seu Progresso</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Acompanhe sua evolução
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      Visualize gráficos de progresso de peso, IMC e calorias ao longo do tempo.
                    </p>
                    <Button
                      onClick={() => setActiveTab("progress")}
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                    >
                      Ver Progresso
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* IMC Calculator Tab */}
            {activeTab === "imc" && <IMCCalculator />}

            {/* Calorie Tracker Tab */}
            {activeTab === "calories" && <CalorieTracker />}

            {/* Recipes Tab */}
            {activeTab === "recipes" && <RecipeLibrary />}

            {/* Progress Tab */}
            {activeTab === "progress" && <ProgressChart />}
          </div>
        </main>
      </div>
    </div>
  );
}
