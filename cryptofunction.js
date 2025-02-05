function criptografar() {
    let texto = document.getElementById("inputTexto").value.toLowerCase().trim();
    if (!validarTexto(texto)) return;
    
    let resultado = texto.replace(/e/g, "enter")
                        .replace(/i/g, "imes")
                        .replace(/a/g, "ai")
                        .replace(/o/g, "ober")
                        .replace(/u/g, "ufat");
    
    exibirResultado(resultado);
}

function descriptografar() {
    let texto = document.getElementById("inputTexto").value.toLowerCase().trim();
    if (!validarTexto(texto)) return;
    
    let resultado = texto.replace(/ufat/g, "u")
                        .replace(/ober/g, "o")
                        .replace(/ai/g, "a")
                        .replace(/imes/g, "i")
                        .replace(/enter/g, "e");
    
    exibirResultado(resultado);
}

function copiarTexto() {
    let resultado = document.getElementById("resultado").innerText;
    if (!resultado) return;
    
    navigator.clipboard.writeText(resultado).then(() => {
        let mensagem = document.querySelector(".copied-message");
        mensagem.style.display = "block";
        document.getElementById("resultado").style.backgroundColor = "#D8DFE8";
        setTimeout(() => {
            mensagem.style.display = "none";
            document.getElementById("resultado").style.backgroundColor = "white";
        }, 2000);
    }).catch(err => {
        console.error("Erro ao copiar: ", err);
    });
}

function validarTexto(texto) {
    if (!/^[a-z ]+$/.test(texto)) {
        alert("Digite apenas letras minúsculas sem acentos ou caracteres especiais.");
        return false;
    }
    return true;
}

function exibirResultado(texto) {
    document.getElementById("resultado").innerText = texto;
}
