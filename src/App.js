import './App.css';
import './_css/login.css'

import axios from 'axios';
function App() {
  return (
    <>
      <div className="container form-login w-60">
        <form>
          <div className="form-floating text-center">
            <img className="mb-2 img-fluid" src="/_uploads/panic.gif" alt="" />
          </div>
          <p className="mb-3 mx-auto text-center">Plataforma de Apadrinhamento de Necessidades Integras e Comuns</p>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Senha</label>
          </div>
          <div className="container">
          <p className="text-center">
          <button className="w-50 btn btn-lg btn-default mt-3" type="submit">Entrar</button>
          </p>
        </div>
          
        </form>

        <div className="container">
          <p className="text-center mt-2">
            <a href="#" className="link-dark">Esqueci minha senha</a>
          </p>
        </div>
        <div className="d-grid gap-2 w-100 mx-auto">
          <button type="button" className="btn btn-default">Cadastre-se como mentor</button>
          <button type="button" className="btn btn-default">Cadastre-se como mentorado</button>
        </div>
      </div>
     
    </>
  );
}

export default App;
