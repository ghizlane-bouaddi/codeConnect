const missionsList = document.getElementById("missionsList");
let missions = [];

async function LoadMissionData() {
  const dataMissions = await fetch("../../data/missions.json");
  missions = await dataMissions.json();

// console.log(missions)

}

// LoadMissionData();
LoadMissionData().then(() => {
  console.log("Les missions sont prêtes :", missions);
  // initialiserFiltre();
  ajouterCardMission(missions);
  let missionFiltrees = filtrerMissions(missions, "À distance");
  ajouterCardMission(missionFiltrees);
  console.log(missionFiltrees);

});

function ajouterCardMission(missions) {
  missionsList.innerHTML = missions
    .map(
      (mission) => `
    <div
        class="block max-w-[30rem] rounded-lg bg-white ">
          <div class="p-6 border-1 rounded-2xl">
        <h5 class="mb-1 text-xl font-medium leading-tight  hover:text-[#73BB44] cursor-pointer grow md:grow-0 transition duration-150 ease">
            ${mission.titre}
            </h5>
<div class="mb-2 text-base font-medium leading-tight text-surface/75 dark:text-neutral-300 flex justify-between items-center">
                        <span class=" p-1 text-lime-700 ">Duree: ${
                          mission.dureeEstime
                        }</span>
                        <span class=" p-1 text-lime-700">Contrat : ${
                          mission.typeContrat
                        } </span>
                        <span class=" p-1 text-lime-700">Tarif : ${
                          mission.tarif
                        } MED</span>
                    </div>
                    <p class="mb-4 text-base leading-normal">
                        ${mission.description}
                    </p>
                    
                    <ul class="flex gap-2 items-center mb-5 flex-wrap ">
                    ${mission.competance
                      .map(
                        (elt) =>
                          `<li class='px-4 py-2 bg-[#e9e9e9] text-black  rounded-3xl mr-2 mb-2 hover:text-[#73BB44] cursor-pointer transition duration-150 ease-in-out'>${elt} </li>`
                      )
                      .join("")}
                    </ul>
                    <a id="postulerForm" type="button" href="#"
                        class="pointer-events-auto me-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out text-white px-2 py-1 bg-[#73BB44] ">
                        Postuler
                    </a>
                    <a type="button" href="#"
                        class="pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-lime-500">
                        Voir Plus
                    </a>
                </div>
            </div>
    `
    )
    .join("");
}

function filtrerMissions(missions, critere) {
  if (!critere) return missions; 
  return missions.filter(mission => mission.typeContrat === critere);
}

function filterParContrat(missions, text){
    let resoltes = missions.filter(function(mission){
    // console.log(missions);
    console.log(resoltes);
    return mission.typeContrat == text;
  });
}

const filtrerContrat = function filterParContrat(missions, search){
  search = search.toLowerCase();
  return missions.filter(
    (mission) => mission.includes(search)
  )
}

let selectContrat = document.getElementById("selectContrat");

// filterParContrat(missions, "A distance")
function toggle(selectContrat){
  var value = selectContrat.option[selectContrat.selectedIndex].value;
}

function toggle(el){
    var value = el.options[el.selectedIndex].value;
        console.log(value);
        let missionFiltrees = filtrerMissions(missions, value);
    // if (value === "A distance") {

    //     // missionsList.style.display = "none";
    //     console.log(missions);
    // } else  if(value === "Sur Site"){
    //     // missionsList.style.display = "block";
    // }
    // else{
    //   // missionsList.style.display = "none";
    // }
}

