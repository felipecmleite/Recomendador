///Recomendador de ideias para o jantar

//Campos:
//Orçamento (para 1 pessoa sem a bebida R$) 
//Noite quente?
//Comida brasileira?

//Resultados separados por faixa de orçamento:
//Até 11
//Salada e frango grelhado, quente, não-brasil
//Cachorro-quente, não-quente, não-brasil
//Pastel, quente e brasil
//Caldinho de feijão, nao-quente e brasil

//Até 21
//Sch(a)warma, não-quente, não-brasil
//Espaguete, quente, não-brasil
//Estrogonofe, não-quente,brasil
//Tacacá, quente, brasil

//Acima de 21
//Filé com fritas, não-quente, não-brasil
//Poke havaiano, quente, não-brasil
//Moqueca, não-quente,brasil
//Churrasco de picanha, quente, brasil

//

//início do código

let campoOrçamento;
let campoNoiteQuente;
let campoBrasil

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de ideias para o jantar");
  createSpan("Budget (sem bebida entre R$ 10,00-30,00) ");
  campoOrçamento = createInput(15);
  campoNoiteQuente = createCheckbox("Noite quente?")  ;
  campoBrasil = createCheckbox("Comida brasileira?");
}

function draw() {
  background("white");
  let orçamento = campoOrçamento.value();
  let NoiteQuente = campoNoiteQuente.checked();
  let Brasil = campoBrasil.checked();
  let recomendacao = geraRecomendação(orçamento, NoiteQuente, Brasil);
  fill(color(150, 170, 100));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendação(orçamento, NoiteQuente, Brasil) {
  if(orçamento >= 11) {
    if (orçamento >= 21) {
      if (NoiteQuente && Brasil) {
        return "Churrasco de picanha 🥩, arroz, farofa e vinagrete"
        } else {
          if (NoiteQuente) {
          return "Poke Havaiano🍚";
        } else {
          if(Brasil) {
          return "Moqueca baiana 🥥, arroz e salada"
        } else {
          return "Filé com fritas🍟"
        }  
        }
        }
      } 
    
    
    else {
      if (NoiteQuente && Brasil){
        return "Tacacá 🦐"
      } else {
        if (NoiteQuente) {
         return "Espaguete ao limão 🍋";
         } else {
           if (Brasil) {
             return "Estrogonofe com batata palha 🍲 e arroz🍚";
           } else {
             return "Sch(a)warma 🥙"
           }
           
         }
      }     
       }  
  } else {
    if (NoiteQuente && Brasil){
      return "Pastel e vinagrete 🥟";
    } else {
      if (NoiteQuente){
           return "Salada e frango grelhado 🥗";
       } else {
         if (Brasil) {
           return "Caldinho de feijão com bacon 🥓";
         } else{
           return "Cachorro-quente 🌭";
       } 
    }     
     } 
  } 
}


  





