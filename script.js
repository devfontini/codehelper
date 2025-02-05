// Elementos HTML
const languageSelect = document.getElementById("languageSelect");
const generateBtn = document.getElementById("generateBtn");
const contentSection = document.getElementById("contentSection");
const materialsList = document.getElementById("materialsList");
const playlistFrame = document.getElementById("playlistFrame");

// Conteúdos para cada linguagem
const studyMaterials = {
    python: [
        { name: "Curso de Python para Iniciantes", link: "https://www.cursoemvideo.com/curso/python-3-mundo-1/" },
        { name: "Documentação Oficial do Python", link: "https://docs.python.org/pt-br/3/" }
    ],
    javascript: [
        { name: "Curso de JavaScript Moderno", link: "https://www.udemy.com/course/javascript-moderno/" },
        { name: "MDN Web Docs - JavaScript", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" }
    ],
    java: [
        { name: "Curso Completo de Java", link: "https://www.alura.com.br/cursos-online-programacao/java" },
        { name: "Documentação Oficial do Java", link: "https://docs.oracle.com/en/java/" }
    ],
    csharp: [
        { name: "Curso de C# Completo", link: "https://balta.io/cursos/csharp-fundamentos" },
        { name: "Microsoft Docs - C#", link: "https://learn.microsoft.com/pt-br/dotnet/csharp/" }
    ],
    htmlcss: [
        { name: "Curso de HTML e CSS", link: "https://www.cursoemvideo.com/curso/html5-css3-modulo1/" },
        { name: "Guia MDN - HTML & CSS", link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML" }
    ]
};

// Playlists para estudar
const playlists = {
    python: "https://www.youtube.com/watch?v=8Kjhr_8MmU0",
    javascript: "https://www.youtube.com/watch?v=t8OZPJfpcTM&t=175s",
    java: "https://www.youtube.com/watch?v=ww-rNXzSiPQ",
    csharp: "https://www.youtube.com/watch?v=VnjdikpgR0E",
    htmlcss: "https://www.youtube.com/watch?v=_SPSiNavfsM"
};

// Evento de clique no botão "Gerar Conteúdo"
generateBtn.addEventListener("click", () => {
    const selectedLanguage = languageSelect.value;

    if (selectedLanguage) {
        materialsList.innerHTML = "";
        studyMaterials[selectedLanguage].forEach(material => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<a href="${material.link}" target="_blank">${material.name}</a>`;
            materialsList.appendChild(listItem);
        });

        playlistFrame.src = playlists[selectedLanguage];
        contentSection.style.display = "block";
    } else {
        alert("Por favor, selecione uma linguagem!");
    }
});
