import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src='https://github.com/Vitorrrocha.png' alt='Profile-image' />
            <div>
                <strong>Vitor Rocha</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}