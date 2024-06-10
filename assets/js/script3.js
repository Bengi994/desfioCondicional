document.getElementById('submit').onclick = function() {
    var digit1 = document.getElementById('digit1').value;
    var digit2 = document.getElementById('digit2').value;
    var digit3 = document.getElementById('digit3').value;
    var password = digit1 + digit2 + digit3;
    var resultText;
    if (password === '911') {
        resultText = 'password 1 correcto';
    } else if (password === '714') {
        resultText = 'password 2 es correcto';
    } else {
        resultText = 'password incorrecto';
    }
    document.getElementById('result').textContent = resultText;
}