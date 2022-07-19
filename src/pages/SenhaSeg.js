import { Navbar } from '../components/Navbar';
export const SenhaSeg = ()=>{
    return(
        
    <>
<Navbar titulo={"Esqueci minha senha"} tipo={1}/>
    <div className="container mx-auto pt-3">
        <form action="" method="get">
            <div className="row g-2 pt-2">
                <div className="row g-2">
                    <div className="col-md">
                        <label htmlFor="campo-email" className="form-label">Email</label>
                        <input required type="email" className="form-control" id="campo-email"
                            placeholder="nome@dominio.com" />
                    </div>
                </div>
                <div className="row g-2 pt-2">
                    <div className="col-md">
                        <label htmlFor="campo-seguranca" className="form-label">Número de segurança</label>
                        <input required type="number" className="form-control" id="campo-seguranca"
                            aria-describedby="seguranca-help"/>
                        <div id="seguranca-help" className="form-text">Esse número foi solicitado no cadastro.
                        </div>
                    </div>
                </div>
                <div className="container">
                    <p className="text-center">
                        <button className="btn btn-lg btn-primary mt-3" type="submit">Verificar Autenticidade</button>
                    </p>
                </div>
            </div>
        </form>
    </div>
    </>
    )
}
