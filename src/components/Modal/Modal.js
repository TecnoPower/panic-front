import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../config/axios';
import { Home } from '../../pages/Home';

export const ModalMensagem = (props) => {
    return (<Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Ops...
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Ocorreu um erro</h4>
            <p>Possívelmente sua senha atual não condiz com a armazenada no nosso banco de dados.</p>
        </Modal.Body>
        <Modal.Footer className='justify-content-center'>
            <Button className='w-80' onClick={props.onHide}>Fechar</Button>
        </Modal.Footer>
    </Modal>);
}

export const ModalMsgPreenchimento = (props) => {

    return (
        <Modal
            {...props}
            size="md"
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
            <Modal.Footer className='justify-content-center' >
                <Button className='w-80' onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    );
}
export const ModalServidor = (props) => {
    return (<Modal
        {...props}
        size="md"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Mensagem do Servidor:
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Perdão, não encontrei registro.</p>
            <p>Verifique login e senha.</p>
        </Modal.Body>
        <Modal.Footer className='justify-content-center' >
            <Button className='w-80' onClick={props.onHide}>Ok</Button>
        </Modal.Footer>
    </Modal>);
}
export const ModalCpf = (props) => {
    return (<Modal
        {...props}
        size="md"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Ops...
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>CPF Inválido</h4>
        </Modal.Body>
        <Modal.Footer className='justify-content-center'>
            <Button className='w-80' onClick={props.onHide}>Fechar</Button>
        </Modal.Footer>
    </Modal>);
}
export const ModalEmail = (props) => {
    return (<Modal
        {...props}
        size="md"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Ops...
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Email Inválido</h4>
        </Modal.Body>
        <Modal.Footer className='justify-content-center'>
            <Button className='w-80' onClick={props.onHide}>Fechar</Button>
        </Modal.Footer>
    </Modal>);
}
export const ModalSucesso = (props) => {
    let navigate = useNavigate();
    return (<Modal
        {...props}
        size="md"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
                Sucesso!
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Sucesso</h4>
            <p>Cadastrado com sucesso</p>
        </Modal.Body>
        <Modal.Footer className='justify-content-center'>
            <Button className='w-80' onClick={() => { navigate("/") }}>Ir para página Inicial</Button>
        </Modal.Footer>
    </Modal>);
}
export const ModalErro = (props) => {
    return (<Modal
        {...props}
        size="md"
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
            <p>Não foi possível processar a solicitação, tente novamente mais tarde.</p>
        </Modal.Body>
        <Modal.Footer className='justify-content-center'>
            <Button className='w-80' onClick={props.onHide}>Fechar</Button>
        </Modal.Footer>
    </Modal>);
}
export const ModalMsgSenha = (props) => {
    return (<Modal
        {...props}
        size="md"
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
        <Modal.Footer className='justify-content-center'>
            <Button className='w-80' onClick={props.onHide}>Fechar</Button>
        </Modal.Footer>
    </Modal>);
}
export const GenericModal = (props) => {
    return (<Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.titulo}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>{props.textbody}</p>
        </Modal.Body>
        <Modal.Footer className='justify-content-center'>
            <Button className='w-80' onClick={props.onHide}>Fechar</Button>
        </Modal.Footer>
    </Modal>);
}
export const GenericModalClose = (props) => {
    let navigate = useNavigate();
    return (
    <Modal
        {...props}
        size="md"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.titulo}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>{props.textbody}</p>
        </Modal.Body>
        <Modal.Footer className='justify-content-center'>
            <Button className='w-80' onClick={()=>navigate("/home")}>Fechar</Button>
        </Modal.Footer>
    </Modal>);
}