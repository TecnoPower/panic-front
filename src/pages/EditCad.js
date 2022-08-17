import { Navbar } from '../components/Navbar';
import React, { useContext } from 'react';
import { UserContext } from '../App';
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
import { Loader } from '../components/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModalMsgPreenchimento, ModalErro, ModalMsgSenha } from '../components/Modal/Modal';
import { Card, CardModal, ToastContainerStyled } from '../components/Styles/Styles';
export const EditCad = ({ themeToggler }) => {
    let navigate = useNavigate();
    const [modalShowSenha, setModalShowSenha] = useState(false);
    const [modalShowErro, setModalShowErro] = useState(false);
    const [modalShowPreencher, setModalShowPreencher] = useState(false);
    const [modalShowDelete, setModalShowDelete] = useState(false);
    const { setToken } = useContext(UserContext);
    const { tipo, setTipo } = useContext(UserContext);
    const { setNome } = useContext(UserContext);
    const toastId = React.useRef(null);
    const [ready, setReady] = useState(false);
    const notify = (text) => toastId.current = toast.success(text);

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/");
        }
    }, [navigate]);

    const [cadastroMentor, setCadastroMentor] = useState({
        name: "",
        date: "",
        sexo: "",
        email: "",
        area: "",
        profissao: "",
        cpf: "",
        contato: "",
        seg: "",
        desc: "",
        _id: "",
    });
    const [cadastroMentorado, setCadastroMentorado] = useState({
        name: "",
        date: "",
        email: "",
        cpf: "",
        seg: "",
        contato: "",
        sexo: "",
        desc: "",
        _id: "",
    });

    useEffect(() => {
        if (localStorage.getItem('token')) {
            axiosInstance.get('/auth/check').then((res) => {

                if (res.status === 202) {
                    if (res.data.user.tipo === "mentorado") {
                        setCadastroMentorado({ ...res.data.user })
                        setReady(true);
                    }
                    if (res.data.user.tipo === "mentor") {
                        setCadastroMentor({ ...res.data.user });
                        setReady(true);
                    }
                }

            })
        }
    }, []);

    function submitMentor(e) {
        e.preventDefault();
        setCadastroMentor({
            ...cadastroMentor, cpf: cadastroMentor.cpf.replaceAll("-", "").replaceAll(".", ""),
            date: cadastroMentor.date.replaceAll("/", "").replaceAll("/", ""),
            contato: cadastroMentor.contato.replaceAll("-", "").replaceAll("(", "")
                .replaceAll(")", "").replaceAll(" ", "").replaceAll("_", ""),
        });
        if ((cadastroMentor.name,
            cadastroMentor.date,
            cadastroMentor.sexo,
            cadastroMentor.email,
            cadastroMentor.cpf,
            cadastroMentor.contato,
            cadastroMentor.seg,
            cadastroMentor.desc) === "" ||
            cadastroMentor.sexo === "Selecione" ||
            cadastroMentor.contato < 11) {
            setModalShowPreencher(true)
        } else {
            axiosInstance.get('/auth/check').then((res) => {
                if (res.status === 202) {
                    cadastroMentor._id = res.data.user._id;
                    axiosInstance.put('/api/mentor-data', cadastroMentor).then((res) => {
                        if (res.status === 200) {
                            <>{notify("Salvo com Sucesso!")}</>
                        } else {
                            setModalShowErro(true)
                        }
                    });

                }

            });
        }
    }



    function submitMentorado(e) {
        e.preventDefault();
        setCadastroMentorado({
            ...cadastroMentorado, cpf: cadastroMentorado.cpf.replaceAll("-", "").replaceAll(".", ""),
            date: cadastroMentorado.date.replaceAll("/", "").replaceAll("/", ""),
            contato: cadastroMentorado.contato.replaceAll("-", "").replaceAll("(", "")
                .replaceAll(")", "").replaceAll(" ", "").replaceAll("_", ""),
        });



        if ((cadastroMentorado.name,
            cadastroMentorado.date,
            cadastroMentorado.sexo,
            cadastroMentorado.email,
            cadastroMentorado.cpf,
            cadastroMentorado.contato,
            cadastroMentorado.seg,
            cadastroMentorado.desc) === "" ||
            cadastroMentorado.sexo === "Selecione" ||
            cadastroMentorado.contato < 11) {
            setModalShowPreencher(true)
        } else {
            axiosInstance.get('/auth/check').then((res) => {
                if (res.status === 202) {
                    //console.log(res)
                    cadastroMentorado._id = res.data.user._id;
                    axiosInstance.put('/api/mentorado-data', cadastroMentorado).then((res) => {
                        if (res.status === 200) {
                            axiosInstance.put("/api/mentoria-data", cadastroMentorado);
                            <>{notify("Salvo com Sucesso!")}</>
                        } else {
                            setModalShowErro(true)
                        }
                    });
                }

            });
        }
    }
    function deleteShowModal(e) {
        e.preventDefault();
        setModalShowDelete(true);
    }
    function ModalDelete(props) {
        let navigate = useNavigate();
        return (
            <Modal
                {...props}
                size="lg"
                backdrop="static"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <CardModal>
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Atenção!
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Deseja realmente excluir sua conta? Você perderá todo o acesso a nossa plataforma!</h4>
                    </Modal.Body>
                    <Modal.Footer className='justify-content-center'>
                        <div className='row'>
                            <div className='col'>
                                <Button onClick={props.onHide}>Cancelar</Button>
                            </div>
                            <div className='col'></div>
                            <div className='col'>
                                <Button className='btn-danger' onClick={() => {
                                    if (tipo === "mentor") {
                                        axiosInstance.delete('/api/delete/mentor', {
                                            headers: {
                                                "x-access-token": localStorage.getItem('token'),
                                                "content-type": "application/json"
                                            }
                                        }).then((res) => {
                                            if (res.status === 202) {
                                                axiosInstance.post('/api/delete/mentoria/mentor', {
                                                    headers: {
                                                        "x-access-token": localStorage.getItem('token'),
                                                        "content-type": "application/json"
                                                    }
                                                }).then((res) => {
                                                    console.log(res)
                                                    localStorage.removeItem('token');
                                                    localStorage.removeItem('tipo');
                                                    localStorage.removeItem('nome');
                                                    setToken("");
                                                    setTipo("");
                                                    setNome("");
                                                    navigate("/")
                                                })

                                            }
                                        });
                                    }

                                    if (tipo === "mentorado") {
                                        axiosInstance.delete('/api/delete/mentorado', {
                                            headers: {
                                                "x-access-token": localStorage.getItem('token'),
                                                "content-type": "application/json"
                                            }
                                        }).then((res) => {
                                            //  console.log(res);
                                            if (res.status === 202) {
                                                localStorage.removeItem('token');
                                                localStorage.removeItem('tipo');
                                                localStorage.removeItem('nome');
                                                setToken("");
                                                setTipo("");
                                                setNome("");
                                                navigate("/")
                                            }

                                        });
                                    }

                                }}> Deletar</Button>
                            </div>
                        </div>
                    </Modal.Footer>
                </CardModal>
            </Modal >);
    }


    if (tipo === "mentorado") {
        return (
            <>
                {ready ?
                    <>
                        <Navbar titulo={"Perfil"} tipo={2} themeToggler={themeToggler} />
                        <ToastContainerStyled
                            position="top-right"
                            autoClose={2500}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                        <div className="container mx-auto pt-6 pb-2">
                            <div className="row justify-content-center">
                                <Card className="card minimo-320 max-w-75 shadow-lg p-3 mb-5 bg-body rounded">
                                    <div className="container h-100 ">
                                        <form action="" method="get" className="h-100 pb-3">
                                            <div className="row">
                                                <div className="col-lg">
                                                    <div className="col-lg pt-2">
                                                        <h2 className="text-center pb-2">Atualize seus dados</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg">
                                                    <div className="form-floating">
                                                        <input required type="text" value={cadastroMentorado.name} onChange={(e) => { setCadastroMentorado({ ...cadastroMentorado, name: e.target.value }) }} className="form-control" id="float-nome"
                                                            placeholder="Nome Completo" />
                                                        <label htmlFor="float-nome">Nome Completo</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row pt-2">
                                                <div className="col-lg">
                                                    <div className="form-floating">
                                                        <input disabled required type="email" value={cadastroMentorado.email} onChange={(e) => { setCadastroMentorado({ ...cadastroMentorado, email: e.target.value }) }} className="form-control" id="campo-email"
                                                            placeholder="nome@dominio.com" />
                                                        <label htmlFor="campo-email" className="form-label">E-mail</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg pt-2">
                                                    <div className="form-floating">
                                                        <InputMask disabled mask="999.999.999-99" required type="text" value={cadastroMentorado.cpf} onChange={(e) => { setCadastroMentorado({ ...cadastroMentorado, cpf: e.target.value }) }} className="form-control" id="campo-cpf"
                                                            placeholder="CPF" />
                                                        <label htmlFor="campo-cpf" className="form-label">CPF</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg pt-2">
                                                    <div className="form-floating">
                                                        <Form.Select value={cadastroMentorado.sexo} onChange={(e) => { setCadastroMentorado({ ...cadastroMentorado, sexo: e.target.value }) }} className="form-select" id="float-genero" aria-label="Gênero">
                                                            <option value="">Selecione</option>
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
                                                        <InputMask mask="(99) 9 9999-9999" value={cadastroMentorado.contato} required onChange={(e) => { setCadastroMentorado({ ...cadastroMentorado, contato: e.target.value }) }} type="text" placeholder="Telefone" className="form-control"
                                                            id="campo-numero" />
                                                        <label htmlFor="campo-numero" className="form-label">Telefone</label>
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
                                                        <textarea maxLength="100" value={cadastroMentorado.desc} required onChange={(e) => { setCadastroMentorado({ ...cadastroMentorado, desc: e.target.value }) }} className="form-control px-80" placeholder="Descrição Sobre Você " id="floatingTextarea"></textarea>
                                                        <label htmlFor="floatingTextarea">Descrição Sobre Você </label>
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
                                                    <button className="w-50 minimo-170 btn btn-lg btn-default" onClick={submitMentorado}>Salvar</button>
                                                </div>
                                                <div className="text-center pt-2">
                                                    <button className="w-50 minimo-170 btn btn-lg btn-danger" onClick={deleteShowModal}>Deletar Conta</button>
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
                                                <ModalDelete
                                                    show={modalShowDelete}
                                                    onHide={() => setModalShowDelete(false)}
                                                />

                                            </div>
                                        </form>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </>
                    : <Loader />
                }
            </>
        )
    }
    if (tipo === "mentor") {
        return (
            <>
                {ready ?
                    <>
                        <ToastContainerStyled
                            position="top-right"
                            autoClose={2500}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                        <Navbar titulo={"Perfil"} tipo={2} themeToggler={themeToggler} />
                        <div className="container mx-auto pt-6 pb-2">
                            <div className="row justify-content-center">
                                <Card className="card minimo-320 max-w-75 shadow-lg p-3 mb-5 bg-body rounded">
                                    <div className="container h-100 ">
                                        <form action="" method="get" >
                                            <div className="row">
                                                <div className="col-lg">
                                                    <div className="col-lg pt-2">
                                                        <h2 className="text-center pb-2">Atualize seus dados</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg">
                                                    <div className="form-floating">
                                                        <input value={cadastroMentor.name} required onChange={(e) => { setCadastroMentor({ ...cadastroMentor, name: e.target.value }) }} type="text" className="form-control" id="float-nome"
                                                            placeholder="Nome Completo" />
                                                        <label htmlFor="float-nome">Nome Completo</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row pt-2">
                                                <div className="col-lg">
                                                    <div className="form-floating">
                                                        <input disabled value={cadastroMentor.email} required onChange={(e) => { setCadastroMentor({ ...cadastroMentor, email: e.target.value }) }} type="email" className="form-control" id="campo-email"
                                                            placeholder="nome@dominio.com" />
                                                        <label htmlFor="campo-email" className="form-label">Email</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg pt-2">
                                                    <div className="form-floating">
                                                        <InputMask disabled mask="999.999.999-99" value={cadastroMentor.cpf} required onChange={(e) => { setCadastroMentor({ ...cadastroMentor, cpf: e.target.value }) }} type="text" className="form-control" id="campo-cpf"
                                                            placeholder="CPF" />
                                                        <label htmlFor="campo-cpf" className="form-label">CPF</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg pt-2">
                                                    <div className="form-floating">
                                                        <Form.Select value={cadastroMentor.sexo} onChange={(e) => { setCadastroMentor({ ...cadastroMentor, sexo: e.target.value }) }} className="form-select" id="float-genero" aria-label="Gênero">
                                                            <option value="">Selecione</option>
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
                                                        <InputMask mask="(99) 9 9999-9999" value={cadastroMentor.contato} required onChange={(e) => { setCadastroMentor({ ...cadastroMentor, contato: e.target.value }) }} type="text" placeholder="Telefone" className="form-control"
                                                            id="campo-numero" />
                                                        <label htmlFor="campo-numero" className="form-label">Telefone</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg pt-2">
                                                    <div className="form-floating">
                                                        <InputMask mask="99/99/9999" value={cadastroMentor.date} required onChange={(e) => { setCadastroMentor({ ...cadastroMentor, date: e.target.value }) }} type="text" className="form-control" id="float-date"
                                                            placeholder="Data de Nascimento" />
                                                        <label htmlFor="float-date">Data de Nascimento</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row pt-2">
                                                <div className="col-lg">
                                                    <div className="form-floating">
                                                        <Form.Select value={cadastroMentor.area} onChange={(e) => { setCadastroMentor({ ...cadastroMentor, area: e.target.value }) }} className="form-select" id="select-area" aria-label="Área de Atuação">
                                                            <option value="">Selecione</option>
                                                            <option value="Linguística, Letras e Artes">Linguística, Letras e Artes
                                                            </option>
                                                            <option value="Ciências Sociais Aplicadas">Ciências Sociais Aplicadas
                                                            </option>
                                                            <option value="Ciências Humanas">Ciências Humanas</option>
                                                            <option value="Engenharias">Engenharias</option>
                                                            <option value="TI e Derivados">TI e Derivados</option>
                                                            <option value="Ciências da Saúde">Ciências da Saúde</option>
                                                            <option value="Ciências Biológicas">Ciências Biológicas</option>
                                                            <option value="Ciências Agrárias">Ciências Agrárias</option>
                                                        </Form.Select>
                                                        <label htmlFor="select-area">Área</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row pt-2">
                                                <div className="col-lg">
                                                    <div className="form-floating">
                                                        <input value={cadastroMentor.profissao} required onChange={(e) => { setCadastroMentor({ ...cadastroMentor, profissao: e.target.value }) }} type="text" className="form-control"
                                                            placeholder="Informe sua profissão com mais detalhes"
                                                            id="campo-profissao" />
                                                        <label htmlFor="campo-profissao" className="form-label">Profissão</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg pt-2">
                                                    <div className="form-floating">
                                                        <textarea maxLength="100" value={cadastroMentor.desc} required onChange={(e) => { setCadastroMentor({ ...cadastroMentor, desc: e.target.value }) }} className="form-control px-80" placeholder="Descrição Sobre Você " id="floatingTextarea"></textarea>
                                                        <label htmlFor="floatingTextarea">Descrição Sobre Você </label>
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
                                                                <Popover id={`popover-positioned-right`}>
                                                                    <Popover.Header as="h3">{`Atenção`}</Popover.Header>
                                                                    <Popover.Body>
                                                                        Guarde esse número para um possível esquecimento de senha.
                                                                    </Popover.Body>
                                                                </Popover>
                                                            }
                                                        >
                                                            <input value={cadastroMentor.seg} required onChange={(e) => { setCadastroMentor({ ...cadastroMentor, seg: e.target.value }) }} type="number" className="form-control" id="campo-seguranca"
                                                                aria-describedby="seguranca-help" placeholder="Número de segurança" data-bs-toggle="popover"
                                                                data-bs-trigger="focus" title="Atenção" data-bs-content="Guarde esse número para um possível esquecimento de senha" />

                                                        </OverlayTrigger>
                                                        <label htmlFor="campo-seguranca" className="form-label">Número de segurança</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container pt-4 pb-2">
                                                <div className="text-center">
                                                    <button className="w-50 minimo-170 btn btn-lg btn-default" type="submit" onClick={submitMentor}>Salvar</button>
                                                </div>
                                                <div className="text-center pt-2">
                                                    <button className="w-50 minimo-170 btn btn-lg btn-danger" onClick={deleteShowModal}>Deletar Conta</button>
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
                                                <ModalDelete
                                                    show={modalShowDelete}
                                                    onHide={() => setModalShowDelete(false)}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </>
                    : <Loader />
                }
            </>
        )
    }

}
