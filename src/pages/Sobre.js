import { Navbar } from '../components/Navbar';
export const Sobre = () => {
    return (
        <>
            <Navbar titulo={"Sobre Nós"} tipo={1} />
            <div className="container mx-auto pt-5">
                <h3 className="mb-3 mx-auto text-center">Sobre Nós TecnoPower</h3>
                <div className="row row-cols-1 row-cols-lg-4 g-4 ">
                    <div className="card ps-3 pe-3 pt-2">
                        <img src="uploads/danilo.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Danilo Ferreira</h5>
                            <div className="card-footer bg-white">
                                <div className="row">
                                    <div className="col">
                                        <a href="#" target="_blank"> <img src="uploads/linkedin.png" className="img-fluid w-100"
                                            alt="..." />
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="#" target="_blank"> <img src="uploads/github.png" className="img-fluid w-100"
                                            alt="..." />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card ps-3 pe-3 pt-2">
                        <img src="uploads/paulo.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Paulo Vinícius</h5>
                            <div className="card-footer bg-white">
                                <div className="row">
                                    <div className="col">
                                        <a href="#" target="_blank"> <img src="uploads/linkedin.png" className="img-fluid w-100"
                                            alt="..." />
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="#" target="_blank"> <img src="uploads/github.png" className="img-fluid w-100"
                                            alt="..." />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card ps-3 pe-3 pt-2">
                        <img src="uploads/mateus.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Mateus Moura</h5>
                            <div className="card-footer bg-white">
                                <div className="row">
                                    <div className="col">
                                        <a href="#" target="_blank">
                                            <img src="uploads/linkedin.png" className="img-fluid w-100"
                                                alt="..." />
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="#" target="_blank">
                                            <img src="uploads/github.png" className="img-fluid w-100"
                                                alt="..." />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card ps-3 pe-3 pt-2">
                        <img src="uploads/ghabryellen.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Ghabryellen Aleska</h5>
                            <div className="card-footer bg-white">
                                <div className="row">
                                    <div className="col">
                                        <a href="#" target="_blank"> <img src="uploads/linkedin.png" className="img-fluid w-100"
                                            alt="..." />
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="#" target="_blank"> <img src="uploads/github.png" className="img-fluid w-100"
                                            alt="..." />
                                        </a>
                                    </div>
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
