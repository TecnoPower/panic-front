import 'bootstrap/dist/css/bootstrap.css';
import '../css/aux-bootstrap.css';
export const NotFound404 = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-default mb-1">
            <div className="align-items-center justify-content-center text-center">
                <p className="display-1 fw-bold text-white text-center text-xg">404</p>
                <h4 className="display-1 fw-bold text-white text-center">Página não encontrada</h4>
                <a href="/" className="btn btn-dark text-center text-light">Voltar para página inicial</a>
            </div>
        </div>
    )
}