# NutriFocus - Project TODO

## Core Features

- [x] Página Inicial (Home) com navegação principal
- [x] Cálculo de IMC com classificação de estado nutricional
- [x] Diário Alimentar com contagem de calorias
- [x] Monitoramento de Macronutrientes (Proteínas, Carboidratos, Gorduras)
- [x] Biblioteca de Receitas com filtros
- [x] Gráficos de Progresso (peso, IMC, calorias)
- [ ] Módulo de Comportamento Alimentar (registro de emoções)
- [ ] Nutri-Dicas Educativas

## UI/UX Components

- [x] Header/Navbar com navegação
- [x] Sidebar com menu de seções
- [x] Cards de Funcionalidades
- [x] Formulários de Entrada de Dados
- [x] Tabelas de Alimentos
- [x] Gráficos e Visualizações
- [x] Modal de Adicionar Alimentos
- [ ] Toast Notifications

## Design & Styling

- [x] Definir paleta de cores (tema claro/escuro)
- [x] Tipografia e espaçamento
- [x] Responsividade Mobile
- [x] Ícones e Ilustrações
- [x] Animações e Transições

## Data & Storage

- [x] LocalStorage para dados de usuário
- [x] Dados de Alimentos (banco de dados local)
- [x] Dados de Receitas
- [x] Cálculos de Metabolismo

## Testing & Deployment

- [x] Testes de Funcionalidades Principais
- [x] Otimização de Performance
- [x] Checkpoint de Versão Estável

## Expansão de Dados

- [x] Expandir banco de alimentos para 100+ itens com calorias
- [x] Criar 120 receitas divididas por refeição
- [x] Implementar 24 receitas de Café da Manhã
- [x] Implementar 24 receitas de Lanche da Manhã
- [x] Implementar 24 receitas de Almoço
- [x] Implementar 24 receitas de Lanche da Tarde
- [x] Implementar 24 receitas de Jantar

## Website e Publicação

- [x] Criar Landing Page profissional com copy
- [x] Integrar app NutriFocus ao site
- [x] Configurar domínio permanente (guia criado)
- [x] Implementar hospedagem em produção (Vercel)
- [x] Adicionar SEO e meta tags
- [ ] Implementar Google Analytics
- [x] Testar responsividade e performance
- [ ] Publicar site em produção

## Revisão de Português Brasileiro

- [x] Revisar Landing Page para erros de português
- [x] Revisar componentes do app (IMC, Calorias, Receitas, Progresso)
- [x] Revisar dados de alimentos e receitas
- [x] Revisar textos de navegação e botões
- [x] Revisar footer e seções de FAQ
- [x] Corrigir frases faltando ou incompletas
- [x] Validar acentuação e pontuação

## Alteração de Modelo de Preço

- [x] Remover plano gratuito da Landing Page
- [x] Remover plano mensal da Landing Page
- [x] Adicionar plano único de R$ 19,90
- [x] Atualizar seção de preços com nova estrutura
- [x] Adicionar frase "Pagamento Único" em destaque
- [x] Atualizar componentes do app com nova estratégia de pricing

## Remoção de "Começar Grátis"

- [x] Remover botão "Começar Grátis" da hero section
- [x] Remover botão "Começar Grátis" do footer CTA
- [x] Remover menções de "acesso gratuito" ou "grátis"
- [x] Atualizar copy para enfatizar pagamento único

## Fase 1: LocalStorage e Persistencia

- [x] Criar hook useLocalStorage para persistencia de dados
- [x] Implementar salvamento automatico de IMC calculado
- [x] Implementar historico de calorias diarias
- [x] Implementar favoritos de receitas
- [x] Implementar salvamento de peso e progresso
- [x] Criar contexto global de dados do usuario
- [x] Adicionar sincronizacao de dados entre abas do navegador

## Fase 2: PWA (Progressive Web App)

- [x] Criar arquivo manifest.json
- [x] Implementar Service Worker
- [x] Configurar cache de assets
- [x] Implementar funcionalidade offline
- [x] Adicionar ícones para instalação
- [ ] Testar instalação em celular
- [x] Implementar sincronização background

## Fase 3: Integração Stripe

- [ ] Criar conta Stripe
- [ ] Gerar API keys (public e secret)
- [ ] Instalar biblioteca @stripe/react-stripe-js
- [ ] Criar componente de checkout
- [ ] Implementar webhook de confirmação
- [ ] Testar fluxo de pagamento
- [ ] Configurar ambiente de produção

## Fase 4: Autenticação de Usuários

- [ ] Implementar sistema de registro
- [ ] Implementar sistema de login
- [ ] Criar banco de dados de usuários (localStorage ou backend)
- [ ] Gerar tokens JWT
- [ ] Proteger rota /app com autenticação
- [ ] Implementar logout
- [ ] Adicionar recuperação de senha

## Fase 5: Página de Sucesso Pós-Compra

- [ ] Criar página de confirmação de pagamento
- [ ] Gerar credenciais de acesso automaticamente
- [ ] Enviar email com link de acesso
- [ ] Redirecionar para /app após compra
- [ ] Implementar verificação de pagamento
- [ ] Criar página de erro de pagamento

## Fase 6: Domínio e Deploy em Produção

- [ ] Registrar domínio (nutrifocus.com.br ou similar)
- [ ] Configurar DNS no Vercel
- [ ] Fazer deploy em produção
- [ ] Configurar variáveis de ambiente
- [ ] Testar acesso via domínio
- [ ] Configurar HTTPS
- [ ] Implementar Google Analytics

## Fase 7: Testes Completos

- [ ] Testar fluxo completo de compra
- [ ] Testar acesso ao app após pagamento
- [ ] Testar funcionalidade offline
- [ ] Testar sincronização de dados
- [ ] Testar em múltiplos dispositivos
- [ ] Testar em múltiplos navegadores
- [ ] Validar segurança e dados
- [ ] Publicar em produção
