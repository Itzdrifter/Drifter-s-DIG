fetch("./sites.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("container");

    data.forEach(site => {
      const btn = document.createElement("button");

      btn.textContent = site.name;
      btn.style.backgroundColor = site.color;

      btn.onclick = () => {
        window.location.href = site.url;
      };

      container.appendChild(btn);
    });
  })
  .catch(err => {
    console.error("Failed to load sites.json", err);
  });
