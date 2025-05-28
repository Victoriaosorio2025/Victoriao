<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Segunda Entrega</title>
  </head>
  <body>
    <script>
    operacion = prompt("Quiere sumar?.  Multiplicar?.  Restar ó Dividir?");

      if (operacion == "+") {
        sumaPrimerNumero = prompt("Ingrese primer numero");
        sumaSegundoNumero = prompt("Ingrese segundo numero");
        suma = parseInt(sumaPrimerNumero) + parseInt(sumaSegundoNumero);
        document.write("La suma es: ");
        document.write(suma);

        alert("La suma es: " + suma);
      }

      if (operacion == "-") {
        restaPrimerNumero = prompt("Ingrese primer numero");
        restaSegundoNumero = prompt("Ingrese segundo numero");
        resta = parseInt(restaPrimerNumero) - parseInt(restaSegundoNumero);
        document.write("La resta es: ");
        document.write(resta);

        alert("La resta es: " + resta);
      }

      if (operacion == "*") {
        multiPrimerNumero = prompt("Ingrese primer numero");
        multiSegundoNumero = prompt("Ingrese segundo numero");
        multi = parseInt(multiPrimerNumero) * parseInt(multiSegundoNumero);
        document.write("La multiplicacion es: ");
        document.write(multi);

        alert("La multiplicacion es: " + multi);
      }

      if (operacion == "/") {
        divisionPrimerNumero = prompt("Ingrese primer numero");
        divisionSegundoNumero = prompt("Ingrese segundo numero");
        division =
          parseInt(divisionPrimerNumero) / parseInt(divisionSegundoNumero);
        document.write("La division es: ");
        document.write(division);

        alert("La division es: " + division);
      }
      operacion = prompt("Quiere desarrollar una nueva operacion?");
    if (no)

    alert ("Gracias por usar el servicio")
    if (si)
    alert ("Aceptar")
    </script>
  </body>
</html>