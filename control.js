 document.addEventListener("DOMContentLoaded", () => {
            document.getElementById("form").addEventListener("submit", validarForm);
        });

function validarForm(e) {
    e.preventDefault();
    let user = document.getElementById("user").value;
    let pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        alert("Hay campos vacios");
    } else if (!user.includes("@")) {
        alert("Falta el arroba en el usuario");
    } else {
        this.submit();
        alert("Enviado con exito")
    }
}