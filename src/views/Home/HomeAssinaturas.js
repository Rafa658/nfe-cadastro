import React, { useState, useRef, useEffect } from "react";

import styles from './Home.module.css'

export default function HomeAssinaturas() {

    const hoje = new Date()

    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    // implementação futura: definir cidade
    const [cidade, setCidade] = useState('')
    const [resp, setResp] = useState('')
    const [func, setFunc] = useState('')
    // const [width, setWidth] = useState(0)
    // const span = useRef()

    // useEffect(() => {
    //     setWidth(span.current.offsetWidth)
    //     console.log(span.current.offsetWidth)
    // }, [cidade])

    return (
        <div className={styles.Assinaturas}>
            <div className={styles.local}>
                {/* <input
                    className={styles.Input}
                    style={{width}}
                    type='text'
                    name='cidade'
                    placeholder='cidade'
                    value={cidade}
                    onChange={e => setCidade(e.target.value)}
                    ref={span}
                /> */}
                Fortaleza, {hoje.getDate()} de {meses[hoje.getMonth()]} de {hoje.getFullYear()}
            </div>
            <div className={styles.assinatura}>
                <div className={styles.nomeDoResponsavel}>
                    <input
                        className={styles.Input}
                        type='text'
                        name='resp'
                        placeholder='Responsável'
                        value={resp}
                        onChange={e => setResp(e.target.value)}
                    />
                </div>
                <div className={styles.funcaoDoResponsavel}>
                    <input
                        className={styles.Input}
                        type='text'
                        name='func'
                        placeholder='func'
                        value={func}
                        onChange={e => setFunc(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}