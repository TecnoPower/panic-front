import { Navbar } from '../components/Navbar';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../config/axios';
export const Home = () => {
    const { token, setToken } = useContext(UserContext);
    const { tipo, setTipo } = useContext(UserContext);
    const [mentor, setMentor] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, []);

    useEffect(() => {
        if (tipo === "mentorado") {
            axiosInstance.get('/api/mentor').then((res) => {
                const response = res;
                setMentor(res.data)
            });
        }
    }, []);
function teste(botao){
    console.log(botao)
}
    if (localStorage.getItem('tipo') == 'mentorado') {
        return (
            <>
                <Navbar tipo={2} />
                <div className="container mx-auto pt-3">
                    <div className="row row-cols-1 row-cols-md-2 g-4 pt-2">
                        {mentor.map((row) => (
                            <div className="col" key={row._id}>
                                <div className="card text-center max-height">
                                    <div className="card-header">
                                        {row.area}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{row.profissao}</h5>
                                        <h3 className="card-title">{row.name}</h3>
                                        <p className="card-text">{row.desc}</p>
                                    </div>
                                    <div className="card-footer">
                                    <a className="btn btn-default cursorPointer w-80" value={row._id}
                                    onClick={()=>teste(row._id)}>Conectar</a>
                                    </div>
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
                        <button className="btn btn-lg btn-default mt-3" type="submit">Desvincular Conexão</button>
                    </p>
                </div>
            </>
        )
    }

}