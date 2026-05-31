fetch("sites.json")
    .then(response => response.json())
    .then(data => {

        const container = document.getElementById("sites-container");

        data.forEach(site => {

            const button = document.createElement("button");

            button.className = "site-btn";
            button.textContent = site.name;
            button.style.backgroundColor = site.color;

            button.onclick = () => {
                window.location.href = site.url;
            };

            container.appendChild(button);
        });

    })
    .catch(err => {
        console.error("Failed to load sites.json", err);
    });