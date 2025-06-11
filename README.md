# 🧠 Let's Practice Our English! – Jogo Interativo de Perguntas em Inglês

## 📌 Descrição

**Let's Practice Our English!** é um jogo educativo interativo, ideal para quem quer treinar o inglês de forma leve e divertida. O jogador responde perguntas simples sobre seu cotidiano, preferências e hábitos, utilizando vocabulário básico e frases comuns em inglês.

---

## 🎯 Objetivo

Praticar a escrita e a compreensão de perguntas em inglês, ampliando o vocabulário e ganhando confiança na construção de respostas.

---

## 🕹️ Como Funciona

- As perguntas são exibidas uma por uma na tela.
- O jogador digita suas respostas em **inglês** no campo indicado.
- O jogo valida automaticamente as respostas com base nas opções aceitas (quando aplicável).
- Ao final, o jogador recebe uma mensagem de **parabéns** pela conclusão!

---

## 👤 Indicado Para

Estudantes iniciantes da língua inglesa, jovens do ensino fundamental/médio, ou qualquer pessoa que deseje praticar inglês de forma prática, lúdica e interativa.

---

## 🛠️ Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

---

## 📸 Preview

![preview](https://i.postimg.cc/fTdg3Gpz/imagem-de-fundo.png)

---

## 📂 Como Usar

1. Clone o repositório ou baixe os arquivos.
2. Certifique-se de que os seguintes arquivos estejam na mesma pasta:
   - `index.html`
   - `style.css`
   - `script.js`
3. Abra o `index.html` em seu navegador para jogar!

---
### ▶️ Jogar Online (via CodePen)

Você pode acessar e jogar diretamente pelo navegador, sem precisar baixar nada:

🔗 **[Clique aqui para jogar no CodePen](https://codepen.io/ryan-bb/pen/azbxajG)**  

---

### 🧩 Adicionar Mais Perguntas

Quer personalizar o jogo e adicionar novas perguntas?  
No CodePen, vá até a aba **JavaScript**, e localize o array chamado `perguntas`.  
Basta copiar e colar a estrutura abaixo para adicionar uma nova pergunta:


**tipo: "texto"** - O jogador digita livremente a resposta Não há certo ou errado.
 {
  pergunta: "Qual é o seu nome?",
  tipo: "texto"
}

---

**tipo: "lista"** - O jogador escolhe 'apenas uma' opção entre várias.
{
  pergunta: "Qual sua cor favorita?",
  tipo: "lista",
  opcoes: ["Azul", "Verde", "Vermelho"]
}

---

**tipo: "listaMultipla"** - O jogador pode escolher 'uma ou mais' resposta ao mesmo tempo.
{
  pergunta: "Quais idiomas você fala?",
  tipo: "listaMultipla",
  opcoes: ["Inglês", "Espanhol", "Francês", "Português"]
}

---

## 📃 Licença

Desenvolvido por **RyanBarrosB** – uso livre para fins educacionais e não comerciais.
