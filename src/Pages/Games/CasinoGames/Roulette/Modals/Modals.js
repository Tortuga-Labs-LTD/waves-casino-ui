import React from "react";
import styles from "./Modals.module.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import clickSfx from "../../../../../assets/sounds/general/click.mp3";

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-square-x"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#ffffff"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        closeIcon={closeIcon}
      >
        <div className={styles.modalContainer}>
          <h2 className={styles.modalHeader}>PAYOUT TABLE</h2>
          <table className={styles.modalTable}>
            <thead className={styles.modalTableHead}>
              <tr>
                <th className={styles.sideHeader}>BET</th>
                <th className={styles.centerHeader}>WINNING NUMBERS</th>
                <th className={styles.sideHeader}>PAYOUT</th>
              </tr>
            </thead>
            <tbody className={styles.modalTableBody}>
              <tr>
                <td>STRAIGHT UP</td>
                <td>ANY SINGLE NUMBER INCLUDING 0</td>
                <td>35 TO 1</td>
              </tr>
              <tr>
                <td>SPLIT</td>
                <td>ANY TWO ADJOINING NUMBERS VERTICALLY/HORIZONTALLY</td>
                <td>17 TO 1</td>
              </tr>
              <tr>
                <td>TRIO</td>
                <td>0, 1 & 2 OR 0, 2 & 3</td>
                <td>11 TO 1</td>
              </tr>
              <tr>
                <td>STREET</td>
                <td>ANY 3 NUMBERS HORIZONTALLY (1, 2 & 3; 4, 5 & 6; ETC)</td>
                <td>11 TO 1</td>
              </tr>
              <tr>
                <td>BASKET</td>
                <td>0, 1, 2 & 3</td>
                <td>8 TO 1</td>
              </tr>
              <tr>
                <td>CORNER</td>
                <td>ANY FOUR ADJOINING NUMBERS IN A BLOCK</td>
                <td>8 TO 1</td>
              </tr>
              <tr>
                <td>SIX LINE</td>
                <td>ANY SIX NUMBERS FROM TWO ROWS</td>
                <td>5 TO 1</td>
              </tr>
              <tr>
                <td>1ST COLUMN</td>
                <td>1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34</td>
                <td>2 TO 1</td>
              </tr>
              <tr>
                <td>2ND COLUMN</td>
                <td>2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35</td>
                <td>2 TO 1</td>
              </tr>
              <tr>
                <td>3RD COLUMN</td>
                <td>3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36</td>
                <td>2 TO 1</td>
              </tr>
              <tr>
                <td>1ST DOZEN</td>
                <td>1 THROUGH 12</td>
                <td>2 TO 1</td>
              </tr>
              <tr>
                <td>2ND DOZEN</td>
                <td>13 THROUGH 24</td>
                <td>2 TO 1</td>
              </tr>
              <tr>
                <td>3RD DOZEN</td>
                <td>25 THROUGH 36</td>
                <td>2 TO 1</td>
              </tr>
              <tr>
                <td>ODD</td>
                <td>1, 3, 5, ..., 35</td>
                <td>1 TO 1</td>
              </tr>
              <tr>
                <td>EVEN</td>
                <td>2, 4, 6, ..., 36</td>
                <td>1 TO 1</td>
              </tr>
              <tr>
                <td>RED</td>
                <td>ANY RED NUMBER</td>
                <td>1 TO 1</td>
              </tr>
              <tr>
                <td>BLACK</td>
                <td>ANY BLACK NUMBER</td>
                <td>1 TO 1</td>
              </tr>
              <tr>
                <td>1 TO 18</td>
                <td>1 THROUGH 18</td>
                <td>1 TO 1</td>
              </tr>
              <tr>
                <td>19 TO 36</td>
                <td>19 THROUGH 36</td>
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
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        closeIcon={closeIcon}
      >
        <div className={styles.modalContainer}>
          <h2 className={styles.modalHeader}>HOW TO PLAY: ROULETTE</h2>
          <p className={styles.modalText}>
            Players place bets by selecting the exact number, range of numbers,
            or color of the pocket that the ball will land in. Players wishing
            to bet on the 'outside' will select bets on larger positional
            groupings of pockets, the pocket color, or whether the winning
            number is odd or even.
          </p>
          <p className={styles.modalText}>
            There is a block timer that shows the amount of time users have to
            place a bet. When the user places their bets on the table, clicks
            "place bets" and confirms it on the pop up, the bets are locked
            until the round is over and the results are shown. If the user does
            not confirm their bets by the time the timer is up, the user's bets
            are not included in the current round when the result is shown.
          </p>
          <p className={styles.modalText}>
            The payout odd for each type of bet are based on its probability.
            The roulette table imposes minimum and maximum bets, and these rules
            apply for all of a player's inside and outside bets for each spin.
          </p>
          <p className={styles.modalText}>
            Once the Player places their bets, and a winning number and color is
            determined by the roulette wheel, the players bets are removed,
            winnings are awarded(if applicable) and the board resets. Each
            winning bet's ante is returned to the user.
          </p>
        </div>
      </Modal>
    </>
  );
};

