import 'bootstrap/dist/css/bootstrap.css';
import '../css/aux-bootstrap.css';
export const NotFound404 = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-default mb-1">
            <div className="text-center">
                <h1 className="display-1 fw-bold text-white text-center text-xg">404</h1>
                <p className="fs-3 text-white"> <span className="text-danger">Opps!</span> Página não encontrada.</p>
                <p className="lead text-white">
                    A página que você está procurando não existe.
                </p>
                <button onClick={()=>{window.history.back()}} className="btn btn-dark text-center text-light">Voltar</button>
            </div>
        </div>
    )
}