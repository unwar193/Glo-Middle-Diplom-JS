const formValidator = () => {
    // Функция очистки ввода имени
    const cleanName = (input) => {
        input.value = input.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s-]/g, '');
    };

    // Функция очистки ввода телефона
    const cleanPhone = (input) => {
        let val = input.value.replace(/[^\d+]/g, '');
        if (val.indexOf('+') > 0) val = val.replace(/\+/g, '');
        if (val.length > 17) val = val.slice(0, 17);
        input.value = val;
    };

    // Обработка отправки формы
    const handleSubmit = (event, form) => {
        event.preventDefault();
        
        const name = form.querySelector('input[name="fio"]').value.trim();
        const phone = form.querySelector('input[name="phone"]').value;
        const phoneDigits = phone.replace(/\+/g, '');
        
        if (!name || !phone) {
            alert('Заполните оба поля формы');
            return;
        }
        
        if (!/^[a-zA-Zа-яА-ЯёЁ\s-]+$/.test(name)) {
            alert('Имя может содержать только буквы (русские или латинские)');
            return;
        }
        
        if (phoneDigits.length < 7 || phoneDigits.length > 16) {
            alert('Номер телефона должен содержать 7-16 цифр');
            return;
        }
        
        // Отправка формы
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        fetch('/submit-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(() => {
            alert('Форма успешно отправлена!');
            form.reset();
        })
        .catch(() => alert('Ошибка отправки. Попробуйте позже.'));
    };

    // Инициализация всех форм
    document.querySelectorAll('.order-form.rf form').forEach(form => {
        form.addEventListener('submit', (e) => handleSubmit(e, form));
        
        const nameInput = form.querySelector('input[name="fio"]');
        const phoneInput = form.querySelector('input[name="phone"]');
        
        if (nameInput) nameInput.addEventListener('input', (e) => cleanName(e.target));
        if (phoneInput) phoneInput.addEventListener('input', (e) => cleanPhone(e.target));
    });
};


export default formValidator
