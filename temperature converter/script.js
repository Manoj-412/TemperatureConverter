const calculateTemp = () => {
    const inputTemp = parseFloat(document.getElementById('temp').value);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    // Celsius to Kelvin
    const celToKel = (cel) => {
        let kelvin = (cel + 273.15).toFixed(2);
        return kelvin;
    }

    // Kelvin to Celsius
    const kelToCel = (kel) => {
        let celsius = (kel - 273.15).toFixed(2);
        return celsius;
    }

    let result = '';

    if (valueTemp === 'cel') {
        result = `${inputTemp} &#176;Celsius is equal to ${celToFah(inputTemp)} &#176;Fahrenheit and ${celToKel(inputTemp)} Kelvin`;
    } else if (valueTemp === 'fah') {
        result = `${inputTemp} &#176;Fahrenheit is equal to ${fahToCel(inputTemp)} &#176;Celsius and ${(inputTemp + 459.67).toFixed(2)} Kelvin`;
    } else if (valueTemp === 'kel') {
        result = `${inputTemp} Kelvin is equal to ${kelToCel(inputTemp)} &#176;Celsius and ${((inputTemp * 9 / 5) - 459.67).toFixed(2)} &#176;Fahrenheit`;
    }

    document.getElementById("result").innerHTML = result;
}
