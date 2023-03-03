function saveDetails(){
    let fullname=document.getElementById("fullname").value;
    let email=document.getElementById("email").value;
    let country=document.getElementById("country").value;
    let phoneno=document.getElementById("phoneno").value;
    let password=document.getElementById("password").value;
    // let checkbox=document.getElementsByName("check1").value;
    let radio=document.querySelector("input[name=gender]:checked").value;
    let checkbox=document.querySelector("input[name=check1]:checked").value;
    
  
fetch("http://localhost:3000/formhtml",{
    method:"POST",
    body:JSON.stringify({fullname,email,country,phoneno,password,checkbox,radio}),
    headers:{
        "Content-type": "application/json; charset=UTF-8"
    }
}).then((response)=>(response.json())).then((data)=>console.log(data))
}


// let redirectBtn=document.getElementById("btnSave");

// redirectBtn.addEventListener("click",myFunction())

// function myFunction(){
//     window.location.href="./table.html";
// }

