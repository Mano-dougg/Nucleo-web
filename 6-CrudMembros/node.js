 const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
        for (const response of responses) {
            console.log(`${response.url} ${response.status}`)
        }
    })
    .catch((error) => {
        console.error(`Falha ao buscar: ${error}`);
    });
 
/* async function fetchData() {
    try {
        const fetchPromise1 = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );
        const fetchPromise2 = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
        );
        const fetchPromise3 = await fetch(
            "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
        );
        console.log(`${fetchPromise1.url}: ${fetchPromise1.status}`);
        console.log(`${fetchPromise2.url}: ${fetchPromise2.status}`);
        console.log(`${fetchPromise3.url}: ${fetchPromise3.status}`);
    } catch(error){
        console.log(`Falha ao buscar: ${error}`)
    }
}

fetchData() */