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
      servicesContainer.innerHTML = '<div id="formeAddService"><h2>Ajouter un service</h2><form id="serviceForm"><label>Freelance: </label><input type="text" placeholder="Nom du freelance" required><label>Title: </label><input type="text" placeholder="Titre du service" required><label>Catégorie: </label><select name="categorie" id="category"><option value="defaut" placeholder="Catégorie" required><option value="devWebFullStack">Développement Web Fullstack</option><option value="UI/UX">UX/UI design pour mobile</option><option value="marketing">Campagne marketing digital</option></select><label>Prix: </label><input type="number" placeholder="Prix (MAD)" required><label>Jours de livraison: </label><input type="number" placeholder="Délai (jours)" required><button id="enregistrer">Enregistrer</button></form></div>';
      sorted.forEach(service => servicesContainer.appendChild(createServiceCard(service)));
    });

  

//     // Sélection du formulaire
// const form = document.getElementById("serviceForm");

// // Écoute la soumission du formulaire
// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // Empêche le rechargement de la page

//   // Création d’un nouvel objet service
//   const nouveauService = {
//     id: servicesData.length + 1,
//     freelance: document.getElementById("freelance").value,
//     title: document.getElementById("title").value,
//     category: document.getElementById("category").value,
//     price: Number(document.getElementById("price").value),
//     currency: "MAD",
//     delivery_days: Number(document.getElementById("delivery_days").value)
//   };

//   // Ajout dans le tableau en mémoire
//   servicesData.push(nouveauService);

//   // Affichage instantané dans la page
//   servicesContainer.appendChild(createServiceCard(nouveauService));

//   // Réinitialiser le formulaire
//   form.reset();
// });




    // document.getElementById("enregistrer").addEventListener("click", () => {
    // const ajoutService = services.push()
    // servicesContainer.innerHTML = "";
    // });

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