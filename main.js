let url = "https://coffee.alexflipnote.dev/random.json";
fetch(url, { method: "GET" })
    .then(res => res.json())
    //.then(data=> consle.log(image)) for test
    .then(data => {
        console.log(data);
        let image  = document.querySelector(".image")
        image.src = data.file
    })
    .catch(error => console)