const PlaceBetModal = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    if (props.soundOn) new Audio(clickSfx).play();
    setOpen(true);
  };

  return (
    <>
      <button
        className={styles.button}
        disabled={props.disabled}
        onClick={() => handleOpen()}
      >
        Place Bet
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        closeIcon={closeIcon}
      >
        <div className={styles.modalContainer}>
          <h2 className={styles.modalHeader}>CONFIRM BETS</h2>
          <div className={styles.modalBets}>
            {Object.keys(props.bets).map((type, index) => {
              return (
                <p key={index}>
                  <strong>{type}:</strong> {props.bets[type].toFixed()}{" "}
                  {process.env.REACT_APP_ASSETNAME}
                </p>
              );
            })}
          </div>
          <div className={styles.modalButtons}>
            <button
              className={styles.modalConfirmButton}
              onClick={() => {
                props.playGame();
                setOpen(false);
              }}
            >
              Confirm Bets
            </button>
            <button
              className={styles.modalCancelButton}
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

const BetHistoryModal = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button className={styles.topButton} onClick={() => setOpen(true)}>
        Bet History
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        closeIcon={closeIcon}
      >
        <div className={styles.modalContainer}>
          <h2 className={styles.modalHeader}>Bet History</h2>
          {props.historyError ? (
            <h2>{props.historyError}</h2>
          ) : (
            <table className={styles.modalTable}>
              <thead className={styles.modalTableHead}>
                <tr>
                  <th>BET</th>
                  <th>AMOUNT</th>
                  <th>GAME RESULT</th>
                  <th>WINNINGS</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody className={styles.modalTableBody}>
                {props.userHistory.map((history, index) => {
                  return (
                    <tr key={index}>
                      <td>{history.bet}</td>
                      <td>{history.amount}</td>
                      <td>{history.result}</td>
                      <td>{history.payout}</td>
                      <td>{history.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </Modal>
    </>
  );
};

const ResultModal = (props) => {
  const reds = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ];
  const blacks = [
    2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
  ];

  const checkColor = () => {
    if (reds.includes(props.result)) return styles.red;
    if (blacks.includes(props.result)) return styles.black;
    return styles.zero;
  };

  return (
    <>
      <Modal
        open={true}
        onClose={() => props.close()}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        closeIcon={closeIcon}
      >
        <div className={styles.modalContainer}>
          {props.won ? (
            <div>
              <h2 className={styles.resultHeader}>CONGRATULATIONS!</h2>
              <div className={styles.result}>
                <div className={checkColor()}>{props.result}</div>
                <div className={styles.won}>{`You won ${props.totalWon.toFormat(
                  2
                )} ${process.env.REACT_APP_ASSETNAME}`}</div>
              </div>
              <p className={styles.resultWarning}>
                Payout may take up to several minutes to credit your account due
                to block times. You can monitor payout status using the Bet
                History button.
              </p>
            </div>
          ) : (
            <div>
              <h2 className={styles.resultHeader}>Better Luck Next Time!</h2>
              <div className={styles.result}>
                <div className={checkColor()}>{props.result}</div>
                <div className={styles.won}>You Lost</div>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export { PayoutModal, HowToModal, PlaceBetModal, BetHistoryModal, ResultModal };
