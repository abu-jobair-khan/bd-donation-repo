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
     
     if(i == 0 && parseFloat(entrdmoney)!=0 ){
        
        const newBalance = parseFloat(currentBalance) + parseFloat(entrdmoney);
        document.getElementById('balance').innerText = newBalance;
        let currentMyAmount = parseFloat(myAmount) - parseFloat(entrdmoney);
        document.getElementById('my-amount').innerText=currentMyAmount;
        document.getElementById('entered-amount').value = "";

        const cancelButton = document.getElementById("cancel");
        const dialog = document.getElementById("favDialog");
  
  
  function openCheck(dialog) {
    if (dialog.open) {
      console.log("Dialog open");
    } else {
      console.log("Dialog closed");
    }
  }
  
  // Update button opens a modal dialog
        dialog.showModal();
        openCheck(dialog);
  // Form cancel button closes the dialog box
  cancelButton.addEventListener("click", () => {
    dialog.close("animalNotChosen");
    openCheck(dialog);
  });

     }
     
     else{ alert('Invalid Input of money');}
    
    
})

document.getElementById('feniFoodDonation').addEventListener('click', function(){
    const myAmount = document.getElementById('my-amount').innerText;
    const entrdmoney = document.getElementById('feni-donation-enter').value;
    const currentBalance = document.getElementById('feni-donation-balance').innerText;
    let i = 0;
    for(let x of entrdmoney){
        if(( 'a' <= x && x <= 'z') || ('A' <= x && x<= 'Z') || x=='' || x=='@'|| x=='&' || x=='#' || x=='$' || x== '%' || x=='*'){
             i=i+1;
        }
        else
         continue;
     }
     
     if(i == 0 && parseFloat(entrdmoney)!=0 ){
        
        const newFoodBalance = parseFloat(currentBalance) + parseFloat(entrdmoney);
        document.getElementById('feni-donation-balance').innerText = newFoodBalance;
        let NewcurrentMyAmount = parseFloat(myAmount) - parseFloat(entrdmoney);
        document.getElementById('my-amount').innerText=NewcurrentMyAmount;
        document.getElementById('feni-donation-enter').value = "";
        // code for dialog box
        const cancelButton = document.getElementById("cancel");
        const dialog = document.getElementById("favDialog");
  
  
  function openCheck(dialog) {
    if (dialog.open) {
      console.log("Dialog open");
    } else {
      console.log("Dialog closed");
    }
  }
  
  // Update button opens a modal dialog
        dialog.showModal();
        openCheck(dialog);
  // Form cancel button closes the dialog box
  cancelButton.addEventListener("click", () => {
    dialog.close("animalNotChosen");
    openCheck(dialog);
  });

     }

     else{ alert('Invalid Input of money');}

})



document.getElementById('quotaDonate').addEventListener('click' , function(){
    const myAmount = document.getElementById('my-amount').innerText;
    const entrdmoney = document.getElementById('quota-donation').value;
    const currentBalance = document.getElementById('quota-donation-balance').innerText;
    let i = 0;
    for(let x of entrdmoney){
        if(( 'a' <= x && x <= 'z') || ('A' <= x && x<= 'Z') || x=='' || x=='@'|| x=='&' || x=='#' || x=='$' || x== '%' || x=='*'){
             i=i+1;
        }
        else
         continue;
     }
     
     if(i == 0 && parseFloat(entrdmoney)!=0 ){
        
        const newQuotaBalance = parseFloat(currentBalance) + parseFloat(entrdmoney);
        document.getElementById('quota-donation-balance').innerText = newQuotaBalance;
        let NewcurrentMyAmount = parseFloat(myAmount) - parseFloat(entrdmoney);
        document.getElementById('my-amount').innerText=NewcurrentMyAmount;
        document.getElementById('quota-donation').value = "";
        // dialog box code 
        // const updateButton = document.getElementById("quotaDonate");
      const cancelButton = document.getElementById("cancel");
      const dialog = document.getElementById("favDialog");


function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

// Update button opens a modal dialog
      dialog.showModal();
      openCheck(dialog);
// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close("animalNotChosen");
  openCheck(dialog);
});

        
     }
     else{ alert('Invalid Input of money');}

})