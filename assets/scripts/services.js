async function loadServices() {
      try {
        const response = await fetch("../data/services.json"); 
        const data = await response.json();           

        servicesData = data.services;
        servicesContainer.innerHTML = "";
        servicesData.forEach(service => {
          servicesContainer.appendChild(createServiceCard(service));
        });
      } catch (error) {
        console.error("Erreur lors du chargement des services :", error);
        servicesContainer.innerHTML = "<p>Impossible de charger les services.</p>";
      }
    }

    function createServiceCard(service) {
      const card = document.createElement("div");
      card.classList.add("service-card");

      card.innerHTML = `
        <h3>${service.title}</h3>
        <p><strong>Freelance :</strong> ${service.freelance}</p>
        <p><strong>Catégorie :</strong> ${service.category}</p>
        <p><strong>Prix :</strong> ${service.price} ${service.currency}</p>
        <p><strong>Délai :</strong> ${service.delivery_days} jours</p>
      `;

      return card;
    }

     document.getElementById("service-add").addEventListener("click", () => {
      servicesContainer.innerHTML = "";
      sorted.forEach(service => servicesContainer.appendChild(createServiceCard(service)));
    });

    document.getElementById("sortCroissant").addEventListener("click", () => {
      const sorted = [...servicesData].sort((a, b) => a.price - b.price);
      servicesContainer.innerHTML = "";
      sorted.forEach(service => servicesContainer.appendChild(createServiceCard(service)));
    });

    document.getElementById("sortDecroissant").addEventListener("click", () => {
      const sorted = [...servicesData].sort((a, b) => b.price - a.price);
      servicesContainer.innerHTML = "";
      sorted.forEach(service => servicesContainer.appendChild(createServiceCard(service)));
    });

    loadServices();