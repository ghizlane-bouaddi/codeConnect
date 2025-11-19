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
    document.getElementById("formeAddService").style.display = "none";
    document.getElementById("service-add").addEventListener("click", () => {
    document.getElementById("formeAddService").style.display = "block";
    card.style.display = "none";
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

const storage = [];

function ajouterservice(service){
  service.preventDefault();
  const servicess = {
  freelance: document.getElementById('freelance').value,
  title: document.getElementById('title').value,
  category: document.getElementById('category').value,
  price: Number(document.getElementById('price').value),
  delivery_days: Number(document.getElementById('delivery_days').value)
  };
  storage.push(servicess);
  localStorage.setItem('services', JSON.stringify(storage));
  createServiceCard(servicess);
}
document.getElementById('enregistrer').addEventListener('submit', ajouterservice);

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