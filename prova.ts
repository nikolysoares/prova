const entrada22=require("readline-sync");

let accout:number=parseFloat(entrada22.question("digite o numero da sua conta:"));
let password:number=parseFloat(entrada22.question("digite sua senha:"));
let balance:number = 1000;

if(password == 48769003882){   
console.log("seu saldo:"+ balance)
let options:number= entrada22.question("escolha uma das opcoes 1.saque 2.deposito 3.sair");

if(options == 1){
    let password2:number=parseFloat(entrada22.question("senha:"))
    let withdraw:number=parseFloat(entrada22.question("digite o valor que deseja sacar:"));

    if(password2 != password){
        console.log("senha incorreta!");

    }
    else if(withdraw>1000){
        console.log("valor invalido!");
    }
    else{
        let subtracao=balance - withdraw;
        console.log("novo saldo:"+ subtracao);
    }
  }
  else if(options==2){
    let deposito:number=parseFloat(entrada22.question("digite o valor que deseja depositar:"));
    let password2:number=parseFloat(entrada22.question("digite sua senha:"));

    if(password2==password){  
        let addition= balance+ deposito;
        console.log("novo saldo:"+addition);

    }
    else{
        console.log("senha incorreta"!);

                 }
 }
 else if(options==3){
    console.log("volte sempre");
 }
 else{
    console.log("essa opcao nao e valida!");
 }
   }
    else { 
        console.log("senha incorreta!") ;
 }
 


  