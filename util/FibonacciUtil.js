class FibonacciUtil {
    static fibonacci(numero) {
        return numero < 2 ? numero : FibonacciUtil.fibonacci(numero - 1) + FibonacciUtil.fibonacci(numero - 2);
    }

    static calcular(quantidade) {
        let numero;
        for (let i = 0; i < quantidade; i++) {
            numero = +FibonacciUtil.fibonacci(i);
        }
        return numero;
    }
}

module.exports = FibonacciUtil;