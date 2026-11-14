// 1. BANCO DE DADOS DOS CARDS EXPLICATIVOS
const conteudosTemas = {
    "o-que-e": {
        titulo: "O que é a Consciência Negra?",
        imagem: "./conciencia_negra.png",
        texto: `
            <p>A <strong>Consciência Negra</strong> é um conceito político, histórico e cultural que ganhou força no Brasil na década de 1970, especialmente com a criação do <strong>Movimento Negro Unificado (MNU)</strong> em 1978, durante a ditadura militar. O termo simboliza a luta contra o racismo, o resgate da ancestralidade africana, a valorização da estética e da cultura afro-brasileira e a reflexão crítica sobre as desigualdades sociais.</p>
            <p>Celebrada em <strong>20 de novembro</strong>, a data faz referência ao assassinato de <strong>Zumbi dos Palmares</strong>, em 1695, líder do maior quilombo das Américas e símbolo máximo de resistência contra o sistema escravocrata. Em 2023, a Lei nº 14.759 instituiu oficialmente o dia 20 de novembro como feriado nacional em todo o Brasil.</p>
            <p><strong>A Crítica ao Mito da Democracia Racial:</strong> Durante décadas, difundiu-se a ideia de que o Brasil seria um "paraíso racial" harmônico por conta da miscigenação. Sociólogos e ativistas negros denunciaram que esse mito servia para mascarar o <em>racismo estrutural e velado</em> presente no acesso à educação, no mercado de trabalho, na representação midiática e na violência institucional.</p>
            <p><strong>Repertório Educacional e Ético:</strong> A luta do movimento negro resultou em conquistas legais fundamentais, como a <strong>Lei 10.639/2003</strong> (alterada pela Lei 11.645/2008), que tornou obrigatório o ensino da história e cultura afro-brasileira e indígena nas escolas, combatendo o apagamento histórico.</p>
        `,
        links: [
            { nome: "Lei 10.639/03 — Ensino de História e Cultura Afro-Brasileira (Planalto)", url: "https://planalto.gov.br" },
            { nome: "Lei 14.759/23 — Feriado Nacional da Consciência Negra (Planalto)", url: "https://planalto.gov.br" },
            { nome: "Movimento Negro Unificado (MNU) — Wikipédia", url: "https://wikipedia.org" },
            { nome: "Mito da Democracia Racial — Wikipédia", url: "https://wikipedia.org" },
            { nome: "Fundação Cultural Palmares (Gov.br)", url: "https://www.gov.br" }
        ]
    },

    "linha-cronologica": {
        titulo: "Linha Cronológica Histórica das Estruturas de Opressão",
        imagem: "./cronologica.png",
        texto: `
            <p>Para compreender o racismo contemporâneo, é fundamental analisar como as estruturas de dominação foram construídas e transformadas ao longo da história:</p>
            <ul>
                <li><strong>Servidão na Antiguidade:</strong> Na Grécia e em Roma, a escravidão existia, mas era vinculada a prisioneiros de guerra ou dívidas, não havendo associação entre escravidão e cor da pele.</li>
                <li><strong>Colonialismo Mercantilista e Tráfico Transatlântico (Séc. XV – XIX):</strong> Com a expansão marítima europeia e a colonização das Américas, cerca de 12,5 milhões de africanos foram sequestrados e traficados. O Brasil foi o país que mais recebeu africanos escravizados (cerca de 4,8 milhões) e o último das Américas a abolir formalmente a escravidão, em 1888, sem qualquer política de reparação ou inclusão.</li>
                <li><strong>Darwinismo Social e Racismo Científico (Séc. XIX):</strong> Pseudociência que distorceu a teoria da evolução de Charles Darwin para afirmar que existiriam "raças superiores e inferiores". Essa falácia ética e científica foi usada para legitimar o imperialismo e a marginalização de negros e indígenas.</li>
                <li><strong>Neocolonialismo e Conferência de Berlim (1884–1885):</strong> As potências europeias dividiram o continente africano entre si, explorando riquezas naturais e impondo fronteiras artificiais que desrespeitaram etnias locais, gerando conflitos duradouros.</li>
                <li><strong>Regime do Apartheid na África do Sul (1948–1994):</strong> Sistema institucionalizado de segregação racial imposto pela minoria branca (Partido Nacional). A maioria negra foi privada do direito ao voto, confinada em áreas periféricas (bantustões) e proibida de frequentar os mesmos espaços que os brancos. O fim do regime teve papel decisivo de <strong>Nelson Mandela</strong> — que passou 27 anos preso, tornou-se símbolo mundial da resistência e, após sua libertação em 1990, liderou a transição democrática, sendo eleito o primeiro presidente negro da África do Sul em 1994.</li>
                <li><strong>Racismo Estrutural e Institucional (Contemporaneidade):</strong> Mesmo após a revogação das leis segregacionistas, o racismo permanece enraizado nas estruturas econômicas, jurídicas e políticas, refletindo-se na desigualdade salarial, no encarceramento em massa e na sub-representação em espaços de poder.</li>
            </ul>
        `,
        links: [
            { nome: "Apartheid na África do Sul — Wikipédia", url: "https://wikipedia.org" },
            { nome: "Nelson Mandela e o fim do Apartheid — Wikipédia", url: "https://wikipedia.org" },
            { nome: "Conferência de Berlim e Neocolonialismo — Wikipédia", url: "https://wikipedia.org" },
            { nome: "Darwinismo Social — Wikipédia", url: "https://wikipedia.org" },
            { nome: "Racismo Estrutural — Wikipédia", url: "https://wikipedia.org" }
        ]
    },

    "figuras-brasil": {
        titulo: "Principais Figuras da Consciência Negra no Brasil",
        imagem: "./figuras.png",
        texto: `
            <p>A história do Brasil foi moldada pela resistência, intelectualidade e produção cultural de personalidades negras que desafiaram o sistema em diferentes épocas:</p>
            <ul>
                <li><strong>Zumbi dos Palmares (1655–1695):</strong> Líder guerreiro do Quilombo dos Palmares (na Serra da Barriga, atual Alagoas), comandou a resistência contra expedições coloniais portuguesas e holandesas por décadas.</li>
                <li><strong>Dandara dos Palmares (?–1694):</strong> Guerreira, estrategista militar e líder quilombola. Lutou na linha de frente pela libertação de pessoas escravizadas e opôs-se ao acordo de paz com a Coroa Portuguesa que mantinha outros negros em cativeiro.</li>
                <li><strong>Tereza de Benguela (Séc. XVIII):</strong> Líder do Quilombo do Quariterê (no atual Mato Grosso). Após a morte de seu companheiro José Piolho, comandou a resistência contra a Coroa por duas décadas, estruturando um sistema de parlamento, defesa e produção agrícola.</li>
                <li><strong>Luiz Gama (1830–1882):</strong> Nascido livre, foi vendido ilegalmente como escravo pelo próprio pai aos 10 anos. Alfabetizou-se, tornou-se jornalista, poeta e advogado autodidata, conquistando na Justiça a liberdade de mais de 500 pessoas escravizadas.</li>
                <li><strong>Machado de Assis (1839–1908):</strong> Maior nome da literatura brasileira e fundador da Academia Brasileira de Letras. Neto de escravizados alforriados, sofreu um histórico processo de "embranquecimento" em retratos oficiais.</li>
                <li><strong>Antonieta de Barros (1901–1952):</strong> Jornalista, professora e política catarinense. Foi a primeira mulher negra eleita deputada no Brasil (1934) e criadora do Dia do Professor no país.</li>
                <li><strong>Carolina Maria de Jesus (1914–1977):</strong> Escritora e catadora de papel que registrou em diários o cotidiano da fome e da desigualdade na favela do Canindé (SP). Seu livro <em>Quarto de Despejo</em> (1960) tornou-se um clássico mundial.</li>
                <li><strong>Abdias do Nascimento (1914–2011):</strong> Ativista, dramaturgo, artista plástico e senador. Fundou o Teatro Experimental do Negro (TEN) em 1944, formando atores negros e combatendo o racismo nas artes e na política.</li>
                <li><strong>Milton Santos (1926–2001):</strong> Um dos maiores geógrafos do mundo, vencedor do Prêmio Vautrin Lud (considerado o "Nobel" da Geografia). Analisou criticamente a globalização perversa, a urbanização e a cidadania no Brasil.</li>
                <li><strong>Lélia Gonzalez (1935–1994):</strong> Filósofa, antropóloga e professora. Foi pioneira nos estudos sobre interseccionalidade no Brasil, cunhando o conceito de <em>Amefricanidade</em> e denunciando o sexismo e o racismo contra a mulher negra.</li>
                <li><strong>Conceição Evaristo (1946–):</strong> Escritora, poetisa e romancista, autora de <em>Ponciá Vicêncio</em> e <em>Olhos D'Água</em>. Criou o conceito de <em>Escrevivência</em>, onde a escrita nasce da experiência coletiva e da memória do povo negro.</li>
                <li><strong>Djamila Ribeiro (1980–):</strong> Filósofa e escritora contemporânea, autora de <em>Lugar de Fala</em> e <em>Pequeno Manual Antirracista</em>, obras fundamentais para democratizar o debate antirracista nas escolas e empresas.</li>
                <li><strong>Marielle Franco (1979–2018):</strong> Socióloga, feminista e vereadora no Rio de Janeiro, destacou-se na defesa dos direitos humanos, das mulheres negras e dos moradores de favelas, tornando-se símbolo global de luta por justiça social.</li>
            </ul>
        `,
        links: [
            { nome: "Luiz Gama — Biografia e Obra (Wikipédia)", url: "https://wikipedia.org" },
            { nome: "Antonieta de Barros — Wikipédia", url: "https://wikipedia.org" },
            { nome: "Carolina Maria de Jesus — Quarto de Despejo (Wikipédia)", url: "https://wikipedia.org" },
            { nome: "Abdias do Nascimento e o TEN (Wikipédia)", url: "https://wikipedia.org" },
            { nome: "Lélia Gonzalez — Amefricanidade (Wikipédia)", url: "https://wikipedia.org" },
            { nome: "Conceição Evaristo — Escrevivência (Wikipédia)", url: "https://wikipedia.org" },
            { nome: "Djamila Ribeiro — Lugar de Fala (Wikipédia)", url: "https://wikipedia.org" }
        ]
    },

    "filosofos": {
        titulo: "Raça segundo 20 Filósofos e Pensadores",
        imagem: "./pensadores.png",
        texto: `
            <p>O debate filosófico e sociológico sobre raça envolve tanto pensadores negros que denunciaram o colonialismo e criaram ferramentas de emancipação quanto revisões críticas de autores europeus:</p>
            <ol>
                <li><strong>Frantz Fanon (1925–1961):</strong> Psiquiatra e filósofo martinicano. Em <em>Pele Negra, Máscaras Brancas</em> (1952) e <em>Os Condenados da Terra</em> (1961), analisou como o colonialismo adoece psicologicamente o colonizado e impõe padrões culturais brancos.</li>
                <li><strong>Achille Mbembe (1957–):</strong> Filósofo camaronês, autor de <em>Crítica da Razão Negra</em> e criador do conceito de <em>Necropolítica</em>, que explica o poder do Estado de ditar quem pode viver e quem deve morrer, frequentemente direcionado a populações racializadas.</li>
                <li><strong>Angela Davis (1944–):</strong> Filósofa norte-americana, autora de <em>Mulheres, Raça e Classe</em> (1981). Analisa como as opressões de gênero, raça e capitalismo operam juntas e critica o complexo industrial-prisional.</li>
                <li><strong>Sueli Carneiro (1950–):</strong> Filósofa brasileira, autora de <em>Dispositivo de Racialidade</em>. Denuncia o <em>epistemicídio</em> — o apagamento sistemático da produção intelectual e dos saberes dos povos negros.</li>
                <li><strong>bell hooks (1952–2021):</strong> Teórica feminista e educadora, autora de <em>Ensinando a Transgredir</em> e <em>Olhares Negros</em>. Defendeu a educação como prática da liberdade e criticou o feminismo que ignorava mulheres negras e trabalhadoras.</li>
                <li><strong>W.E.B. Du Bois (1868–1963):</strong> Sociólogo e filósofo afro-americano, autor de <em>As Almas da Gente Negra</em> (1903). Criou o conceito de <em>Dupla Consciência</em>: a sensação de o negro ter de enxergar a si mesmo pelos olhos de uma sociedade racista.</li>
                <li><strong>Aimé Césaire (1913–2008):</strong> Poeta e pensador martinicano, autor de <em>Discurso sobre o Colonialismo</em> (1950). Foi um dos fundadores do movimento da <em>Negritude</em>, afirmando o orgulho da identidade africana contra a assimilação europeia.</li>
                <li><strong>Léopold Sédar Senghor (1906–2001):</strong> Filósofo, poeta e primeiro presidente do Senegal independente. Teorizou a <em>Negritude</em> como o conjunto dos valores culturais, éticos e estéticos do mundo negro.</li>
                <li><strong>Kwame Anthony Appiah (1954–):</strong> Filósofo ganês-britânico, autor de <em>Na Casa de Meu Pai</em>. Demonstra que a raça não possui validade biológica, sendo uma construção social e histórica, e defende um cosmopolitismo ético.</li>
                <li><strong>Stuart Hall (1932–2014):</strong> Teórico cultural jamaicano-britânico, autor de <em>A Identidade Cultural na Pós-Modernidade</em>. Definiu a raça como um "significante flutuante", construído pela linguagem, cultura e relações de poder.</li>
                <li><strong>Paul Gilroy (1956–):</strong> Sociólogo britânico, autor de <em>O Atlântico Negro</em> (1993). Mostra como o tráfico transatlântico criou uma cultura híbrida e moderna que conecta África, Américas e Europa.</li>
                <li><strong>Patricia Hill Collins (1948–):</strong> Socióloga norte-americana, autora de <em>Pensamento Feminista Negro</em> (1990). Sistematizou a teoria da interseccionalidade e a "matriz de dominação".</li>
                <li><strong>Audre Lorde (1934–1992):</strong> Escritora, poeta e filósofa caribenha-americana, autora de <em>Irmã Outsider</em>. Cunhou a célebre frase: <em>"As ferramentas do senhor nunca vão derrubar a casa-grande"</em>, defendendo a união na diferença.</li>
                <li><strong>Molefi Kete Asante (1942–):</strong> Filósofo afro-americano, criador da teoria da <em>Afrocentricidade</em>, que propõe colocar a África e os africanos no centro de sua própria narrativa histórica, rompendo com o eurocentrismo.</li>
                <li><strong>Cheikh Anta Diop (1923–1986):</strong> Historiador, físico e antropólogo senegalês, autor de <em>Nações Negras e Cultura</em>. Provou cientificamente a origem negro-africana da civilização do Egito Antigo, combatendo a falsificação histórica europeia.</li>
                <li><strong>Cida Bento (1953–):</strong> Psicóloga brasileira, autora de <em>O Pacto da Branquitude</em> (2022). Analisa os acordos silenciosos entre pessoas brancas para manter privilégios institucionais e econômicos.</li>
                <li><strong>Kabengele Munanga (1940–):</strong> Antropólogo congolês-brasileiro, autor de <em>Rediscutindo a Mestiçagem no Brasil</em>. Estuda as particularidades do racismo brasileiro e a importância das políticas de ações afirmativas (cotas).</li>
                <li><strong>Silvio Almeida (1976–):</strong> Filósofo e jurista brasileiro, autor de <em>Racismo Estrutural</em> (2018). Sistematizou as três concepções de racismo (individualista, institucional e estrutural), mostrando que o racismo é a regra da estrutura social, não uma exceção.</li>
                <li><strong>Immanuel Kant (1724–1804 — Revisão Crítica):</strong> Filósofo iluminista alemão. Embora tenha defendido a dignidade humana universal em sua ética, escreveu textos antropológicos hierarquizando raças humanas, sendo hoje estudado criticamente pela filosofia decolonial.</li>
                <li><strong>Jean-Paul Sartre (1905–1980):</strong> Filósofo existencialista francês. Apoiou as lutas de independência na África e escreveu o ensaio <em>Orfeu Negro</em> (1948), definindo o movimento da Negritude como um "racismo antirracista" necessário para superar a opressão colonial.</li>
            </ol>
        `,
        links: [
            { nome: "Frantz Fanon — Pele Negra, Máscaras Brancas (Wikipédia)", url: "https://wikipedia.org" },
            { nome: "Achille Mbembe — Necropolítica (Wikipédia)", url: "https://wikipedia.org" },
            { nome: "Angela Davis — Mulheres, Raça e Classe (Wikipédia)", url: "https://wikipedia.org" },
            { nome: "W.E.B. Du Bois — As Almas da Gente Negra (Wikipédia)", url: "https://wikipedia.org" },
            { nome: "Aimé Césaire e o Movimento da Negritude (Wikipédia)", url: "https://wikipedia.org" },
            { nome: "Sueli Carneiro — Wikipédia", url: "https://wikipedia.org" },
            { nome: "Silvio Almeida — Racismo Estrutural (Wikipédia)", url: "https://wikipedia.org" }
        ]
    },

    "movimento-mundo": {
        titulo: "O Movimento Negro no Mundo",
        imagem: "blackLivesMatter.png",
        texto: `<p>Acompanha a articulação global da resistência, cobrindo a Revolução Haitiana, o Pan-Africanismo de Marcus Garvey e W.E.B. Du Bois, os Direitos Civis nos EUA (Martin Luther King Jr., Malcolm X, Rosa Parks), o Partido dos Panteras Negras e a luta anti-apartheid na África do Sul com Nelson Mandela e Steve Biko [https://wikipedia.org].</p>`,
        links: [
            { nome: "Malcolm X — Wikipédia", url: "https://wikipedia.org" },
            { nome: "Steve Biko — Wikipédia", url: "https://wikipedia.org" },
            { nome: "Movimento dos Direitos Civis nos EUA — Wikipédia", url: "https://wikipedia.org" },
            { nome: "Revolução Haitiana — Wikipédia", url: "wikipedia.org" },
            { nome: "Pan-Africanismo — Wikipédia", url: "wikipedia.org" },
            { nome: "Malcolm X — Biografia e Discursos (Wikipédia)", url: "wikipedia.org" },
            { nome: "Martin Luther King Jr. — Discurso I Have a Dream (Wikipédia)", url: "wikipedia.org." },
            { nome: "Partido dos Panteras Negras — Wikipédia", url: "wikipedia.org" },
            { nome: "Steve Biko e a Consciência Negra na África do Sul (Wikipédia)", url: "wikipedia.org" }
]
}
};

