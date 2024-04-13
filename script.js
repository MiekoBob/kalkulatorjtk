document.getElementById('calculateButton').addEventListener('click', calculate);

function calculate() {
    let calculatorType = document.getElementById('calculatorType').value;

    if (calculatorType === "same") {
        calculateSameDilution();
    } else if (calculatorType === "different") {
        calculateDifferentDilutions();
    }
}

function calculateSameDilution() {
    let coloniesInput = document.createElement('input');
    coloniesInput.type = 'number';
    coloniesInput.placeholder = 'Podaj liczbę kolonii wyrosłych';
    coloniesInput.className = 'input-field';
    document.getElementById('inputsContainer').appendChild(coloniesInput);

    let dilutionInput = document.createElement('input');
    dilutionInput.type = 'number';
    dilutionInput.placeholder = 'Podaj współczynnik rozcieńczenia';
    dilutionInput.className = 'input-field';
    document.getElementById('inputsContainer').appendChild(dilutionInput);

    let calculateButton = document.createElement('button');
    calculateButton.textContent = 'Oblicz';
    calculateButton.className = 'calculate-button';
    calculateButton.addEventListener('click', function() {
        let colonies = parseInt(coloniesInput.value);
        let dilution = parseInt(dilutionInput.value);

        if (isNaN(colonies) || isNaN(dilution)) {
            alert("Wprowadź prawidłowe wartości.");
            return;
        }

        let result = colonies * dilution;
        document.getElementById('result').innerText = `Wynik: ${result.toExponential(5)} jtk`;
    });
    document.getElementById('inputsContainer').appendChild(calculateButton);
}

function calculateDifferentDilutions() {
    let differentDilutionsInput = document.createElement('input');
    differentDilutionsInput.type = 'number';
    differentDilutionsInput.placeholder = 'Podaj ilość różnych rozcieńczeń (od 1 do 3)';
    differentDilutionsInput.className = 'input-field';
    document.getElementById('inputsContainer').appendChild(differentDilutionsInput);

    let calculateButton = document.createElement('button');
    calculateButton.textContent = 'Oblicz';
    calculateButton.className = 'calculate-button';
    calculateButton.addEventListener('click', function() {
        let differentDilutions = parseInt(differentDilutionsInput.value);

        if (isNaN(differentDilutions) || differentDilutions < 1 || differentDilutions > 3) {
            alert("Wprowadź prawidłową ilość różnych rozcieńczeń (od 1 do 3).");
            return;
        }

        let totalColonies = 0;
        let totalPlates = 0;

        for (let i = 1; i <= differentDilutions; i++) {
            let dilution = Math.pow(10, i);
            let coloniesInput = document.createElement('input');
            coloniesInput.type = 'number';
            coloniesInput.placeholder = `Podaj sumę kolonii w płytkach z rozcieńczeniem R${dilution}`;
            coloniesInput.className = 'input-field';
            document.getElementById('inputsContainer').appendChild(coloniesInput);
            let colonies = parseInt(coloniesInput.value);
            if (isNaN(colonies)) {
                alert("Wprowadź prawidłową sumę kolonii.");
                return;
            }

            let platesInput = document.createElement('input');
            platesInput.type = 'number';
            platesInput.placeholder = `Podaj liczbę płytek z rozcieńczeniem R${dilution}`;
            platesInput.className = 'input-field';
            document.getElementById('inputsContainer').appendChild(platesInput);
            let plates = parseInt(platesInput.value);
            if (isNaN(plates)) {
                alert("Wprowadź prawidłową liczbę płytek.");
                return;
            }

            totalColonies += colonies;
            totalPlates += plates;
        }

        let result = totalColonies / totalPlates;
        document.getElementById('result').innerText = `Wynik: ${result.toExponential(5)} jtk`;
    });
    document.getElementById('inputsContainer').appendChild(calculateButton);
}
