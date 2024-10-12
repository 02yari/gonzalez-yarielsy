export function generarNumeros() {
    const numerosGenerados = [];
    while (numerosGenerados.length < 8) {
        const numero = Math.floor(Math.random() * 99) + 1; // 01 < n < 99
        if (!numerosGenerados.includes(numero)) {
            numerosGenerados.push(numero);
        }
    }
    return numerosGenerados;
}

export function actualizarCajas(numeros) {
    const cajas = document.querySelectorAll('.caja');
    for (let i = 0; i < cajas.length; i++) {
        cajas[i].textContent = numeros[i].toString().padStart(2, '0');
    }
}

export function ordenarNumeros(numeros, orden) {
    if (orden === 'asc') {
        return numeros.sort((a, b) => a - b);
    } else {
        return numeros.sort((a, b) => b - a);
    }
}