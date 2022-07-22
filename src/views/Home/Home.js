import React, { useRef } from "react";
import HomeHeader from "./HomeHeader";
import HomeOrcamento from "./HomeOrcamento";
import HomeInfos from "./HomeInfos";
import HomeAssinaturas from "./HomeAssinaturas";
import HomeFooter from "./HomeFooter";
import ReactToPrint from "react-to-print";

import styles from './Home.module.css'

export default function Home() {

    const componentRef = useRef()
    return (
        <div>
            <ReactToPrint
                trigger={() => <div className={styles.btn} style={{marginTop: '1rem'}}>IMPRIMIR</div>}
                content={() => componentRef.current}
            />
            <div
                ref={componentRef}
                className={styles.imprimir}
            >
                <h1 className={styles.h1}>ORÇAMENTO DE VENDA 21/07/22</h1>
                <HomeHeader />
                <HomeOrcamento />
                <HomeInfos />
                <HomeAssinaturas />
                <HomeFooter/>
            </div>
        </div>
    )
}