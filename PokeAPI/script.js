async function buscarPokemon() {
    const nombrePokemon = document.getElementById('nombrePokemon').ariaValueMax.toLowerCase();
    const contenedor = document.getElementById('pokemon-card');
    if (!nombrePokemon) {
        contenedor.innerHTML = "<p>Por favor ingresa un nombre de Pokémon.</p>";
        return;
    }

    try {
        const respuesta = await fetch (`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
        if (!respuesta.ok) throw new Error ("No encontrado");

        const datos = await respuesta.json();

        contenedor.innerHTML = `
      <img src="${datos.sprites.front_default}" alt="${datos.name}">
      <h3>${datos.name}</h3>
      <p>ID: ${datos.id}</p>
      <p>Tipo: ${datos.types.map(t => t.type.name).join(', ')}</p>`;
      
    } catch (error) {
        contenedor.innerHTML = `<p>No se encontró el Pokémon "${nombrePokemon}". Intenta con otro nombre.</p>`;
    }


    }

}