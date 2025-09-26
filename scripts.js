const destinos = {
  salvador: {
    imagem: 'turismo/images/salvador.jpg',
    titulo: 'Salvador',
    descricao: 'História, cultura afro-brasileira e praias vibrantes.'
  },
  sergipe: {
    imagem: 'turismo/images/sergipe.jpg',
    titulo: 'Sergipe',
    descricao: 'Belezas naturais e tranquilidade no menor estado do Brasil.'
  },
  amazonas: {
    imagem: 'turismo/images/amazonas.jpg',
    titulo: 'Amazonas',
    descricao: 'Floresta Amazônica, biodiversidade e aventura ecológica.'
  },
  saopaulo: {
    imagem: 'turismo/images/sao-paulo.jpg',
    titulo: 'São Paulo',
    descricao: 'Cultura urbana, gastronomia e vida cosmopolita.'
  },
  riodejaneiro: {
    imagem: 'turismo/images/rio-de-janeiro.jpg',
    titulo: 'Rio de Janeiro',
    descricao: 'Cristo Redentor, praias icônicas e samba no coração.'
  },
  florianopolis: {
    imagem: 'turismo/images/florianopolis.jpg',
    titulo: 'Florianópolis',
    descricao: 'Ilha da Magia com praias paradisíacas e trilhas incríveis.'
  },
  parana: {
    imagem: 'turismo/images/paraná.jpg',
    titulo: 'Paraná',
    descricao: 'Cataratas do Iguaçu e natureza exuberante.'
  }
};

// --- FUNÇÃO PARA ATUALIZAR O CARD DE DESTINO E DESTACAR NO MAPA ---
// Isso centraliza a lógica para evitar duplicações e garantir que o destaque sempre aconteça
function atualizarDestinoEDestacar(localSelecionado) {
  const destino = destinos[localSelecionado];
  if (destino) {
    document.getElementById('imagem').src = destino.imagem;
    document.getElementById('titulo').textContent = destino.titulo;
    document.getElementById('descricao').textContent = destino.descricao;
    document.getElementById('card').classList.remove('hidden');

    const mapaEstadoParaUF = {
      salvador: 'ba',
      sergipe: 'se',
      amazonas: 'am',
      saopaulo: 'sp',
      riodejaneiro: 'rj',
      florianopolis: 'sc',
      parana: 'pr'
    };

    const uf = mapaEstadoParaUF[localSelecionado];
    if (uf) {
      destacarEstado(uf); // Chama destaque visual
    }
  } else {
    // Opcional: esconder o card ou mostrar uma mensagem de erro se o destino não for encontrado
    document.getElementById('card').classList.add('hidden');
    destacarEstado(null); // Remove qualquer destaque se nada válido for selecionado
  }
}

// --- Evento do BOTÃO ---
document.getElementById('botao').onclick = function () {
  const local = document.getElementById('local').value;
  atualizarDestinoEDestacar(local);
};



// --- BrMap.Draw - Clique no MAPA (CÓDIGO CORRIGIDO) ---
            BrMap.Draw({
            wrapper: '#br_mapa',
            callbacks: {
             click: (element, uf) => { // O parâmetro 'uf' é o UF do estado clicado (ex: 'AM')
             
            // Mapeamento Inverso: UF (do clique) -> Nome do Destino (do seu objeto)
            const ufParaDestino = {
            BA: 'salvador', // Adicionei em maiúsculas para maior robustez
            SE: 'sergipe',
            AM: 'amazonas',
            SP: 'saopaulo',
            RJ: 'riodejaneiro',
            SC: 'florianopolis',
            PR: 'parana'
            };

            // Garante que o UF clicado (que pode vir minúsculo ou maiúsculo) esteja maiúsculo para a busca
            const UF_Clicado = uf.toUpperCase(); 

            const local = ufParaDestino[UF_Clicado];
            
            if (local) {
             // 1. Atualiza o SELECT com o destino encontrado
             document.getElementById('local').value = local; 
            // 2. Chama a função que atualiza o card e faz o destaque no mapa
            atualizarDestinoEDestacar(local); 
            } else {
             // Se o estado clicado não for um destino mapeado
             destacarEstado(null); // Remove qualquer destaque
             document.getElementById('card').classList.add('hidden');
             // OPCIONAL: Limpa o select, se você quiser que ele zere ao clicar em um não-destino
             // document.getElementById('local').value = ''; 
            }
             }
            }
           });