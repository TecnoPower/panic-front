function CadastroMentorado() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <a className="navbar-brand ps-4" href="#">
                    <img src="uploads/panic_no_padding.gif" alt="..." height="50" />
                </a>
                <ul className="nav justify-content-center pe-4">
                    <h2 className="text-light">Cadastro Mentorado</h2>
                </ul>
            </nav>

            <div className="container pt-5">
                <form action="" method="get">
                    <div className="row g-2">
                        <div className="col-md ps-4">
                            <div className="form-floating mb-3">
                                <input required type="email" className="form-control" id="float-nome" placeholder="Nome Completo" />
                                <label htmlFor="float-nome">Nome Completo</label>
                            </div>
                        </div>
                        <div className="col-md ps-4">
                            <div className="row">
                                <div className="col">
                                    <div className="form-floating mb-3">
                                        <input required type="text" className="form-control" id="float-date"
                                            placeholder="Data de Nascimento" />
                                        <label htmlFor="float-date">Data de Nascimento</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-floating">
                                        <select className="form-select" id="float-genero" aria-label="Gênero">
                                            <option selected disabled>Selecione</option>
                                            <option value="Homem">Homem</option>
                                            <option value="Mulher">Mulher</option>
                                            <option value="Não binário">Não binário</option>
                                            <option value="Outros">Outros</option>
                                            <option value="Prefiro não dizer">Prefiro não dizer</option>
                                        </select>
                                        <label htmlFor="float-genero">Gênero</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 pt-2">
                        <div className="col-md ps-4">
                            <div className="form-floating mb-3">
                                <input required type="email" className="form-control" id="campo-email"
                                    placeholder="nome@dominio.com" />
                                <label htmlFor="campo-email" className="form-label">E-mail</label>
                            </div>
                        </div>
                        <div className="col-md ps-4">
                            <div className="form-floating">
                                <input required type="text" className="form-control" id="campo-cpf" placeholder="CPF" />
                                <label htmlFor="campo-cpf" className="form-label">CPF</label>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 pt-2">
                        <div className="col-md ps-4">
                            <div className="form-floating">
                                <input required type="number" className="form-control" id="campo-seguranca"
                                    aria-describedby="seguranca-help" placeholder="Número de segurança" data-bs-toggle="popover"
                                    data-bs-trigger="focus" title="Atenção"
                                    data-bs-content="Guarde esse número para um possível esquecimento de
                            senha" />
                                <label htmlFor="campo-seguranca" className="form-label">Número de segurança</label>
                            </div>
                        </div>
                        <div className="col-md ps-4">
                            <div className="form-floating">
                                <input required type="text" placeholder="WhatsApp" className="form-control" id="campo-numero" />
                                <label htmlFor="campo-numero" className="form-label">WhatsApp</label>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 pt-2">
                        <div className="col-md ps-4">
                            <div className="row">
                                <div className="col">
                                    <div className="form-floating">
                                        <input required type="password" placeholder="Senha" className="form-control"
                                            id="campo-senha1" />
                                        <label htmlFor="campo-senha1" className="form-label">Senha</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-floating">
                                        <input required type="password" placeholder="Repetir Senha" className="form-control"
                                            id="campo-senha2" />
                                        <label htmlFor="campo-senha2" className="form-label d-none d-lg-block">Repetir Senha</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md ps-4">
                        </div>
                    </div>
                    <div className="row g-2 pt-2">
                        <div className="col-md ps-4">

                        </div>
                        <div className="col-md ps-4">
                        </div>
                    </div>
                    <div className="container">
                        <p className="text-center">
                            <button className="btn btn-lg btn-primary mt-3" type="submit">Cadastrar</button>
                        </p>
                    </div>
                </form>
            </div>
        </>
    )
}
export default CadastroMentorado;
