export const SenhaNoLog = ()=>{
    return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <a className="navbar-brand ps-4" href="index.html">
            <img src="uploads/panic_no_padding.gif" alt="..." height="50"/>
        </a>
        <ul className="nav justify-content-center pe-4">
            <h2 className="text-light">Esqueci minha senha</h2>
        </ul>
    </nav>

    <div className="container mx-auto pt-3">
        <form action="" method="get">
            <div className="row g-2 pt-2">
                <div className="col-md">
                    <label htmlFor="campo-senha1" className="form-label">Nova Senha</label>
                    <input required type="password" className="form-control" id="campo-senha1" />
                </div>
            </div>
            <div className="row g-2 pt-2">
                <div className="col-md">
                    <label htmlFor="campo-senha2" className="form-label">Nova Confirmar Senha</label>
                    <input required type="password" className="form-control" id="campo-senha1" />
                </div>
            </div>
            <div className="container">
                <p className="text-center">
                    <button className="btn btn-lg btn-primary mt-3" type="submit">Trocar Senha</button>
                </p>
            </div>
        </form>
    </div>
    </>
    )
}
