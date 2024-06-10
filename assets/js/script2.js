document.getElementById('submit').onclick = function() {

    const narutoCount = parseInt(document.getElementById('narutoCount').value) || 0;
    const sasukeCount = parseInt(document.getElementById('sasukeCount').value) || 0;
    const sakuraCount = parseInt(document.getElementById('sakuraCount').value) || 0;
  

    const totalStickers = narutoCount + sasukeCount + sakuraCount;
  

    const resultado = document.getElementById('resultado');
  

    if (totalStickers <= 10) {
      resultado.textContent = `Llevas ${totalStickers} stickers`;
    } else {
      resultado.textContent = 'Llevas demasiados stickers';
    }
  }