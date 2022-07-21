import { Navbar } from '../components/Navbar';
export const Mentor = () => {
    return (
        <>

            <Navbar tipo={2} />

            <div className="container mx-auto pt-3">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Nome" aria-label="Search" />
                    <button className="btn btn-outline-primary" type="submit">Pesquisar</button>
                </form>
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
