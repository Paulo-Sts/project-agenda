const contactList = document.getElementById('contactList')
const contactForm = document.getElementById('contactForm');

const saveButton = document.getElementById('saveButton'); // Botão de salvar

saveButton.addEventListener('click', () => {
    contactForm.dispatchEvent(new Event('submit')); // Dispara o envio do formulário
});

const modal = document.getElementById("formModal");
const addContactBtn = document.getElementById("addContactBtn");
const span = document.getElementsByClassName("close")[0];

addContactBtn.onclick = function() {
    modal.style.display = "block"; // Exibe o modal
}

span.onclick = function() {
    modal.style.display = "none"; // Fecha o modal
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Fecha o modal ao clicar fora
    }
}

const closeModal = () => {
    modal.style.display = 'none'; // Oculta o modal
};

// Função para listar contatos
const listContacts = async () => {
    const response = await fetch('http://localhost:3000/contatos'); // Altere a URL conforme necessário
    const contacts = await response.json();
    contactList.innerHTML = ''; // Limpar a lista antes de adicionar novos contatos
    contacts.forEach(contact => {
        const li = document.createElement('li');
        li.textContent = `${contact.nome}` // - ${contact.telefone}`;
        contactList.appendChild(li);
    });
}

// Função para adicionar um contato
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value
    await fetch('http://localhost:3000/contatos', { // Altere a URL conforme necessário
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome: name, telefone: phone }),
    })
    contactForm.reset(); // Limpar o formulário após adicionar
    listContacts(); // Atualizar a lista de contatos
    closeModal();
})

listContacts();