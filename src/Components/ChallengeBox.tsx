import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={''}> </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Finish a cycle to receive a challenge</strong>
                <p>
                    <img src="icons/Level-up.svg" alt="Level up"/>
                    Level up by completing challenges
                </p>
            </div>
            )}
        </div>
    )
}