document.getElementById('calcular').addEventListener('click', function() {
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    const carneBovina = (homens * 500) + (mulheres * 300) + (criancas * 200);
    const frango = (homens * 200) + (mulheres * 200) + (criancas * 100);
    const linguica = (homens * 200) + (mulheres * 200) + (criancas * 200);
    const refrigerante = (homens * 300) + (mulheres * 400) + (criancas * 200);
    const cerveja = (homens * 800) + (mulheres * 500);

    document.getElementById('carne-bovina').innerText = `Carne Bovina: ${carneBovina / 1000} kg`;
    document.getElementById('frango').innerText = `Frango: ${frango / 1000} kg`;
    document.getElementById('linguica').innerText = `Linguiça: ${linguica / 1000} kg`;
    document.getElementById('refrigerante').innerText = `Refrigerante: ${refrigerante / 1000} litros`;
    document.getElementById('cerveja').innerText = `Cerveja: ${cerveja / 1000} litros`;
});
