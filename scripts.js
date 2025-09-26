
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

    document.getElementById('botao').onclick = function () {
      const local = document.getElementById('local').value;
      const destino = destinos[local];
      if (destino) {
        document.getElementById('imagem').src = destino.imagem;
        document.getElementById('titulo').textContent = destino.titulo;
        document.getElementById('descricao').textContent = destino.descricao;
        document.getElementById('card').classList.remove('hidden');
      }
    };
  BrMap.Draw({
  wrapper: '#br_mapa',
  selectStates: ['ba', 'am', 'sp', 'rj', 'sc', 'pr', 'se'],
  callbacks: {
    click: (element, uf) => {
      const estados = {
        ba: 'salvador',
        am: 'amazonas',
        sp: 'saopaulo',
        rj: 'riodejaneiro',
        sc: 'florianopolis',
        pr: 'parana',
        se: 'sergipe'
      };

      const local = estados[uf];
      if (local) {
        document.getElementById('local').value = local;
        document.getElementById('botao').click();
      }
    }
  }
});
    window.onload = function() {
      const params = new URLSearchParams(window.location.search);
      const local = params.get('local');
      if (local) {
        document.getElementById('local').value = local;
        document.getElementById('botao').click();
      }
    };

