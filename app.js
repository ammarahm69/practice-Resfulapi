async function getData() {
    try {
        let arr = [];
        let response = await fetch('https://fakestoreapi.com/products')
        let data = await response.json()
        arr.push(...data)

        let transformedData = arr.map((products) => {
            return {
                title: products.title,
                price: products.price,
                description: products.description.toUpperCase()
            }
        })
        transformedData.forEach(element => {
        });
        
          let filteredData = arr.filter(products => products.price > 50);
          console.log('Filtered Data:', filteredData);

    }
    catch (err) {
        console.log('Fetching Error', err);
    }
}
getData()