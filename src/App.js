import { useState } from 'react';
import Banner from './componente/Banner';
import Formulario from './componente/Formulario';
import Categoria from './componente/Categoria';
import Livro from './componente/Livro';
import Rodape from './componente/Rodape';

function App() {

  const categorias = [
    {
      nome: 'Romance',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Tecnologia',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Biografias',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Ficção Científica',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Terror',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Desenvolvimento Pessoal',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Finanças e Negócios',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [livros, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (livro) => {
    debugger
    setColaboradores([...livros, livro])
  }

  return (
    <div>
      <Banner />
      <Formulario categorias={categorias.map(categoria => categoria.nome)} aoColaboradorCadastrado={livro => aoNovoColaboradorAdicionado(livro)}/>

      {categorias.map(categoria => <Categoria 
        key={categoria.nome} 
        nome={categoria.nome} 
        corPrimaria={categoria.corPrimaria} 
        corSecundaria={categoria.corSecundaria}
        livros={livros.filter( livro => livro.categoria === categoria.nome )}
        />)}

      <Rodape />
    </div>
  );
}

export default App;