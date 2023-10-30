function toCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var fahrenheit = fahrenheitInput.value;
    var celsius = ((fahrenheit - 32) * 5/9).toFixed(2);
    var output = document.getElementById('output1');
    output.innerHTML= fahrenheit + ' °F = '+ celsius +" °C";
  }

  function toFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = ((celsius * 9/5) + 32).toFixed(2);
    var output = document.getElementById('output2');
    output.innerHTML= celsius + ' °C = '+ fahrenheit +"°F";
    
  }