import '../App.css';
import '../_css/login.css'
import axios from 'axios';
function Footer() {
    return (
        <div className="w-100 mx-auto">
            <footer className="py-4 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <a href="https://www.accenture.com/" target="_blank" className="nav-link px-2"><img
                            className="tamanho" src="/_uploads/accenture.png" /></a></li>
                    <li className="nav-item">
                        <a href="#" target="_blank" className="nav-link px-2 text-light">Sobre Nós:
                            TecnoPower</a></li>
                    <li className="nav-item"><a href="https://www.redecidada.org.br/" target="_blank" className="nav-link px-2"><img
                        className="tamanho" src="/_uploads/redecidada.png" /></a></li>
                </ul>
                <p className="text-center text-light">&copy; 2022 TecnoPower</p>
            </footer>
        </div>
    );
}

export default Footer;