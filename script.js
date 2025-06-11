const respostasUsuario = {};
let nome = "";

const perguntas = [
  {
    pergunta: "what's your name?",
    tipo: "texto",
    onResponder: (resposta) => {
      nome = resposta;
      respostasUsuario.nome = resposta;
    }
  },
  {
    pergunta: () => `Hello ${nome}, how are you doing?`,
    tipo: "texto"
  },
  {
    pergunta: () => ` ${nome}, tell a little about yourself`,
    tipo: "texto"
  },
  {
    pergunta: "What do you like to do on a daily basis?",
    tipo: "listaMultipla",
    opcoesAceitas: [
      "sleep",
      "to go out",
      "to read",
      "cooking",
      "to play",
      "swimming",
      "to attend",
      "nothing"
    ]
  },
  {
    pergunta: "Which season of the year do you like the most?",
    tipo: "lista",
    opcoesAceitas: ["winter", "summer", "fall", "autumn", "spring"]
  },
  {
    pergunta: "what type of gender of film or serie you like?",
    tipo: "listaMultipla",
    opcoesAceitas: [
      "action",
      "horror",
      "suspense",
      "fiction",
      "romance",
      "comedy",
      "adventure",
      "mystery",
      "police"]
  }
];

let indice = 0;

const perguntaEl = document.querySelector(".pergunta");
const progressoEl = document.querySelector(".progresso");
const inputEl = document.querySelector(".resposta-input");
const botaoResponder = document.querySelector(".btn-responder");
const fimEl = document.querySelector(".fim");
const questionarioEl = document.querySelector(".questionario");

function mostrarPergunta() {
  const atual = perguntas[indice];
  const textoPergunta =
    typeof atual.pergunta === "function" ? atual.pergunta() : atual.pergunta;
  perguntaEl.textContent = textoPergunta;
  progressoEl.textContent = `Pergunta ${indice + 1} de ${perguntas.length}`;
  inputEl.value = "";
}

botaoResponder.addEventListener("click", () => {
  const resposta = inputEl.value.trim().toLowerCase();
  const perguntaAtual = perguntas[indice];

  if (!resposta) {
    alert("Digite uma resposta para continuar.");
    return;
  }

  if (perguntaAtual.tipo === "lista") {
    if (!perguntaAtual.opcoesAceitas.includes(resposta)) {
      alert(
        `Resposta não reconhecida. Tente uma destas: ${perguntaAtual.opcoesAceitas.join(
          ", "
        )}`
      );
      return;
    }
  }

  if (perguntaAtual.tipo === "listaMultipla") {
    const respostasSeparadas = resposta
      .split(",")
      .map((item) => item.trim().toLowerCase());
    const houveAlgumaCorreta = respostasSeparadas.some((item) =>
      perguntaAtual.opcoesAceitas.includes(item)
    );

    if (!houveAlgumaCorreta) {
      alert(
        `Nenhuma das respostas foi reconhecida. Tente palavras como: ${perguntaAtual.opcoesAceitas.join(
          ", "
        )}`
      );
      return;
    }
    respostasUsuario[`pergunta${indice + 1}`] = respostasSeparadas;
  } else {
    respostasUsuario[`pergunta${indice + 1}`] = resposta;
  }

  if (perguntaAtual.onResponder) {
    perguntaAtual.onResponder(resposta);
  }

  indice++;
  if (indice < perguntas.length) {
    mostrarPergunta();
  } else {
    questionarioEl.style.display = "none";
    fimEl.style.display = "block";
    console.log("Respostas do usuário:", respostasUsuario);
  }
});

inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    botaoResponder.click();
  }
});

mostrarPergunta();
