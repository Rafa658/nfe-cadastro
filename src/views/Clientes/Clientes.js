import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './Clientes.module.css'

const postUrl = 'http://localhost:4000/cadastro_clientes'
const findUrl = 'http://localhost:4000/listar'

export default function Cadastro() {

    const [nome, setNome] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [loc, setLoc] = useState('')
    const [clientes, setClientes] = useState([])

    useEffect(() => {
        getClientes()
    }, [])

    function cadastro() {
        setNome('')
        setCnpj('')
        setLoc('')

        axios
            .post(postUrl, { nome, cnpj, loc })
            .then(() => alert("Cadastro feito com sucesso"))
            .catch(err => {
                console.log(`
                Response: ${err.response}
                Request: ${err.request}
                Message: ${err.message}
            `)
            alert("Insira os dados do cliente")
            })
        
    }

    function getClientes() {
        axios
            .get(findUrl)
            .then(res => setClientes(res.data))
            .catch(err => console.log(`
                Response: ${err.response}
                Request: ${err.request}
                Message: ${err.message}
            `))
    }


    return (
        <div>
            <h1>Cadastrar Cliente</h1>
            <form method='POST' action="cadastro">
                <input
                    type="username"
                    name="nome"
                    placeholder="Nome Fantasia"
                    value={nome}
                    onChange={e => {
                        setNome(e.target.value)
                    }}
                />
                <input
                    type="text"
                    name="cnpj"
                    placeholder="CNPJ"
                    value={cnpj}
                    onChange={e => {
                        setCnpj(e.target.value)
                    }}
                />
                <input
                    type="text"
                    name="loc"
                    placeholder="Localização"
                    value={loc}
                    onChange={e => {
                        setLoc(e.target.value)
                    }}
                />
            </form>
            <div
                className={styles.btn}
                onClick={cadastro}
            >
                CADASTRAR
            </div>
            <table className={styles.Table}>
                <thead>
                    <tr>
                        <th>Nome Fantasia</th>
                        <th>CNPJ</th>
                        <th>Localização</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => {
                        return (
                            <tr>
                                <td>{cliente.nome}</td>
                                <td>{cliente.cnpj}</td>
                                <td>{cliente.loc}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}