import React, { useState, useEffect } from "react";
import Select from "react-select-virtualized";
import axios from "axios";

import styles from './Produtos.module.css'
import './SelectFix.css'

const postUrl = 'http://localhost:4000/cadastro_produtos'
const findUrl = 'http://localhost:4000/listar_produtos'

export default function Produtos() {

    const customStyles = {
        control: (base, state) => ({
            ...base,
            height: '48px',
            background: "#e3caf7",
            // match with the menu
            borderRadius: 0,
            // Overwrittes the different states of border
            borderColor: '#fff',
            // Removes weird border around container
            boxShadow: 0
        }),
        menu: base => ({
            ...base,
            // override border radius to match the box
            borderRadius: 0,
            // kill the gap
            marginTop: 0
        }),
        menuList: base => ({
            ...base,
            // kill the white space on first and last option
            padding: 0,
        })
    };

    const ncm_api_url = 'http://localhost:4000/ncm'

    const [nome, setNome] = useState('')
    const [ncm, setNcm] = useState('')
    const [ncm_id, setNcm_id] = useState('')
    const [und, setUnd] = useState('')
    const [preco, setPreco] = useState('')
    const [lista, setLista] = useState(null)

    function handleNcmChange(e){
        // console.log(e.value)
        setNcm(e.value)
        setNcm_id(e.ncm_id)
    }

    useEffect(() => {
        getLista()
    }, [])

    function cadastro() {
        setNome('')
        setNcm('')
        setNcm_id('')
        setUnd('')
        setPreco('')


        console.log(nome, ncm, und, preco)
        axios
            .post(postUrl, { nome, ncm, ncm_id, und, preco })
            .then(() => alert("Cadastro feito com sucesso"))
            .catch(err => {
                console.log(`
                Response: ${err.response}
                Request: ${err.request}
                Message: ${err.message}
            `)
                alert("Insira os dados do produto")
            })
    }

    function getLista() {
        axios
            .get(ncm_api_url)
            .then(res => {
                setLista(res.data.dados)
            })
            .catch(err => console.log(`
                Response: ${err.response}
                Request: ${err.request}
                Message: ${err.message}
            `))

    }

    return (
        <div>
            <h1>Cadastrar Produtos</h1>
            <form method='POST' action="cadastro">
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome do Produto"
                    value={nome}
                    onChange={e => {
                        setNome(e.target.value)
                    }}
                />
                {!lista && 
                <input
                    type="text"
                    placeholder="NCM"
                />}
                {lista &&
                    <div>
                        <Select
                            placeholder='NCM'
                            className={styles.ncm}
                            classNamePrefix='ncm'
                            styles={customStyles}
                            onChange={handleNcmChange}
                            options={lista}
                        />
                    </div>}
                <select
                    required
                    value={und}
                    id='und'
                    onChange={e => {
                        setUnd(e.target.value)
                    }}
                >
                    <option
                        disabled
                        value=''
                    >Tipo de unidade</option>
                    <option
                        value='pct'
                    >Pct</option>
                    <option
                        value='gal'
                    >Gal</option>
                    <option
                        value='un'
                    >Un</option>
                </select>
                <input
                    type="text"
                    name="preco"
                    placeholder="Preço Unitário"
                    value={preco}
                    onChange={e => {
                        setPreco(e.target.value)
                    }}
                />
            </form>
            <div
                className={styles.btn}
                onClick={cadastro}
            >
                CADASTRAR
            </div>
        </div>
    )
}