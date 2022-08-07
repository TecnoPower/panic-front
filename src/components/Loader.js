import 'bootstrap/dist/css/bootstrap.css';
import '../css/auxBootstrap.css';
import React, { useContext, useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
export const Loader = () => {
    return (
        <div className="border d-flex align-items-center justify-content-center vh-100" >
            <Spinner animation="border" className="text-default" role="status" style={{ width: "10rem", height: "10rem" }}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}