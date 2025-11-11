
async function loadFreelances() {
  try {
    const response = await fetch('data.json');
    const freelances = await response.json();
    renderFreelances(freelances);
  } catch (error) {
    console.error('Erreur de chargement des freelances:', error);
  }
  
}


function renderFreelances(freelances) {
  const container = document.getElementById('freelancesList');
  container.innerHTML = '';

  freelances.forEach(f => {
    container.innerHTML += `
      <div class="bg-white rounded-2xl shadow-lg p-5 text-center cursor-pointer hover:scale-105 transition">
        <img src="${f.image}" alt="${f.name}" class="w-34 h-34 object-cover rounded-full mx-auto mb-3 border-2 border-blue-500">
        <h3 class="text-lg font-semibold">${f.name}</h3>
        <p class="text-sm text-gray-600">${f.speciality}</p>
        <p class="text-yellow-500 mt-2"><i class="fa-solid fa-star text-orange-600"></i>${f.rating}</p>
      <a href="freelances.html?id=${f.id}" class="bg-blue-600 p-2 pl-5 pr-5 mt-2.5 text-white rounded-xl inline-block">Voir profil</a>


      </div>
    `;
  });
}


loadFreelances();