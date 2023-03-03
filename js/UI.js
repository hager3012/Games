export class UI{
    constructor(params) {
        
    }
displayData(dataAPI){
    let cartona=``;
    for(let i=0;i<dataAPI.length;i++){
        cartona+=`<div class="col">
        <div data-id="${dataAPI[i].id}" class="card h-100 bg-transparent" role="button" "="">
        <div class="card-body">
            <figure class="position-relative">
                <img class="card-img-top object-fit-cover h-100" src="${dataAPI[i].thumbnail}">
            </figure>
            <figcaption>
                <div class="hstack justify-content-between">
                    <h3 class="h6 small">${dataAPI[i].title}</h3>
                    <span class="badge text-bg-primary p-2">Free</span>
                </div>
                <p class="card-text small text-center opacity-50">
                ${dataAPI[i].short_description.split(" ", 10)}
                </p>
            </figcaption>
        </div>
        <footer class="card-footer small hstack justify-content-between">
            <span class="badge badge-color">${dataAPI[i].genre}</span>
            <span class="badge badge-color">${dataAPI[i].platform}</span>
            </footer>
        </div>
        </div>`;
    }
    document.getElementById('gameData').innerHTML=cartona;
}
displayDetails(dataAPI) {
    const cartona = `
    <div class="col-md-4">
    <img src="${dataAPI.thumbnail}" class="w-100" alt="image details" />
    </div>
    <div class="col-md-8">
    <h3>Title: ${dataAPI.title}</h3>
    <p>Category: <span class="badge text-bg-info"> ${dataAPI.genre}</span> </p>
    <p>Platform: <span class="badge text-bg-info"> ${dataAPI.platform}</span> </p>
    <p>Status: <span class="badge text-bg-info"> ${dataAPI.status}</span> </p>
    <p class="small">${dataAPI.description}</p>
    <a class="btn btn-outline-warning" target="_blank" href="${dataAPI.game_url}">Show Game</a>
    </div>
    
    `;
    document.getElementById("detailsContent").innerHTML = cartona;
}
}