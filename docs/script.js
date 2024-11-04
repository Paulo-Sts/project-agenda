//Função para listar contatos
const contactList = document.getElementById('contactList')

const listContacts = async () => {
    const response = await fetch('http://localhost:3000/contatos'); // Altere a URL conforme necessário
    const contacts = await response.json();
    contactList.innerHTML = ''; // Limpar a lista antes de adicionar novos contatos
    contacts.forEach(contact => {
        const li = document.createElement('li');
        li.classList.add('contact-item'); // Adiciona a classe contact-item
        li.setAttribute('data-name', contact.nome); // Define o atributo data-name
        li.setAttribute('data-phone', contact.telefone); // Define o atributo data-phone
        li.textContent = `${contact.nome}` // - ${contact.telefone}`;
        
        // Adiciona o evento de clique para abrir o modal com detalhes
        li.addEventListener('click', () => {
            openContactModal(contact.nome, contact.telefone);
        });

        contactList.appendChild(li);
    });
}

//Modal de adição de contatos
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

// Função para adicionar um contato
const saveButton = document.getElementById('saveButton'); // Botão de salvar

saveButton.addEventListener('click', () => {
    contactForm.dispatchEvent(new Event('submit')); // Dispara o envio do formulário
});

const contactForm = document.getElementById('contactForm');

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

// Função para abrir o modal de visualização de contato
function openContactModal(contact) {
    document.getElementById('contactName').textContent = contact.nome;
    document.getElementById('contactPhone').textContent = contact.telefone;
    document.getElementById('contactModal').style.display = 'block';
}

// Exemplo de listener em cada item de contato
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', () => {
        const contact = {
            nome: item.dataset.name,
            telefone: item.dataset.phone
        };
        openContactModal(contact);
    });
});

// Fechar o modal ao clicar fora
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('contactModal').style.display = 'none';
});

listContacts();