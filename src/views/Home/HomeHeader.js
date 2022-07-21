import React, { useEffect, useState } from "react";
import axios from "axios";
import { Select, MenuItem } from "@mui/material";
import styles from './Home.module.css'

const findClientesUrl = 'http://localhost:4000/listar_clientes'

export default function HomeHeader() {

    const [clientes, setClientes] = useState([])
    const [cliente, setCliente] = useState('')
    const [ac, setAc] = useState('')

    useEffect(() => {
        getClientes()
    }, [])

    function getClientes() {
        axios
            .get(findClientesUrl)
            .then(res => setClientes(res.data))
            .catch(err => console.log(`
                Response: ${err.response}
                Request: ${err.request}
                Message: ${err.message}
            `))
    }

    return (
        <div className={styles.Home}>
            <div className={styles.header}>
                <div className={styles.selecionarCliente}>
                    <span className={styles.textoHeader}>Cliente:</span>
                    <Select
                        className={styles.selecionarClienteSelect}
                        style={{height: '1em'}}
                        defaultValue=''
                        onChange={e => setCliente(e.target.value)}
                    >
                        {
                            clientes.map((cl, index) => (
                                <MenuItem key={index} value={cl}> {cl.nome} </MenuItem>
                            ))
                        }
                    </Select>
                    <div className={styles.nomeEscondido}>{cliente.nome}</div>

                </div>
                <div className={styles.cnpjDoCliente}>
                    <span className={styles.textoHeader}>CNPJ:</span> {cliente.cnpj}
                </div   >
                <div className={styles.ac}>
                    <span className={styles.textoHeader}>A/C:</span>
                    {/* <span className={styles.textoHeader}>xxx</span> */}
                    <input
                        className={styles.Input}
                        type='text'
                        name='ac'
                        placeholder='texto'
                        value={ac}
                        onChange={e => setAc(e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.orcamento}></div>
            <div className={styles.infos}></div>
            <div className={styles.assinatura}></div>
        </div>
    )
}