'use server'
function Logar() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (!email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if(email == "admin" && senha == "admin") {
        alert("Logado com sucesso!");
        location.href = "/";
        return;
    }else {
        alert("Email ou senha incorretos!");
        return;
    }
  
  
    
}

  export default Logar;