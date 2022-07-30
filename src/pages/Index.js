import '../css/login.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useContext, useState } from 'react';
import { axiosInstance } from '../config/axios';
import { NotFound404 } from '../pages/NotFound404';
import { Navigate } from 'react-router';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export const Index = () => {
    const { token, setToken } = useContext(UserContext);
    const { tipo, setTipo } = useContext(UserContext);
    const [modalShowModalServidor, setModalShowModalServidor] = useState(false);
    const [modalShowPreencher, setModalShowPreencher] = useState(false);
    let navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        if (localStorage.getItem('tipo') !== null) {
            navigate("/home");
        }
    }, []);

    const [login, setLogin] = useState({
        email: "",
        pass: ""
    });

    function submitLogin(e) {
        e.preventDefault();
        if (login.email ==="" || login.pass ==="") {
            setModalShowPreencher(true);
        } else {
            axiosInstance.post("/auth/login", login).then((res) => {
                console.log(res)
                if (res.status ===203) {
                    setModalShowModalServidor(true);
                } else {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('tipo', res.data.user.tipo);
                    setToken(res.data.token);
                    setTipo(res.data.user.tipo);
                    navigate("/home")
                }
            });
        }
    }
    function ModalMsgPreenchimento(props) {

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Ops...
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Atenção</h4>
                    <p>
                        É necessário o preechimento de todos os campos.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Fechar</Button>
                </Modal.Footer>
            </Modal>
        );


    }
    function ModalServidor(props) {
        return (<Modal
            {...props}
            size="lg"
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Mensagem do Servidor:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Perdão, não encontrei registro.</p>
                <p>Verifique  login e senha.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Ok</Button>
            </Modal.Footer>
        </Modal>);
    }
    return (
        <div className="container form-login w-50">

            <form className='pt-5'>
                <div className="form-floating text-center" id='img-login'>
                    <img className="mb-2 img-fluid" src="uploads/panic.gif" alt="" />
                </div>
                <h4 className="mb-3 mx-auto text-center">Plataforma de Apadrinhamento de Necessidades Íntegras e Comuns</h4>

                <div className="form-floating pb-3">
                    <input value={login.email} onChange={(e) => { setLogin({ ...login, email: e.target.value }) }} required type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                    <input value={login.pass} onChange={(e) => { setLogin({ ...login, pass: e.target.value }) }} required type="password" className="form-control" id="senha-campo" placeholder="Password" autoComplete="off" />
                    <label htmlFor="senha-campo">Senha</label>
                </div>

                <div className="d-grid col-3 mx-auto pt-3">
                    <button onClick={submitLogin}
                        className="btn btn-default" type="submit">Entrar</button>
                </div>
            </form>

            <div className="container">
                <p className="text-center mt-2 pt-2">
                    <a className="link-dark cursorPointer" onClick={() => { navigate("/senha-no-log") }}>Esqueci minha senha</a>
                </p>
            </div>
            <div className="d-grid gap-2 mx-auto pb-5">
                <Modal show={show}
                    onHide={handleClose}
                    aria-labelledby="contained-modal-title-vcenter"
                    size="lg"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Formas de Cadastro</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <>
                            <div className="row pt-2">
                                <div className="card" >
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="uploads/profissional.png" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Para Profissionais</h5>
                                                <p className="card-text">Já tem uma área de atuação específica e gostaria de compartilhar sua tragetória com alguém que pode ter os mesmos interesses que você? e que futuramente pode torna-se um colega de trabalho? Se sim, <a onClick={() => { navigate("/cad-mentor") }} className='link-primary cursorPointer'>cadastre-se aqui</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="card" >
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="uploads/moca.png" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Para Você</h5>
                                                <p className="card-text">Para você que está em pânico e não sabe ainda em qual carreira seguir, cadastre-se e procure um profissional na área que você deseja, para isso <a onClick={() => { navigate("/cad-mentorado") }} className='link-primary cursorPointer'>cadastre-se aqui</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
                <ModalServidor
                    show={modalShowModalServidor}
                    onHide={() => setModalShowModalServidor(false)}
                />
                <ModalMsgPreenchimento
                    show={modalShowPreencher}
                    onHide={() => setModalShowPreencher(false)}
                />
                <a variant="primary" onClick={handleShow} className="link-dark text-center mt-2 cursorPointer">Não possui uma conta? Cadastre-se</a>
            </div>
        </div>
    )

}