// 2. PERGUNTAS DO QUIZ (5 perguntas = 2 pontos cada -> Nota de 0 a 10)
const perguntasQuiz = [
    {
        pergunta: "1. Por que o dia 20 de novembro foi escolhido como o Dia da Consciência Negra no Brasil?",
        opcoes: [
            "Data da assinatura da Lei Áurea",
            "Data atribuída à morte de Zumbi dos Palmares",
            "Data de criação do Movimento Negro Unificado"
        ],
        correta: 1
    },
    {
        pergunta: "2. O que foi o 'Darwinismo Social' no século XIX?",
        opcoes: [
            "Uma teoria biológica comprovada sobre evolução humana",
            "Uma pseudociência usada para justificar o imperialismo e o racismo",
            "Um movimento literário abolicionista"
        ],
        correta: 1
    },
    {
        pergunta: "3. Quem foi o líder sul-africano fundador do Movimento da Consciência Negra nos anos 1960?",
        opcoes: [
            "Steve Biko",
            "Malcolm X",
            "Abdias do Nascimento"
        ],
        correta: 0
    },
    {
        pergunta: "4. O que define o conceito de 'Racismo Estrutural'?",
        opcoes: [
            "Apenas ofensas verbais isoladas entre indivíduos",
            "A naturalização de desigualdades raciais nas instituições, economia e política",
            "Uma lei que proíbe manifestações culturais"
        ],
        correta: 1
    },
    {
        pergunta: "5. Qual lei tornou obrigatório o ensino de História e Cultura Afro-Brasileira nas escolas?",
        opcoes: [
            "Lei Eusébio de Queirós",
            "Lei Afonso Arinos",
            "Lei 10.639/2003"
        ],
        correta: 2
    }
];

