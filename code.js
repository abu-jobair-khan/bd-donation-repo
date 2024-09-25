document.getElementById('moneyClicked').addEventListener('click', function(){
    const myAmount = document.getElementById('my-amount').innerText
    const entrdmoney = document.getElementById('entered-amount').value;
    const currentBalance = document.getElementById('balance').innerText;
    let i = 0;
    for(let x of entrdmoney){
        if(( 'a' <= x && x <= 'z') || ('A' <= x && x<= 'Z') || x=='' || x=='@'|| x=='&' || x=='#' || x=='$' || x== '%' || x=='*'){
             i=i+1;
        }
        else
         continue;
     }
     
     if(i == 0){
        
        const newBalance = parseFloat(currentBalance) + parseFloat(entrdmoney);
        document.getElementById('balance').innerText = newBalance;
        let currentMyAmount = parseFloat(myAmount) - parseFloat(entrdmoney);
        document.getElementById('my-amount').innerText=currentMyAmount;
        document.getElementById('entered-amount').value = "";
     }
     else{ alert('Invalid Input of money');}
    
    
})
