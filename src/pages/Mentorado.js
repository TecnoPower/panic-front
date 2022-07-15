function Mentorado() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <a className="navbar-brand ps-4" href="index.html">
                    <img src="uploads/panic_no_padding.gif" alt="..." height="50" />
                </a>
                <ul className="nav justify-content-rigth pe-2">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </ul>
                <div className="collapse navbar-collapse ps-2" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown d-none d-lg-block">
                            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Opções
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Editar meu Dados</a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Editar Senha</a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Log-out</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item d-lg-none d-xxl-none d-xl-none">
                            <a className="nav-link text-light" href="#">Editar meu Dados</a>
                        </li>
                        <li className="nav-item d-lg-none d-xxl-none d-xl-none">
                            <a className="nav-link text-light" href="#">Editar Senha</a>
                        </li>
                        <li className="nav-item d-lg-none d-xxl-none d-xl-none">
                            <a className="nav-link text-light" href="#">Log-out</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container mx-auto pt-3">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Nome" aria-label="Search" />
                    <button className="btn btn-outline-primary" type="submit">Pesquisar</button>
                </form>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Área</th>
                            <th scope="col">Profissão</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>TI e Derivados</td>
                            <td>Eng. de Software</td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Ciências da Saúde</td>
                            <td>Enfermeira</td>
                        </tr>
                        <tr>
                            <td>Larry the Bird</td>
                            <td>Ciências Agrárias</td>
                            <td>Eng. agronoma</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container">
                <p className="text-center">
                    <button className="w-40 btn btn-lg btn-primary mt-3" type="submit">Solicitar Conexão</button>
                </p>
            </div>
        </>
    )
}
export default Mentorado;