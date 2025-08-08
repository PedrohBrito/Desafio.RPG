// NIVEL 1

// 1- Criação das Variáveis Principais
let nome = "Brito";
let classe = "Samurai";
let nivel = 14;
let vida = 88;
let ouro = 50;
let xp = 760;

// 2-  Definição de Constantes Mágicas
const NOME_ARMA = "Katana Congelante";
let DANO_BASE = 95;
const NOME_ARMADURA = "Chapéu Afiado";
const DEFESA_BASE = 40;

// 3- Aplicação de Operadores de Atribuição
xp += 150;
ouro -= 30;
vida += 40;
DANO_BASE *= 2;

console.log(`O XP é: ${xp}`);
console.log(`O ouro é: ${ouro}`);
console.log(`A vida é: ${vida}`);
console.log(`O seu dano base é: ${DANO_BASE}`);

// 4- Cálculo de Atributos Finais
let ataqueTotal = nivel + DANO_BASE
let defesaTotal = DEFESA_BASE + (nivel / 2)

console.log(`O seu ataque total é: ${ataqueTotal}`);
console.log(`A sua defesa total é: ${defesaTotal}`);

// 5- Avaliação de Prontidão com Operadores Lógicos
let vidaSuficiente = vida > 70
let ataqueForte = ataqueTotal > 60
let nivelAvancado = nivel >= 10
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado)

console.log(`Sua vida suficiente é > 70? ${vidaSuficiente}`);
console.log(`Seu ataque forte é > 60? ${ataqueForte}`);
console.log(`Seu nível avancado é >= 10? ${nivelAvancado}`);
console.log(`Você pode enfrentar o guardião tendo vidaSuficiente && (ataqueForte || nivelAvancado)? ${podeEnfrentarGuardiao}`);

// 6- Geração da Lore do Personagem
console.log(`LORE do personagem Brito:`);
console.log(`O ${nome} não teve uma vida miuito fácil.`);
console.log(`Um dia ele foi para uma floresta de bambus, onde conheceu o mestre lendário Chester, que o ensinou a ser um ${classe}`);
console.log(`Depois de muitos anos ele enfrentou um adversário, ele tinha ${vida} pontos de vida, um nivel de ${nivel}, e ${ouro} de ouro`);
console.log(`Ele tinha em seu inventário uma ${NOME_ARMA}`);


// NIVEL 2

// Prólogo
console.log("Brito foi ao templo dos samurais e ganhou do guardião.");

// 1- Resgate do Nível 1
let nomePersonagem = "Brito";
let classe2 = "Samurai"; 
let vidaAtual = 80;
let vidaMaxima = 150;
let manaAtual = 50;
let manaMaxima = 50;
nivel = 14;
experiencia = 1000;
ouro = 20;

let forca = 15;
let defesa = 10;
let agilidade = 12;
let combatesParticipados = 1
let combatesVencidos = 1;

let localAtual = "Templo dos Samurais";
let missaoAtual = "Enfrentar o guardião Mulon";

// Capítulo 1
console.log("Capítulo 1");

if (NOME_ARMA == "Katana Congelante") {
    console.log(`Arma ${NOME_ARMA} foi equipada. `)
}

if (vidaAtual >= 70) {
    console.log(`Brito pode enfrentar o guardião Mulon conforme sua missão.`)
} 

if (agilidade >= 10) {
    console.log(`Chester diz á Brito de que ele tem uma agilidade maior que 10.`)
    console.log(`Portanto pode continuar ao seu objetivo de completar a missão.`)
}

if (forca >= 15) {
    console.log(`È o minimo de força para enfrentar um guardião, diz Chester.`);
}

// Capítulo 2
console.log("Capítulo 2");

if (manaAtual <= manaMaxima) {
    console.log(`Brito pode continuar a jornada de sua missão com 50 de mana.`);
} else {
    console.log(`Ganhe muitas mana para poder continuar a missão.`);
}

if (combatesVencidos >= 2) {
    console.log(`Brito pode continuar a jornada de sua jornada com experencia com batalhas.`);
} else {
    console.log(`Participe de mais combates para continuar a missão.`);
}

// Capítulo 3 
console.log("Capítulo 3");

console.log(`Agora que Brito fez seus deveres de confirmações, ele deve seguir sua missão de derrotar o Guardião Mulon`);
console.log("Ele chegou em um castelo, que é onde o guardião está");

if (vidaMaxima == vidaAtual) {
    console.log(`Voce pode entrar no castelo, ja que está com a vida cheia`);
} 

let vidaGuardiao = 200;
let agilidadeGuardiao = 18;
let ataqueCongelante = 150;

if (DANO_BASE > 100 ) {
    console.log(`Brito faz um ataque no guardião`);
    vidaGuardiao -= 100;
} else if (agilidade > agilidadeGuardiao) {
    console.log(`Brito foi mais rápido que o guardião e fez um ataque`);
    vidaGuardiao -= 15;
} else {
    console.log(`Brito decide fugir para não ir de havaianas`);
}

console.log(`Vida do guardião: ${vidaGuardiao}`)

if (ataqueCongelante > vidaGuardiao) {
    console.log(`Brito desbloqueia um novo ataque`);
    console.log(`Brito causa 100 de dano, e derrota o guardião`);
}

console.log(`Fim do capítulo.`);

// Nivel 3

// Elementos para o casteo dos arrays

let  inventario = ["Poção de vida", "Katana Congelante", "Chapéu Afiado"];
let aliados = ["Mestre Chester", "Cavaleiro Maximus"];
let inimigosEncontrados = ["Guardião Mulan", " Mago Ragnarock", "Bruxa dos 71"];
let salasCastelo = ["Biblioteca Arcana", "Armadilha de Cristal", "Torre do Tempo"];
let tesouroColetado = [];

console.log(`${nomePersonagem} entra finalmente no castelo dos grandes e maiores Samurais da face da terra.`);
console.log(`Depois de suas vitórias e batalhas, ${nomePersonagem} está muito satisfeito pelo seu esforço.`);
console.log(`Seu inventario no momento está composto por: ${inventario.length} itens`);
console.log(`Sendo seus itens: ${inventario}`);

// Capítulo 1 
console.log("Capítulo 1");

let pocoesEncontradas = ["Cura Maior", "Força Titânica", "Invisibilidade"];
let armadilhasAtiradas = [];

console.log(`Primeira poção encontrada: ${pocoesEncontradas[0]}`);
console.log(`Total de poções mágicas: ${pocoesEncontradas.length}`);

inventario[0] = "Poção de Vida Suprema";
console.log(`Uma poção foi aprimorada.`);

inventario.push("Armadura de Prata");
console.log(`Um novo item foi adicionado! Inventário: ${inventario}`);

inventario.pop();
console.log(`Um item foi perdido.`);
console.log(`Inventario atualizado: ${inventario}`);

// Capítulo 2
console.log("Capítulo 2");

console.log(`Começando a exploração pelo castelo.`);
console.log(`Salas a explorar: ${salasCastelo.length}`);


