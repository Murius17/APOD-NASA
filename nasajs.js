let inputDate = document.querySelector("#date");
let pesquisa = document.querySelector("#botao");

let request = new XMLHttpRequest();

inputDate.addEventListener("submit", function (event) {
   
    event.preventDefault();

    request.open("GET", `https://api.nasa.gov/planetary/apod?api_key=HxfsjMvsjh9PJ6dPJ40ikaqugjUIAJgQbjK8QVN3&date=${this.elements.date.value}`);

    request.send(); 
})
           request.open("GET","https://api.nasa.gov/planetary/apod?api_key=HxfsjMvsjh9PJ6dPJ40ikaqugjUIAJgQbjK8QVN3");
        
request.onload = function(){
            if (request.status == 200) {
                let apodObj = JSON.parse(request.responseText);
                let imgAPOD = document.querySelector("#image");
                let textoAPOD = document.querySelector("#textoImg");
                let autorAPOD = document.querySelector("#autor");
                let dataAPOD = document.querySelector("#data");
                let nomeImg = document.querySelector("#nomeImg");

                textoAPOD.textContent = apodObj.explanation;
                dataAPOD.textContent = apodObj.date;
                autorAPOD.textContent = apodObj.copyright;
                nomeImg.textContent = apodObj.title;

                textoAPOD.classList.add("textoImg");
                dataAPOD.classList.add("data");
                autorAPOD.classList.add("autor");
                nomeImg.classList.add("nomeImg");
           
                if (imgAPOD.media_type = "image") {
                imgAPOD.src = apodObj.url;
                videoAPOD.classList.add("someclasse");               
            } else {
                videoAPOD.src = apodObj.url;
                imgAPOD.classList.add("someclasse");
            }
         
            videoAPOD.classList.add("video");
            imgAPOD.classList.add("image");
        
      
    } else {
          window.location.href = '404.html'
    }
}

         request.send();  