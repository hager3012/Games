import { UI } from "./UI.js";
export class Details{
constructor(id) {
    $("#btnClose").click(function () { 
        $(".game").removeClass("d-none");
        $("#details").addClass("d-none");
        
    });
    this.getDataWithDetails(id)
}
getDataWithDetails(id){
    document.querySelector('.loading').classList.replace("d-none","d-flex");
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '4a1d83196cmsh1ec7e110d9d3289p147fd5jsndf5a9f40016d',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            
            fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
                .then(response => response.json())
                .then(response => {new UI().displayDetails(response)
                document.querySelector('.loading').classList.replace("d-flex","d-none")
})
                .catch(err => console.error(err));
}
}