// 3. ELEMENTOS DA TELA
const modalOverlay = document.getElementById("modal-overlay");
const modalConteudo = document.getElementById("modal-conteudo");
const btnFecharModal = document.getElementById("btn-fechar-modal");
const statusGlobalText = document.getElementById("status-global");

// Atualiza a média global na tela inicial ao carregar
atualizarTextoMediaGlobal();

// 4. EVENTOS PARA ABRIR OS CARDS EXPLICATIVOS
document.querySelectorAll(".btn-tema").forEach(botao => {
    botao.addEventListener("click", () => {
        const chave = botao.getAttribute("data-tema");
        const dados = conteudosTemas[chave];

        if (dados) {
            let htmlImagem = dados.imagem ? `<img src="${dados.imagem}" alt="${dados.titulo}" class="modal-img">` : "";
            let htmlLinks = "";

            if (dados.links && dados.links.length > 0) {
                htmlLinks = `<h4 style="margin-top: 15px;">Saiba mais / Referências:</h4><ul class="lista-links">` +
                    dados.links.map(link => `<li><a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.nome} ↗</a></li>`).join("") +
                    `</ul>`;
            }

            modalConteudo.innerHTML = `
                <h2>${dados.titulo}</h2>
                ${htmlImagem}
                <div class="texto-modal" style="line-height: 1.6; margin-top: 10px;">${dados.texto}</div>
                ${htmlLinks}
            `;
            modalOverlay.classList.remove("escondido");
        }
    });
});

