const BMIData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

const btn = document.querySelector('button');

let sizeValue = document.querySelector('.input_size');
let weightValue = document.querySelector('.input_weight');
let result = document.querySelector('.result_imc');
let resultDescription = document.querySelector('.result_description');
let imc;

btn.addEventListener('click', () => {
    // Reset des couleurs
    result.style.color = "inherit";
    resultDescription.style.color = "inherit";

    // Calcul de l'IMC
    imcResult();

    // Affichage du resultat
    result.textContent = imc;

    // Appel de fonction
    showResult();

    // Reset des inputs
    sizeValue.value = '';
    weightValue.value = '';
});


function imcResult() {
    // Formule de l'IMC avec un chiffre après la virgule
    imc = Math.round(weightValue.value / Math.pow((sizeValue.value / 100), 2) * 10) / 10;
}

function showResult() {
    if (sizeValue.value < 1 || weightValue.value < 1 || !sizeValue.value || !weightValue.value) {
        result.textContent = "Woops";
        resultDescription.textContent = "Remplissez correctement les valeurs."
    } else {
        const rank = BMIData.find(data => {
            if (imc >= data.range[0] && imc <= data.range[1]) {
                return data;
            } else if (data.range >= 40) {
                return data;
            }
        })

        result.style.color = `${rank.color}`;
        resultDescription.style.color = `${rank.color}`;
        resultDescription.textContent = `Résultat : ${rank.name}`;
    }
}