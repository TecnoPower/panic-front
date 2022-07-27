import { Navbar } from '../components/Navbar';
import React, { useContext } from 'react';
import { UserContext } from '../App';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { axiosInstance } from '../config/axios';
import { useEffect } from 'react';
export const SenhaLog = () => {
    let navigate = useNavigate();
    const [modalShowSenha, setModalShowSenha] = useState(false);
    const [modalShowErro, setModalShowErro] = useState(false);
    const [modalShowSucesso, setModalShowSucesso] = useState(false);
    const [modalShowPreencher, setModalShowPreencher] = useState(false);
    const { token, setToken } = useContext(UserContext);
    useEffect(() => {
        if (token == null) {
            navigate("/");
        }
    });

    const [troca, setTroca] = useState({
        confirmPass: "",
        pass: "",
        currentPass: "",
    });

    function submit(e) {
        e.preventDefault();

        if (troca.confirmPass === "" ||
            troca.pass === "" ||
            troca.currentPass === "") {
            setModalShowPreencher(true)
        } else {
            if (troca.pass != troca.confirmPass) {
                setModalShowSenha(true);
            } else {
                axiosInstance.post('/auth/senha-log', {
                    pass: troca.pass
                }).then((res) => {
                    if (res.status == 200) {
                        setModalShowSucesso(true);
                    } else {
                        setModalShowErro(true);
                    }
                })
            }
        }

    }
    function ModalSucesso(props) {
        return (<Modal
            {...props}
            size="lg"
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Sucesso!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Sucesso</h4>
                <p>Senha trocada com sucesso</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => { navigate("/home") }}>Ir para Home</Button>
            </Modal.Footer>
        </Modal>);
    }
    function ModalErro(props) {
        return (<Modal
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
                <h4>Ocorreu Um erro</h4>
                <p>Tente novamente mais tarde.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>);
    }
    function ModalMsgSenha(props) {
        return (<Modal
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
                <h4>Corrija sua Senha</h4>
                <p>Senha e confirmação de senha não coincidem.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>);
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
    return (
        <>
            <Navbar titulo={"Alterar Senha"} tipo={2} />
            <div className="container mx-auto pt-6">
                <div className="row justify-content-center">
                    <div className="card w-50 minimo-350">
                        <h1 className='pt-2 pb-2 text-center'>Insira seus Dados</h1>
                        <form action="" method="get" >
                            <div className="row g-2 pt-2">
                                <div className="col-md form-floating">
                                    <input value={troca.currentPass} onChange={(e) => { setTroca({ ...troca, currentPass: e.target.value }) }} required type="password" className="form-control" id="campo-senha-atual" autoComplete='off' placeholder="Senha Atual" />
                                    <label htmlFor="campo-senha-atual" className="form-label">Senha Atual</label>
                                </div>
                            </div>
                            <div className="row g-2 pt-2">
                                <div className="col-md form-floating">
                                    <input placeholder="Senha" value={troca.pass} onChange={(e) => { setTroca({ ...troca, pass: e.target.value }) }} required type="password" autoComplete='off' className="form-control" id="campo-senha1" />
                                    <label htmlFor="campo-senha1" className="form-label">Nova Senha</label>
                                </div>
                            </div>
                            <div className="row g-2 pt-2">
                                <div className="col-md form-floating">
                                    <input placeholder="Confirmação de Senha" value={troca.confirmPass} onChange={(e) => { setTroca({ ...troca, confirmPass: e.target.value }) }} required type="password" autoComplete='off' className="form-control" id="campo-senha2" />
                                    <label htmlFor="campo-senha2" className="form-label">Nova Confirmar Senha</label>
                                </div>
                            </div>
                            <div className="container">
                                <p className="text-center">
                                    <button className="btn btn-lg btn-primary mt-3" onClick={submit} type="submit">Trocar Senha</button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <ModalMsgPreenchimento
                    show={modalShowPreencher}
                    onHide={() => setModalShowPreencher(false)}
                />
                <ModalMsgSenha
                    show={modalShowSenha}
                    onHide={() => setModalShowSenha(false)}
                />
                <ModalErro
                    show={modalShowErro}
                    onHide={() => setModalShowErro(false)}
                />
                <ModalSucesso
                    show={modalShowSucesso}
                    onHide={() => setModalShowSucesso(false)}
                />
            </div>
        </>
    )
}
