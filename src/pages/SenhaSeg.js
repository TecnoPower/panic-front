import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../config/axios';

import { useEffect } from 'react';
import { useState } from 'react';
export const SenhaSeg = () => {
    const [modalShowSenha, setModalShowSenha] = useState(false);
    const [modalShowErro, setModalShowErro] = useState(false);
    const [modalShowSucesso, setModalShowSucesso] = useState(false);
    const [modalShowPreencher, setModalShowPreencher] = useState(false);
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('tipo') != null) {
            navigate("/home");
        }
    });

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
            cadastro.seg === "" ||
            cadastro.desc === "") {
            setModalShowPreencher(true)
        } else {
            if (cadastro.pass != cadastro.confirmPass) {
                setModalShowSenha(true);
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
    return (
        <>
            <Navbar titulo={"Esqueci minha senha"} tipo={1} />
            <div className="container mx-auto pt-3">
                <form action="" method="get">
                    <div className="row g-2 pt-2">
                        <div className="row g-2">
                            <div className="col-md">
                                <label htmlFor="campo-email" className="form-label">Email</label>
                                <input required type="email" className="form-control" id="campo-email"
                                    placeholder="nome@dominio.com" />
                            </div>
                        </div>
                        <div className="row g-2 pt-2">
                            <div className="col-md">
                                <label htmlFor="campo-seguranca" className="form-label">Número de segurança</label>
                                <input required type="number" className="form-control" id="campo-seguranca"
                                    aria-describedby="seguranca-help" />
                                <div id="seguranca-help" className="form-text">Esse número foi solicitado no cadastro.
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <p className="text-center">
                                <button className="btn btn-lg btn-primary mt-3" type="submit">Verificar Autenticidade</button>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
