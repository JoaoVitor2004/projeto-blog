const form = document.querySelectorAll(".form-delete")

form.forEach((item) => {

    item.addEventListener("submit", (ev) => {

        ev.preventDefault()

        const question = confirm("Term certeza que deseja excluir?")

        if (question) {
            item.submit()
        } else {
            alert("Você desejou continuar")
        }
    })
})