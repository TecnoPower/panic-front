import { Navbar } from '../components/Navbar';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../config/axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModalMsgPreenchimento, ModalCpf, ModalEmail, ModalErro, ModalMsgSenha, ModalSucesso } from '../components/Modal/Modal';
export const Home = () => {
    const { token, setToken } = useContext(UserContext);
    const { tipo, setTipo } = useContext(UserContext);
    const [mentores, setMentores] = useState([]);
    const [mentorados, setMentorados] = useState([]);
    const [modalShowErro, setModalShowErro] = useState(false);
    const [modalShowSucesso, setModalShowSucesso] = useState(false);
    let navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, []);

    useEffect(() => {
        if (tipo === "mentorado") {
            axiosInstance.get('/api/mentor').then((res) => {
                setMentores(res.data)
            });
            axiosInstance.get('/api/return/name').then((res) => {
                toast.success("Olá " + res.data.name, {
                    position: "bottom-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
        }
        if (tipo === "mentor") {
            axiosInstance.get('/api/mentoria').then((res) => {
                setMentorados(res.data)
            });
            axiosInstance.get('/api/return/name').then((res) => {
                toast.success("Olá " + res.data.name, {
                    position: "bottom-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
        }

    }, []);
    function conectar(_id_mentor) {
        axiosInstance.post('/api/mentoria', { _id_mentor }).then((res) => {
            if (res.status === 201) {
                setModalShowSucesso(true);
            } else {
                setModalShowErro(true);
            }
        }).catch((e) => {
            setModalShowErro(true);
        });
    }


    if (tipo === 'mentorado') {
        return (
            <>
                <Navbar tipo={2} />
                <ToastContainer
                    position="bottom-center"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div className="container mx-auto pt-3">

                    <div className="row row-cols-1 row-cols-md-2 g-4 pt-2">
                        {mentores.map((mentor) => (
                            <div className="col" key={mentor._id}>
                                <div className="card text-center max-height">
                                    <div className="card-header">
                                        {mentor.area}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{mentor.profissao}</h5>
                                        <h3 className="card-title">{mentor.name}</h3>
                                        <p className="card-text descricao-box">{mentor.desc}</p>
                                    </div>
                                    <div className="card-footer">
                                        <a className="btn btn-default cursorPointer w-80"
                                            onClick={() => conectar(mentor._id)}>Conectar</a>
                                    </div>
                                    <ModalErro
                                        show={modalShowErro}
                                        onHide={() => setModalShowErro(false)}
                                    />
                                    <ModalSucesso
                                        show={modalShowSucesso}
                                        onHide={() => setModalShowSucesso(false)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
    if (tipo === 'mentor') {
        return (
            <>
                <Navbar tipo={2} />
                <ToastContainer
                    position="bottom-center"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div className="container mx-auto pt-3">
                    <div className="bd-example">
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Contato</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mentorados.map((mentorado) => (

                                    <tr key={mentorado._id_mentorado}>
                                        <td>{mentorado.nome_mentorado}</td>
                                        <td>{mentorado.contato_mentorado}</td>
                                        <td>{mentorado.email_mentorado}</td>
                                    </tr>

                                ))}
                            </tbody>

                        </table>
                        <ModalErro
                            show={modalShowErro}
                            onHide={() => setModalShowErro(false)}
                        />
                        <ModalSucesso
                            show={modalShowSucesso}
                            onHide={() => setModalShowSucesso(false)}
                        />

                    </div></div>
            </>
        )
    }

}