import './Rodape.css'

const Rodape = () => {
    return (
    <footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href='facebook.com' target="_blank">
                        <img src="/imagens/fb.png" alt="Logo do facebook"/>
                    </a>
                </li>
                <li>
                    <a href='twitter.com' target="_blank">
                        <img src="/imagens/tw.png" alt="Logo do Twitter"/>
                    </a>
                </li>
                <li>
                    <a href='instagram.com/feliperos.a' target="_blank">
                        <img src="/imagens/ig.png" alt="Logo do Instagram"/>
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src='/imagens/logo.png' alt='Logo da organo'/>
        </section>
        <section>
            <p>Desenvolvido pela Alura | Felipe Rosa</p>
        </section>
    </footer>
    )
}

export default Rodape