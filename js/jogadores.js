const nomeJogador = document.querySelector("#nomeJogador");
const imagemJogador = document.querySelector("#imagemJogador");
const halland = document.querySelector("#haaland");
const cr7 = document.querySelector("#cr7");
const neymar = document.querySelector("#neymar");
const dybala = document.querySelector("#dybala");
const mbappe = document.querySelector("#mbappe");
const messi = document.querySelector("#messi");

halland.addEventListener("click", mostrarHaaland);
cr7.addEventListener("click", mostrarCR7);
neymar.addEventListener("click", mostrarNeymar);
dybala.addEventListener("click", mostrarDybala);
mbappe.addEventListener("click", mostrarMbappe);
messi.addEventListener("click", mostrarMessi);

function mostrarHaaland() {
  imagemJogador.src = "images/haaland.webp";
  nomeJogador.textContent = "Haaland";
}

function mostrarCR7() {
  imagemJogador.src = "images/cr7.jpg";
  nomeJogador.textContent = "Cristiano Ronaldo";
}

function mostrarNeymar() {
  imagemJogador.src = "images/neymar.webp";
  nomeJogador.textContent = "Neymar Jr";
}

function mostrarDybala() {
  imagemJogador.src = "images/dybala.webp";
  nomeJogador.textContent = "Dybala";
}

function mostrarMbappe() {
  imagemJogador.src = "images/mbappe.webp";
  nomeJogador.textContent = "Mbappé";
}

function mostrarMessi() {
  imagemJogador.src = "images/messi.jpg";
  nomeJogador.textContent = "Messi";
}
