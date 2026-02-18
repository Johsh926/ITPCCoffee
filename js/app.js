function renderList(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    data.forEach(item => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <img src="${item.image}" alt="">
            <div class="card-content">
                <h3>${item.name}</h3>
                <p><strong>Location:</strong> ${item.district || item.origin}</p>
                <p><strong>Type:</strong> ${item.type || item.variety}</p>
            </div>
        `;

        container.appendChild(div);
    });
}

function filterShops() {
    const district = document.getElementById("districtFilter").value;

    let filtered = coffeeShops;

    if (district !== "All") {
        filtered = coffeeShops.filter(shop => shop.district === district);
    }

    renderList(filtered, "shopList");
}

function searchShops() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();

    const results = coffeeShops.filter(shop =>
        shop.name.toLowerCase().includes(keyword)
    );

    renderList(results, "shopList");
}

function searchBeans() {
    const keyword = document.getElementById("beanSearch").value.toLowerCase();

    const results = coffeeBeans.filter(bean =>
        bean.name.toLowerCase().includes(keyword)
    );

    renderList(results, "beanList");
}
