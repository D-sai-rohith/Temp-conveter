function convertToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var fahrenheit = fahrenheitInput.value;
    var celsius = ((fahrenheit - 32) * 5/9).toFixed(2);
    var output = document.getElementById('output1');
    output.innerHTML= fahrenheit + ' fahrenheit after converting into celsius is '+ celsius;
  }

  function convertToFahrenheit() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var celsiusInput = document.getElementById("celsius");
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = ((celsius * 9/5) + 32).toFixed(2);
    var output = document.getElementById('output2');
    output.innerHTML= celsius + ' celsius after converting into fahrenheit is '+ fahrenheit;
    
  }