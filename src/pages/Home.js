import { Navbar } from '../components/Navbar';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../config/axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card } from '../components/Styles/Styles';
import { ModalErro, ModalSucesso, GenericModal } from '../components/Modal/Modal';
export const Home = ({themeToggler}) => {

    const { tipo, } = useContext(UserContext);
    const [mentores, setMentores] = useState([]);
    const [mentorias, setMentorias] = useState([]);
    const [modalShowErro, setModalShowErro] = useState(false);
    const [modalShowSucesso, setModalShowSucesso] = useState(false);
    const [modalShowGeneric, setModalShowGeneric] = useState(false);
    const [modalShowExcluirMentoria, setModalShowExcluirMentoria] = useState(false);
    const [reload, setReload] = useState(0);
    const toastId = React.useRef(null);

    const notify = (text) => toastId.current = toast(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token') === "" || localStorage.getItem('token') === null) {
            navigate("/");
        }
    }, [navigate]);

    useEffect(() => {
        try {
            if (tipo === "mentorado") {
                axiosInstance.get('/api/mentor').then((res) => {
                    setMentores(res.data)
                });
            }
            if (tipo === "mentor") {
                axiosInstance.get('/api/mentoria').then((res) => {
                    setMentorias(res.data)
                });

            }
        } catch (err) {

        }

    }, [reload, tipo]);

    const conectar = (_id_mentor) => {
        axiosInstance.post('/api/mentoria', { _id_mentor }).then((res) => {
            if (res.status === 201) {
                setModalShowGeneric(true);
            } else {
                setModalShowErro(true);
            }
        }).catch((e) => {
            setModalShowErro(true);
        });
    }
    const ModalExcluirMentoria = (props) => {
        return (
            <Modal
                {...props}
                size="md"
                backdrop="static"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Atenção
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Deseja realmente excluir essa mentoria?</p>
                </Modal.Body>
                <Modal.Footer className='justify-content-center'>
                    <div className='row'>
                        <div className='col'>
                            <Button onClick={props.onHide}>Cancelar</Button>
                        </div>
                        <div className='col'></div>
                        <div className='col'><Button onClick={() => {
                            axiosInstance.delete('/api/delete/mentoria/' + props._id).then((res) => {
                                if (res.status === 202) {
                                    setReload(oldKey => oldKey + 1);
                                    setModalShowExcluirMentoria(false);
                                    <>{notify("Excluída com Sucesso")}</>
                                } else {
                                    setModalShowExcluirMentoria(false);
                                    <>{notify("Erro ao Excluir")}</>
                                }
                            }).catch((error) => console.log(error))

                        }}>Excluir</Button>
                        </div>
                    </div>

                </Modal.Footer>
            </Modal>);
    }

    if (tipo === 'mentorado') {
        return (
            <>
                <Navbar tipo={2} themeToggler={themeToggler} />
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
                    {mentores.toString() === "" ?
                        <table className="table table-dark table-hover ">
                            <thead>
                                <tr className='text-center'>
                                    <th scope="col">Não há mentores no momento.</th>
                                </tr>
                            </thead>
                        </table>
                        :
                        <div className="row row-cols-1 row-cols-md-2 g-4 pt-2">

                            {mentores.map((mentor) => (
                                <div className="col mb-2" key={mentor._id}>
                                    <Card className="card text-center max-height">
                                        <div className="card-header">
                                            {mentor.area}
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{mentor.profissao}</h5>
                                            <h3 className="card-title">{mentor.name}</h3>
                                            <p className="card-text descricao-box text-center">{mentor.desc}</p>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-default cursorPointer w-80"
                                                onClick={() => conectar(mentor._id)}>Conectar</button>
                                        </div>
                                        <GenericModal
                                            show={modalShowErro}
                                            onHide={() => setModalShowErro(false)}
                                            titulo={"Ops"}
                                            textbody={"Você já possuí uma conexão"}
                                        />
                                        <ModalSucesso
                                            show={modalShowSucesso}
                                            onHide={() => setModalShowSucesso(false)}
                                        />
                                        <GenericModal
                                            show={modalShowGeneric}
                                            onHide={() => setModalShowGeneric(false)}
                                            titulo={"Sucesso!"}
                                            textbody={"Conectado com Sucesso"}

                                        />
                                    </Card>
                                </div>
                            ))
                            }
                        </div>
                    }
                </div>
            </>
        )
    }
    if (tipo === 'mentor') {
        return (
            <>
                <Navbar tipo={2} themeToggler={themeToggler} />
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
                <div className="ps-3 pe-3 mx-auto pt-4">

                    {mentorias.toString() === "" ?
                        <table className="table table-dark table-hover table-responsive">
                            <thead>
                                <tr className='text-center'>
                                    <th scope="col">Você ainda não possuí mentorias</th>
                                </tr>
                            </thead>
                        </table>
                        :
                        <div className='table-responsive'> <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Contato</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Deletar Conexão</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mentorias.map((mentoria) => (

                                    <tr key={mentoria._id_mentorado}>
                                        <td>{mentoria.nome_mentorado}</td>
                                        <td>{mentoria.contato_mentorado}</td>
                                        <td>{mentoria.email_mentorado}</td>
                                        <td className='text-left'>
                                            <button type="button" className="btn btn-default" onClick={() => setModalShowExcluirMentoria(true)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                </svg>
                                                <span className='ps-1'>Desconectar</span>
                                            </button>
                                        </td>
                                        <ModalExcluirMentoria
                                            _id={mentoria._id}
                                            show={modalShowExcluirMentoria}
                                            onHide={() => setModalShowExcluirMentoria(false)}
                                        />
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                            <ModalErro
                                show={modalShowErro}
                                onHide={() => setModalShowErro(false)} />
                            <ModalSucesso
                                show={modalShowSucesso}
                                onHide={() => setModalShowSucesso(false)} />
                        </div>
                    }
                </div>

            </>
        )
    }

}