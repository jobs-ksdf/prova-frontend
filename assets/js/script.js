const btn__inscrever = document.querySelectorAll(".btn__inscrever");

btn__inscrever.forEach(element => {
    element.addEventListener("click", () => {
        const textoAtual = element.textContent.trim().toLowerCase();

        if (textoAtual === "cancelar") {
            element.textContent = "Inscrever-se";
        } else {
            element.textContent = "Cancelar";
        }
    });
});
