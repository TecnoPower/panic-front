import { Navbar } from '../components/Navbar';
export const Sobre = () => {
    return (
        <>
            <Navbar titulo={"Sobre Nós"} tipo={1} />
            <div className="mx-auto pt-5">
                <h1 className="mb-3 text-center">Sobre Nós TecnoPower</h1>
                <div className="container w-65 minimo-350">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                                <img src="uploads/danilo.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title text-center pb-2">Danilo Ferreira</h3>
                                    <p className="card-text text-center">
                                        <a href="https://www.github.com/daniloeb19" target="_blank"><img src="/uploads/github.png" className="redes-sociais" alt="..." /></a>
                                        <a href="https://www.linkedin.com/in/danilofdasilva/" target="_blank"><img src="/uploads/linkedin.png" className="redes-sociais" alt="..." /></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="uploads/ghabryellen.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title text-center pb-2">Paulo Vinícius</h3>
                                    <p className="card-text text-center">
                                        <a href=''><img src="/uploads/github.png" className="redes-sociais" alt="..." /></a>
                                        <a href=''><img src="/uploads/linkedin.png" className="redes-sociais" alt="..." /></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="uploads/mateus.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title text-center pb-2">Mateus Moura</h3>
                                    <p className="card-text text-center">
                                        <a href=''><img src="/uploads/github.png" className="redes-sociais" alt="..." /></a>
                                        <a href=''><img src="/uploads/linkedin.png" className="redes-sociais" alt="..." /></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="uploads/paulo.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title text-center pb-2">Paulo Vinícius</h3>
                                    <p className="card-text text-center">
                                        <a href=''><img src="/uploads/github.png" className="redes-sociais" alt="..." /></a>
                                        <a href=''><img src="/uploads/linkedin.png" className="redes-sociais" alt="..." /></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-center padding-buttom-3 pb-4'>
                    <button onClick={() => { window.history.back() }} className="btn btn-dark text-center text-light mw-20">Voltar</button>
                </div>
            </div>
        </>
    )
}
