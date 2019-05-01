var questions = [
    "cachorro quente é sanduíche?",
    "você usa fio dental antes ou depois de escovar os dentes?",
];

function generateTheme() {
    var output = questions[Math.floor(Math.random() * questions.length)];

    var outing = document.getElementById("here");
    outing.innerHTML = output;
}