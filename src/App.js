import './App.css';
import axios from 'axios';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" id="campo"/>
        <button onClick={() =>
          axios.get('http://localhost:8080/api/usuarios.details/' + document.getElementById('campo').value, {
            headers: {
              "Content-Type": "application/json"
            }
          }).then((response) => {
            console.log(response)
          }).catch(error => console.log(error))}>Botão Juju</button>
      </header>
    </div>
  );
}

export default App;
