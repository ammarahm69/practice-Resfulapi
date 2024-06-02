async function getData() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        let cards = document.getElementById('card');
        let data = await response.json();

        let transformedData = data.map((product) => {
            return {
                title: product.title,
                image: product.image,
                price: product.price,
                description: product.description.toUpperCase().slice(0,20)
            };
        });

        transformedData.forEach(product => {
            cards.innerHTML += `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                    <div class="card" style="width: 18rem;">
                        <img src="${product.image}" class="card-img-top mb-2 p-2" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text"><strong>Price</strong>: $${product.price}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    } catch (err) {
        console.log('Fetching Error', err);
    }
}

getData();
