import { Navbar } from '../components/Navbar';
import React, { useState } from 'react';
import { Card, Text } from '../components/Styles/Styles';
import { Loader } from '../components/Loader';
export const Sobre = ({ themeToggler }) => {
    const [ready, setReady] = useState(false);
    setTimeout(() => {
        setReady(true);
    }, 500);

    return (
        <>
            {ready ?
                <>
                    {localStorage.getItem("token") ? <><Navbar titulo={"Sobre"} tipo={2} themeToggler={themeToggler} /></>
                        :<> <Navbar titulo={"Sobre"} tipo={1} themeToggler={themeToggler}/></>
                    }

                    <div className="mx-auto pt-5 pb-5">
                        <Text className="mb-3 text-center">Sobre: TecnoPower</Text>
                        <div className="container w-65 minimo-320">
                            <Card className="card mb-5">
                                <div className='d-flex align-items-center justify-content-center'>
                                    <img src="uploads/danilo.webp" className="card-img-top minimo-fotos w-30" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title text-center">Danilo Ferreira</h3>
                                    <h5 className='card-text container ps-2 pe-2'>Formado em Desenvolvimento de Sistemas pela Escola Técnica Estadual Miguel Batista.
                                    </h5>
                                    <h5 className='card-text container ps-2 pe-2'>Participante do programa START da
                                        <a href='https://www.redecidada.org.br/' rel="noreferrer" target="_blank" className='text-decoration-none'> Rede Cidadã </a>
                                        em parceria com a <a href='https://www.accenture.com/' rel="noreferrer" target="_blank" className='text-decoration-none acc-color'> Accenture Brasil, </a> onde tive a oportunidade
                                        de aprender diversas tecnologias, em especial Node.js, React e MongoDB.
                                    </h5>
                                    <h5 className='card-text container ps-2 pe-2'>Também possuo conhecimento nos frameworks MaterializeCSS e Bootstrap, Java com Framework Swing, PHP e SQL com MySQL Oracle.</h5>
                                </div>
                                {localStorage.getItem('theme') === "dark" ?
                                    <>
                                        <div className="text-center">
                                            <img className="w-50 minimo-card-280" alt='...' src="https://github-readme-stats.vercel.app/api?username=daniloeb19&show_icons=true&theme=discord_old_blurple&include_all_commits=true&count_private=true&hide_border=true" />
                                        </div>
                                        <div className="text-center">
                                            <img className="w-50 minimo-card-280" alt='...' src="https://github-readme-stats.vercel.app/api/top-langs/?username=daniloeb19&layout=compact&langs_count=71&theme=discord_old_blurple&hide_border=true" />
                                        </div>
                                    </> :
                                    <>
                                        <div className="text-center">
                                            <img className="w-50 minimo-card-280" alt='...' src="https://github-readme-stats.vercel.app/api?username=daniloeb19&show_icons=true&theme=default&include_all_commits=true&count_private=true&hide_border=true" />
                                        </div>
                                        <div className="text-center">
                                            <img className="w-50 minimo-card-280" alt='...' src="https://github-readme-stats.vercel.app/api/top-langs/?username=daniloeb19&layout=compact&langs_count=71&theme=default&hide_border=true" />
                                        </div>
                                    </>
                                }

                                <div className="card-footer text-muted text-center">
                                    <a href='https://www.linkedin.com/in/danilofdasilva/' rel="noreferrer" target="_blank" type="button" className="btn bg-none minimo-160-2 me-1 ms-1 mt-2 ">
                                        <img src='https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white' alt="..." />
                                    </a>
                                    <a href='https://github.com/daniloeb19/' rel="noreferrer" target="_blank" type="button" className="btn bg-none minimo-160-2 me-1 ms-1 mt-2  ">
                                        <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' alt="..." />
                                    </a>
                                </div>
                            </Card>
                            {/* <Card className="card mb-5">
                        <div className='d-flex align-items-center justify-content-center'>
                            <img src="uploads/ghabryellen.webp" className="card-img-top minimo-fotos w-30" alt="..." /></div>
                        <div className="card-body">
                            <h3 className="card-title text-center">Ghabryellen Aleska</h3>
                        </div>
                        <div className="card-footer text-muted text-center">
                            <a href='https://www.linkedin.com/' rel="noreferrer" target="_blank" type="button" className="btn bg-none minimo-160-2 me-1 ms-1 mt-2">
                                <img src='https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white' alt="..."/>
                            </a>
                            <a href='https://github.com/' rel="noreferrer" target="_blank" type="button" className="btn bg-none minimo-160-2 me-1 ms-1 mt-2  ">
                                <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' alt="..."/>
                            </a>
                        </div>
                    </Card>
                    <Card className="card mb-5">
                        <div className='d-flex align-items-center justify-content-center'>
                            <img src="uploads/paulo.webp" className="card-img-top minimo-fotos w-30" alt="..." /></div>
                        <div className="card-body">
                            <h3 className="card-title text-center">Paulo Vinícius</h3>
                        </div>
                        <div className="card-footer text-muted text-center">
                            <a href='https://www.linkedin.com/in/paulo-vinicius-65a48b234/' rel="noreferrer" target="_blank" type="button" className="btn bg-none minimo-160-2 me-1 ms-1 mt-2">
                                <img src='https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white' alt="..."/>
                            </a>
                            <a href='https://github.com/Paulvini' rel="noreferrer" target="_blank" type="button" className="btn bg-none minimo-160-2 me-1 ms-1 mt-2  ">
                                <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' alt="..."/>
                            </a>
                        </div>
                    </Card> */}
                        </div>
                    </div>
                </>
                : <Loader />
            }
        </>
    )
}
