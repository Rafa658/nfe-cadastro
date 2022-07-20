import React, { useState } from "react";

import styles from './Home.module.css'

export default function HomeInfos() {

    const [validade, setValidade] = useState('')
    const [prazo, setPrazo] = useState('')
    const [dados, setDados] = useState('')

    return(
        <div className={styles.Infos}>
            <div className={styles.infoLinha}>
                <p style={{fontWeight: 'bold'}}>Validade da proposta:</p>
                <input
                        className={styles.Input}
                        type='text'
                        style={{width: '100px'}}
                        name='Validade da proposta'
                        placeholder='texto'
                        value={validade}
                        onChange={e => setValidade(e.target.value)}
                    />
            </div>
            <div className={styles.infoLinha}>
                <p style={{fontWeight: 'bold'}}>Prazo de pagamento:</p>
                <input
                        className={styles.Input}
                        type='text'
                        style={{width: '60%'}}
                        name='Prazo de pagamento'
                        placeholder='texto'
                        value={prazo}
                        onChange={e => setPrazo(e.target.value)}
                    />
            </div>
            <div className={styles.infoLinha}>
                <p style={{fontWeight: 'bold'}}>Dados bancários para depósito:</p>
                <input
                        className={styles.Input}
                        type='text'
                        style={{width: '60%'}}
                        name='Dados bancários para depósito'
                        placeholder='texto'
                        value={dados}
                        onChange={e => setDados(e.target.value)}
                    />
            </div>
        </div>
    )
}