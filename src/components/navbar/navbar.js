import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <a href="/" className={styles.title}>NFe</a>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/clientes">Clientes</NavLink>
                </li>
                <li>
                    <NavLink to="/produtos">Produtos</NavLink>
                </li>
            </ul>
        </nav>
    )
}