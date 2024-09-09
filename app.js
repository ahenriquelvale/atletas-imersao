function pesquisar() {
    // Selects the section element with the ID "resultados-pesquisa" where the search results will be displayed.
    let section = document.getElementById("resultados-pesquisa");
  
    // Initializes an empty string to store the generated HTML for the search results.
    let resultados = "";
  
    // Iterates over each item in the 'dados' array (presumably containing data about search results).
    for (let dado of dados) {
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
    };
  
    // Sets the inner HTML of the 'section' element to the generated results.
    section.innerHTML = resultados;
  }