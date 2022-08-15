import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { CardModal } from '../Styles/Styles';

export const ModalMensagem = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <CardModal>
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
            </CardModal>
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
            <CardModal>
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
            </CardModal>
        </Modal >
    );
}
export const ModalServidor = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <CardModal>
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
            </CardModal>
        </Modal>);
}
export const ModalCpf = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <CardModal>
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
            </CardModal>
        </Modal>);
}
export const ModalEmail = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <CardModal>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Ops...
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>E-mail Inválido</h4>
                </Modal.Body>
                <Modal.Footer className='justify-content-center'>
                    <Button className='w-80' onClick={props.onHide}>Fechar</Button>
                </Modal.Footer>
            </CardModal>
        </Modal>);
}
export const ModalSucesso = (props) => {
    let navigate = useNavigate();
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
            </CardModal>
        </Modal>);
}
export const ModalErro = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <CardModal>
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
            </CardModal>
        </Modal>);
}
export const ModalMsgSenha = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <CardModal>
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
            </CardModal>
        </Modal>);
}
export const GenericModal = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <CardModal>
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
            </CardModal>
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
            <CardModal>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.titulo}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{props.textbody}</p>
                </Modal.Body>
                <Modal.Footer className='justify-content-center'>
                    <Button className='w-80' onClick={() => navigate("/home")}>Fechar</Button>
                </Modal.Footer>
            </CardModal>
        </Modal >);
}

export const ModalCadastros = (props) => {
    return (
        <Modal {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <CardModal>
                <Modal.Header closeButton>
                    <Modal.Title>Formas de Cadastro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <div className="row pt-2">
                            <div className="card" >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="uploads/profissional.png" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Para Profissionais</h5>
                                            <p className="card-text">Já tem uma área de atuação específica e gostaria de compartilhar sua tragetória com alguém que pode ter os mesmos interesses que você? e que futuramente pode torna-se um colega de trabalho? Se sim, <a href="/cad-mentor" className='link-primary cursorPointer'>cadastre-se aqui</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="card" >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="uploads/moca.png" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Para Você</h5>
                                            <p className="card-text">Para você que está em pânico e não sabe ainda em qual carreira seguir, cadastre-se e procure um profissional na área que você deseja, para isso <a href="/cad-mentorado" className='link-primary cursorPointer'>cadastre-se aqui</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                </Modal.Body>
                <Modal.Footer className='justify-content-center' >
                    <Button className='w-80' onClick={props.onHide}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </CardModal>
        </Modal >
    )
}
