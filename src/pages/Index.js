import '../css/login.css';
import React, { useContext, useState } from 'react';
import { axiosInstance } from '../config/axios';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Container } from '../components/Styles/Styles';
import { Loader } from '../components/Loader';
import { ModalServidor, ModalMsgPreenchimento, ModalCadastros } from '../components/Modal/Modal';
export const Index = ({ setMode }) => {
    const { setToken } = useContext(UserContext);
    const { setTipo } = useContext(UserContext);
    const { setNome } = useContext(UserContext);
    const [modalShowModalServidor, setModalShowModalServidor] = useState(false);
    const [modalShowPreencher, setModalShowPreencher] = useState(false);
    const [modalCadastros, setModalCadastros] = useState(false);
    const [ready, setReady] = useState(false);
    let navigate = useNavigate();

    //Tirar delay do servidor no heroku
    useEffect(() => {
        async function startServer() {
            await axiosInstance.get('/').then((res) => {
                if (res.status === 200) {
                    setReady(true)
                } else {
                    startServer();
                }
            }).catch(() => {
            })
        }
        startServer();
    }, []);

    useEffect(() => {
        setMode("light");
    }, [setMode])
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate("/home");
        }
    }, [navigate]);

    const [login, setLogin] = useState({
        email: "",
        pass: ""
    });

    function submitLogin(e) {
        e.preventDefault();
        if (login.email === "" || login.pass === "") {
            setModalShowPreencher(true);
        } else {
            axiosInstance.post("/auth/login", login).then((res) => {
                console.log(res)
                if (res.status === 203) {
                    setModalShowModalServidor(true);
                } else {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('tipo', res.data.user.tipo);
                    localStorage.setItem('nome', res.data.user.name);
                    setToken(res.data.token);
                    setTipo(res.data.user.tipo);
                    setNome(res.data.user.name)
                    navigate("/home")
                }
            });
        }
    }
    return (
        <>
            {ready ?
                <>
                    <Container className="container form-login w-50">
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

                            <div className="text-center pt-3">
                                <button onClick={submitLogin}
                                    className="btn btn-default width-bt" type="submit">Entrar</button>
                            </div>
                        </form>
                        <div className="container">
                            <div className="text-center mt-2 pt-2">
                                <a className="link-dark cursorPointer" href="/senha-no-log">Esqueci minha senha</a>
                            </div>
                        </div>
                        <div className="d-grid gap-2 mx-auto pb-5">
                            <ModalServidor
                                show={modalShowModalServidor}
                                onHide={() => setModalShowModalServidor(false)}
                            />
                            <ModalMsgPreenchimento
                                show={modalShowPreencher}
                                onHide={() => setModalShowPreencher(false)}
                            />
                            <ModalCadastros
                                show={modalCadastros}
                                onHide={() => setModalCadastros(false)}
                            />
                            <p variant="primary" onClick={() => setModalCadastros(true)} className="link-dark text-center mt-2 cursorPointer text-decoration-underline">Não possui uma conta? Cadastre-se</p>
                        </div>
                    </Container>
                </>
                : <Loader />
            }
        </>
    )

}