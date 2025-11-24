import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Apple, BarChart3, Heart, Home as HomeIcon, Menu, X } from "lucide-react";
import { APP_LOGO, APP_TITLE } from "@/const";
import IMCCalculator from "@/components/IMCCalculator";
import CalorieTracker from "@/components/CalorieTracker";
import RecipeLibrary from "@/components/RecipeLibrary";
import ProgressChart from "@/components/ProgressChart";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-emerald-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <Heart className="w-8 h-8 text-emerald-600" />
            <h1 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{APP_TITLE}</h1>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 hover:bg-emerald-100 dark:hover:bg-slate-800 rounded-lg"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-0"
          } transition-all duration-300 border-r border-emerald-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden`}
        >
          <nav className="p-4 space-y-2">
            <button
              onClick={() => {
                setActiveTab("dashboard");
                setSidebarOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition ${
                activeTab === "dashboard"
                  ? "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300"
                  : "hover:bg-emerald-50 dark:hover:bg-slate-800"
              }`}
            >
              <HomeIcon className="w-5 h-5" />
              Dashboard
            </button>
            <button
              onClick={() => {
                setActiveTab("imc");
                setSidebarOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition ${
                activeTab === "imc"
                  ? "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300"
                  : "hover:bg-emerald-50 dark:hover:bg-slate-800"
              }`}
            >
              <Activity className="w-5 h-5" />
              Cálculo IMC
            </button>
            <button
              onClick={() => {
                setActiveTab("calorias");
                setSidebarOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition ${
                activeTab === "calorias"
                  ? "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300"
                  : "hover:bg-emerald-50 dark:hover:bg-slate-800"
              }`}
            >
              <Apple className="w-5 h-5" />
              Diário de Calorias
            </button>
            <button
              onClick={() => {
                setActiveTab("receitas");
                setSidebarOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition ${
                activeTab === "receitas"
                  ? "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300"
                  : "hover:bg-emerald-50 dark:hover:bg-slate-800"
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              Receitas
            </button>
            <button
              onClick={() => {
                setActiveTab("progresso");
                setSidebarOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition ${
                activeTab === "progresso"
                  ? "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300"
                  : "hover:bg-emerald-50 dark:hover:bg-slate-800"
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              Progresso
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto p-4 md:p-8">
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Bem-vindo ao NutriFocus</h2>
                  <p className="text-slate-600 dark:text-slate-400">Seu assistente nutricional digital para emagrecimento sustentável</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-emerald-200 dark:border-slate-700">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="w-5 h-5 text-emerald-600" />
                        Cálculo de IMC
                      </CardTitle>
                      <CardDescription>Descubra seu índice de massa corporal</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Calcule seu IMC e receba uma classificação personalizada do seu estado nutricional.
                      </p>
                      <Button
                        onClick={() => setActiveTab("imc")}
                        className="bg-emerald-600 hover:bg-emerald-700"
                      >
                        Calcular IMC
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="border-emerald-200 dark:border-slate-700">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Apple className="w-5 h-5 text-emerald-600" />
                        Diário de Calorias
                      </CardTitle>
                      <CardDescription>Monitore sua ingestão diária</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Registre seus alimentos e acompanhe calorias e macronutrientes em tempo real.
                      </p>
                      <Button
                        onClick={() => setActiveTab("calorias")}
                        className="bg-emerald-600 hover:bg-emerald-700"
                      >
                        Abrir Diário
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
            {activeTab === "imc" && <IMCCalculator />}
            {activeTab === "calorias" && <CalorieTracker />}
            {activeTab === "receitas" && <RecipeLibrary />}
            {activeTab === "progresso" && <ProgressChart />}
          </div>
        </main>
      </div>
    </div>
  );
}
