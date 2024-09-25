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
        let heading = document.getElementById('noakhali').innerText;
        let date = new Date();
         

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

   history(parseFloat(entrdmoney), heading , date);

     }

     else{ alert('Invalid Input of money');}
    
    
})

// the second part...
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
        let feniHeading = document.getElementById('feni').innerText;
        let date = new Date();
        
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

  history(parseFloat(entrdmoney),feniHeading,date);

     }

     else{ alert('Invalid Input of money');}

})

// third part.....

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
        let quotaheading = document.getElementById('quota-movement').innerText;
        let date = new Date();
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

  history(parseFloat(entrdmoney),quotaheading,date);
      
     }
     else{ alert('Invalid Input of money');}

})

// this is the common function....

function history(x , str , time){
  
    let div = document.createElement('div');
    div.setAttribute('class','autodiv');
    let p = document.createElement('p');
    p.setAttribute('class' , 'autoPara');
    p.innerText=`BDT  ${x} is donated ${str} at ${time}`;
    div.appendChild(p);
    document.body.appendChild(div);


}

document.getElementById('history').addEventListener('click',function(){
    document.getElementById('history').style.backgroundColor='green';
    document.getElementById('donate').style.backgroundColor='white';
    document.getElementById('main').innerHTML=" ";


    
})


