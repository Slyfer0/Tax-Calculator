document.addEventListener("DOMContentLoaded", function (){

  const bt = document.getElementById("bt");
  const price = document.getElementById("price");
  const dc = 0.75;

  bt.addEventListener("input", function(){
      const amount = bt.value;
      const isInteger = /^\d+$/.test(amount);
      const checkInput = bt.value.trim();

      if(isInteger && !isNaN(amount)){
          const load = Math.ceil(amount/dc);
          const test = load.toLocaleString();
          price.innerHTML = test + " PHP";
      } else if(checkInput === ""){
          price.innerHTML = "";
      } else{
          price.innerHTML = "Invalid Input";
      }
  });
});