import { Navbar } from '../components/Navbar';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../config/axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
                //setMentores(res.data)
            });
        }
        if (tipo === "mentor") {
            axiosInstance.get('/api/mentoria').then((res) => {
               // setMentorados(res.data)
            });
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
                <p>Conexão Realizada com Sucesso.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Fechar</Button>
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
                <h4>Houve um probleminha</h4>
                <p>Talvez você já tenha uma conexão.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>);
    }
    if (localStorage.getItem('tipo') == 'mentorado') {
        return (
            <>
                <Navbar tipo={2} />
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
    if (localStorage.getItem('tipo') == 'mentor') {
        return (
            <>

                <Navbar tipo={2} />
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