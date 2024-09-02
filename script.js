const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1 - Na atualidade o uso do celular pode ser considerado um problema ecológico e sustentável motivado pelo  elevado consumo  e descarte irregular de aparelhos tecnológicos. Um dos motivos para este elevado número de descarte se refere a  velocidade com que as versões são lançadas no mercado e alterações ocorrem nos hardwares e processadores.  Como a IA pode contribuir para o destino correto dos descartes dos eletrônicos?",
        alternativas: [
            {
                texto: "A - Oferecer mais recursos para o direcionamento dos descartes e otimização das rotas de coleta de resíduos eletrônicos.",
                afirmacao: "Afirmação da resposta A."
            },
            {
                texto: "B - Prever tendências de descarte com base em dados de vendas de novos modelos e padrões de consumo.",
                afirmacao: "Afirmação da resposta B."
            }
        ]
    },
    {
        enunciado: "2 - Como o comportamento consumista influencia o desenvolvimento e a aplicação de tecnologia de Inteligência Artificial, considerando os impactos ecológicos e a sustentabilidade?",
        alternativas: [
            {
                texto: "A - O consumismo pode impulsionar a demanda por produtos tecnológicos, reduzindo o ciclo de vida desses dispositivos e gerando mais resíduos eletrônicos, afetando a sustentabilidade ambiental.",
                afirmacao: "Afirmação da resposta A."
            },
            {
                texto: "B - O consumismo também pode influenciar o desenvolvimento de tecnologias de IA voltadas para  o consumo, aumentando a coleta e o processamento de recursos naturais, o que pode impactar negativamente a pegada de carbono e a sustentabilidade energética.",
                afirmacao: "Afirmação da resposta B."
            }
        ]
    },
    {
        enunciado: "3 - A IA pode usar grandes volumes de dados para analisar e prever padrões de consumo, ajudando a promover práticas mais sustentáveis. Isso é importante porque o consumismo excessivo tem um impacto negativo no meio ambiente. Ao usar a IA, podemos identificar formas de reduzir o desperdício e otimizar o uso de recursos, contribuindo para a ecologia e sustentabilidade.",
        alternativas: [
            {
                texto: "A - A IA pode auxiliar a todos na  melhora decisão ou escolhas de respostas quanto ao desperdício e exploração de recursos naturais.",
                afirmacao: "Afirmação da resposta A."
            },
            {
                texto: "B - A IA pode oferecer melhores as opções sobre os produtos mais sustentáveis ou mesmo indicando ou influenciando na escolha e compra de produtos para o consumo ecologicamente correto.",
                afirmacao: "Afirmação da resposta B."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você sabe qual é o futuro da IA?";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();