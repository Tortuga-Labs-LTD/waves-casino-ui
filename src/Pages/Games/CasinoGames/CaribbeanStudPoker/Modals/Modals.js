import React, { useState, useEffect } from 'react';
import styles from  './Modals.module.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import clickSfx from "../../../../../assets/sounds/general/click.mp3";
import { Money } from '@waves/data-entities';

const closeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-x" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M10 10l4 4m0 -4l-4 4" />
    </svg>
);

const PayoutModal = (props) => {
    const [open, setOpen] = React.useState(false);
  
    return (
        <>
            <button className={styles.topButton} onClick={() => setOpen(true)}>
                Payouts
            </button>
    
            <Modal
            open={open}
            onClose={() => setOpen(false)}
            center
            classNames= {{
                overlay: 'customOverlay',
                modal: 'customModal'
            }}
            closeIcon={closeIcon}
            >
                <div className={styles.modalContainer}>
                    <h2 className={styles.modalHeader}>PAYOUT TABLE</h2>
                    <table className={styles.modalTable}>
                        <thead className={styles.modalTableHead}>
                            <tr>
                                <th className={styles.sideHeader}>BET</th>
                                <th className={styles.centerHeader}>WINNING HANDS</th>
                                <th className={styles.sideHeader}>PAYOUT</th>
                            </tr>
                        </thead>
                        <tbody className={styles.modalTableBody}>
                            <tr>
                                <td>ROYAL FLUSH</td>
                                <td>ACE, KING, QUEEN, JACK AND TEN ALL IN THE SAME SUIT</td>
                                <td>100 TO 1</td>
                            </tr>
                            <tr>
                                <td>STRAIGHT FLUSH</td>
                                <td>ONE SUIT IN A CONTINUOUS SEQUENCE</td>
                                <td>50 TO 1</td>
                            </tr>
                            <tr>
                                <td>FOUR OF A KIND</td>
                                <td>FOUR CARDS HAVING THE SAME FACE VALUE BUT IN DIFFERENT SUITS</td>
                                <td>20 TO 1</td>
                            </tr>
                            <tr>
                                <td>FULL HOUSE</td>
                                <td>A THREE OF A KIND AND A PAIR</td>
                                <td>7 TO 1</td>
                            </tr>
                            <tr>
                                <td>FLUSH</td>
                                <td>ALL FIVE CARDS WITH THE SAME SUIT</td>
                                <td>5 TO 1</td>
                            </tr>
                            <tr>
                                <td>STRAIGHT</td>
                                <td>CONTINUOUS SEQUENCE OF FIVE CARDS</td>
                                <td>4 TO 1</td>
                            </tr>
                            <tr>
                                <td>THREE OF A KIND</td>
                                <td>THREE CARDS HAVING THE SAME FACE VALUE BUT IN DIFFERENT SUITS</td>
                                <td>3 TO 1</td>
                            </tr>
                            <tr>
                                <td>TWO PAIR</td>
                                <td>TWO CARDS HAVING THE SAME FACE VALUE BUT IN DIFFERENT SUITS</td>
                                <td>2 TO 1</td>
                            </tr>
                            <tr>
                                <td>ALL OTHER</td>
                                <td>ANY OTHER WINNING HAND NOT EXPLAINED ABOVE</td>
                                <td>1 TO 1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Modal>
        </>
    );
};

const HowToModal = (props) => {
    const [open, setOpen] = React.useState(false);
  
    return (
        <>
            <button className={styles.topButton} onClick={() => setOpen(true)}>
                How to Play
            </button>
    
            <Modal
            open={open}
            onClose={() => setOpen(false)}
            center
            classNames= {{
                overlay: 'customOverlay',
                modal: 'customModal'
            }}
            closeIcon={closeIcon}
            >
                <div className={styles.modalContainer}>
                    <h2 className={styles.modalHeader}>HOW TO PLAY: CARIBBEAN STUD POKER</h2>
                    <p className={styles.modalText}>In Caribbean Stud Poker, the player begins by placing an Ante bet. After the Ante bet is placed, the dealer will deal out 5 cards to the player and dealer themselves, leaving 1 of the dealer’s cards face up. After evaluating your hand, the player must choose to either “Raise”, which is double the Ante bet, or Fold, which forfeits the Ante bet and ends the round. If the player chooses to raise, the dealer will then look at the full hand in front of them.</p>
                    <p className={styles.modalText}>To “open” their hand, the dealer MUST have at least an Ace-King or higher. The lowest possible qualifying dealer hand would be Ace-King-4-3-2.</p>
                    <p className={styles.modalText}>If the dealer can’t “open” their hand and the player has “Raised”, the player will get their original ante paid out 1-1. The player’s “Raise” is a push and returned to them.</p>
                    <p className={styles.modalText}>If the dealer can open their hand, the player has made the “Raise” and their hand is higher than the dealer’s hand, the player will be paid out:</p>
                    <ul>
                        <li>
                            <p className={styles.modalText}>The player’s Ante bet is paid out 1-1</p>
                        </li>
                        <li>
                            <p className={styles.modalText}>The player’s “Raise” is paid out according to a chart in the “Payouts” section (found by clicking on the “Payouts” button).</p>
                        </li>
                    </ul>
                    <p className={styles.modalText}>If the dealer’s hand is higher than the player's hand, the player will lose both the Ante bet and their "Raise".</p>
                </div>
            </Modal>
        </>
    );
};

