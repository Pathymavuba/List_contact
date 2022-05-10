// const mat = document.querySelector("#mat")
// mat.textContent = " Matondo"
// const list = document.querySelectorAll(".list")
// const mat = document.createElement("li")
// mat.textContent = " mat "
// const form = document.querySelector("form");
// list.appendChild(mat);
// form.addEventListener("submit",function(event){
//     event.preventDefault;
//     const inputsValues = {};
// const prenom = event.target.elements[0].value();
// const nom = event.target.elements[1].value();
// const groupe = event.target.elements[2].value();
// const bio = event.target.elements[3].value();

// })
// or const btn_creer = document.querySelector("#creer")
//btn_creer.addEventListener("click",function(event

const form = document.querySelector('form')
form.addEventListener("submit",function(event){
    const prenom = document.querySelector("#prenom").value;
    const nom = document.querySelector("#nom").value;
    const groupe = document.querySelector("#groupe").value;
    const bio = document.querySelector("#bio").value;
    if ((prenom == "") || (nom == "") || (groupe== "") || (bio== "")
    || ($('#contact').val() == "")) 
    { 
        alert("remplissez les cases vide ");  } 
})

form.addEventListener("reset",function(event){
    const prenom = document.querySelector("#prenom").value;
    const nom = document.querySelector("#nom").value;
    const groupe = document.querySelector("#groupe").value;
    const bio = document.querySelector("#bio").value;
   prenom = "";
   nom = "";
   groupe = "";
   bio = ""
   
})
//     //let testname = $('#name').val();
//     const testname = document.getElementById("#name").val();
//    //let testmail = $('#mail').val();
//    const testmail = document.querySelector("#mail").val();
//     //let testpassword = $('#password').val();
//     const testpassword= document.querySelector("#password").value();
//     let testconfirmpassword = $('#password').val();
//     let testcontact = $('#contatc').val()

//     let mail = $('#mail').val();
//     let taille = mail.length;
//     let position = (taille - 10)  ;
//     let ext = mail.substr(position,10);

//     //alert(parseInt(typeof($('#contact').val())));
        

//     if ((testname == "") || (testmail == "") || (testpassword == "") || (testconfirmpassword == "")
//     || ($('#contact').val() == "")) 
//     { 
//      alert("remplissez les cases vide "); }
//     else if ($('#name').val().length < 3 ) {
//         alert("nom pas moins de 4 cacatères")
//     }