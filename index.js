import {navbar} from "./components/navbar.js"
document.querySelector("header").innerHTML = navbar();

let arrayOfImages = [];

arrayOfImages.push('../moonlit-hour-2126\images\Screenshot (61).png');
arrayOfImages.push('moonlit-hour-2126\images\Screenshot (61).png');
arrayOfImages.push('moonlit-hour-2126\images\Screenshot (63).png');

let id;
    let i=0
    function slideshow(){
        let container = document.querySelector("#slide")
      id =  setInterval(function(){
            if(i==arrayOfImages.length){
                i=0
            }
           let img = document.createElement("img")
           img.setAttribute("src",arrayOfImages[i])
           container.innerHTML=""
           container.append(img)
           i++
        },1000)
    }
    slideshow()

