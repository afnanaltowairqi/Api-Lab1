//lab 2
let link="https://rickandmortyapi.com/api/character/";
console.log(link);

async function fetchData(){
    let res = await fetch(link)
    let data = await res.json();
    console.log(data);

    let chara = document.querySelector(".chara")
    data.results.forEach(element => {
        let div = document.createElement("div")
        let text = document.createElement("h3")
        text.innerText=element.name

        let imag= document.createElement('img')
        imag.src=element.image

        div.append(text)
        div.append(imag)
        chara.append(div)
    });
}
fetchData()