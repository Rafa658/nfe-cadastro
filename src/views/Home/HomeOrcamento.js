import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Select, MenuItem } from '@mui/material'

import styles from './Home.module.css'

const findProdutosUrl = 'http://localhost:4000/listar_produtos'


export default function HomeOrcamento() {

    const [produtos, setProdutos] = useState([]) // todos os produtos cadastrados
    const [itens, setItens] = useState([]) // lista que vai ser impressa
    const [itemAdd, setItemAdd] = useState('')
    const [qtd, setQtd] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        getProdutos()
    }, [])

    useEffect(() => {
        setTotal(itens ? itens.reduce((soma, i) => soma + Number(i.total), 0) : 0)
    }, [itens])

    function getProdutos() {
        axios.
            get(findProdutosUrl)
            .then(res => {
                setProdutos(res.data)
            })
            .catch(err => console.log(`
                Response: ${err.response}
                Request: ${err.request}
                Message: ${err.message}
            `))
    }

    function adicionar() {
        setItens([...itens,
            {
                nome: itemAdd.nome,
                ncm_id: itemAdd.ncm_id,
                und: itemAdd.und,
                quant: qtd,
                unit: itemAdd.preco,
                total: qtd * itemAdd.preco
            }
        ])
    }

    return (
        <div className={styles.Orcamento}>
            <div className={`${styles.gridContainer} ${styles.row} ${styles.add}`}>
                <div></div>
                <div>
                    <Select
                        className={styles.selecionarClienteSelect}
                        style={{
                            height: '1.2em',
                            width: '100%',
                            textAlign: 'center'
                        }}
                        defaultValue=''
                        onChange={e => {
                            setItemAdd(e.target.value)
                            console.log(e.target.value)
                        }}
                    >
                        {
                            produtos.map((p, index) => (
                                <MenuItem key={index} value={p}> {p.nome} </MenuItem>
                            ))
                        }
                    </Select>

                </div>
                <div>{itemAdd.ncm_id}</div>
                <div>{itemAdd.und}</div>
                {/* <div>Row</div> */}
                <input
                    // className={styles.selecionarClienteSelect}
                    style={{
                        background: '#fff',
                        height: '1.5em'
                    }}
                    type="number"
                    name="precoAdd"
                    placeholder="Preço"
                    value={qtd}
                    onChange={e => {
                        setQtd(e.target.value)
                    }}
                />
                <div>{itemAdd.preco}</div>
                <div>{qtd * itemAdd.preco}</div>
            </div>
            <div
                className={`${styles.btn} ${styles.escondeImpressao}`}
                onClick={adicionar}
            >ADICIONAR
            </div>
            <div className={`${styles.header} ${styles.gridContainer}`}>
                <div className={`${styles.divHeader1}`}>ITEM</div>
                <div
                    className={`${styles.divHeader2}`}
                >DESCRIÇÃO</div>
                <div className={`${styles.divHeader3}`}>NCM</div>
                <div className={`${styles.divHeader4}`}>UND</div>
                <div className={`${styles.divHeader5}`}>QUANT</div>
                <div className={`${styles.divHeader6}`}>VALOR</div>
                <div className={`${styles.divHeader7}`}>UNIT</div>
                <div className={`${styles.divHeader8}`}>TOTAL</div>
            </div>
            {itens.map((i, index) => {
                return (
                    <div className={`${styles.row} ${styles.gridContainer}`}>
                        {/* Todo: função que adiciona mais um grid, com os valores de cd item */}
                        <div>{index + 1}</div>
                        <div>{i.nome}</div>
                        <div>{i.ncm_id}</div>
                        <div>{i.und}</div>
                        <div>{i.quant}</div>
                        <div>{i.unit.toFixed(2).replace('.',',')}</div>
                        <div>{i.total.toFixed(2).replace('.',',')}</div>
                    </div>
                )
            })}
            <div className={`${styles.gridContainer} ${styles.gridFooter}`}>
                <div>Total</div>
                {/* <div>Valor</div> */}
                <div>{total.toFixed(2).replace('.', ',')}</div>
            </div>
        </div>
    )
}