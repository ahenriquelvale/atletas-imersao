function pesquisar() {
    // Selects the section element with the ID "resultados-pesquisa" where the search results will be displayed.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();
    console.log(campoPesquisa);

    if (!campoPesquisa){
        section.innerHTML = "<p>O campo de pesquisa está vazio</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Initializes an empty string to store the generated HTML for the search results.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Iterates over each item in the 'dados' array (presumably containing data about search results).
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Concatenates HTML elements to create a new search result item.
            // The item includes a heading with a link to the title, a description paragraph, and a link for more information.
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-metas">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }

    };

    if (!resultados){
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Sets the inner HTML of the 'section' element to the generated results.
    section.innerHTML = resultados;
}