const missionsList = document.getElementById("missionsList");
async function LoadMissionData() {
  const dataMissions = await fetch("../../data/missions.json");
  let missions = await dataMissions.json();
  console.log(missions);
  ajouterCardMission(missions);
  return missions;
}
LoadMissionData();

function ajouterCardMission(missions) {
  missionsList.innerHTML = missions
    .map(
      (mission) => `
    <div
        class="block max-w-[30rem] rounded-lg bg-white ">
          <div class="p-6 border-1 rounded-2xl">
            h5 class="mb-1 text-xl font-medium leading-tight  hover:text-[#73BB44] cursor-pointer grow md:grow-0">
            ${mission.titre}
            </h5>
<div class="mb-2 text-base font-medium leading-tight text-surface/75 dark:text-neutral-300 flex justify-between items-center">
                        <span class="bg-red-400 rounded-lg p-1 text-white">${
                          mission.dureeEstime
                        }</span>
                        <span class="bg-red-400 rounded-lg p-1 text-white">${
                          mission.typeContrat
                        } </span>
                        <span class="bg-red-400 rounded-lg p-1 text-white">${
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
                          `<li class='px-4 py-2 bg-[#e9e9e9] text-black  rounded-3xl mr-2 mb-2 hover:text-[#73BB44] cursor-pointer'>${elt} </li>`
                      )
                      .join("")}
                    </ul>
                    
                    <a id="postulerForm" type="button" href="#"
                        class="pointer-events-auto me-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out text-white px-2 py-1 bg-[#73BB44] ">
                        Postuler
                    </a>
                    <a type="button" href="#"
                        class="pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400">
                        Voir Plus
                    </a>
                </div>
            </div>
    `
    )
    .join("");
}

const postulerForm = document.getElementById("postulerForm");
// postulerForm.addEventListener("click", function postuler(id){

// })
