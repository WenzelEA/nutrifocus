export interface Alimento {
  id: string;
  nome: string;
  calorias: number;
  proteina: number;
  carboidrato: number;
  gordura: number;
  porcao: string;
}

export const alimentosPredefinidos: Alimento[] = [
  // Proteínas
  { id: "1", nome: "Frango Grelhado", calorias: 165, proteina: 31, carboidrato: 0, gordura: 3.6, porcao: "100g" },
  { id: "2", nome: "Peito de Frango Cru", calorias: 165, proteina: 31, carboidrato: 0, gordura: 3.6, porcao: "100g" },
  { id: "3", nome: "Coxa de Frango com Pele", calorias: 209, proteina: 26, carboidrato: 0, gordura: 11, porcao: "100g" },
  { id: "4", nome: "Ovos (1 unidade)", calorias: 78, proteina: 6, carboidrato: 0.6, gordura: 5.3, porcao: "1 ovo" },
  { id: "5", nome: "Clara de Ovo", calorias: 17, proteina: 3.6, carboidrato: 0.4, gordura: 0.1, porcao: "1 clara" },
  { id: "6", nome: "Salmão Grelhado", calorias: 206, proteina: 22, carboidrato: 0, gordura: 13, porcao: "100g" },
  { id: "7", nome: "Atum Enlatado", calorias: 132, proteina: 29, carboidrato: 0, gordura: 1.3, porcao: "100g" },
  { id: "8", nome: "Carne Vermelha Magra", calorias: 180, proteina: 26, carboidrato: 0, gordura: 8, porcao: "100g" },
  { id: "9", nome: "Carne de Porco Magra", calorias: 242, proteina: 27, carboidrato: 0, gordura: 14, porcao: "100g" },
  { id: "10", nome: "Peixe Branco", calorias: 82, proteina: 17, carboidrato: 0, gordura: 0.7, porcao: "100g" },
  { id: "11", nome: "Camarão", calorias: 99, proteina: 24, carboidrato: 0, gordura: 0.3, porcao: "100g" },
  { id: "12", nome: "Tofu", calorias: 76, proteina: 8, carboidrato: 1.9, gordura: 4.8, porcao: "100g" },
  { id: "13", nome: "Iogurte Grego", calorias: 59, proteina: 10, carboidrato: 3.3, gordura: 0.4, porcao: "100g" },
  { id: "14", nome: "Queijo Branco", calorias: 165, proteina: 28, carboidrato: 1, gordura: 5, porcao: "100g" },
  { id: "15", nome: "Leite Desnatado", calorias: 35, proteina: 3.4, carboidrato: 4.8, gordura: 0.1, porcao: "100ml" },

  // Carboidratos
  { id: "16", nome: "Arroz Integral", calorias: 215, proteina: 5, carboidrato: 45, gordura: 1.8, porcao: "1 xícara cozida" },
  { id: "17", nome: "Arroz Branco", calorias: 206, proteina: 4.3, carboidrato: 45, gordura: 0.3, porcao: "1 xícara cozida" },
  { id: "18", nome: "Batata Doce", calorias: 86, proteina: 1.6, carboidrato: 20, gordura: 0.1, porcao: "100g" },
  { id: "19", nome: "Batata Comum", calorias: 77, proteina: 2, carboidrato: 17, gordura: 0.1, porcao: "100g" },
  { id: "20", nome: "Batata Doce Assada", calorias: 103, proteina: 2.1, carboidrato: 24, gordura: 0.1, porcao: "100g" },
  { id: "21", nome: "Macarrão Integral", calorias: 174, proteina: 7.5, carboidrato: 34, gordura: 1.1, porcao: "100g cozido" },
  { id: "22", nome: "Macarrão Comum", calorias: 131, proteina: 5, carboidrato: 25, gordura: 1.1, porcao: "100g cozido" },
  { id: "23", nome: "Pão Integral", calorias: 265, proteina: 9, carboidrato: 49, gordura: 3.3, porcao: "100g" },
  { id: "24", nome: "Pão Branco", calorias: 265, proteina: 8, carboidrato: 49, gordura: 3.3, porcao: "100g" },
  { id: "25", nome: "Aveia em Flocos", calorias: 389, proteina: 17, carboidrato: 66, gordura: 6.9, porcao: "100g" },
  { id: "26", nome: "Granola", calorias: 471, proteina: 13, carboidrato: 64, gordura: 20, porcao: "100g" },
  { id: "27", nome: "Cereal Matinal", calorias: 375, proteina: 7, carboidrato: 85, gordura: 1.3, porcao: "100g" },
  { id: "28", nome: "Milho", calorias: 86, proteina: 3.3, carboidrato: 19, gordura: 1.2, porcao: "100g" },
  { id: "29", nome: "Feijão Cozido", calorias: 127, proteina: 8.7, carboidrato: 23, gordura: 0.5, porcao: "100g" },
  { id: "30", nome: "Lentilha Cozida", calorias: 116, proteina: 9, carboidrato: 20, gordura: 0.4, porcao: "100g" },

  // Vegetais
  { id: "31", nome: "Brócolis", calorias: 55, proteina: 3.7, carboidrato: 11, gordura: 0.6, porcao: "1 xícara" },
  { id: "32", nome: "Cenoura", calorias: 41, proteina: 0.9, carboidrato: 10, gordura: 0.2, porcao: "100g" },
  { id: "33", nome: "Abóbora", calorias: 26, proteina: 1, carboidrato: 5, gordura: 0.1, porcao: "100g" },
  { id: "34", nome: "Tomate", calorias: 18, proteina: 0.9, carboidrato: 3.9, gordura: 0.2, porcao: "100g" },
  { id: "35", nome: "Alface", calorias: 15, proteina: 1.2, carboidrato: 2.9, gordura: 0.2, porcao: "100g" },
  { id: "36", nome: "Espinafre", calorias: 23, proteina: 2.9, carboidrato: 3.6, gordura: 0.4, porcao: "100g" },
  { id: "37", nome: "Couve", calorias: 49, proteina: 4.3, carboidrato: 9, gordura: 0.6, porcao: "100g" },
  { id: "38", nome: "Pepino", calorias: 16, proteina: 0.7, carboidrato: 3.6, gordura: 0.1, porcao: "100g" },
  { id: "39", nome: "Pimentão Vermelho", calorias: 31, proteina: 1, carboidrato: 6, gordura: 0.3, porcao: "100g" },
  { id: "40", nome: "Cebola", calorias: 40, proteina: 1.1, carboidrato: 9, gordura: 0.1, porcao: "100g" },
  { id: "41", nome: "Alho", calorias: 149, proteina: 6.4, carboidrato: 33, gordura: 0.5, porcao: "100g" },
  { id: "42", nome: "Abacate", calorias: 160, proteina: 2, carboidrato: 9, gordura: 15, porcao: "100g" },
  { id: "43", nome: "Cogumelo", calorias: 22, proteina: 3.1, carboidrato: 3.3, gordura: 0.3, porcao: "100g" },
  { id: "44", nome: "Beterraba", calorias: 43, proteina: 1.6, carboidrato: 10, gordura: 0.2, porcao: "100g" },
  { id: "45", nome: "Broto de Feijão", calorias: 30, proteina: 3, carboidrato: 6, gordura: 0.2, porcao: "100g" },

  // Frutas
  { id: "46", nome: "Maçã", calorias: 95, proteina: 0.5, carboidrato: 25, gordura: 0.3, porcao: "1 unidade" },
  { id: "47", nome: "Banana", calorias: 105, proteina: 1.3, carboidrato: 27, gordura: 0.3, porcao: "1 unidade" },
  { id: "48", nome: "Laranja", calorias: 47, proteina: 0.9, carboidrato: 12, gordura: 0.3, porcao: "1 unidade" },
  { id: "49", nome: "Morango", calorias: 32, proteina: 0.8, carboidrato: 7.7, gordura: 0.3, porcao: "100g" },
  { id: "50", nome: "Melancia", calorias: 30, proteina: 0.6, carboidrato: 7.6, gordura: 0.2, porcao: "100g" },
  { id: "51", nome: "Melão", calorias: 34, proteina: 0.8, carboidrato: 8, gordura: 0.2, porcao: "100g" },
  { id: "52", nome: "Abacaxi", calorias: 50, proteina: 0.5, carboidrato: 13, gordura: 0.1, porcao: "100g" },
  { id: "53", nome: "Mamão", calorias: 43, proteina: 0.8, carboidrato: 11, gordura: 0.3, porcao: "100g" },
  { id: "54", nome: "Manga", calorias: 60, proteina: 0.8, carboidrato: 15, gordura: 0.4, porcao: "100g" },
  { id: "55", nome: "Pera", calorias: 57, proteina: 0.4, carboidrato: 15, gordura: 0.1, porcao: "100g" },
  { id: "56", nome: "Uva", calorias: 67, proteina: 0.6, carboidrato: 17, gordura: 0.2, porcao: "100g" },
  { id: "57", nome: "Mirtilos", calorias: 57, proteina: 0.7, carboidrato: 14, gordura: 0.3, porcao: "100g" },
  { id: "58", nome: "Framboesa", calorias: 52, proteina: 1.2, carboidrato: 12, gordura: 0.7, porcao: "100g" },
  { id: "59", nome: "Amora", calorias: 43, proteina: 1.4, carboidrato: 10, gordura: 0.5, porcao: "100g" },
  { id: "60", nome: "Kiwi", calorias: 61, proteina: 1.1, carboidrato: 15, gordura: 0.5, porcao: "100g" },

  // Oleaginosas
  { id: "61", nome: "Amendoim", calorias: 567, proteina: 26, carboidrato: 16, gordura: 49, porcao: "100g" },
  { id: "62", nome: "Castanha do Pará", calorias: 656, proteina: 14, carboidrato: 12, gordura: 66, porcao: "100g" },
  { id: "63", nome: "Amêndoa", calorias: 579, proteina: 21, carboidrato: 22, gordura: 50, porcao: "100g" },
  { id: "64", nome: "Noz", calorias: 654, proteina: 9, carboidrato: 14, gordura: 65, porcao: "100g" },
  { id: "65", nome: "Avelã", calorias: 628, proteina: 15, carboidrato: 17, gordura: 61, porcao: "100g" },

  // Óleos e Gorduras
  { id: "66", nome: "Azeite de Oliva", calorias: 884, proteina: 0, carboidrato: 0, gordura: 100, porcao: "1 colher" },
  { id: "67", nome: "Óleo de Coco", calorias: 892, proteina: 0, carboidrato: 0, gordura: 100, porcao: "1 colher" },
  { id: "68", nome: "Manteiga", calorias: 717, proteina: 0.9, carboidrato: 0.1, gordura: 81, porcao: "1 colher" },
  { id: "69", nome: "Margarina", calorias: 717, proteina: 0.1, carboidrato: 0.1, gordura: 80, porcao: "1 colher" },

  // Laticínios
  { id: "70", nome: "Leite Integral", calorias: 61, proteina: 3.2, carboidrato: 4.8, gordura: 3.3, porcao: "100ml" },
  { id: "71", nome: "Leite Semi-desnatado", calorias: 49, proteina: 3.3, carboidrato: 4.9, gordura: 1.6, porcao: "100ml" },
  { id: "72", nome: "Iogurte Natural", calorias: 59, proteina: 3.5, carboidrato: 4.7, gordura: 0.4, porcao: "100g" },
  { id: "73", nome: "Queijo Meia Cura", calorias: 380, proteina: 25, carboidrato: 1.3, gordura: 30, porcao: "100g" },
  { id: "74", nome: "Queijo Prato", calorias: 380, proteina: 25, carboidrato: 1.3, gordura: 30, porcao: "100g" },
  { id: "75", nome: "Requeijão", calorias: 290, proteina: 12, carboidrato: 2, gordura: 26, porcao: "100g" },

  // Bebidas
  { id: "76", nome: "Suco de Laranja Natural", calorias: 45, proteina: 0.7, carboidrato: 11, gordura: 0.2, porcao: "100ml" },
  { id: "77", nome: "Café com Leite", calorias: 40, proteina: 2, carboidrato: 3, gordura: 1.5, porcao: "100ml" },
  { id: "78", nome: "Chá Verde", calorias: 2, proteina: 0.3, carboidrato: 0.3, gordura: 0, porcao: "100ml" },
  { id: "79", nome: "Água de Coco", calorias: 19, proteina: 0.7, carboidrato: 3.7, gordura: 0.2, porcao: "100ml" },
  { id: "80", nome: "Refrigerante Diet", calorias: 0, proteina: 0, carboidrato: 0, gordura: 0, porcao: "100ml" },

  // Condimentos e Temperos
  { id: "81", nome: "Sal", calorias: 0, proteina: 0, carboidrato: 0, gordura: 0, porcao: "1 colher chá" },
  { id: "82", nome: "Pimenta", calorias: 251, proteina: 10, carboidrato: 56, gordura: 3.3, porcao: "100g" },
  { id: "83", nome: "Vinagre", calorias: 18, proteina: 0.04, carboidrato: 0.9, gordura: 0, porcao: "100ml" },
  { id: "84", nome: "Mel", calorias: 304, proteina: 0.3, carboidrato: 82, gordura: 0, porcao: "100g" },
  { id: "85", nome: "Açúcar", calorias: 387, proteina: 0, carboidrato: 100, gordura: 0, porcao: "100g" },

  // Snacks e Alimentos Processados
  { id: "86", nome: "Biscoito Integral", calorias: 430, proteina: 8, carboidrato: 70, gordura: 12, porcao: "100g" },
  { id: "87", nome: "Biscoito Doce", calorias: 450, proteina: 5, carboidrato: 72, gordura: 15, porcao: "100g" },
  { id: "88", nome: "Barra de Cereal", calorias: 350, proteina: 7, carboidrato: 60, gordura: 8, porcao: "30g" },
  { id: "89", nome: "Pipoca", calorias: 387, proteina: 13, carboidrato: 78, gordura: 4, porcao: "100g" },
  { id: "90", nome: "Chocolate 70%", calorias: 598, proteina: 12, carboidrato: 46, gordura: 43, porcao: "100g" },
  { id: "91", nome: "Chocolate ao Leite", calorias: 540, proteina: 9, carboidrato: 57, gordura: 30, porcao: "100g" },
  { id: "92", nome: "Bolo de Chocolate", calorias: 370, proteina: 5, carboidrato: 50, gordura: 17, porcao: "100g" },
  { id: "93", nome: "Pudim", calorias: 150, proteina: 3, carboidrato: 25, gordura: 4, porcao: "100g" },
  { id: "94", nome: "Sorvete", calorias: 207, proteina: 3.5, carboidrato: 24, gordura: 11, porcao: "100g" },
  { id: "95", nome: "Bala de Goma", calorias: 316, proteina: 6, carboidrato: 76, gordura: 0, porcao: "100g" },
  { id: "96", nome: "Amendoim Torrado", calorias: 599, proteina: 26, carboidrato: 16, gordura: 50, porcao: "100g" },
  { id: "97", nome: "Batata Frita", calorias: 365, proteina: 4, carboidrato: 48, gordura: 17, porcao: "100g" },
  { id: "98", nome: "Salgadinho", calorias: 540, proteina: 8, carboidrato: 52, gordura: 33, porcao: "100g" },
  { id: "99", nome: "Bolo de Milho", calorias: 320, proteina: 4, carboidrato: 48, gordura: 12, porcao: "100g" },
  { id: "100", nome: "Broa de Milho", calorias: 280, proteina: 5, carboidrato: 42, gordura: 9, porcao: "100g" },
];
