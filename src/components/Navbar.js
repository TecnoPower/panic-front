import 'bootstrap/dist/css/bootstrap.css';
import '../css/auxBootstrap.css';
import React, { useContext, useState } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { Nav, CardModal } from './Styles/Styles';

export const Navbar = (props) => {
    const { setToken } = useContext(UserContext);
    const { setTipo } = useContext(UserContext);
    const { nome, setNome } = useContext(UserContext);
    const [modalSair, showModalSair] = useState(false);

    let navigate = useNavigate();


    const ModalSair = (props) => {
        let navigate = useNavigate();
        return (

            <Modal
                {...props}
                size="sm"
                backdrop="static"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <CardModal>
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
                                <Button className='px-86 btn btn-danger' onClick={
                                    () => {
                                        localStorage.removeItem('token');
                                        localStorage.removeItem('tipo');
                                        localStorage.removeItem('nome');
                                        setToken("");
                                        setTipo("");
                                        setNome("");
                                        navigate("/")
                                    }}>Sair</Button>
                            </div>
                        </div>
                    </Modal.Footer>
                </CardModal>
            </Modal>
        );
    }

    if (props.tipo === null || props.tipo === "" || props.tipo === 1) {
        return (
            <>
                <Nav className="navbar navbar-expand-lg navbar-dark static-top">
                    <a className="navbar-brand ps-2" href="/">
                        <img src="uploads/panic_no_padding.gif" alt="..." height="50" />
                    </a>
                    <ul className="nav justify-content-center pe-2">
                        <h2 className="text-light">{props.titulo}</h2>
                    </ul>
                </Nav>
            </>
        );
    } else {
        return (
            <>
                <Nav className="navbar navbar-expand-lg navbar-dark static-top w-100">
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
                                <span className="nav-link text-light cursorPointer pe-3" onClick={() => navigate("/home")} >
                                    Home
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link text-light cursorPointer pe-3" onClick={() => { navigate("/edit") }} >
                                    Perfil
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link text-light cursorPointer pe-3" onClick={() => { navigate("/sobre") }} >
                                    Sobre nós
                                </span>
                            </li>
                            <li className="nav-item dropdown d-none d-lg-block">
                                <span className="nav-link dropdown-toggle text-light cursorPointer" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Opções
                                </span>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li>
                                        <p className="dropdown-item fw-bold texto-nome">Olá,  {nome.split(' ').slice(0, 1).join(' ')}</p>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <span className="dropdown-item cursorPointer" onClick={props.themeToggler}>Mudar Tema</span>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <span className="dropdown-item cursorPointer"
                                            onClick={() => { navigate("/senha-log") }}>Alterar Senha</span>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <span className="dropdown-item cursorPointer"
                                            onClick={() => {
                                                showModalSair(true);
                                            }} >Sair</span>
                                    </li>
                                </ul>
                            </li>
                            <li className='nav-item d-lg-none d-xxl-none d-xl none'>
                                <span className="nav-link text-light cursorPointer" onClick={props.themeToggler}>Mudar Tema</span>
                            </li>
                            <li className="nav-item d-lg-none d-xxl-none d-xl-none">
                                <span className="nav-link text-light cursorPointer" onClick={() => { navigate("/senha-log") }}>Alterar Senha</span>
                            </li>
                            <li className="nav-item d-lg-none d-xxl-none d-xl-none">
                                <span className="nav-link text-light cursorPointer" onClick={() => {
                                    showModalSair(true);
                                }} >Sair</span>
                            </li>
                        </ul>
                    </div>
                    <ModalSair
                        show={modalSair}
                        onHide={() => showModalSair(false)}
                    />
                </Nav>
            </>
        );
    }

}