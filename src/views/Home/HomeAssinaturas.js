import React, { useState } from "react";

import styles from './Home.module.css'

export default function HomeAssinaturas() {

    const hoje = new Date()

    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    const [cidade, setCidade] = useState('')

    return (
        <div className={styles.Assinaturas}>
            <div className={styles.local}>
                <input
                    className={styles.Input}
                    type='text'
                    name='cidade'
                    placeholder='cidade'
                    value={cidade}
                    onChange={e => setCidade(e.target.value)}
                />
                , {hoje.getDate()} de {meses[hoje.getMonth()]} de {hoje.getFullYear()}
            </div>
            <div className={styles.assinatura}>...</div>
        </div>
    )
}