import { Navbar } from '../components/Navbar';
export const SenhaLog = () => {
    return (
        <>
        
<Navbar titulo={"Alterar Senha"} tipo={1}/>
            <div className="container mx-auto pt-3">
                <form action="" method="get">
                    <div className="row g-2 pt-2">
                        <div className="col-md">
                            <label for="campo-senha-atual" className="form-label">Senha Atual</label>
                            <input required type="password" className="form-control" id="campo-senha-atual" />
                        </div>
                    </div>
                    <div className="row g-2 pt-2">
                        <div className="col-md">
                            <label for="campo-senha1" className="form-label">Nova Senha</label>
                            <input required type="password" className="form-control" id="campo-senha1" />
                        </div>
                    </div>
                    <div className="row g-2 pt-2">
                        <div className="col-md">
                            <label for="campo-senha2" className="form-label">Nova Confirmar Senha</label>
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
