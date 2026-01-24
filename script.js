function showSection(id) {
    sections = document.getElementsByTagName("section");
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}

function envoyer() {
    prenom = document.getElementById("prenom").value;
    nom = document.getElementById("nom").value;
    email = document.getElementById("email").value;
    age = document.getElementById("age").value;
    message = document.getElementById("message").value;
    date = document.getElementById("date_naissance").value;
    masculin = document.getElementById("masculin").checked;
    feminin = document.getElementById("feminin").checked;
    resultat = document.getElementById("resultat");

    if (!prenom || !nom || !email || !age || !message || !date || (!masculin && !feminin)) {
        resultat.innerHTML = "Veuillez remplir tous les champs";
        resultat.style.backgroundColor = "red";
        resultat.style.color = "white";
        return;
    }

    let genre = masculin ? "Masculin" : "Féminin";

    resultat.innerHTML = 
        "Message envoyé !<br>" +
        "Nom : " + prenom + " " + nom + "<br>" +
        "Email : " + email + "<br>" +
        "Âge : " + age + "<br>" +
        "Genre : " + genre + "<br>" +
        "Date de naissance : " + date + "<br>" +
        "Message : " + message;
    
    resultat.style.backgroundColor = "green";
    resultat.style.color = "white";
}
