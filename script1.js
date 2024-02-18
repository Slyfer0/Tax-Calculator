document.addEventListener("DOMContentLoaded", function (){

    const bt = document.getElementById("bt");
    const price = document.getElementById("price");
    const rate_per_1k = 260;

    bt.addEventListener("input", function(){
        const amount = bt.value;
        const isInteger = /^\d+$/.test(amount);
        const checkInput = bt.value.trim();

        if(isInteger && !isNaN(amount)){
            const gprice = Math.ceil(amount/1000*rate_per_1k);
            const test = gprice.toLocaleString();
            price.innerHTML = test + " PHP";
        } else if(checkInput === ""){
            price.innerHTML = "";
        } else{
            price.innerHTML = "Invalid Input";
        }
    });
});
