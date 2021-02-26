import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const contextData = useContext(ChallengesContext)

    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}> 
                    <header>Earn 400 xp</header>

                    <main>
                        <img src="icons/body.svg" alt="body"/>
                        <strong>New challenge</strong>
                        <p>Get up and take a 3 minute walk</p>
                    </main>

                    <footer>
                        <button 
                        type='button'
                        className={styles.challengeFailedButton}
                        >
                            Failed
                        </button>
                        <button 
                        type='button'
                        className={styles.challengeSucceededButton}
                        >
                            Completed
                        </button>
                    </footer>
                </div>
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