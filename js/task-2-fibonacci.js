(function fibonacci(num = 1000){
    var a = 1, b = 0, temp, sum = 0;

    while (b < 4000000){
        temp = a;
        a = a + b;
        b = temp;
        if(b%2 == 0){
            sum += b;
        }

    }

    alert (sum);
})();