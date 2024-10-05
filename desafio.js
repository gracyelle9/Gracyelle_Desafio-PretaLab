/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

nome do país (livre)
3 tipos de medalha para cada país: ouro, prata, bronze
ao clicar sair definir o ranking

*/

let países = [];
let Medalhas = [];
let totaslmedalhas = [];

while (true) {
    let pais = prompt("Digite o nome do país (ou 'sair' para terminar):");

     
    if (pais.toLowerCase() === 'sair') {
        break;
    }

    let MedalhasOuro = parseFloat(prompt(`Quantas medalhas de Ouro?`));
    let MedalhasPrata = parseFloat(prompt(`Quantas medalhas de Prata?`));
    let MedalhasBronze = parseFloat(prompt(`Quantas medalhas de Bronze?`));
  
    function adicionarMedalhas (país, ouro, prata, bronze) {
        let totalMedalhas = MedalhasOuro + MedalhasPrata + MedalhasBronze;

        if (ranking [país]){
            ranking [país] += totalMedalhas; 
            
        } else {
            ranking [país] = totalMedalhas;
        }
    }
              
            alert(`Relatório de Medalhas:
        
           
                - País com mais medalhas: ${totalMedalhas} (${totalMedalhas} total/país)`);
              }  {
                alert("Nenhum dado de emissão foi inserido.");
  }

    


