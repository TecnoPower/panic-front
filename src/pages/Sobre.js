import { Navbar } from '../components/Navbar';
import React from 'react';
export const Sobre = () => {
    return (
        <>
            <Navbar titulo={"Sobre Nós"} tipo={2} />
            <div className="mx-auto pt-5 pb-5">
                <h1 className="mb-3 text-center">Sobre Nós: TecnoPower</h1>
                <div className="container w-65 minimo-320">
                    <div className="card">
                        <div className='d-flex align-items-center justify-content-center'>
                            <img src="uploads/danilo.webp" className="card-img-top minimo-fotos w-30" alt="..." /></div>
                        <div className="card-body">
                            <h3 className="card-title text-center">Danilo Ferreira</h3>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>
                        <div className="card-footer text-muted text-center">
                            <a href='https://www.linkedin.com/in/danilofdasilva/' rel="noreferrer" target="_blank" type="button" className="btn bg-none minimo-160-2 me-1 ms-1 mt-2 ">
                                <img src='https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white' alt="..."/>
                            </a>
                            <a href='https://github.com/daniloeb19/' rel="noreferrer" target="_blank" type="button" className="btn bg-none minimo-160-2 me-1 ms-1 mt-2  ">
                                <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' alt="..."/>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className='d-flex align-items-center justify-content-center'>
                            <img src="uploads/ghabryellen.webp" className="card-img-top minimo-fotos w-30" alt="..." /></div>
                        <div className="card-body">
                            <h3 className="card-title text-center">Ghabryellen Aleska</h3>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>
                        <div className="card-footer text-muted text-center">
                            <a href='https://www.linkedin.com/' rel="noreferrer" target="_blank" type="button" className="btn bg-none minimo-160-2 me-1 ms-1 mt-2">
                                <img src='https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white' alt="..."/>
                            </a>
                            <a href='https://github.com/' rel="noreferrer" target="_blank" type="button" className="btn bg-none minimo-160-2 me-1 ms-1 mt-2  ">
                                <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' alt="..."/>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className='d-flex align-items-center justify-content-center'>
                            <img src="uploads/paulo.webp" className="card-img-top minimo-fotos w-30" alt="..." /></div>
                        <div className="card-body">
                            <h3 className="card-title text-center">Paulo Vinícius</h3>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>
                        <div className="card-footer text-muted text-center">
                            <a href='https://www.linkedin.com/in/paulo-vinicius-65a48b234/' rel="noreferrer" target="_blank" type="button" className="btn bg-none minimo-160-2 me-1 ms-1 mt-2">
                                <img src='https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white' alt="..."/>
                            </a>
                            <a href='https://github.com/Paulvini' rel="noreferrer" target="_blank" type="button" className="btn bg-none minimo-160-2 me-1 ms-1 mt-2  ">
                                <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' alt="..."/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
