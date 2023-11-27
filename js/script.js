let lista = ["Red Dead Redemption 2", "The Las of Us Parte II", "God of War: Ragnarok", "The Witcher 3: WIld Hunt", "Grand Theft Auto 5", "Final Fantasy VII Remake"];

let = videogame = document.getElementById('videogame')
let i=0;
while(i<lista.length){
    const li = document.createElement("li");
    li.innerText = lista[i];
    videogame.appendChild(li);
    i++
}