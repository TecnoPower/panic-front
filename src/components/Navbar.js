import 'bootstrap/dist/css/bootstrap.css';
import '../css/auxBootstrap.css';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../config/axios';
import { GenericModal } from './Modal/Modal';
import { Modal, Button } from 'react-bootstrap';
export const Navbar = (props) => {
    const { setToken } = useContext(UserContext);
    const { tipo, setTipo } = useContext(UserContext);
    const { nome, setNome } = useContext(UserContext);
    const [modalSair, showModalSair] = useState(false);
    let navigate = useNavigate();

    const ModalSair = (props) => {
        let navigate = useNavigate();
        return (<Modal
            {...props}
            size="sm"
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <h4>Deseja sair?</h4>
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
                <div className='row'>
                    <div className='col'>
                        <Button className='px-86 btn' onClick={props.onHide}>Cancelar</Button>
                    </div>
                    <div className='col'></div>
                    <div className='col'>
                        <Button className='px-86 btn btn-danger' onClick={() => {
                            localStorage.removeItem('token');
                            localStorage.removeItem('tipo');
                            localStorage.removeItem('nome');
                            setToken(null);
                            setTipo(null);
                            setNome(null);
                            navigate("/")
                        }}>Sair</Button>
                    </div>
                </div>
            </Modal.Footer>
        </Modal>);
    }

    if (props.tipo === null || props.tipo === "" || props.tipo === 1) {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                    <a className="navbar-brand ps-2" href="/">
                        <img src="uploads/panic_no_padding.gif" alt="..." height="50" />
                    </a>
                    <ul className="nav justify-content-center pe-2">
                        <h2 className="text-light">{props.titulo}</h2>
                    </ul>
                </nav>
            </>
        );
    } else {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top w-100">
                    <a className="navbar-brand ps-4" href="/home">
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
                            <li className="nav-item d-lg-none d-xxl-none d-xl-none">
                                <span className="nav-link text-light fw-bold texto-nome">Olá,  {nome.split(' ').slice(0, 1).join(' ')}</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light cursorPointer" onClick={() => navigate("/home")} >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light cursorPointer" onClick={() => { navigate("/edit") }} >
                                    Perfil
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light cursorPointer" onClick={() => { navigate("/sobre") }} >
                                    Sobre Nós
                                </a>
                            </li>
                            <li className="nav-item dropdown d-none d-lg-block">
                                <a className="nav-link dropdown-toggle text-light cursorPointer" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Opções
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li>
                                        <p className="dropdown-item fw-bold texto-nome">Olá,  {nome.split(' ').slice(0, 1).join(' ')}</p>
                                    </li>
                                    {/* <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                     <li>
                                        <a className="dropdown-item cursorPointer" onClick={() => { navigate("/edit") }}>Perfil</a>
                                    </li> */}
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item cursorPointer"
                                            onClick={() => { navigate("/senha-log") }}>Alterar Senha</a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item cursorPointer"
                                            onClick={() => {
                                                showModalSair(true);
                                            }} >Sair</a>
                                    </li>
                                </ul>
                            </li>

                            {/* <li className="nav-item d-lg-none d-xxl-none d-xl-none">
                                <a className="nav-link text-light cursorPointer" onClick={() => { navigate("/edit") }}>Perfil</a>
                            </li> */}
                            <li className="nav-item d-lg-none d-xxl-none d-xl-none">
                                <a className="nav-link text-light cursorPointer" onClick={() => { navigate("/senha-log") }}>Alterar Senha</a>
                            </li>
                            <li className="nav-item d-lg-none d-xxl-none d-xl-none">
                                <a className="nav-link text-light cursorPointer" onClick={() => {
                                    showModalSair(true);
                                }} >Sair</a>
                            </li>
                        </ul>
                    </div>
                    <ModalSair
                        show={modalSair}
                        onHide={() => showModalSair(false)}
                    />
                </nav>
            </>
        );
    }

}