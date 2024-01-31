document.addEventListener("DOMContentLoaded", function (){

    const bt = document.getElementById("bt");
    const price = document.getElementById("price");

    bt.addEventListener("input", function(){
        const amount = bt.value;
        const isInteger = /^\d+$/.test(amount);
        const checkInput = bt.value.trim();

        if(isInteger && !isNaN(amount)){
            const gprice = Math.ceil(amount/0.7);
            price.innerHTML = gprice;
        } else if(checkInput === ""){
            price.innerHTML = "";
        } else{
            price.innerHTML = "Invalid Input";
        }
    });
});