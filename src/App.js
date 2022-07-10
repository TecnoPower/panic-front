import './App.css';
import axios from 'axios';
function App() {
  return (
    <div className="mt-3">
      <form>
        <div className="mb-3">
          <label htmlFor="usuarioBusca" className="form-label">Email address</label>
          <input type="email" className="form-control" id="campoBusca" aria-describedby="campoBusca" />
          <div id="campoBusca" className="form-text">Aqui você pesquisa seu usuário</div>
          <button type="button" className="btn btn-primary" onClick={() =>
            axios.get('http://localhost:8080/api/usuarios.details/' + document.getElementById('campoBusca').value, {
              headers: {
                "Content-Type": "application/json"
              }
            }).then((response) => {
              console.log(response)
            }).catch(error => console.log(error))}>Botão Juju</button>
        </div>
      </form>
    </div>
  );
}

export default App;
