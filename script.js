// script.js

// Inicializa o carrinho
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Função para atualizar o contador de itens no carrinho
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Função para adicionar produtos ao carrinho
function addToCart(name, price) {
    const item = { name, price, quantity: 1 };
    const existingItem = cart.find(i => i.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Evento de clique para os botões "Adicionar ao Carrinho"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.getAttribute('data-item-name');
        const itemPrice = parseFloat(this.getAttribute('data-item-price'));
        addToCart(itemName, itemPrice);
    });
});

// Atualiza o contador na carga da página
document.addEventListener('DOMContentLoaded', updateCartCount);

document.addEventListener('DOMContentLoaded', function() {
    const testimonialForm = document.getElementById('testimonial-form');
    const testimonialsContainer = document.getElementById('testimonials-container');

    testimonialForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o reload da página

        const name = document.getElementById('name').value;
        const place = document.getElementById('place').value;
        const stars = document.getElementById('stars').value;
        const comment = document.getElementById('comment').value;

        if (name && place && stars && comment) {
            // Cria um novo div de depoimento
            const testimonialDiv = document.createElement('div');
            testimonialDiv.classList.add('testimonial');
            
            testimonialDiv.innerHTML = `
                <h4>${name}</h4>
                <div class="star-rating">${'⭐'.repeat(stars)}</div>
                <p>${place}: ${comment}</p>
            `;

            // Adiciona o novo depoimento ao container
            testimonialsContainer.appendChild(testimonialDiv);

            // Limpa o formulário após o envio
            document.getElementById('name').value = '';
            document.getElementById('place').value = '';
            document.getElementById('stars').value = '';
            document.getElementById('comment').value = '';
        } else {
            alert('Por favor, preencha todos os campos!');
        }
    });
});