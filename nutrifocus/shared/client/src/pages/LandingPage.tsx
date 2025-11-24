import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, BarChart3, Utensils, TrendingUp, ArrowRight, LogOut, Star } from "lucide-react";

export default function LandingPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-emerald-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-bold text-emerald-600">NutriFocus</span>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600">Funcionalidades</a>
            <a href="#pricing" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600">Preços</a>
            <a href="#testimonials" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600">Depoimentos</a>
            <Button onClick={() => navigate("/app")} className="bg-emerald-600 hover:bg-emerald-700">
              Acessar App
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Emagreça de Forma <span className="text-emerald-600">Inteligente</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Seu assistente nutricional digital que automatiza a contagem de calorias, oferece receitas saudáveis e acompanha seu progresso em tempo real.
            </p>
            <div className="flex gap-4 pt-4">
              <Button onClick={() => navigate("/app")} size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Comprar Agora - R$ 19,90
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Assistir Demonstração
              </Button>
            </div>
            <div className="flex gap-8 pt-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                Pagamento único
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                Acesso vitalício
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900/30 dark:to-emerald-800/20 rounded-2xl p-8 flex items-center justify-center min-h-96">
            <div className="text-center">
              <div className="text-6xl font-bold text-emerald-600 mb-2">50K+</div>
              <p className="text-slate-600 dark:text-slate-400">Usuários já emagreceram</p>
              <div className="flex justify-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">4.8 de 5 estrelas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white dark:bg-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Funcionalidades Poderosas
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Tudo que você precisa para emagrecer de forma saudável e sustentável
        </p>
      </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-emerald-200 dark:border-slate-700 hover:shadow-lg transition">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>Cálculo de IMC Preciso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Descubra seu índice de massa corporal com classificação personalizada e recomendações específicas para sua situação.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-emerald-200 dark:border-slate-700 hover:shadow-lg transition">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Utensils className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>Diário de Calorias</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Registre seus alimentos e acompanhe calorias, proteínas, carboidratos e gorduras automaticamente.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-emerald-200 dark:border-slate-700 hover:shadow-lg transition">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>120 Receitas Saudáveis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Acesso a receitas deliciosas e saudáveis divididas por refeição com informações nutricionais completas.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-emerald-200 dark:border-slate-700 hover:shadow-lg transition">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>Gráficos de Progresso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Visualize sua evolução de peso e IMC com gráficos detalhados e motivadores.
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="border-emerald-200 dark:border-slate-700 hover:shadow-lg transition">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>Comunidade Ativa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Faça parte de 50 mil usuários na mesma jornada de emagrecimento e transformação.
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="border-emerald-200 dark:border-slate-700 hover:shadow-lg transition">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>Educação Nutricional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Dicas diárias, artigos e orientações especializadas para aprender enquanto emagrece.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-emerald-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              O Que Nossos Usuários Dizem
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Histórias reais de transformação e sucesso de nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                age: "34 anos",
                text: "Perdi 12 quilos em 3 meses com o NutriFocus. Muito fácil de usar e as receitas são deliciosas!",
                rating: 5,
              },
              {
                name: "João Santos",
                age: "42 anos",
                text: "Finalmente encontrei um app que funciona! As dicas nutricionais são excelentes e o progresso é motivador.",
                rating: 5,
              },
              {
                name: "Ana Costa",
                age: "28 anos",
                text: "Tudo é um app de contar calorias. É um sistema completo de educação nutricional.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.age}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white dark:bg-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Acesso Completo ao NutriFocus
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Pagamento único, acesso vitalício
            </p>
          </div>

          <div className="flex justify-center">
            {/* Unique Plan */}
            <Card className="border-emerald-600 dark:border-emerald-500 ring-2 ring-emerald-600 dark:ring-emerald-500 max-w-md w-full">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-3xl">NutriFocus Premium</CardTitle>
                    <CardDescription>Acesso Vitalício</CardDescription>
                  </div>
                  <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Melhor Valor
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-sm text-emerald-600 font-semibold mb-2">PAGAMENTO ÚNICO</p>
                  <div className="text-5xl font-bold text-slate-900 dark:text-white">
                    R$ 19,90
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                    Acesso permanente a todos os recursos
                  </p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Cálculo de IMC com classificação",
                    "Diário de calorias ilimitado",
                    "120 receitas saudáveis",
                    "Gráficos completos de progresso",
                    "Planos de refeição personalizados",
                    "Dicas nutricionais diárias",
                    "Suporte prioritário",
                    "Sem anúncios",
                    "Atualizações futuras incluídas",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button onClick={() => navigate("/app")} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg font-semibold">
                  Comprar Agora por R$ 19,90
                </Button>
                <p className="text-xs text-slate-600 dark:text-slate-400 text-center">
                  Garantia de 7 dias de reembolso. Sem perguntas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pronto Para Transformar Sua Vida?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Milhãres de pessoas já emagreceram com NutriFocus. Você pode ser o próximo.
          </p>
          <Button onClick={() => navigate("/app")} size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
            Comprar Agora - R$ 19,90
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-emerald-600" />
                <span className="text-lg font-bold text-white">NutriFocus</span>
              </div>
              <p className="text-sm">Seu assistente nutricional digital para emagrecimento sustentável.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-emerald-400">Funcionalidades</a></li>
                <li><a href="#pricing" className="hover:text-emerald-400">Preços</a></li>
                <li><a href="#" className="hover:text-emerald-400">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-emerald-400">Contato</a></li>
                <li><a href="#" className="hover:text-emerald-400">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-emerald-400">Termos de Serviço</a></li>
                <li><a href="#" className="hover:text-emerald-400">LGPD</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2024 NutriFocus. Todos os direitos reservados. Desenvolvido com cuidado para sua saúde.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
