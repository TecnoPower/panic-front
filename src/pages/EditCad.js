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
import InputMask from "react-input-mask";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Form from 'react-bootstrap/Form';

export const EditCad = () => {
    let navigate = useNavigate();
    const [modalShowSenha, setModalShowSenha] = useState(false);
    const [modalShowErro, setModalShowErro] = useState(false);
    const [modalShowSucesso, setModalShowSucesso] = useState(false);
    const [modalShowPreencher, setModalShowPreencher] = useState(false);
    const { token, setToken } = useContext(UserContext);
    const { tipo, setTipo } = useContext(UserContext);

    const [cadastroMentorado, setCadastroMentorado] = useState({
        name: "",
        date: "",
        pass: "",
        email: "",
        confirmPass: "",
        cpf: "",
        seg: "",
        contato: "",
        sexo: "",
        desc: "",
        _id: "",
    });
    useEffect(() => {
        if (token == null) {
            navigate("/");
        }
    });
    useEffect(() => {
        axiosInstance.get('/auth/check').then((res) => {
            console.log(res.data)
            if (res.status == 202) {
                setCadastroMentorado({
                    name: res.data.user.name,
                    date: res.data.user.date,
                    email: res.data.user.email,
                    cpf: res.data.user.cpf,
                    seg: res.data.user.seg,
                    contato: res.data.user.contato,
                    sexo: res.data.user.sexo,
                    desc: res.data.user.desc
                })
            }

        })

    }, []);



    function submit(e) {
        e.preventDefault();

        axiosInstance.get('/auth/check').then((res) => {
            // console.log(res.data)
            if (res.status == 202) {
                cadastroMentorado._id = res.data.user._id;
                if (tipo === "mentorado") {
                    axiosInstance.put('/api/mentorado-data', cadastroMentorado).then((res) => {
                        console.log(res.status)
                    });
                }
                if (tipo === "mentor") {
                    axiosInstance.put('/api/mentor-data', cadastroMentorado).then((res) => {
                        console.log(res.status)
                    });
                }
            }

        });
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
                <p>Cadastrado com sucesso</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => { navigate("/") }}>Ir para página Inicial</Button>
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
                <p>Usuário não Criado, tente novamente mais tarde.</p>
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


    if (tipo === "mentorado") {
        return (
            <>
                <Navbar titulo={"Alterar Dados"} tipo={2} />
                <div className="container mx-auto pt-6 pb-2">
                    <div className="row justify-content-center">
                        <div className="card w-70 minimo-320">
                            <div className="container h-100 ">
                                <form action="" method="get" className="h-100 pb-3">
                                    <div className="row">
                                        <div className="col-lg">
                                            <div className="col-lg pt-2">
                                                <h2 className="text-center pb-2">Insira seus Dados</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg">
                                            <div className="form-floating">
                                                <input required type="email" value={cadastroMentorado.name} onChange={(e) => { setCadastroMentorado({ ...cadastroMentorado, name: e.target.value }) }} className="form-control" id="float-nome"
                                                    placeholder="Nome Completo" />
                                                <label htmlFor="float-nome">Nome Completo</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row pt-2">
                                        <div className="col-lg">
                                            <div className="form-floating">
                                                <input required type="email" value={cadastroMentorado.email} onChange={(e) => { setCadastroMentorado({ ...cadastroMentorado, email: e.target.value }) }} className="form-control" id="campo-email"
                                                    placeholder="nome@dominio.com" />
                                                <label htmlFor="campo-email" className="form-label">Email</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg pt-2">
                                            <div className="form-floating">
                                                <InputMask mask="999.999.999-99" required type="text" value={cadastroMentorado.cpf} onChange={(e) => { setCadastroMentorado({ ...cadastroMentorado, cpf: e.target.value }) }} className="form-control" id="campo-cpf"
                                                    placeholder="CPF" />
                                                <label htmlFor="campo-cpf" className="form-label">CPF</label>
                                            </div>
                                        </div>
                                        <div className="col-lg pt-2">
                                            <div className="form-floating">
                                                <Form.Select value={cadastroMentorado.sexo} onChange={(e) => { setCadastroMentorado({ ...cadastroMentorado, sexo: e.target.value }) }} className="form-select" id="float-genero" aria-label="Gênero">
                                                    <option value={null}>Selecione</option>
                                                    <option value="Masculino">Masculino</option>
                                                    <option value="Feminino">Feminino</option>
                                                    <option value="Não binário">Não binário</option>
                                                    <option value="Outros">Outros</option>
                                                    <option value="Prefiro não dizer">Prefiro não dizer</option>
                                                </Form.Select>
                                                <label htmlFor="float-genero">Gênero</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg pt-2">
                                            <div className="form-floating">
                                                <InputMask mask="(99) 9 9999-9999" value={cadastroMentorado.contato} required onChange={(e) => { setCadastroMentorado({ ...cadastroMentorado, contato: e.target.value }) }} type="text" placeholder="Contato" className="form-control"
                                                    id="campo-numero" />
                                                <label htmlFor="campo-numero" className="form-label">Contato</label>
                                            </div>
                                        </div>
                                        <div className="col-lg pt-2">
                                            <div className="form-floating">
                                                <InputMask mask="99/99/9999" value={cadastroMentorado.date} required onChange={(e) => { setCadastroMentorado({ ...cadastroMentorado, date: e.target.value }) }} type="text" className="form-control" id="float-date"
                                                    placeholder="Data de Nascimento" />
                                                <label htmlFor="float-date">Data de Nascimento</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg pt-2">
                                            <div className="form-floating">
                                                <textarea value={cadastroMentorado.desc} required onChange={(e) => { setCadastroMentorado({ ...cadastroMentorado, desc: e.target.value }) }} className="form-control" placeholder="Descrição Sobre Você" id="floatingTextarea"></textarea>
                                                <label htmlFor="floatingTextarea">Descrição Sobre Você</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row pt-2">
                                        <div className="col-lg">
                                            <div className="form-floating">
                                                <OverlayTrigger
                                                    trigger="focus"
                                                    key={"bottom"}
                                                    placement={"bottom"}
                                                    overlay={
                                                        <Popover id={`popover-positioned-bottom`}>
                                                            <Popover.Header as="h3">{`Atenção`}</Popover.Header>
                                                            <Popover.Body>
                                                                Guarde esse número para um possível esquecimento de senha.
                                                            </Popover.Body>
                                                        </Popover>
                                                    }
                                                >
                                                    <input value={cadastroMentorado.seg} required onChange={(e) => { setCadastroMentorado({ ...cadastroMentorado, seg: e.target.value }) }} type="number" className="form-control" id="campo-seguranca"
                                                        aria-describedby="seguranca-help" placeholder="Número de segurança" data-bs-toggle="popover"
                                                        data-bs-trigger="focus" title="Atenção" data-bs-content="Guarde esse número para um possível esquecimento de senha" />

                                                </OverlayTrigger>
                                                <label htmlFor="campo-seguranca" className="form-label">Número de segurança</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container pt-4 pb-2">
                                        <div className="text-center">
                                            <button className="w-50 minimo-140 btn btn-lg btn-primary" type="submit" onClick={submit}>Editar</button>
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }

}
