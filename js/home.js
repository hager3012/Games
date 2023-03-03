import { Details } from "./details.js";
import { UI } from "./UI.js";
export class Home{
    constructor(){
        this.getGame('MMORPG');
        document.querySelectorAll(".menu a").forEach((ele) => {
            ele.addEventListener("click", (eventInfo) => {
                document.querySelector(".menu .active").classList.remove("active");
                eventInfo.target.classList.add("active");
                this.getGame(eventInfo.target.dataset.category);
            });
        })
    }
async getGame(category){
    document.querySelector('.loading').classList.replace("d-none","d-flex");
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '4a1d83196cmsh1ec7e110d9d3289p147fd5jsndf5a9f40016d',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            
            let response= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
            let result=await response.json();
            new UI().displayData(result)
            this.currentelement();
            document.querySelector('.loading').classList.replace("d-flex","d-none");
    }
    currentelement(){
            const card=document.querySelectorAll('.card');
            for(let i=0;i<card.length;i++){
                card[i].addEventListener(('click'),()=>{
                        const id=card[i].dataset.id;
                        this.showDetails(id);
                })
            }
    }
    showDetails(id){
        new Details(id);
        document.querySelector(".game").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }

}