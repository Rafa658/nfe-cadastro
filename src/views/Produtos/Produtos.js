import React, { useState, useEffect } from "react";

import styles from './Produtos.module.css'

import data from '../../data/tabela_ncm.json'

var nomenclaturas = data.Nomenclaturas
var ncm_tabela = []

nomenclaturas.forEach(e => {
    ncm_tabela.push(e.Descricao + ' ' + e.Codigo)
});

export default function Produtos() {

    const [nome, setNome] = useState('')
    const [ncm, setNcm] = useState('')
    const [und, setUnd] = useState('')
    const [preco, setPreco] = useState('')

    function cadastro() {
        console.log(nome, ncm, und, preco)
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
                {/* <select
                    required
                    name={ncm}
                    id='ncm'
                    onChange={e => {
                        setNcm(e.target.value)
                    }}
                >
                </select> */}
                <select
                    required
                    name={und}
                    id='und'
                    onChange={e => {
                        setUnd(e.target.value)
                    }}
                >
                    <option
                        disabled
                        selected
                        value=''
                    >Tipo de unidade</option>
                    <option
                        value='pct'
                    >Pct</option>
                    <option
                        value='gal'
                    >Gal</option>
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