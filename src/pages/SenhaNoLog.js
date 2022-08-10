import { Navbar } from '../components/Navbar';
import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../App';
import { axiosInstance } from '../config/axios';
import { useNavigate } from 'react-router-dom';
import { ModalMsgPreenchimento, ModalCpf, ModalEmail, ModalErro, ModalMsgSenha, ModalSucesso } from '../components/Modal/Modal';
export const SenhaNoLog = () => {
    const [modalShowSenha, setModalShowSenha] = useState(false);
    const [modalShowErro, setModalShowErro] = useState(false);
    const [modalShowSucesso, setModalShowSucesso] = useState(false);
    const [modalShowPreencher, setModalShowPreencher] = useState(false);
    const { token, setToken } = useContext(UserContext);
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate("/home");
        }
    }, []);

    const [troca, setTroca] = useState({
        confirmPass: "",
        pass: "",
        email: "",
        seg: "",
        _id: "",
    });

    function submit(e) {
        e.preventDefault();

        if (troca.confirmPass === "" ||
            troca.pass === "" ||
            troca.email === "" ||
            troca.seg === "") {
            setModalShowPreencher(true)
        } else {
            if (troca.pass !== troca.confirmPass) {
                setModalShowSenha(true);
            } else {
                axiosInstance.post("/auth/senha", troca).then((res) => {
                    troca._id = res.data.user._id;
                    if (res.status === 202) {
                        if (res.data.user.tipo === "mentor") {
                            axiosInstance.put("/api/mentor", troca).then((res) => {
                                if (res.status === 202) {
                                    //senha alterada com sucesso
                                    setModalShowSucesso(true);
                                }
                            });
                        }
                        if (res.data.user.tipo === "mentorado") {
                            axiosInstance.put("/api/mentorado", troca).then((res) => {
                                if (res.status === 202) {
                                    //senha alterada com sucesso
                                    setModalShowSucesso(true);
                                }
                            });
                        }
                    } else {
                        setModalShowErro(true);
                    }
                })
            }
        }

    }

    return (
        <>
            <Navbar titulo={"Esqueci minha senha"} tipo={1} />
            <div className="container mx-auto pt-6">
                <div className="row justify-content-center">
                    <div className="card w-50 minimo-320">
                        <h1 className='pt-2 pb-2 text-center'>Insira seus Dados</h1>
                        <form action="" method="get" >
                            <div className="row g-2 pt-2">
                                <div className="col-md form-floating">
                                    <input value={troca.email} onChange={(e) => { setTroca({ ...troca, email: e.target.value }) }} required type="email" className="form-control" id="campo-email"
                                        placeholder="nome@dominio.com" />
                                    <label htmlFor="campo-email" className="form-label">Email</label>
                                </div>
                            </div>
                            <div className="row g-2 pt-2">
                                <div className="col-md form-floating">
                                    <input value={troca.seg} onChange={(e) => { setTroca({ ...troca, seg: e.target.value }) }} required type="number" className="form-control" id="campo-seguranca"
                                        aria-describedby="seguranca-help" placeholder="Número de Segurança" />
                                    <label htmlFor="campo-seguranca" className="form-label">Número de segurança</label>
                                    <div id="seguranca-help" className="form-text"><b>Esse número foi solicitado no cadastro.</b>
                                    </div>
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
                                    <button className="btn btn-lg btn-default mt-3" onClick={submit} type="submit">Trocar Senha</button>
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
