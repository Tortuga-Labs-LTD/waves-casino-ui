import { React } from 'react'
import styles from './TableLayout.module.css'
import Card from "classname-react-playing-cards/lib/TcN"
import ReactCardFlip from 'react-card-flip'

const TableLayout = (props) => {
    

    return (
        <div>
            <div className={styles.dealerCards}>
                <ReactCardFlip isFlipped={props.dealer.one.flipped} flipDirection="horizontal">
                    <img className={styles.card} src={props.cardBack} alt='cards'/>

                    <Card className={styles.pokerCard} card={`${props.dealer.one.rank}${props.dealer.one.suit}`} />
                </ReactCardFlip>
                
                <ReactCardFlip isFlipped={props.dealer.two.flipped} flipDirection="horizontal">
                    <img className={styles.card} src={props.cardBack} alt='cards'/>

                    <Card className={styles.pokerCard} card={`${props.dealer.two.rank}${props.dealer.two.suit}`} />
                </ReactCardFlip>
                <ReactCardFlip isFlipped={props.dealer.three.flipped} flipDirection="horizontal">
                    <img className={styles.card} src={props.cardBack} alt='cards'/>

                    <Card className={styles.pokerCard} card={`${props.dealer.three.rank}${props.dealer.three.suit}`} />
                </ReactCardFlip>
                <ReactCardFlip isFlipped={props.dealer.four.flipped} flipDirection="horizontal">
                    <img className={styles.card} src={props.cardBack} alt='cards'/>

                    <Card className={styles.pokerCard} card={`${props.dealer.four.rank}${props.dealer.four.suit}`} />
                </ReactCardFlip>
                <ReactCardFlip isFlipped={props.dealer.five.flipped} flipDirection="horizontal">
                    <img className={styles.card} src={props.cardBack} alt='cards'/>

                    <Card className={styles.pokerCard} card={`${props.dealer.five.rank}${props.dealer.five.suit}`} />
                </ReactCardFlip>
            </div>

            <div>
                <p className={styles.qualifies}>Dealer Only plays with ACE/KING or higher</p>
                <div className={styles.anteRaise}>
                    <div id='ante' className={styles.ante} onClick={() => props.addBet()}>Ante</div>
                    <div id='raise' className={styles.raise}>Raise</div>
                </div>
            </div>

            <div className={styles.playerCards}>
            <ReactCardFlip isFlipped={props.player.one.flipped} flipDirection="horizontal">
                    <img className={styles.card} src={props.cardBack} alt='cards'/>

                    <Card className={styles.pokerCard} card={`${props.player.one.rank}${props.player.one.suit}`} />
                </ReactCardFlip>
                
                <ReactCardFlip isFlipped={props.player.two.flipped} flipDirection="horizontal">
                    <img className={styles.card} src={props.cardBack} alt='cards'/>

                    <Card className={styles.pokerCard} card={`${props.player.two.rank}${props.player.two.suit}`} />
                </ReactCardFlip>
                <ReactCardFlip isFlipped={props.player.three.flipped} flipDirection="horizontal">
                    <img className={styles.card} src={props.cardBack} alt='cards'/>

                    <Card className={styles.pokerCard} card={`${props.player.three.rank}${props.player.three.suit}`} />
                </ReactCardFlip>
                <ReactCardFlip isFlipped={props.player.four.flipped} flipDirection="horizontal">
                    <img className={styles.card} src={props.cardBack} alt='cards'/>

                    <Card className={styles.pokerCard} card={`${props.player.four.rank}${props.player.four.suit}`} />
                </ReactCardFlip>
                <ReactCardFlip isFlipped={props.player.five.flipped} flipDirection="horizontal">
                    <img className={styles.card} src={props.cardBack} alt='cards'/>

                    <Card className={styles.pokerCard} card={`${props.player.five.rank}${props.player.five.suit}`} />
                </ReactCardFlip>
            </div>
        </div>
    )
}

export default TableLayout