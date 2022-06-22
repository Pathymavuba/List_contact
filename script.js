
let link
let image
const loadFile = function(event) {
image = document.getElementById('output');
image.src = URL.createObjectURL(event.target.files[0]);
image.style.display= "block"
link = URL.createObjectURL(event.target.files[0]);
};
const form = document.querySelector("form");
form.addEventListener("submit", function (event){
    event.preventDefault()
        let prenom = document.querySelector("#prenom").value;
        let nom = document.querySelector("#nom").value;
        let groupe = document.querySelector("#groupe").value;
        let bio = document.querySelector("#bio").value;
        if((prenom.length <= 3)|| (nom.length<= 3)){
            alert("on doit avoir plus de trois caractères")
        }
        else {
            const big_contenaire = document.querySelector("#big_contenaire")
            big_contenaire.classList.add("positionnement")
            const second_contenaire = document.createElement("div")
            second_contenaire.classList.add("positionnement_second")
           
            const div_contact = document.createElement("div")
            const div_identite = document.createElement("div")
            div_identite.classList.add("style_div_identite")
            const div_remove = document.createElement("div")
         
            const image_contact = document.createElement("img")
            image_contact.classList.add("style_image_contact")
            image_contact.src = link
            div_contact.appendChild(image_contact)
    
            const div_nomprenom = document.createElement("div")
            div_nomprenom.classList.add("style_nom_prenom")
            let prenom_contact = document.createElement("div")
            prenom_contact.textContent = prenom 
            div_nomprenom.appendChild(prenom_contact)
            let nom_contact = document.createElement("div")
            nom_contact.classList.add("style_nom_contac")
            nom_contact.textContent =  nom
            div_nomprenom.appendChild(nom_contact)
            div_identite.appendChild(div_nomprenom)
    
            let p_groupe = document.createElement("p")
            p_groupe.textContent = groupe
            div_identite.appendChild(p_groupe)
    
            let p_bio = document.createElement("p")
            p_bio.textContent = bio
            div_identite.appendChild(p_bio)
    
           
            const image_remove = document.createElement("img")
            image_remove.classList.add("style_croix_remove")
            image_remove.src = "croix.png"
            div_remove.appendChild(image_remove)
    
            // Attachement au premier parent
            second_contenaire.appendChild(div_contact)
            second_contenaire.appendChild(div_identite)
            second_contenaire.appendChild(div_remove)
            // Attachement au dom
            big_contenaire.appendChild(second_contenaire)
            //delete contatc
            image_remove.addEventListener("click",()=>{
                second_contenaire.remove()
            }) 
            // recuperation des éléments à modifier
            let btn_creer = document.querySelector("#creer")
            div_identite.addEventListener("click",()=>{
             btn_creer.value = "modifier"
             let enfants = second_contenaire.childNodes
             console.log(enfants)
             let enfantsidentite = div_identite.childNodes
             console.log(enfantsidentite)
             groupe =  div_identite.childNodes[1]
             document.querySelector("#groupe").value = groupe.textContent;
             bio=  div_identite.childNodes[2]
             document.querySelector("#bio").value = bio.textContent;
             let enfantsnom_prenom = div_nomprenom.childNodes
             console.log(enfantsnom_prenom)
             prenom = div_nomprenom.childNodes[0]
             document.querySelector("#prenom").value = prenom.textContent 
             nom = div_nomprenom.childNodes[1]
             document.querySelector("#nom").value = nom.textContent 
             let enfantdiv_contact = div_contact.childNodes
             console.log(enfantdiv_contact)
             image = div_contact.childNodes[0]
             document.getElementById('output').src = image.src 
             document.getElementById('output').style.display = "block"
    
            // modification des éléments 
            btn_creer.addEventListener("click",()=>{
                if(btn_creer.value == "modifier"){
                    prenom = document.querySelector("#prenom").value;
                    nom = document.querySelector("#nom").value;
                    groupe = document.querySelector("#groupe").value;
                    bio = document.querySelector("#bio").value;
                    div_nomprenom.childNodes[0].textContent = prenom
                    div_nomprenom.childNodes[1].textContent = nom
                    div_identite.childNodes[1].textContent= groupe
                    div_identite.childNodes[2].textContent= bio
                    div_contact.childNodes[0].src = image.src
                    second_contenaire.style.display = "none"
                    
                }
            })
    
            })  
        }
       
        
     })  
     // reinitialisation des inputs
     const btn_reinit = document.querySelector("#supprimer")
     btn_reinit.addEventListener("click",function(event){
           prenom = document.querySelector("#prenom").value;
          nom = document.querySelector("#nom").value;
          groupe = document.querySelector("#groupe").value;
         bio = document.querySelector("#bio").value;  
        prenom = "";
        nom = "";
        groupe = "";
        bio = ""
        document.getElementById('output').src = ""
        document.getElementById('output').style.display = "none"

        
     })
       

