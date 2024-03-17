function Logar() {
    let nome = document.querySelector("#nome").value
    let email = document.querySelector("#email").value
    let phone = document.querySelector("#phone").value

    if (nome === "Arthur" && email === "arthur.floro2006@gmail.com" && phone === "999082105") {
        
        alert("Inscrição Concluída")

    } else {
        alert("Dados inválidos")
    }
}