const sertificatesModal = () => {
    const links = document.querySelectorAll('.sertificate-document');
    
    if (!links.length) return;

    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.9)';
    modal.style.zIndex = '9999';
    modal.style.display = 'none';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    
    const img = document.createElement('img');
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = 'x';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '20px';
    closeBtn.style.right = '40px';
    closeBtn.style.color = '#fff';
    closeBtn.style.fontSize = '40px';
    closeBtn.style.cursor = 'pointer';
    
    modal.appendChild(img);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);
    
    // Открытие
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            img.src = link.getAttribute('href');
            modal.style.display = 'flex';
        });
    });
    
    // Закрытие
    const closeModal = () => {
        modal.style.display = 'none';
        img.src = '';
    };
    
    closeBtn.onclick = closeModal;
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
};

export default sertificatesModal