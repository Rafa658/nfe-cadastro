import React, { useState } from "react"

import styles from './Home.module.css'

export default function HomeFooter() {

    const [linha1, setLinha1] = useState('')
    const [linha2, setLinha2] = useState('')
    const [linha3, setLinha3] = useState('')

    return (
        <footer
            className={styles.Footer}
        >
            <div className={`${styles.assinatura} ${styles.footerWrap}`}>
                <div className={styles.footerLinha}>
                    <input
                        className={styles.Input}
                        type='text'
                        name='resp'
                        placeholder='Linha 1'
                        value={linha1}
                        onChange={e => setLinha1(e.target.value)}
                    />
                </div>
                <div className={styles.footerLinha}>
                    <input
                        className={styles.Input}
                        type='text'
                        name='func'
                        placeholder='Linha 2'
                        value={linha2}
                        onChange={e => setLinha2(e.target.value)}
                    />
                </div>
                <div className={styles.footerLinha}>
                    <input
                        className={styles.Input}
                        type='text'
                        name='func'
                        placeholder='Linha 3'
                        value={linha3}
                        onChange={e => setLinha3(e.target.value)}
                    />
                </div>
            </div>
        </footer>
    )
}