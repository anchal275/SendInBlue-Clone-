import {navbar} from "./components/navbar.js"
document.querySelector("header").innerHTML = navbar();

import {footer} from "./components/footer.js"
document.querySelector("#footer").innerHTML = footer();

let arrayOfImages = [];

arrayOfImages.push('./images/Screenshot (61).png');
arrayOfImages.push('./images/Screenshot (62).png');
arrayOfImages.push('./images/Screenshot (63).png');

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
        },3000)
    }
    slideshow()