document.getElementById('donate').addEventListener('click' , function(){
    document.getElementById('history').style.backgroundColor='white';
    document.getElementById('donate').style.backgroundColor='green';
    document.getElementById('main').innerHTML=

    `
    
    <div class=' border-2 rounded-lg p-4   lg:flex '>
      <img src='/assets/noakhali.png' alt='' class='h-[30vh] w-[70vw] ml-[10vw] lg:w-[40vw] lg:h-[50vh] lg:ml-0'>
      <div>
               <div class='bg-clr  ml-[35vw] mt-[3vh] lg:p-5  w-[25vw] h-[8vh] rounded-md  flex items-center lg:w-[10vw] lg:ml-[3vw]'>
                  <img src='/assets/coin.png' class='  h-[5vh] w-[5vw] lg:w-[2vw] lg:h-[4vh]'   alt=''>
                  <h2 class=' ml-1 text-lg font-bold' id='balance'>0</h2>
                  <h2 class='ml-1 text-lg font-bold'>BDT</h2>
               </div>

               <h1 class='ml-[8vw] mt-[3vh] text-lg font-bold lg:ml-[3vw]'>Donate <span>for flood at Noakhali, Bangladesh</span></h1>
               <p class='w-[85vw] ml-[5vw] mt-[3vh]  lg:w-[30vw] lg:ml-[3vw]'>At Noakhali,Bangladesh a sudden flood affected the basic life of the rural people living there.This sudden flood just made locals life complex.There is scarcity of food,medicines,sanitation.So in this case a little help from your side can make a significant change in their life condition.Donate acccording to your limit,please.</p>

               <input placeholder='Enter your Amount' type='text' class='ml-[6vw] border-2 mt-6 w-[75vw] h-[5vh] lg:w-[30vw] lg:ml-[3vw]' id='entered-amount'>
               <button   id='moneyClicked'      class='btn w-[70vw]  ml-[10vw] mt-[3vh] lg:w-[30vw] lg:ml-[3vw]'>Donate Now</button>
      </div>
   </div>

   <div class=" border-2 rounded-lg p-4 mt-[10vh]  lg:flex ">
      <img src="/assets/feni.png" alt="" class="h-[30vh] w-[70vw] ml-[10vw] lg:w-[40vw] lg:h-[50vh] lg:ml-0">
      <div>
               <div class="bg-clr  ml-[35vw] mt-[3vh] lg:p-5  w-[25vw] h-[8vh] rounded-md  flex items-center lg:w-[10vw] lg:ml-[3vw]">
                  <img src="/assets/coin.png" class="  h-[5vh] w-[5vw] lg:w-[2vw] lg:h-[4vh]"   alt="">
                  <h2 id="feni-donation-balance" class=" ml-1 text-lg font-bold">0</h2>
                  <h2 class="ml-1 text-lg font-bold">BDT</h2>
               </div>

               <h1 class="ml-[8vw] mt-[3vh] text-lg font-bold lg:ml-[3vw]">Donate <span>for food relief in feni, Bangladesh</span></h1>
               <p class="w-[85vw] ml-[5vw] mt-[3vh]  lg:w-[30vw] lg:ml-[3vw]">In Feni ,Bangladesh a sudden flood affected the basic life of the rural people living there.This sudden flood just made locals life complex.There is scarcity of food,medicines,sanitation.So in this case a little help from your side can make a significant change in their life condition.Donate acccording to your limit,please.</p>

               <input id="feni-donation-enter" placeholder="Enter your Amount" type="text" class="ml-[6vw] border-2 mt-6 w-[75vw] h-[5vh] lg:w-[30vw] lg:ml-[3vw]">
               <button id="feniFoodDonation" class="btn w-[70vw]  ml-[10vw] mt-[3vh] lg:w-[30vw] lg:ml-[3vw]">Donate Now</button>
      </div>
   </div>

   <div class=" border-2 rounded-lg p-4  mt-[10vh] lg:flex ">
      <img src="/assets/quota-protest.png" alt="" class="h-[30vh] w-[70vw] ml-[10vw] lg:w-[40vw] lg:h-[50vh] lg:ml-0">
      <div>
               <div class="bg-clr  ml-[35vw] mt-[3vh] lg:p-5  w-[25vw] h-[8vh] rounded-md  flex items-center lg:w-[10vw] lg:ml-[3vw]">
                  <img src="/assets/coin.png" class="  h-[5vh] w-[5vw] lg:w-[2vw] lg:h-[4vh]"   alt="">
                  <h2 id="quota-donation-balance" class=" ml-1 text-lg font-bold">0</h2>
                  <h2 class="ml-1 text-lg font-bold">BDT</h2>
               </div>

               <h1 class="ml-[8vw] mt-[3vh] text-lg font-bold lg:ml-[3vw]">Aid<span> for the injured in quota movement</span></h1>
               <p class="w-[85vw] ml-[5vw] mt-[3vh]  lg:w-[30vw] lg:ml-[3vw]">In july-august Bangladesh faced a huge massive movement of student and people from all walks of life joined freely in the procession.Many students and common people have been injured by police gunshoots and torture.thats why we are asking you to donate some amount to treat them with proper medications.</p>

               <input id="quota-donation" placeholder="Enter your Amount" type="text" class="ml-[6vw] border-2 mt-6 w-[75vw] h-[5vh] lg:w-[30vw] lg:ml-[3vw]">
               <button id="quotaDonate" class="btn w-[70vw]  ml-[10vw] mt-[3vh] lg:w-[30vw] lg:ml-[3vw]">Donate Now</button>
               <!-- code for modal -->

               <dialog id="favDialog" class="rounded-md h-[50vh]     bg-white  lg:w-[50vw] lg:h-[40vh]">
                <form method="dialog">
                   <h2 class=" text-xl font-bold ml-[12vw]       lg:text-2xl lg:font-bold mt-6 lg:ml-[20vw]">Congratulations !!!</h2>
                   <img  class=" ml-[30vw] mt-      lg:ml-[25vw] mt-6"    src="/assets/coin.png" alt="">
                  <p class=" text-md ml-[8vw] lg:text-lg lg:ml-[18vw] mt-6">You have successfully donated to</p>
                  <h2 class="lg:text-xl font-bold ml-[22vw] mt-6">Humanity !!</h2>
                  <div>
                    <button class="btn w-[20vw] mt-20    lg:w-[10vw] ml-[19vw] lg:mt-10"  id="cancel" type="reset">Close</button>
                    
                  </div>
                </form>
              </dialog>
             
      </div>
   </div>
`                                
})

