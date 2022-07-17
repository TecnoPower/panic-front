import '../css/aux-bootstrap.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export const CadastroMentorado = () => {
    return (

        <>
            <div className="background-gradient-1">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                    <a className="navbar-brand ps-4" href="#">
                        <img src="uploads/panic_no_padding.gif" alt="..." height="50" />
                    </a>
                    <ul className="nav justify-content-center pe-4">
                        <h2 className="text-light">Cadastro Mentorado</h2>
                    </ul>
                </nav>
                <div className="container overflow-auto pt-5 pb-3">
                    <div className='card'>
                        <div className="row row-cols-1 row-cols-lg-2 g-4 ">
                            <div className="container col">
                                <div className="card w-100 d-flex align-items-center justify-content-center position-relative h-100">
                                    <img src="uploads/moca.png" className="card-img" alt="..." />
                                    <div
                                        className="card d-flex align-items-center justify-content-center position-absolute w-100 h-100 opacity-50 bg-dark">
                                    </div>
                                    <div className="d-flex align-items-center position-absolute ps-2 pe-2 w-75">
                                        <h5 className="card-title position-relative text-center text-light justify-content-center">De acordo
                                            com uma pesquisa realizada pelo CPS (Cedaspy Professional School - rede de escolas de capacitação e profissionalização) durante a Expo CIEE 2019, 60% dos jovens ainda têm dúvida quanto ao futuro profissional.</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col pt-3">
                                <div className="container h-100">
                                    <form action="" method="get" className="h-100">
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
                                                    <input required type="email" className="form-control" id="float-nome"
                                                        placeholder="Nome Completo" />
                                                    <label htmlFor="float-nome">Nome Completo</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row pt-2">
                                            <div className="col-lg">
                                                <div className="form-floating">
                                                    <input required type="email" className="form-control" id="campo-email"
                                                        placeholder="nome@dominio.com" />
                                                    <label htmlFor="campo-email" className="form-label">Email</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg pt-2">
                                                <div className="form-floating">
                                                    <input required type="text" className="form-control" id="campo-cpf"
                                                        placeholder="CPF" />
                                                    <label htmlFor="campo-cpf" className="form-label">CPF</label>
                                                </div>
                                            </div>
                                            <div className="col-lg pt-2">
                                                <div className="form-floating">
                                                    <select className="form-select" id="float-genero" aria-label="Gênero">
                                                        <option disabled>Selecione</option>
                                                        <option value="Homem">Homem</option>
                                                        <option value="Mulher">Mulher</option>
                                                        <option value="Não binário">Não binário</option>
                                                        <option value="Outros">Outros</option>
                                                        <option value="Prefiro não dizer">Prefiro não dizer</option>
                                                    </select>
                                                    <label htmlFor="float-genero">Gênero</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg pt-2">
                                                <div className="form-floating">
                                                    <input required type="text" placeholder="WhatsApp" className="form-control"
                                                        id="campo-numero" />
                                                    <label htmlFor="campo-numero" className="form-label">WhatsApp</label>
                                                </div>
                                            </div>
                                            <div className="col-lg pt-2">
                                                <div className="form-floating">
                                                    <input required type="text" className="form-control" id="float-date"
                                                        placeholder="Data de Nascimento" />
                                                    <label htmlFor="float-date">Data de Nascimento</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg pt-2">
                                                <div className="form-floating">
                                                    <input required type="password" placeholder="Senha" className="form-control"
                                                        id="campo-senha1" />
                                                    <label htmlFor="campo-senha1" className="form-label">Senha</label>
                                                </div>
                                            </div>
                                            <div className="col-lg pt-2">
                                                <div className="form-floating">
                                                    <input required type="password" placeholder="Repetir Senha" className="form-control"
                                                        id="campo-senha2" />
                                                    <label htmlFor="campo-senha2" className="form-label">Repetir Senha</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row pt-2">
                                            <div className="col-lg">
                                                <div className="form-floating">
                                                    <OverlayTrigger
                                                        trigger="focus"
                                                        key={"right"}
                                                        placement={"right"}
                                                        overlay={
                                                            <Popover id={`popover-positioned-right`}>
                                                                <Popover.Header as="h3">{`Atenção`}</Popover.Header>
                                                                <Popover.Body>
                                                                    Guarde esse número para um possível esquecimento de senha.
                                                                </Popover.Body>
                                                            </Popover>
                                                        }
                                                    >
                                                        <input required type="number" className="form-control" id="campo-seguranca"
                                                            aria-describedby="seguranca-help" placeholder="Número de segurança" data-bs-toggle="popover"
                                                            data-bs-trigger="focus" title="Atenção" data-bs-content="Guarde esse número para um possível esquecimento de senha" />

                                                    </OverlayTrigger>
                                                    <label htmlFor="campo-seguranca" className="form-label">Número de segurança</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container pt-4 pb-2">
                                            <div className="text-center">
                                                <button className="w-50 btn btn-lg btn-primary" type="submit">Cadastrar</button>
                                            </div>
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
