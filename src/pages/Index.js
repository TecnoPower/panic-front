import '../css/login.css'
function Index(){
return(
    <div className="container form-login w-50">
        <form className='pt-5'>
            <div className="form-floating text-center">
                <img className="mb-2 img-fluid" src="uploads/panic.gif" alt=""/>
            </div>
            <h4 className="mb-3 mx-auto text-center">Plataforma de Apadrinhamento de Necessidades Íntegras e Comuns</h4>
            <div className="form-floating pb-3">
                <input required type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating">
                <input required type="password" className="form-control" id="senha-campo" placeholder="Password" />
                <label htmlFor="senha-campo">Senha</label>
            </div>
            <div className="d-grid col-3 mx-auto pt-3">
                <button className="btn btn-primary" type="submit">Entrar</button>
            </div>
        </form>

        <div className="container">
            <p className="text-center mt-2 pt-2">
                <a href="#" className="link-dark">Esqueci minha senha</a>
            </p>
        </div>
        <div className="d-grid gap-2 mx-auto pb-5">
            <a href="#" className="link-dark text-center mt-2">Cadastre-se como mentor</a>
            <a href="#" className="link-dark text-center mt-2">Cadastre-se como mentorado</a>
        </div>
    </div>
)
}
export default Index;