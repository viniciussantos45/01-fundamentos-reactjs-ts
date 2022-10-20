import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css'
import cover from '../assets/cover.jpg'
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src={cover} className={styles.cover} />

            <div className={styles.profile}>
                <Avatar src='https://github.com/viniciussantos45.png' />

                <strong>Vinicius Gomes</strong>
                <span>Fullstack developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}