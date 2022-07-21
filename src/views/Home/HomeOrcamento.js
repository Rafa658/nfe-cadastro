import React, { useEffect, useState } from "react";

import styles from './Home.module.css'

export default function HomeOrcamento() {

    const [itens, setItens] = useState([])

    useEffect(() => {
        setItens([...itens, {
            indice: 1,
            desc: 'Item 1',
            ncm: '100.10',
            und: 'gal',
            quant: 2,
            unit: 50,
            total: 100
        }])
    }, [])

    return (
        <div className={styles.Orcamento}>
            <div className={`${styles.gridContainer} ${styles.row} ${styles.add}`}>
                <div>Row</div>
                <div>Row</div>
                <div>Row</div>
                <div>Row</div>
                <div>Row</div>
                <div>Row</div>
                <div>Row</div>
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
            {itens.map(i => {
                return (
                    <div className={`${styles.row} ${styles.gridContainer}`}>
                        {/* Todo: função que adiciona mais um grid, com os valores de cd item */}
                        <div>{i.indice}</div>
                        <div>{i.desc}</div>
                        <div>{i.ncm}</div>
                        <div>{i.und}</div>
                        <div>{i.quant}</div>
                        <div>{i.unit}</div>
                        <div>{i.total}</div>
                    </div>
                )
            })}
            <div className={`${styles.gridContainer} ${styles.gridFooter}`}>
                <div>Total</div>
                <div>Valor</div>
            </div>
        </div>
    )
}