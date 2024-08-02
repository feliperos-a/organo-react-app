import './Livro.css'

const Livro = ({ nome, imagem, autor, corDeFundo }) => {
    return (
        <div className='livro'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={ imagem } alt={ nome } />
            </div>
            <div className='rodape'>
                <h4>{ nome }</h4>
                <h5>{ autor }</h5>
            </div>
        </div>
    )
}

export default Livro