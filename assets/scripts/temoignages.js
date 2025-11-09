const temoignagesList = document.getElementById("temoignagesList");
async function LoadtemoignageData() {
    const dataTemoginage = await fetch("../../data//temoignages.json");
    let temoignages = await dataTemoginage.json();
    console.log(temoignages);
    ajouterCardTemoignage(temoignages);
    return temoignages;
}
LoadtemoignageData();
function ajouterCardTemoignage(temoignages) {
    temoignagesList.innerHTML = temoignages
        .map((temoignage) => {
            // Générer les étoiles
            let etoiles = "";
            for (let i = 0; i < temoignage.review; i++) {
                etoiles += '<i class="fa-solid fa-star"></i>';
            }

            return `
        <div class="p-6 bg-white border-0 shadow-md rounded-lg">
            <div class="flex gap-1 mb-4 fill-yellow-400 text-yellow-400">
                ${etoiles}
            </div>
            <p class="text-gray-700 mb-6">${temoignage.commentaire}</p>
            <div class="border-t pt-4">
                <p class="text-gray-900">${temoignage.nom}</p>
                <p class="text-gray-900">${temoignage.profession}</p>
                <p class="text-sm text-gray-500">${temoignage.date}</p>
            </div>
        </div>`;
        })
        .join("");
}
