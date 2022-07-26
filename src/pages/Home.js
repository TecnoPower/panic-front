import { Navbar } from '../components/Navbar';
import React, { useContext } from 'react';
import { UserContext } from '../App';
import { Navigate } from 'react-router';
export const Home = () => {
    const { token, setToken } = useContext(UserContext);
    if (!token) {
        return <Navigate to='/' replace={true} />;
    }
    if (localStorage.getItem('tipo')=='mentorado') {
        return (
            <>
                <Navbar tipo={2} />
                <div className="container mx-auto pt-3">
                    <div className="row row-cols-1 row-cols-md-2 g-4 pt-2">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a className="btn btn-primary cursorPointer">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a className="btn btn-primary cursorPointer">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a className="btn btn-primary cursorPointer">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a className="btn btn-primary cursorPointer">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    if (localStorage.getItem('tipo')=='mentor') {
        return (
            <>
    
                <Navbar tipo={2} />
    
                <div className="container mx-auto pt-3">
                    
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Email</th>
                                <th scope="col">Número</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Idade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark@gmail.com</td>
                                <td>00 0 00000000</td>
                                <td>Mark</td>
                                <td>17</td>
                            </tr>
                            <tr>
                                <td>Jacob@gmail.com</td>
                                <td>00 0 00000000</td>
                                <td>Jacob</td>
                                <td>23</td>
                            </tr>
                            <tr>
                                <td>Jacob@gmail.com</td>
                                <td>00 0 00000000</td>
                                <td>Jacob</td>
                                <td>19</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="container">
                    <p className="text-center">
                        <button className="btn btn-lg btn-primary mt-3" type="submit">Desvincular Conexão</button>
                    </p>
                </div>
            </>
        )
    }
    
}