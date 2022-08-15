import 'bootstrap/dist/css/bootstrap.css';
import '../css/aux-bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';
import { ContainerLoader } from './Styles/Styles';
export const Loader = () => {
    return (
        <ContainerLoader className="d-flex align-items-center justify-content-center vh-100" >
            <Spinner animation="border" className="text-default" role="status" style={{ width: "10rem", height: "10rem" }}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </ContainerLoader>
    );
}