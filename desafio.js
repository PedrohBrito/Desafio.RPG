// 1. Criação das variáveis principais
let nome = "Brito";
let classe = "Samurai"
let nivel = 7;
let vida = 97;
let ouro = 60;
let xp = 900;

// 2.  Definição de Constantes Mágicas
const NOME_ARMA = "Katana Congelante";
const DANO_BASE = 75;
const NOME_ARMADURA = "Chapéu Afiado";
const  DEFESA_BASE = 17;

// 3. Aplicação de Operadores de Atribuição
xp += 150;
ouro -= 30;
vida += 40;
DANO_BASE *= 2;

// 4. Cálculo de Atributos Finais
let ataqueTotal = nivel + DANO_BASE;
let defesaTotal = DEFESA_BASE + (nivel / 2);

// 5. Avaliação de Prontidão com Operadores Lógicos
let vidaSuficiente = vida > 70
let ataqueForte = ataqueTotal > 70
let nivelAvacado = nivel >= 10

