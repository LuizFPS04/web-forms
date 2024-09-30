let originalRoastingHTML = '';

window.onload = function () {
    originalRoastingHTML = document.querySelector(".form-roasting").innerHTML;
};

function selectDrink(drinkId) {
    const drinkRadio = document.getElementById(drinkId);
    drinkRadio.checked = true;

    drinkChosen();
}

function drinkChosen() {
    const formRoasting = document.querySelector('.form-roasting');

    const drink = document.querySelector('input[name="drink"]:checked').value;

    if (drink.toLowerCase() == "chocolate") {
        formRoasting.innerHTML = '';
    } else {
        formRoasting.innerHTML = originalRoastingHTML;
    }
}

function submitOrder() {
    const selectedDrink = document.querySelector('input[name="drink"]:checked');
    if (!selectedDrink) {
        const orderSummary = "<b>Selecione sua bebida</b>";

        document.getElementById('alertMessage').innerHTML = orderSummary;
        document.getElementById('customAlert').style.display = 'flex';

        resetForm();
        return;
    }

    let selectedRoasting = document.querySelector('input[name="roasting"]:checked');
    selectedRoasting = selectedRoasting ? selectedRoasting.value : 'Nenhuma';

    const selectedGarnishes = [];
    document.querySelectorAll('.garnish-container input[type="checkbox"]').forEach(checkbox => {
        if (checkbox.checked) {
            selectedGarnishes.push(checkbox.nextElementSibling.textContent.trim());
        }
    });

    const orderSummary = `
    <b>Pedido realizado com sucesso!</b><br><br>
    <b>Bebida selecionada:</b> ${selectedDrink.value}<br>
    <b>Torra selecionada:</b> ${selectedRoasting}<br>
    <b>Acompanhamentos:</b> ${selectedGarnishes.length > 0 ? selectedGarnishes.join(', ') : 'Nenhum'}
    `;

    document.getElementById('alertMessage').innerHTML = orderSummary;
    document.getElementById('customAlert').style.display = 'flex';

    resetForm();
}

function resetForm() {
    document.querySelectorAll('input[name="drink"]').forEach(radio => {
        radio.checked = false;
    });

    document.querySelectorAll('input[name="roasting"]').forEach(radio => {
        radio.checked = false;
    });

    document.querySelectorAll('.garnish-container input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
}

function closeAlert() {
    const formRoasting = document.querySelector('.form-roasting');
    formRoasting.innerHTML = originalRoastingHTML;

    document.getElementById('customAlert').style.display = 'none';
}
