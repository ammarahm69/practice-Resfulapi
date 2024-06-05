async function getData() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        let cards = document.getElementById('card');
        let data = await response.json();

        let transformedData = data.map((product, index) => {
            return {
                id: index,
                title: product.title,
                image: product.image,
                price: product.price,
                description: product.description.toUpperCase().slice(0, 25)
            };
        });

        transformedData.forEach(product => {
            cards.innerHTML += `
                <div class="col-12 col-sm-6 col-md-5 col-lg-3 mb-5 ms-5">
                    <div class="card" style="width: 18rem;">
                        <img src="${product.image}" class="card-img-top mb-2 p-2" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text"><strong>Price</strong>: $${product.price}</p>
                            <button class="button" id="btn-${product.id}">
                             Shop now
                            <svg class="cartIcon" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
        // Add event listeners to all buttons
        transformedData.forEach(product => {
            let button = document.getElementById(`btn-${product.id}`);
            button.addEventListener('click', () => {
              alert('Added to cart')
            });
        });

    } catch (err) {
        console.log('Fetching Error', err);
    }
}

getData();
