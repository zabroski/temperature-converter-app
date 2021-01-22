const celciusInput = document.querySelector("#celcius");
const farenheitInput = document.querySelector("#fahrenheit");
const kelvinInput = document.querySelector("#kelvin");
const tempInputs = document.querySelectorAll("input");


tempInputs.forEach(function (input) {
    input.addEventListener("input", function (e) {
        let tempValue = parseInt(e.target.value);
        let inputName = e.target.name;

        if(e.target.value == "") {
            celciusInput.value = null;
            farenheitInput.value = null;
            kelvinInput.value = null;

            return;
            
        }

        if(inputName === 'celcius') {
            //celcius to fahrenheit
            let fahrenheitValue = tempValue * 1.8 +32; 
            farenheitInput.value = fahrenheitValue.toFixed(2)

            // celcius to kelvin
            let kelvinValue = tempValue + 273.15;
            kelvinInput.value = kelvinValue.toFixed(2)
        } else if(inputName === 'fahrenheit') {
            //fahrenheit to celcius
            let celciusValue = (tempValue - 32) / 1.8;
            celciusInput.value = celciusValue.toFixed(2)
           
            //fahrenheit to kelvin
            let kelvinValue = (tempValue - 32) / 1.8 + 273.15;
            kelvinValue.value = kelvinValue.toFixed(2)
        } else if (inputName === 'kelvin') {
            //kelvin to celcius
            let celciusValue = tempValue - 273.15;
            celciusInput.value = celciusValue.toFixed(2);

            //kelvin to fahrenheit
            let fahrenheitValue = (tempValue - 273.15) * 1.8 + 32
            farenheitInput.value = fahrenheitValue.toFixed(2) 
        }
      
    })
})  