var questions = [
    "Cachorro quente é sanduíche?",
    "Você usa fio dental antes ou depois de escovar os dentes?",
    "Tem algum restaurante que você gosta perto de onde mora?",
    "Li um livro recentemente. Você já leu ele?",
    "Se pudesse escolher alguém no mundo pra falar ao telefone, quem escolheria?",
    "Qual seria seu nome de rockstar: seu primeiro pet, seu último carro",
    "Qual o maior mico que você já pagou?",
    "Que superpoder você queria ter, mas que teria um revés e você aceitaria?",
    "Se pudesse ir em qualquer lugar no mundo, qual seria?"
];

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, options);
});


function generateTheme() {
    var output = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById("here").innerHTML = output;
}