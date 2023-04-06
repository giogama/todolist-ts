import { Check } from "@phosphor-icons/react";

import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Check size={32} weight="bold" />
            <strong>to<span>do</span></strong>
        </header>
    );
}