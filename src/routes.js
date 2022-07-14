import React from "react"
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar/navbar"
import Home from "./views/Home/Home"
import Produtos from "./views/Produtos/Produtos"
import Clientes from "./views/Clientes/Clientes"

export default function RouterComponent() {

    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route
                        path='/'
                        element={<Home/>}
                    />
                    <Route
                        path='/produtos'
                        element={<Produtos/>}
                    />
                    <Route
                        path='/clientes'
                        element={<Clientes/>}
                    />
                </Routes>
            </div>
        </>
    )
}