// 5. EVENTO PARA ABRIR O FORMULÁRIO DO QUIZ
document.getElementById("btn-abrir-quiz").addEventListener("click", () => {
    let htmlQuiz = `<h2>Quiz: Teste seus Conhecimentos</h2><p style="margin-bottom: 15px;">Responda às perguntas abaixo para gerar sua nota de 0 a 10.</p><form id="form-quiz">`;

    perguntasQuiz.forEach((item, index) => {
        htmlQuiz += `<div class="quiz-pergunta"><p>${item.pergunta}</p>`;
        item.opcoes.forEach((opcao, i) => {
            htmlQuiz += `
                <label class="quiz-opcao">
                    <input type="radio" name="pergunta${index}" value="${i}" required> ${opcao}
                </label>
            `;
        });
        htmlQuiz += `</div>`;
    });

    htmlQuiz += `<button type="submit" class="btn-enviar-quiz">Calcular Resultado</button></form><div id="area-resultado"></div>`;

    modalConteudo.innerHTML = htmlQuiz;
    modalOverlay.classList.remove("escondido");

    document.getElementById("form-quiz").addEventListener("submit", function(e) {
        e.preventDefault();
        calcularResultadoQuiz();
    });
});

// 6. CÁLCULO DA NOTA (0 a 10) E PORCENTAGEM GLOBAL
function calcularResultadoQuiz() {
    let acertos = 0;

    perguntasQuiz.forEach((item, index) => {
        const marcada = document.querySelector(`input[name="pergunta${index}"]:checked`);
        if (marcada && parseInt(marcada.value) === item.correta) {
            acertos++;
        }
    });

    const notaAtual = (acertos / perguntasQuiz.length) * 10;
    const porcentagemAtual = (acertos / perguntasQuiz.length) * 100;

    let historicoNotas = JSON.parse(localStorage.getItem("quizConscienciaNotas")) || [];
    historicoNotas.push(notaAtual);
    localStorage.setItem("quizConscienciaNotas", JSON.stringify(historicoNotas));

    const somaGlobal = historicoNotas.reduce((acc, val) => acc + val, 0);
    const mediaGlobalNota = (somaGlobal / historicoNotas.length).toFixed(1);
    const mediaGlobalPorcentagem = ((mediaGlobalNota / 10) * 100).toFixed(0);

    let nivel = "";
    if (notaAtual <= 4) {
        nivel = "Iniciante — Vale a pena explorar os cards da página!";
    } else if (notaAtual <= 8) {
        nivel = "Intermediário — Bom domínio do tema!";
    } else {
        nivel = "Avançado — Excelente conhecimento histórico e social!";
    }

    document.getElementById("area-resultado").innerHTML = `
        <div class="resultado-box">
            <h3>Sua Nota: ${notaAtual.toFixed(1)} / 10 (${porcentagemAtual}%)</h3>
            <p style="margin: 10px 0;"><strong>Nível:</strong> ${nivel}</p>
            <hr style="margin: 15px 0; border-color: rgba(255,255,255,0.2);">
            <p><strong>Média Global de Estudo (${historicoNotas.length} tentativas):</strong> ${mediaGlobalNota} / 10 (${mediaGlobalPorcentagem}%)</p>
        </div>
    `;

    atualizarTextoMediaGlobal();
}

function atualizarTextoMediaGlobal() {
    let historicoNotas = JSON.parse(localStorage.getItem("quizConscienciaNotas")) || [];

    if (historicoNotas.length > 0 && statusGlobalText) {
        const soma = historicoNotas.reduce((acc, val) => acc + val, 0);
        const media = (soma / historicoNotas.length).toFixed(1);
        statusGlobalText.textContent = `Média global dos participantes: ${media} / 10 (${historicoNotas.length} tentativas)`;
    }
}

btnFecharModal.addEventListener("click", () => {
    modalOverlay.classList.add("escondido");
});

modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.add("escondido");
    }
});