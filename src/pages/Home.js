import { Navbar } from '../components/Navbar';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../config/axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Card, CardModal, Paragrafo, Text, ToastContainerStyled } from '../components/Styles/Styles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from '../components/Loader'
import { ModalErro, ModalSucesso, GenericModal } from '../components/Modal/Modal';
export const Home = ({ themeToggler }) => {

    const { tipo } = useContext(UserContext);
    const [mentores, setMentores] = useState([]);
    const [mentorias, setMentorias] = useState([]);
    const [modalShowErro, setModalShowErro] = useState(false);
    const [modalShowSucesso, setModalShowSucesso] = useState(false);
    const [modalShowGeneric, setModalShowGeneric] = useState(false);
    const [modalShowExcluirMentoria, setModalShowExcluirMentoria] = useState(false);
    const [reload, setReload] = useState(0);
    const [ready, setReady] = useState(false);
    const toastId = React.useRef(null);
    let navigate = useNavigate();
    const notify = (text) => toastId.current = toast(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    useEffect(() => {
        try {
            if (!localStorage.getItem('token')) {
                navigate("/");
            }
        } catch (error) {

        }
    }, [navigate]);

    useEffect(() => {
        try {
            if (tipo === "mentorado") {
                axiosInstance.get('/api/mentor').then((res) => {
                    setMentores(res.data)
                    setReady(true);
                });
            }
            if (tipo === "mentor") {
                axiosInstance.get('/api/mentoria').then((res) => {
                    setMentorias(res.data)
                    setReady(true);
                });
            }
        } catch (err) {

        } finally {
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
                <CardModal>
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
                            <div className='col'>
                                <Button className='btn-danger' onClick={() => {
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
                </CardModal>
            </Modal>);
    }
    if (tipo === 'mentorado') {
        return (
            <>
                {ready ?
                    <>
                        <Navbar titulo={"Home"} tipo={2} themeToggler={themeToggler} />
                        <ToastContainerStyled
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
                                <Text className="fs-1 text-center mt-5 fw-bold">Não há mentores no momento</Text>
                                :
                                <div className="row row-cols-1 row-cols-md-2 g-4 pt-2">

                                    {mentores.map((mentor) => (
                                        <div className="col mb-2" key={mentor._id}>
                                            <Card className="card text-center max-height">
                                                <div className="card-header fw-bold">
                                                    {mentor.area}
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{mentor.profissao}</h5>
                                                    <h3 className="card-title">{
                                                        mentor.name.split(' ').slice(0, 1) + " " + mentor.name.split(' ').slice(mentor.name.split(' ').length - 1, mentor.name.split(' ').length)
                                                    }</h3>
                                                    <p className="card-text descricao-box text-center">{mentor.desc}</p>
                                                </div>
                                                <div className="card-footer">
                                                    <button className="btn btn-default cursorPointer w-80 mt-1 mb-1"
                                                        onClick={() => conectar(mentor._id)}>Conectar</button>
                                                </div>
                                                <GenericModal
                                                    show={modalShowErro}
                                                    onHide={() => setModalShowErro(false)}
                                                    titulo={"Ops"}
                                                    textbody={"Você já possuí uma conexão"}
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
                    : <Loader />}
            </>
        )
    }
    if (tipo === 'mentor') {
        return (
            <>
                {ready ?
                    <>
                        <Navbar titulo={"Home"} tipo={2} themeToggler={themeToggler} />
                        <ToastContainerStyled
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

                        {mentorias.toString() === "" ?
                            <Text className="fs-1 text-center mt-5 fw-bold">Você ainda não possui mentorias</Text>
                            :
                            <div className='pt-6'>
                                {mentorias.map((mentoria) => (
                                    <div key={mentoria._id_mentorado} className="pt-6">
                                        <Card className="card text-center container minimo-320 w-50">
                                            <div className="card-body" >
                                                <h5 className="card-title">Mentoria</h5>
                                                <Paragrafo className="card-text">Nome: {mentoria.nome_mentorado}</Paragrafo>
                                                <Paragrafo className="card-text">Telefone: {mentoria.contato_mentorado}</Paragrafo>
                                                <Paragrafo className="card-text">E-mail: {mentoria.email_mentorado}</Paragrafo>
                                                <button type="button" className="btn btn-default me-2" onClick={() => setModalShowExcluirMentoria(true)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                    </svg>
                                                    <span>Desconectar</span>
                                                </button>
                                                <a href={`https://wa.me/55${mentoria.contato_mentorado}`} target='_blank' rel="noreferrer" className="btn btn-success text-light ms-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                                                    </svg>
                                                    <span>Whatsapp</span>
                                                </a>
                                            </div>
                                        </Card>
                                        <ModalExcluirMentoria
                                            _id={mentoria._id}
                                            show={modalShowExcluirMentoria}
                                            onHide={() => setModalShowExcluirMentoria(false)}
                                        />
                                    </div>
                                ))}

                                <ModalErro
                                    show={modalShowErro}
                                    onHide={() => setModalShowErro(false)} />
                                <ModalSucesso
                                    show={modalShowSucesso}
                                    onHide={() => setModalShowSucesso(false)} />
                            </div>
                        }
                    </>
                    : <Loader />}
            </>
        )
    }

}