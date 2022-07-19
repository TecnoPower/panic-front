import { Navbar } from '../components/Navbar';
export const Sobre = () => {
    return (
        <>
            <Navbar titulo={"Sobre Nós"} tipo={1} />
            <div className="container mx-auto pt-5">
                <h3 className="mb-3 mx-auto text-center">Sobre Nós TecnoPower</h3>
                <div className="card-group p-2">
                    <div className="card ps-3 pe-3 pt-2">
                        <img src="uploads/danilo.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Danilo Ferreira</h5>
                            <div className="card-footer bg-white">
                                <div className="row">
                                    <div className="col">
                                        <a href="#" target="_blank"> <img src="uploads/linkedin.png" className="img-fluid "
                                            alt="..." />
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="#" target="_blank"> <img src="uploads/github.png" className="img-fluid "
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
                            <h5 className="card-title">Paulo Vinícius</h5>
                            <div className="card-footer bg-white">
                                <div className="row">
                                    <div className="col">
                                        <a href="#" target="_blank"> <img src="uploads/linkedin.png" className="img-fluid "
                                            alt="..." />
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="#" target="_blank"> <img src="uploads/github.png" className="img-fluid "
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
                            <h5 className="card-title">Mateus Moura</h5>
                            <div className="card-footer bg-white">
                                <div className="row">
                                    <div className="col">
                                        <a href="#" target="_blank"><img src="uploads/linkedin.png" className="img-fluid "
                                            alt="..." />
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="#" target="_blank"><img src="uploads/github.png" className="img-fluid "
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
                            <h5 className="card-title">Ghabryellen Aleska</h5>
                            <div className="card-footer bg-white">
                                <div className="row">
                                    <div className="col">
                                        <a href="#" target="_blank"> <img src="uploads/linkedin.png" className="img-fluid "
                                            alt="..." />
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="#" target="_blank"> <img src="uploads/github.png" className="img-fluid "
                                            alt="..." />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
