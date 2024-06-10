document.getElementById('submit').addEventListener('click', function() {
    const digit1 = document.getElementById('digit1').value;
    const digit2 = document.getElementById('digit2').value;
    const digit3 = document.getElementById('digit3').value;
    const password = digit1 + digit2 + digit3;

    let resultText;
    if (password === '911') {
        resultText = 'password 1 correcto';
    } else if (password === '714') {
        resultText = 'password 2 es correcto';
    } else {
        resultText = 'password incorrecto';
    }

    document.getElementById('result').textContent = resultText;
});