document.addEventListener("DOMContentLoaded", function () {
    const txtBt = document.getElementById("txtBt");
    const price = document.getElementById("price");
    const txtPesos = document.getElementById("txtPesos");
    const rate = 2.9;

    function updateValues(input, output) {
        const amount = input.value.trim();
        const isInteger = /^\d+$/.test(amount);

        if (isInteger && !isNaN(amount)) {
            let convertedValue;
            if (input === txtBt) {
                convertedValue = Math.ceil(amount / 0.7);
                txtPesos.value = Math.ceil(amount / rate).toLocaleString();
            } else if (input === txtPesos) {
                robux = Math.floor(amount * rate);
                convertedValue = Math.ceil(robux / 0.7).toLocaleString();
                txtBt.value = robux;
            }

            const formattedValue = convertedValue.toLocaleString();
            price.innerHTML = "R$ " + formattedValue;
        } else {
            price.innerHTML = "";
            input.value = ""; // Clear the input field for invalid input
            if (input === txtPesos) {
                txtBt.value = ""; // Clear txtBt if txtPesos is empty
            } else if (input === txtBt) {
                txtPesos.value = ""; // Clear txtPesos if txtBt is empty
            }
        }
    }

    txtPesos.addEventListener("input", function () {
        updateValues(txtPesos, txtBt);
    });

    txtBt.addEventListener("input", function () {
        updateValues(txtBt, txtPesos);
    });
});
