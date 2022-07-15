import '../App.css';
import '../css/login.css'
import axios from 'axios';
function Footer() {
    return (
        <div className="w-100 mx-auto">
            <footer className="py-4 my-4">
                <p className="text-center">
                    <a href="/sobre" className="nav-link px-2 text-light">Sobre Nós &copy; 2022 TecnoPower</a>
                </p>
            </footer>
        </div>
    );
}

export default Footer;