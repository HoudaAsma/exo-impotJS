//on lie input avec age et genre 
const age = document.getElementById('age');
const genre = document.querySelector('#genre'); // on met # car on utilise un queryselector
const bouton = document.getElementById("bouton");


// on ajoute un écouteur qui prend en compte l'action par le click
bouton.addEventListener("click" , verifierImposition);

function verifierImposition() {
    if ((age.value > 20 && genre.value == "Homme") || (age.value > 18 && genre.value == "Femme" && age.value < 35)) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "IMPOSABLE !",
            showConfirmButton: false,
            timer: 1500
        });
    }
    else {
        Swal.fire({  
            position: "top-end",
            icon: "success",
            title: "NON IMPOSABLE ! ",
            showConfirmButton: false,
            timer: 1500
        });
        }




    }



