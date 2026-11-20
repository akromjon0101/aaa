let div = document.querySelector("div");

fetch("https://fakestoreapi.com/products?limit=50")
  .then((res) => res.json())
  .then((data) => {
    data.map((item) => {
      div.innerHTML += `
             <div class="card">
                    <img src="${item.image}" alt="">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                    <b>${item.price}$</b>
                    <br>
                 <button>buy</button>
    </div>
        `;
    });
  });
