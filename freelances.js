async function chargerFreelances() {
  try {    
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
   
    
    const response = await fetch('data.json');
    const freelances = await response.json();
    
    let freelancer = freelances.find( f=>f.id==id );
    
    const container = document.getElementById('freelancesList');
    console.log(container);
    
    container.innerHTML = '';

      container.innerHTML += `
        <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="h-48 overflow-hidden">
            <img src="${freelancer.profileImage}" class="w-full h-48 object-cover" alt="Cover">
          </div>
          <div class="mx-auto w-32 h-32 -mt-16 border-4 border-white rounded-full overflow-hidden">
            <img src="${freelancer.image}" class="w-32 h-32 object-cover" alt="Profil">
          </div>
          <div class="p-4 text-center">
            <h2 class="font-bold text-xl">${freelancer.name}</h2>
            <p class="text-gray-600">${freelancer.speciality}</p>
            <h2 class ="text-left font-bold">Bio</h2>
            <p class ="text-black text-left">${freelancer.bio}</p> 
              
              <div class =" text-left">
              <h2 class="mt-4  font-bold text-left mb-3">skills:</h2>
              <ul class =" flex gap-3">
              ${freelancer.skills.map(s=>`<li class="bg-orange-600 pl-3 pr-3 rounded-lg border-2 border-blue-500 text-white" >${s}</li>`).join('')}
              </ul>
              </div>
          <h2 class="mt-6  font-bold text-left">Projets récents:</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
         <div><img src="${freelances[1].progect1}" alt="Projet 1" class="w-full h-40 object-cover rounded-lg"></div>
  <div><img src="${freelances[1].progect2}" alt="Projet 2" class="w-full h-40 object-cover rounded-lg"></div>
  <div><img src="${freelances[1].progect3}" alt="Projet 3" class="w-full h-40 object-cover rounded-lg"></div>
</div>


<div class="grid  grid-cols-2 mt-5">
    <div class=""><p class="mt-2 font-semibold">Tarif: ${freelancer.rate} $/h</p></div>
    <div class=""><p>Ahmed : <i class="fa-solid fa-star text-orange-600"></i><i class="fa-solid fa-star text-orange-600"></i>
    <i class="fa-solid fa-star  text-orange-600"></i>
    </p>
    <p>${freelances[1].comment}</p>
    </div>
  </div>
            
               class="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              contacte
            </a>
          </div>
        </div>`;
  } catch (error) {
    console.error('Erreur:', error);
  }
}

chargerFreelances();

