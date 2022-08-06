import 'bootstrap/dist/css/bootstrap.css';
import '../css/auxBootstrap.css';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../config/axios';
export const Navbar = (props) => {
    const { token, setToken } = useContext(UserContext);
    const { tipo, setTipo } = useContext(UserContext);
    const [nameUser, setNameUser] = useState('')
    useEffect(() => {
        if (tipo) {
            axiosInstance.get('/api/return/name').then((res) => {
                setNameUser(res.data.name);
            })
        }
    }, [])
    let navigate = useNavigate();
    if (props.tipo === null || props.tipo === "" || props.tipo === 1) {
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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top w-100">
                <a className="navbar-brand ps-4" href="/">
                    <img src="uploads/panic_no_padding.gif" alt="..." height="50" />
                </a>

                <ul className="nav justify-content-right me-2">
                    <h2 className="text-light d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block d-lg-none d-xl-block">{props.titulo}</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </ul>
                <div className="collapse navbar-collapse ps-2" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-light cursorPointer" onClick={() => navigate("/home")} >Home</a>
                        </li>
                        <li className="nav-item dropdown d-none d-lg-block">
                            <a className="nav-link dropdown-toggle text-light cursorPointer" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Opções
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li>
                                    <p className="dropdown-item fw-bold texto-nome">Logado como: {nameUser.split(' ').slice(0, 1).join(' ')}</p>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item cursorPointer" onClick={() => { navigate("/edit") }}>Editar meu Dados</a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item cursorPointer"
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
                            <p className="nav-link text-light fw-bold texto-nome">Logado como: {nameUser.split(' ').slice(0, 1).join(' ')}</p>
                            <hr className="dropdown-divider text-light" />
                        </li>
                        <li className="nav-item d-lg-none d-xxl-none d-xl-none">
                            <a className="nav-link text-light cursorPointer" onClick={() => { navigate("/edit") }}>Editar meu Dados</a>
                        </li>
                        <li className="nav-item d-lg-none d-xxl-none d-xl-none">
                            <a className="nav-link text-light cursorPointer" onClick={() => { navigate("/senha-log") }}>Editar Senha</a>
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