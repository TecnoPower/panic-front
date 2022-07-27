import 'bootstrap/dist/css/bootstrap.css';
import '../css/auxBootstrap.css';
import React, { useContext } from 'react';
import { UserContext } from '../App';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router-dom';
export const Navbar = (props) => {
    const { token, setToken } = useContext(UserContext);
    const { tipo, setTipo } = useContext(UserContext);
    let navigate = useNavigate();
    if (props.tipo == null || props.tipo == "" || props.tipo == 1) {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <a className="navbar-brand ps-2" href="/">
                    <img src="uploads/panic_no_padding.gif" alt="..." height="50" />
                </a>
                <ul className="nav justify-content-center pe-2">
                    <h2 className="text-light">{props.titulo}</h2>
                </ul>
            </nav>
        );
    } else {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <a className="navbar-brand ps-4" href="/">
                    <img src="uploads/panic_no_padding.gif" alt="..." height="50" />
                </a>

                <ul className="nav justify-content-rigth pe-2">
                    <h2 className="text-light pe-2">{props.titulo}</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </ul>
                <div className="collapse navbar-collapse ps-2" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown d-none d-lg-block">
                            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Opções
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Editar meu Dados</a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#"
                                    onClick={() => { navigate("/senha-log") }}>Editar Senha</a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item cursorPointer"
                                        onClick={() => {
                                            localStorage.removeItem('token');
                                            setToken(null);
                                            localStorage.removeItem('tipo');
                                            setTipo(null);
                                            navigate("/")
                                        }} >Log-out</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item d-lg-none d-xxl-none d-xl-none">
                            <a className="nav-link text-light cursorPointer">Editar meu Dados</a>
                        </li>
                        <li className="nav-item d-lg-none d-xxl-none d-xl-none">
                            <a className="nav-link text-light cursorPointer">Editar Senha</a>
                        </li>
                        <li className="nav-item d-lg-none d-xxl-none d-xl-none">
                            <a className="nav-link text-light cursorPointer" onClick={() => {
                                localStorage.removeItem('token');
                                setToken(null);
                                localStorage.removeItem('tipo');
                                setTipo(null);
                                navigate("/")
                            }} >Log-out</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}