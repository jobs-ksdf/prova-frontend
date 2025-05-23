function criarCurso(categorias, nomeCurso, descricao, cargaHoraria) {
    // Cria o container principal
    const cursoDiv = document.createElement("div");
    cursoDiv.className = "curso";

    // Cria o container de categorias
    const categoriasDiv = document.createElement("div");
    categoriasDiv.className = "categorias";
    categorias.forEach(cat => {
        const div = document.createElement("div");
        div.textContent = cat;
        categoriasDiv.appendChild(div);
    });
    cursoDiv.appendChild(categoriasDiv);

    // Cria o container de info
    const infoDiv = document.createElement("div");
    infoDiv.className = "info";

    const nomeDiv = document.createElement("div");
    nomeDiv.className = "curso__name";
    nomeDiv.textContent = nomeCurso;
    infoDiv.appendChild(nomeDiv);

    const sobreDiv = document.createElement("div");
    sobreDiv.className = "curso__sobre";
    sobreDiv.textContent = descricao;
    infoDiv.appendChild(sobreDiv);

    const tempoDiv = document.createElement("div");
    tempoDiv.className = "tempo__curso";

    const icon = document.createElement("i");
    icon.className = "far fa-clock";
    tempoDiv.appendChild(icon);

    const labelCarga = document.createElement("div");
    labelCarga.textContent = "Carga horaria:";
    tempoDiv.appendChild(labelCarga);

    const horasDiv = document.createElement("div");
    horasDiv.className = "horas";
    horasDiv.textContent = cargaHoraria;
    tempoDiv.appendChild(horasDiv);

    infoDiv.appendChild(tempoDiv);
    cursoDiv.appendChild(infoDiv);

    // Cria os botões
    const sobreDivBtns = document.createElement("div");
    sobreDivBtns.className = "sobre";

    const btnSaibaMais = document.createElement("div");
    btnSaibaMais.className = "btn__saiba__mais";
    btnSaibaMais.textContent = "Saiba mais";
    sobreDivBtns.appendChild(btnSaibaMais);

    const btnInscrever = document.createElement("div");
    btnInscrever.className = "btn__inscrever";
    btnInscrever.textContent = "inscrever-se";
    sobreDivBtns.appendChild(btnInscrever);

    cursoDiv.appendChild(sobreDivBtns);

    // Retorna o elemento para ser adicionado no DOM
    return cursoDiv;
}
const cursos = [
    {
        categorias: ["online", "tecnologia", "programação"],
        nome: "Desenvolvimento Web Full Stack",
        descricao: "Aprenda a criar aplicações web modernas utilizando HTML, CSS, JavaScript, Node.js e muito mais.",
        carga: "80 horas"
    },
    {
        categorias: ["presencial", "negócios"],
        nome: "Gestão de Projetos Ágeis",
        descricao: "Curso voltado à aplicação de metodologias ágeis como Scrum e Kanban em ambientes corporativos.",
        carga: "40 horas"
    },
    {
        categorias: ["EAD", "idiomas"],
        nome: "Inglês para Viagens",
        descricao: "Comunique-se com confiança em aeroportos, hotéis e restaurantes durante suas viagens internacionais.",
        carga: "20 horas"
    },
    {
        categorias: ["cursos livres", "presencial"],
        nome: "Introdução à Fotografia Digital",
        descricao: "Explore os fundamentos da fotografia e aprenda a tirar fotos incríveis com sua câmera ou smartphone.",
        carga: "25 horas"
    },
    {
        categorias: ["online", "design", "criatividade"],
        nome: "Design Gráfico com Canva",
        descricao: "Crie materiais visuais impactantes para redes sociais, empresas ou uso pessoal usando o Canva.",
        carga: "15 horas"
    },
    {
        categorias: ["presencial", "administração", "empreendedorismo"],
        nome: "Marketing Digital para Pequenos Negócios",
        descricao: "Domine estratégias de marketing online para atrair clientes e aumentar suas vendas.",
        carga: "30 horas"
    },
    {
        categorias: ["tecnologia", "EAD"],
        nome: "Lógica de Programação",
        descricao: "Ideal para iniciantes, este curso ensina os princípios fundamentais da programação de forma descomplicada.",
        carga: "35 horas"
    },
    {
        categorias: ["cursos livres", "presencial", "saúde"],
        nome: "Primeiros Socorros",
        descricao: "Aprenda como agir em situações de emergência e prestar os primeiros atendimentos corretamente.",
        carga: "10 horas"
    },
    {
        categorias: ["online", "financeiro"],
        nome: "Educação Financeira Pessoal",
        descricao: "Organize suas finanças, controle gastos, e aprenda a investir com inteligência.",
        carga: "18 horas"
    }
];

// Adiciona os cursos ao DOM
cursos.forEach(curso => {
    const elemento = criarCurso(curso.categorias, curso.nome, curso.descricao, curso.carga);
    document.querySelector('main').appendChild(elemento); // Ou insira em um container específico
});
