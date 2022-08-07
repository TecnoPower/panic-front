import '../css/auxBootstrap.css';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { axiosInstance } from '../config/axios';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import validator from 'validator';
import CPF from 'cpf-check';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputMask from "react-input-mask";
import { UserContext } from '../App';
import { useContext } from 'react';
import { ModalMsgPreenchimento, ModalCpf, ModalEmail, ModalErro, ModalMsgSenha, ModalSucesso } from '../components/Modal/Modal';
export const CadastroMentor = () => {
    const [modalShowSenha, setModalShowSenha] = useState(false);
    const [modalShowErro, setModalShowErro] = useState(false);
    const [modalShowSucesso, setModalShowSucesso] = useState(false);
    const [modalShowPreencher, setModalShowPreencher] = useState(false);
    const [modalShowCpf, setModalShowCpf] = useState(false);
    const [modalShowEmail, setModalShowEmail] = useState(false);
    const { tipo, setTipo } = useContext(UserContext);
    let navigate = useNavigate();
    useEffect(() => {
        if (tipo) {
            navigate("/home");
        }
    }, []);
    const [cadastro, setCadastro] = useState({
        name: "",
        date: "",
        sexo: "",
        pass: "",
        confirmPass: "",
        email: "",
        area: "",
        profissao: "",
        cpf: "",
        contato: "",
        seg: "",
        desc: "",
        tipo: "mentor"
    });

    function submitCadastro(e) {
        e.preventDefault();
        cadastro.cpf = cadastro.cpf.replaceAll("-", "").replaceAll(".", "");
        cadastro.date = cadastro.date.replaceAll("/", "").replaceAll("/", "");
        cadastro.contato = cadastro.contato.replaceAll("-", "").replaceAll("(", "")
            .replaceAll(")", "").replaceAll(" ", "");
        console.log(cadastro);
        if (cadastro.name === "" ||
            cadastro.date === "" ||
            cadastro.sexo === "" ||
            cadastro.pass === "" ||
            cadastro.confirmPass === "" ||
            cadastro.email === "" ||
            cadastro.area === "" ||
            cadastro.profissao === "" ||
            cadastro.cpf === "" ||
            cadastro.contato === "" ||
            cadastro.contato.length < 11 ||
            cadastro.seg === "" ||
            cadastro.desc === "") {
            setModalShowPreencher(true)
        } else {
            if (cadastro.pass !== cadastro.confirmPass) {
                setModalShowSenha(true);
            } else {
                if (CPF.validate(cadastro.cpf) === false) {
                    setModalShowCpf(true);
                } else {
                    if (validator.isEmail(cadastro.email) === false) {
                        setModalShowEmail(true);
                    } else {
                        axiosInstance.post("/api/mentor", cadastro).then((res) => {
                            console.log(res)
                            if (res.status === 201) {
                                setModalShowSucesso(true)
                            } else {
                                setModalShowErro(true);
                            }
                        })
                    }
                }
            }
        }

    }

    return (
        <>
            <Navbar titulo={"Cadastro Mentor"} tipo={1} />
            <div className="background-gradient-1 ">
                <div className="container overflow-auto pt-5 pb-3">
                    <div className='card'>
                        <div className="row row-cols-1 row-cols-lg-2 g-4 ">
                            <div className="container col">
                                <div className="card w-100 d-flex align-items-center justify-content-center position-relative h-100">
                                    <img src="uploads/panic.svg" className="card-img" alt="..." />
                                    <div
                                        className="card d-flex align-items-center justify-content-center position-absolute w-100 h-100 opacity-50 bg-dark">
                                    </div>
                                    <div className="d-flex align-items-center position-absolute ps-2 pe-2  w-75">
                                        <h5 className="card-title position-relative text-center text-light justify-content-center">De acordo
                                            com uma pesquisa realizada pelo CPS (Cedaspy Professional School - rede de escolas de capacitação e profissionalização) durante a Expo CIEE 2019, 60% dos jovens ainda têm dúvida quanto ao futuro profissional.</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col pt-2">
                                <div className="container h-100">
                                    <form action="" method="get" >
                                        <div className='d-sm-none d-md-none d-lg-none d-xl-block padding-buttom-3'></div>
                                        <div className="row">
                                            <div className="col-lg">
                                                <div className="col-lg">
                                                    <h2 className="text-center pb-2">Insira seus Dados</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg">
                                                <div className="form-floating">
                                                    <input value={cadastro.name} required onChange={(e) => { setCadastro({ ...cadastro, name: e.target.value }) }} type="text" className="form-control" id="float-nome"
                                                        placeholder="Nome Completo" />
                                                    <label htmlFor="float-nome">Nome Completo</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row pt-2">
                                            <div className="col-lg">
                                                <div className="form-floating">
                                                    <input value={cadastro.email} required onChange={(e) => { setCadastro({ ...cadastro, email: e.target.value }) }} type="email" className="form-control" id="campo-email"
                                                        placeholder="nome@dominio.com" />
                                                    <label htmlFor="campo-email" className="form-label">Email</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg pt-2">
                                                <div className="form-floating">
                                                    <InputMask mask="999.999.999-99" value={cadastro.cpf} required onChange={(e) => { setCadastro({ ...cadastro, cpf: e.target.value }) }} type="text" className="form-control" id="campo-cpf"
                                                        placeholder="CPF" />
                                                    <label htmlFor="campo-cpf" className="form-label">CPF</label>
                                                </div>
                                            </div>
                                            <div className="col-lg pt-2">
                                                <div className="form-floating">
                                                    <Form.Select onChange={(e) => { setCadastro({ ...cadastro, sexo: e.target.value }) }} className="form-select" id="float-genero" aria-label="Gênero">
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
                                                    <InputMask mask="(99) 9 9999-9999" value={cadastro.contato} required onChange={(e) => { setCadastro({ ...cadastro, contato: e.target.value }) }} type="text" placeholder="Contato" className="form-control"
                                                        id="campo-numero" />
                                                    <label htmlFor="campo-numero" className="form-label">Contato</label>
                                                </div>
                                            </div>
                                            <div className="col-lg pt-2">
                                                <div className="form-floating">
                                                    <InputMask mask="99/99/9999" value={cadastro.date} required onChange={(e) => { setCadastro({ ...cadastro, date: e.target.value }) }} type="text" className="form-control" id="float-date"
                                                        placeholder="Data de Nascimento" />
                                                    <label htmlFor="float-date">Data de Nascimento</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row pt-2">
                                            <div className="col-lg">
                                                <div className="form-floating">
                                                    <Form.Select onChange={(e) => { setCadastro({ ...cadastro, area: e.target.value }) }} className="form-select" id="select-area" aria-label="Área de Atuação">
                                                        <option value={null}>Selecione</option>
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
                                                    <input value={cadastro.profissao} required onChange={(e) => { setCadastro({ ...cadastro, profissao: e.target.value }) }} type="text" className="form-control"
                                                        placeholder="Informe sua profissão com mais detalhes"
                                                        id="campo-profissao" />
                                                    <label htmlFor="campo-profissao" className="form-label">Profissão</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg pt-2">
                                                <div className="form-floating">
                                                    <input value={cadastro.pass} required onChange={(e) => { setCadastro({ ...cadastro, pass: e.target.value }) }} type="password" placeholder="Senha" className="form-control"
                                                        id="campo-senha1" autoComplete='off' />
                                                    <label htmlFor="campo-senha1" className="form-label">Senha</label>
                                                </div>
                                            </div>
                                            <div className="col-lg pt-2">
                                                <div className="form-floating">
                                                    <input value={cadastro.confirmPass} required onChange={(e) => { setCadastro({ ...cadastro, confirmPass: e.target.value }) }} type="password" placeholder="Repetir Senha" className="form-control"
                                                        id="campo-senha2" autoComplete='off' />
                                                    <label htmlFor="campo-senha2" className="form-label">Repetir Senha</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg pt-2">
                                                <div className="form-floating">
                                                    <textarea maxLength="236" value={cadastro.desc} required onChange={(e) => { setCadastro({ ...cadastro, desc: e.target.value }) }} className="form-control px-130" placeholder="Descrição Sobre Você (Max 236 Caract)" id="floatingTextarea"></textarea>
                                                    <label htmlFor="floatingTextarea">Descrição Sobre Você (Max 236 Caract)</label>
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
                                                        <input value={cadastro.seg} required onChange={(e) => { setCadastro({ ...cadastro, seg: e.target.value }) }} type="text" className="form-control" id="campo-seguranca"
                                                            aria-describedby="seguranca-help" placeholder="Número de segurança" data-bs-toggle="popover"
                                                            data-bs-trigger="focus" title="Atenção" data-bs-content="Guarde esse número para um possível esquecimento de senha" />

                                                    </OverlayTrigger>
                                                    <label htmlFor="campo-seguranca" className="form-label">Número de segurança</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container pt-4 pb-2">
                                            <div className="text-center">
                                                <button className="w-50 minimo-140 btn btn-lg btn-default" type="submit" onClick={submitCadastro}>Cadastrar</button>
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
                                            <ModalCpf
                                                show={modalShowCpf}
                                                onHide={() => setModalShowCpf(false)}
                                            />
                                            <ModalEmail
                                                show={modalShowEmail}
                                                onHide={() => setModalShowEmail(false)}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