const PlaceBetModal = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        if (props.soundOn) new Audio(clickSfx).play()
        setOpen(true)
    }
  
    return (
        <>
            <button className={styles.button} disabled={props.disabled} onClick={() => handleOpen()}>
                Place Bet
            </button>
    
            <Modal
            open={open}
            onClose={() => setOpen(false)}
            center
            classNames= {{
                overlay: 'customOverlay',
                modal: 'customModal'
            }}
            closeIcon={closeIcon}
            >
                <div className={styles.modalContainer}>
                    <h2 className={styles.modalHeader}>CONFIRM BETS</h2>
                    <div className={styles.modalBets}>
                        {Object.keys(props.bets).map((type, index) => {
                            return <p key={index}><strong>{type}:</strong> {props.bets[type].toFixed()} {props.asset.name}</p>
                        })}
                    </div>
                    <div className={styles.modalButtons}>
                        <button className={styles.modalConfirmButton} onClick={() => { props.playGame(); setOpen(false);}}>
                            Confirm Bets
                        </button>
                        <button className={styles.modalCancelButton} onClick={() => setOpen(false)}>
                            Cancel
                        </button>          
                    </div>
                </div>
            </Modal>
        </>
    );
};

const BetHistoryModal = (props) => {
    const [open, setOpen] = useState(false);
    const [userHistory, setUserHistory] = useState([])
    const [historyError, setHistoryError] = useState(false)

    useEffect(() => {
        const fetchUserHistory = async () => {
            const apiUrl = process.env.REACT_APP_APIURL
            const dappAddress = process.env.REACT_APP_CSP_ADDRESS
            try {
                const bets = await fetch(`${apiUrl}/CaribbeanStudPoker/${dappAddress}/addresses/${props.userAddress}/games`)
                const parsedBets = await bets.json()

                const filteredBets = []
                parsedBets.forEach(data => {
                    const game = data.id.split('_')[2]
                    const ante = data.state === 4 ?  new Money(data.amount / 3, props.asset).toFormat() : new Money(data.amount, props.asset).toFormat()
                    const raise = data.state === 4 ? new Money(data.amount * 2, props.asset).toFormat() : "N/A"
                    const dealer = data.dealerSortedCards != null ? data.dealerSortedCards.replaceAll('+', '-') : "N/A"
                    const player = data.playerSortedCards.replaceAll('+', '-')
                    const winnings = data.payout ? new Money(data.payout - data.amount, props.asset).toFormat() : 'N/A'
                    const status = data.state >= 4 ? 'Resolved' : 'Pending'
                    const txId = data.txId
                    const payoutTxId = data.payoutTxId

                    filteredBets.push(
                        {
                            game,
                            ante,
                            raise,
                            dealer,
                            player,
                            winnings,
                            status,
                            txId,
                            payoutTxId
                        }
                    )
                    
                });

                setUserHistory(filteredBets)

            } catch (error) {
                setHistoryError(error.message)
            }

        }

        fetchUserHistory()
        const interval = setInterval(() => {
            fetchUserHistory()
        }, 30000);
        return () => {
            clearInterval(interval);
        }
        }, [props.userAddress, props.asset])
    
    return (
        <>
            <button className={styles.topButton} onClick={() => setOpen(true)}>
                Bet History
            </button>
    
            <Modal
            open={open}
            onClose={() => setOpen(false)}
            center
            classNames= {{
                overlay: 'customOverlay',
                modal: 'customModal'
            }}
            closeIcon={closeIcon}
            >
                <div className={styles.modalContainer}>
                    <h2 className={styles.modalHeader}>Bet History</h2>
                    {historyError ? <h2>{historyError}</h2> :
                    <table className={styles.modalTable}>
                        <thead className={styles.modalTableHead}>
                            <tr>
                                <th>GAME</th>
                                <th>ANTE</th>
                                <th>RAISE</th>
                                <th>DEALER</th>
                                <th>PLAYER</th>
                                <th>WINNINGS</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody className={styles.modalTableBody}>
                                {userHistory.map((history, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{history.game}</td>
                                            <td>{history.ante}</td>
                                            <td>{history.raise}</td>
                                            <td>{history.dealer}</td>
                                            <td>{history.player}</td>
                                            <td>{history.winnings}</td>
                                            <td>{history.status}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>}
                </div>
            </Modal>
        </>
    );
}

const ResultModal = (props) => {
  
    return (
        <>
            <Modal
            open={true}
            onClose={() => props.close()}
            center
            classNames= {{
                overlay: 'customOverlay',
                modal: 'customModal'
            }}
            closeIcon={closeIcon}
            >
                <div className={styles.modalContainer}>
                    {props.won === 'won' && 
                        <div>
                            <h2 className={styles.resultHeader}>Congratulations!</h2>
                            <p className={styles.resultText}>You have won {Number(props.totalWon.toFormat(4))} WAVES</p>
                        </div>
                    }

                    {props.won === 'tie' && 
                        <div>
                            <h2 className={styles.resultHeader}>You Have Tied!</h2>
                            <p className={styles.resultText}>Your bet will be given back</p>
                        </div>
                    }

                    {props.won === 'lost' && 
                        <div>
                            <h2 className={styles.resultHeader}>You have lost</h2>
                            <p className={styles.resultText}>Better Luck Next Time!</p>
                        </div>
                    }
                </div>
            </Modal>
        </>
    );
};




export { PayoutModal, HowToModal, PlaceBetModal, BetHistoryModal, ResultModal };