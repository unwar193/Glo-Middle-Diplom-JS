const calc = () => {
    const typeSelect = document.getElementById("calc-type");
    const materialSelect = document.getElementById("calc-type-material");
    const inputArea = document.getElementById("calc-input");
    const totalInput = document.getElementById("calc-total");

    function validateField(field) {
        if (!field.value || field.value === "--" || Number(field.value) <= 0) {
            field.classList.add("is-invalid");
            return false;
        } else {
            field.classList.remove("is-invalid");
            return true;
        }
    }

    function calculateTotal() {
        const typeValid = validateField(typeSelect);
        const materialValid = validateField(materialSelect);
        const areaValid = validateField(inputArea);

        if (typeValid && materialValid && areaValid) {
            const area = parseFloat(inputArea.value);
            const type = parseFloat(typeSelect.value);
            const material = parseFloat(materialSelect.value);
            const total = area * type * material;

            totalInput.value = total.toFixed(2);
        } else {
            totalInput.value = "";
        }
    }

    // слушатели
    typeSelect.addEventListener("change", calculateTotal);
    materialSelect.addEventListener("change", calculateTotal);
    inputArea.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, ""); // только цифры
        calculateTotal();
    });
};

export default calc
