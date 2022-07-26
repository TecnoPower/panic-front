import { Navbar } from '../components/Navbar';
import React, { useContext } from 'react';
import { UserContext } from '../App';
import { Navigate } from 'react-router';
export const SenhaLog = () => {
    const { token, setToken } = useContext(UserContext);
    if (!token) {
        return <Navigate to='/' replace={true} />;
    }
    return (
        <>
            <Navbar titulo={"Alterar Senha"} tipo={2} />
            <div className="container mx-auto pt-3">
                <form action="" method="get">
                    <div className="row g-2 pt-2">
                        <div className="col-md">
                            <label htmlFor="campo-senha-atual" className="form-label">Senha Atual</label>
                            <input required type="password" className="form-control" id="campo-senha-atual" autoComplete='off' />
                        </div>
                    </div>
                    <div className="row g-2 pt-2">
                        <div className="col-md">
                            <label htmlFor="campo-senha1" className="form-label">Nova Senha</label>
                            <input required type="password" className="form-control" id="campo-senha1"  autoComplete='off'/>
                        </div>
                    </div>
                    <div className="row g-2 pt-2">
                        <div className="col-md">
                            <label htmlFor="campo-senha2" className="form-label">Nova Confirmar Senha</label>
                            <input required type="password" className="form-control" id="campo-senha2"  autoComplete='off'/>
                        </div>
                    </div>
                    <div className="container">
                        <p className="text-center">
                            <button className="btn btn-lg btn-primary mt-3" type="submit">Trocar Senha</button>
                        </p>
                    </div>
                </form>
            </div>
        </>
    )
}
