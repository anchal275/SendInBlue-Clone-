



let userfromLs = JSON.parse(localStorage.getItem("userData")) 
console.log(userfromLs)

document.querySelector("form").addEventListener("submit",login)

function login(event){
  console.log("inside")
    event.preventDefault()
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    if(email=="" && password==""){
        alert("Please fill All the Form Details")
    }else{
        if(checkEmail(email)==true && checkPassword(password)==true ){
            alert("Login Successfully")
            window.location.href="./index.html" 
            let username = userfromLs[userfromLs.length-1].name
            console.log(username)
            localStorage.setItem("login",username)

        }else if(checkEmail(email)==false){
            alert("Email Id Not Registred")
        }else{
            alert("Plese Enter Valid Password")
        }
    }
}

let checkEmail = (email)=>{
    let filter=userfromLs.filter(function(elem){
        return email==elem.email
        })
        console.log(filter)
        if(filter.length>0){
          return true
  
        }else{
          return false
        }
}


let checkPassword = (password)=>{
    let filter=userfromLs.filter(function(elem){
        return password==elem.password
        })
        console.log(filter)
        if(filter.length>0){
          return true
  
        }else{
          return false
        }
}
