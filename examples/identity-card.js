const regex = /^\d{8}[A-Z]{2}\d{3}$/i;

function validarBilheteIdentidade(bilhete) {
  return regex.test(bilhete);
}

console.log(validarBilheteIdentidade("00467589HA049")); // true
console.log(validarBilheteIdentidade("0046758HA049")); // false (número de dígitos incorreto)
console.log(validarBilheteIdentidade("00467589HA04")); // false (número de dígitos incorreto)

