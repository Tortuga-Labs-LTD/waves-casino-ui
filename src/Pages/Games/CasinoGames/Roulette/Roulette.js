import { React, useContext, useState, useEffect } from "react";
import styles from "./Roulette.module.css";
import AuthContext from "../../../../Components/Authentication/Auth";
import { SIGN_TYPE } from "@waves/signature-adapter";
import { BigNumber } from "@waves/bignumber";
import { Money } from "@waves/data-entities";
import { broadcast, nodeInteraction } from "@waves/waves-transactions";
import { CalculateFee } from "../../../../Components/Utils/Fee";
import {
    PayoutModal,
    HowToModal,
    PlaceBetModal,
    BetHistoryModal,
    ResultModal,
} from "./Modals/Modals";
import ErrorModal from "../../../../Components/Modal/errorModal";
import TableLayout from "./TableLayout/TableLayout";
import Coins from "./Coins/Coins";
import ChaosCoins from "./ChaosCoins/ChaosCoins";
import ReactHowler from "react-howler";
import chipSfx from "../../../../assets/sounds/general/chip.mp3";
import selectSfx from "../../../../assets/sounds/general/fiche_select.mp3";
import clickSfx from "../../../../assets/sounds/general/click.mp3";
import collectSfx from "../../../../assets/sounds/general/fiche_collect.mp3";
import wonSfx from "../../../../assets/sounds/general/win.mp3";
import loseSfx from "../../../../assets/sounds/general/lose.mp3";
import music1 from "../../../../assets/sounds/general/WAVES_Casino_Music_1.mp3";
import music2 from "../../../../assets/sounds/general/WAVES_Casino_Music_2.mp3";
import music3 from "../../../../assets/sounds/general/WAVES_Casino_Music_3.mp3";
import music4 from "../../../../assets/sounds/general/WAVES_Casino_Music_4.mp3";
import music5 from "../../../../assets/sounds/general/WAVES_Casino_Music_5.mp3";
import music6 from "../../../../assets/sounds/general/WAVES_Casino_Music_6.mp3";
import music7 from "../../../../assets/sounds/general/WAVES_Casino_Music_7.mp3";
import music8 from "../../../../assets/sounds/general/WAVES_Casino_Music_8.mp3";
import music9 from "../../../../assets/sounds/general/WAVES_Casino_Music_9.mp3";
import music10 from "../../../../assets/sounds/general/WAVES_Casino_Music_10.mp3";
import logo from "../../../../assets/navlogo.svg";

const Roulette = () => {
  const { user, asset, createSignable } = useContext(AuthContext);
  const env = process.env;
  const assetName = env.REACT_APP_ASSETNAME;
  const reds = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ];
  const blacks = [
    2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
  ];
  const music = [
    music1,
    music2,
    music3,
    music4,
    music5,
    music6,
    music7,
    music8,
    music9,
    music10,
  ];

  const [total, setTotal] = useState(new BigNumber(0));
  const [amount, setAmount] = useState(new BigNumber(0.1));
  const [bets, setBets] = useState({});
  const [prevBets, setPrevBets] = useState(null);
  const [prevPlacedBets, setPrevPlacedBets] = useState(null);
  const [playingGame, setPlayingGame] = useState(false);
  const [history, setHistory] = useState([]);
  const [maxBet, setMaxBet] = useState(new BigNumber(0));
  const [maxDifBets] = useState(10);
  const [placedBets, setPlacedBets] = useState({});
  const [curGame, setCurGame] = useState(null);
  const [gameEnd, setGameEnd] = useState(null);
  const [curBlock, setCurBlock] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [winningBets, setWinningBets] = useState({});
  const [result, setResult] = useState(null);
  const [won, setWon] = useState(false);
  const [totalWon, setTotalWon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [start, setStart] = useState(false);
  const [chaosOn, setChaosOn] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [musicOn, setMusicOn] = useState(true);
  const [shuffled, setShuffled] = useState(
    music[Math.floor(Math.random() * music.length)]
  );
  const [soundVolume, setSoundVolume] = useState(0.5);
  const [musicVolume, setMusicVolume] = useState(0.5);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    message: 'Something went wrong',
  });
  const [chaosBets, setChaosBets] = useState({});
  const [userHistory, setUserHistory] = useState([]);
  const [historyError, setHistoryError] = useState(false);
  const [runningAsync, setRunningAsync] = useState(false);

  useEffect(() => {
    async function filterChaos(game) {
      const apiUrl = env.REACT_APP_APIURL;
      const dappAddress = env.REACT_APP_ROULETTE_ADDRESS;
      const apiGamesData = await fetch(
        `${apiUrl}/Roulette/${dappAddress}/games/${game}/bets`
      ).then((data) => {
        return data;
      });
      const parsedGamesData = await apiGamesData.json();

      const filtered = {};

      parsedGamesData.forEach((data) => {
        const location = data.bet;
        const amount = data.amount / Math.pow(10, asset.precision);
        if (data.caller !== user.address) {
          if (filtered[location]) {
            filtered[location] = filtered[location] + amount;
          } else {
            filtered[location] = amount;
          }
        }
      });

      return filtered;
    }

    async function fetchUserHistory() {
      const apiUrl = env.REACT_APP_APIURL;
      const dappAddress = env.REACT_APP_ROULETTE_ADDRESS;
      const apiGamesData = await fetch(
        `${apiUrl}/Roulette/${dappAddress}/addresses/${user.address}/bets`
      ).then((data) => {
        return data;
      });
      const parsedGamesData = await apiGamesData.json();

      const filteredHistory = [];
      parsedGamesData.forEach((data) => {
        const amount = new Money(new BigNumber(data.amount), asset).toFormat();
        const result = data.game.result ? data.game.result : 'N/A';
        const payout =
          !data.payout && !data.game.result
            ? 'N/A'
            : new Money(new BigNumber(data.payout), asset).toFormat();
        const status =
          !data.payout && !data.game.result ? 'Pending' : 'Resolved';
        filteredHistory.push({
          bet: data.bet,
          amount: amount,
          result: result,
          payout: payout,
          status: status,
        });
      });

      return filteredHistory;
    }

    async function updateLastLoaded() {
      const apiUrl = env.REACT_APP_APIURL;
      const dappAddress = env.REACT_APP_ROULETTE_ADDRESS;
      await fetch(`${apiUrl}/activity/${dappAddress}/lastLoaded`, {
        method: 'PUT',
      });
    }

    async function runnable() {
      try {
        if (!runningAsync) {
          setRunningAsync(true);
          if (loading) {
            updateLastLoaded();
          }
          const address = env.REACT_APP_ROULETTE_ADDRESS;
          const nodeUrl = env.REACT_APP_NODEURL;
          const latest = await nodeInteraction.accountDataByKey(
            'G_GAMESCOUNTER',
            address,
            nodeUrl
          );
          const currentBlock = await nodeInteraction.currentHeight(nodeUrl);
          const maxBetData = await nodeInteraction.accountDataByKey(
            'G_MAXBET',
            address,
            nodeUrl
          );
          const currentGame = latest.value;

          try {
            const filteredUserHistory = await fetchUserHistory();
            setUserHistory(filteredUserHistory);
            setHistoryError(false);
          } catch (error) {
            setUserHistory([]);
            setHistoryError('There was an error fetching your history');
          }

          try {
            const filteredChaos = await filterChaos(currentGame);
            if (Object.keys(filteredChaos).length !== 0) {
              setChaosBets(filteredChaos);
            }
          } catch (error) {
            setChaosBets({});
            if (chaosOn) {
              setErrorMessage({
                message: "Couldn't fetch chaos bets.",
              });
              setError(true);
              setChaosOn(false);
            }
          }

          if (asset) {
            const maxBet = new BigNumber(
              maxBetData.value / Math.pow(10, asset.precision)
            );
            setMaxBet(maxBet);
          }

          if (!curGame || (curGame && curGame !== currentGame)) {
            let lastGame = latest.value - 1;
            let lastResults = [];
            for (let step = 0; step < 20; step++) {
              if (lastGame > 0) {
                const game = await nodeInteraction.accountDataByKey(
                  `G_${lastGame}_RESULT`,
                  address,
                  nodeUrl
                );
                lastResults.push(game.value);
                lastGame--;
              } else {
                break;
              }
            }

            const endHeight = await nodeInteraction.accountDataByKey(
              `G_${currentGame}_ENDHEIGHT`,
              address,
              nodeUrl
            );

            if (playingGame) {
              const reds = [
                1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34,
                36,
              ];
              const blacks = [
                2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33,
                35,
              ];
              const col1 = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
              const col2 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
              const col3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
              const resultData = await nodeInteraction.accountDataByKey(
                `G_${curGame}_RESULT`,
                address,
                nodeUrl
              );
              const lastResult = resultData.value;
              let winners = {};
              let total = new BigNumber(0);
              setResult(lastResult);

              Object.keys(bets).forEach((bet) => {
                if (bet === 'color-red' && reds.includes(lastResult)) {
                  winners[bet] = bets[bet];
                  total = total.add(bets[bet]);
                }

                if (bet === 'color-black' && blacks.includes(lastResult)) {
                  winners[bet] = bets[bet];
                  total = total.add(bets[bet]);
                }

                if (
                  bet === 'oddeven-even' &&
                  lastResult % 2 === 0 &&
                  lastResult !== 0
                ) {
                  winners[bet] = bets[bet];
                  total = total.add(bets[bet]);
                }

                if (bet === 'oddeven-odd' && lastResult % 2 !== 0) {
                  winners[bet] = bets[bet];
                  total = total.add(bets[bet]);
                }

                if (
                  bet === 'lowhigh-low' &&
                  lastResult > 0 &&
                  lastResult < 19
                ) {
                  winners[bet] = bets[bet];
                  total = total.add(bets[bet]);
                }

                if (
                  bet === 'lowhigh-high' &&
                  lastResult > 18 &&
                  lastResult < 37
                ) {
                  winners[bet] = bets[bet];
                  total = total.add(bets[bet]);
                }

                if (bet === 'column-1' && col1.includes(lastResult)) {
                  winners[bet] = bets[bet].mul(2);
                  total = total.add(bets[bet].mul(2));
                }

                if (bet === 'column-2' && col2.includes(lastResult)) {
                  winners[bet] = bets[bet].mul(2);
                  total = total.add(bets[bet].mul(2));
                }

                if (bet === 'column-3' && col3.includes(lastResult)) {
                  winners[bet] = bets[bet].mul(2);
                  total = total.add(bets[bet].mul(2));
                }

                if (bet === 'dozen-1' && lastResult > 0 && lastResult < 13) {
                  winners[bet] = bets[bet].mul(2);
                  total = total.add(bets[bet].mul(2));
                }

                if (bet === 'dozen-2' && lastResult > 12 && lastResult < 25) {
                  winners[bet] = bets[bet].mul(2);
                  total = total.add(bets[bet].mul(2));
                }

                if (bet === 'dozen-3' && lastResult > 24 && lastResult < 37) {
                  winners[bet] = bets[bet].mul(2);
                  total = total.add(bets[bet].mul(2));
                }

                const betList = bet.split('-');

                if (betList[0] === 'numbers') {
                  const stringLastResult = lastResult.toString();
                  if (
                    betList.length === 2 &&
                    betList.includes(stringLastResult)
                  ) {
                    winners[bet] = bets[bet].mul(35);
                    total = total.add(bets[bet].mul(35));
                  }

                  if (
                    betList.length === 3 &&
                    betList.includes(stringLastResult)
                  ) {
                    winners[bet] = bets[bet].mul(17);
                    total = total.add(bets[bet].mul(17));
                  }

                  if (
                    betList.length === 4 &&
                    betList.includes(stringLastResult)
                  ) {
                    winners[bet] = bets[bet].mul(11);
                    total = total.add(bets[bet].mul(11));
                  }

                  if (
                    betList.length === 5 &&
                    betList.includes(stringLastResult)
                  ) {
                    winners[bet] = bets[bet].mul(8);
                    total = total.add(bets[bet].mul(8));
                  }

                  if (
                    betList.length === 7 &&
                    betList.includes(stringLastResult)
                  ) {
                    winners[bet] = bets[bet].mul(5);
                    total = total.add(bets[bet].mul(5));
                  }
                }
              });

              if (Object.keys(winners).length > 0) setWon(true);
              setTotalWon(total);
              setWinningBets(winners);
              setShowResult(true);
              setPlayingGame(false);
              setBets({});
              setPlacedBets({});
              setChaosBets({});
              setTotal(new BigNumber(0));

              if (soundOn) {
                if (Object.keys(winners).length > 0) {
                  const audio = new Audio(wonSfx);
                  audio.volume = soundVolume;
                  audio.play();
                } else {
                  const audio = new Audio(loseSfx);
                  audio.volume = soundVolume;
                  audio.play();
                }
              }
            }

            setCurGame(currentGame);
            setGameEnd(endHeight.value);
            setHistory(lastResults);
            updateLastLoaded();
          }

          setCurBlock(currentBlock);
          if (
            gameFinished &&
            currentBlock < gameEnd &&
            start &&
            soundOn &&
            !showResult
          )
            new Audio({
              volume: soundVolume,
              src: collectSfx,
            }).play();
          if (currentBlock >= gameEnd) setGameFinished(true);
          if (currentBlock < gameEnd) setGameFinished(false);
          if (loading) setLoading(false);
          setRunningAsync(false);
        }
      } catch (error) {
        setErrorMessage(error);
        setError(true);
      }
    }

    const interval = setInterval(() => {
      runnable();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [
    runningAsync,
    env.REACT_APP_NODEURL,
    env.REACT_APP_APIURL,
    env.REACT_APP_ROULETTE_ADDRESS,
    chaosOn,
    curGame,
    asset,
    playingGame,
    gameEnd,
    curBlock,
    bets,
    winningBets,
    loading,
    won,
    gameFinished,
    start,
    soundOn,
    soundVolume,
    showResult,
    user.address,
  ]);

  const checkSelected = (value) => {
    return amount.toFormat(2) === value.toFormat(2)
      ? styles.selectedChip
      : styles.chip;
  };

  const changeAmount = (value) => {
    setAmount(value);
    if (soundOn) {
      const audio = new Audio(selectSfx);
      audio.volume = soundVolume;
      audio.play();
    }
  };

  const checkColor = (value) => {
    if (reds.includes(value)) return styles.redHistory;
    if (blacks.includes(value)) return styles.blackHistory;
    return styles.zeroHistory;
  };

  const addBet = (e, value) => {
    if (!user.balance) throw new Error('No balance');
    if (!bets[value] && Object.keys(bets).length >= maxDifBets) return null;
    if (user.balance.getTokens().sub(total).sub(amount).lte(0)) return null;
    if (total.add(amount).gt(maxBet)) return null;
    if (playingGame || gameFinished) return null;

    const amountAfterBet = bets[value]
      ? bets[value].add(amount)
      : new BigNumber(0).add(amount);

    if (placedBets[value]) {
      const newAmount = placedBets[value].amount.add(amount);
      setPlacedBets({
        ...placedBets,
        [value]: { target: e.target, amount: newAmount },
      });
    } else {
      setPlacedBets({
        ...placedBets,
        [value]: { target: e.target, amount },
      });
    }
    setBets({ ...bets, [value]: amountAfterBet });
    setTotal(total.add(amount));
    if (soundOn) {
      const audio = new Audio(chipSfx);
      audio.volume = soundVolume;
      audio.play();
    }
  };

  const playGame = () => {
    if (!asset) throw new Error('No asset');
    setPlayingGame(true);
    setPrevBets(bets);
    setPrevPlacedBets(placedBets);

    const baseTx = {
      senderPublicKey: user.publicKey,
      type: SIGN_TYPE.SCRIPT_INVOCATION,
      payment: [],
      dApp: env.REACT_APP_ROULETTE_ADDRESS,
    };

    const betKeys = Object.keys(bets);
    Promise.resolve(CalculateFee(baseTx)).then((feeDetails) => {
      betKeys.forEach((type) => {
        if (bets[type] > 0) {
          const fee = new Money(feeDetails.feeAmount, asset);
          const payment = [
            new Money(
              new BigNumber(bets[type] * Math.pow(10, asset.precision)),
              asset
            ),
          ];
          const arg = type;
          if (user.isKeeper) {
            const tx = {
              ...baseTx,
              data: {
                dApp: env.REACT_APP_ROULETTE_ADDRESS,
                call: {
                  function: env.REACT_APP_ROULETTE_FUNCTION,
                  args: [
                    {
                      type: 'string',
                      value: arg,
                    },
                  ],
                },
                fee: fee,
                payment: payment,
              },
            };

            window.WavesKeeper.signAndPublishTransaction(tx)
              .then((_) => {
                // console.log(data);
              })
              .catch((e) => {
                setError(true);
                setErrorMessage({ message: e.data });
                setPlayingGame(false);
              });
          } else {
            const tx = {
              ...baseTx,
              sender: user.address,
              timestamp: Date.now(),
              version: 1,
              call: {
                function: env.REACT_APP_ROULETTE_FUNCTION,
                args: [
                  {
                    type: 'string',
                    value: arg,
                  },
                ],
              },
              fee: fee,
              payment: payment,
            };
            const signable = createSignable(tx);

            signable
              .getDataForApi()
              .then((data) => {
                broadcast(data, env.REACT_APP_NODEURL).then(
                  () => {},
                  (e) => {
                    setError(true);
                    setErrorMessage(e);
                    setPlayingGame(false);
                  }
                );
              })
              .catch((e) => {
                setError(true);
                setErrorMessage(e);
                setPlayingGame(false);
              });
          }
        }
      });
    });
  };

  const resetGame = () => {
    setBets({});
    setPlacedBets({});
    setChaosBets({});
    setTotal(toBig(0));
    setError(false);
    setPlayingGame(false);
    if (soundOn) {
      const audio = new Audio(clickSfx);
      audio.volume = soundVolume;
      audio.play();
    }
  };

  const rebet = () => {
    let newTotal = toBig(0);
    Object.keys(prevBets).forEach((bet) => {
      newTotal = newTotal.add(prevBets[bet]);
    });
    setBets(prevBets);
    setPlacedBets(prevPlacedBets);
    setTotal(newTotal);
    if (soundOn) {
      const audio = new Audio(clickSfx);
      audio.volume = soundVolume;
      audio.play();
    }
  };

  const double = () => {
    if (!user.balance) throw new Error('No balance');

    let doubleBets = {};
    let totalAfterDouble = toBig(0);
    Object.keys(bets).forEach((bet) => {
      const newValue = bets[bet].mul(2);
      doubleBets[bet] = bets[bet].mul(2);
      totalAfterDouble = totalAfterDouble.add(newValue);
    });

    if (user.balance.getTokens().sub(totalAfterDouble).lte(0)) return null;
    if (totalAfterDouble.gt(maxBet)) return null;
    if (playingGame || gameFinished) return null;

    let doublePlacedBets = {};
    Object.keys(placedBets).forEach((placed) => {
      doublePlacedBets[placed] = {
        ...placedBets[placed],
        amount: placedBets[placed].amount.mul(2),
      };
    });

    setBets(doubleBets);
    setPlacedBets(doublePlacedBets);
    setTotal(totalAfterDouble);
    if (soundOn) {
      const audio = new Audio(clickSfx);
      audio.volume = soundVolume;
      audio.play();
    }
  };

  const toBig = (value) => {
    return new BigNumber(value);
  };

  const initiateGame = () => {
    setStart(true);
    if (
      localStorage.getItem('sound') &&
      localStorage.getItem('sound') !== 'true'
    ) {
      setSoundOn(false);
    }
    if (localStorage.getItem('soundVolume')) {
      setSoundVolume(Number(localStorage.getItem('volume')));
    }
    if (
      localStorage.getItem('music') &&
      localStorage.getItem('music') !== 'true'
    ) {
      setMusicOn(false);
    }
    if (localStorage.getItem('musicVolume')) {
      setMusicVolume(Number(localStorage.getItem('volume')));
    }
  };

  const switchSong = () => {
    setShuffled(music[Math.floor(Math.random() * music.length)]);
  };

  const handleSound = (value) => {
    setSoundOn(value);
    if (soundVolume === 0 && value === true) {
      setSoundVolume(0.1);
    }
    localStorage.setItem('sound', `${value}`);
  };

  const handleSoundVolume = (value) => {
    setSoundVolume(value);
    if (value === 0) {
      setSoundOn(false);
    } else {
      setSoundOn(true);
    }
    localStorage.setItem('soundVolume', `${value}`);
  };

  const handleMusic = (value) => {
    setMusicOn(value);
    if (musicVolume === 0 && value === true) {
      setMusicVolume(0.1);
    }
    localStorage.setItem('music', `${value}`);
  };

  const handleMusicVolume = (value) => {
    setMusicVolume(value);
    if (value === 0) {
      setMusicOn(false);
    } else {
      setMusicOn(true);
    }
    localStorage.setItem('musicVolume', `${value}`);
  };

  const closeResult = () => {
    setShowResult(false);
    setWinningBets({});
    setResult(null);
    setWon(false);
    setTotalWon(null);
  };

  return (
    <>
      <ErrorModal
        open={error}
        errorMessage={errorMessage}
        onClose={resetGame}
      />
      {start ? (
        <div className={styles.bg}>
          <div className={styles.table}>
            <div className={styles.chips}>
              <div
                className={`${checkSelected(toBig(0.1))} ${styles.purpleChip}`}
                onClick={() => changeAmount(toBig(0.1))}
              ></div>
              <div
                className={`${checkSelected(toBig(1))} ${styles.whiteChip}`}
                onClick={() => changeAmount(toBig(1))}
              ></div>
              <div
                className={`${checkSelected(toBig(5))} ${styles.redChip}`}
                onClick={() => changeAmount(toBig(5))}
              ></div>
              <div
                className={`${checkSelected(toBig(10))} ${styles.blueChip}`}
                onClick={() => changeAmount(toBig(10))}
              ></div>
              <div
                className={`${checkSelected(toBig(25))} ${styles.greenChip}`}
                onClick={() => changeAmount(toBig(25))}
              ></div>
              <div
                className={`${checkSelected(toBig(500))} ${styles.indigoChip}`}
                onClick={() => changeAmount(toBig(500))}
              ></div>
            </div>
            <div className={styles.roulette}>
              <div className={styles.info}>
                <div className={styles.infoItems}>
                  <div>
                    <p className={styles.infoText}>Balance:</p>
                    <p className={styles.infoText}>
                      {user.balance.toFormat(2)} {assetName}
                    </p>
                  </div>
                </div>
                <div className={styles.infoItems}>
                  <div>
                    <p className={styles.infoText}>Current Bet:</p>
                    <p className={styles.infoText}>
                      {total.toFormat(2)} {assetName}
                    </p>
                  </div>
                </div>
                <div className={styles.infoItems}>
                  <div className={styles.desktopTotals}>
                    <p className={styles.infoText}>
                      Max Total Bet: {maxBet.toFormat()} {assetName}
                    </p>
                    <p className={styles.infoText}>
                      Max Different Bets: {maxDifBets}
                    </p>
                  </div>
                  <div className={styles.mobileTotals}>
                    <p className={styles.infoText}>Max:</p>
                    <p className={styles.infoText}>
                      {maxBet.toFormat()} {assetName} & {maxDifBets} bets
                    </p>
                  </div>
                </div>
                <div className={styles.modals}>
                  <PayoutModal />
                  <HowToModal />
                  <BetHistoryModal
                    userHistory={userHistory}
                    historyError={historyError}
                  />
                </div>
              </div>
              <div className={styles.matWrapper}>
                <TableLayout addBet={addBet} />
              </div>
              <div className={styles.playOrReset}>
                <div className={styles.miniButtonsWrapper}>
                  <button
                    className={styles.miniButton}
                    disabled={
                      playingGame ||
                      gameFinished ||
                      !prevBets ||
                      !prevPlacedBets
                    }
                    onClick={() => rebet()}
                  >
                    Rebet
                  </button>
                  <button
                    className={styles.miniButton}
                    disabled={total <= 0 || playingGame || gameFinished}
                    onClick={() => double()}
                  >
                    2x
                  </button>
                </div>
                <div></div>
                <div></div>
                <PlaceBetModal
                  soundOn={soundOn}
                  bets={bets}
                  disabled={total <= 0 || playingGame || gameFinished}
                  playGame={playGame}
                  asset={asset}
                />
                {gameFinished ? (
                  <div className={styles.blocksLeft}>
                    <p>Round has finished</p>
                    <p>Blocks until next round: 1</p>
                  </div>
                ) : (
                  <div className={styles.blocksLeft}>
                    <p>Blocks until round ends:</p>
                    <p>{gameEnd - curBlock}</p>
                  </div>
                )}
                <button
                  className={styles.button}
                  disabled={total <= 0 || playingGame || gameFinished}
                  onClick={() => resetGame()}
                >
                  Reset Bet
                </button>
              </div>
            </div>
            <div className={styles.history}>
              <h4>History</h4>
              <div className={styles.lastResults}>
                {history.map((history, index) => {
                  return (
                    <p key={index} className={checkColor(history)}>
                      {history}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.absoluteControls}>
            <p className={styles.address}>User Id: {user.address}</p>
            <div className={styles.volumeWrapper}>
              {soundOn ? (
                <button
                  className={styles.soundOff}
                  onClick={() => handleSound(false)}
                ></button>
              ) : (
                <button
                  className={styles.soundOn}
                  onClick={() => handleSound(true)}
                ></button>
              )}
              <input
                id='soundInp'
                className={styles.volume}
                type='range'
                min='0'
                max='1'
                value={soundVolume}
                onChange={(e) => handleSoundVolume(Number(e.target.value))}
                step='0.01'
              />
            </div>
            <div className={styles.volumeWrapper}>
              {musicOn ? (
                <button
                  className={styles.musicOn}
                  onClick={() => handleMusic(false)}
                ></button>
              ) : (
                <button
                  className={styles.musicOff}
                  onClick={() => handleMusic(true)}
                ></button>
              )}
              <input
                id='musicInp'
                className={styles.volume}
                type='range'
                min='0'
                max='1'
                value={musicVolume}
                onChange={(e) => handleMusicVolume(Number(e.target.value))}
                step='0.01'
              />
            </div>
            {chaosOn ? (
              <button
                className={styles.chaosOff}
                onClick={() => setChaosOn(false)}
              >
                <div className={styles.chaosOffIcon}></div>
                Disable Chaos
              </button>
            ) : (
              <button
                className={styles.chaosOn}
                onClick={() => setChaosOn(true)}
              >
                <div className={styles.chaosOnIcon}></div>Enable Chaos
              </button>
            )}
          </div>
          <ReactHowler
            src={shuffled}
            playing={musicOn}
            loop={true}
            volume={musicVolume}
            onEnd={() => switchSong()}
          />
          {showResult ? (
            <ResultModal
              close={closeResult}
              soundVolume={soundVolume}
              soundOn={soundOn}
              result={result}
              won={won}
              totalWon={totalWon}
            />
          ) : null}
        </div>
      ) : (
        <div className={styles.landingWrapper}>
          <div className={styles.landing}>
            <img className={styles.landingLogo} src={logo} alt='Waves logo' />
            {!loading && user.balance ? (
              <button
                className={styles.loaderButton}
                onClick={() => initiateGame()}
              >
                Play
              </button>
            ) : (
              <div className={styles.loaderWrapper}>
                <div className={styles.loading}>Loading</div>
                <div className={styles.loader}></div>
              </div>
            )}
            <p className={styles.landingName}>Roulette</p>
          </div>
        </div>
      )}
      {chaosOn
        ? Object.keys(chaosBets).map((bet, index) => {
            return (
              <ChaosCoins key={index} location={bet} amount={chaosBets[bet]} />
            );
          })
        : null}
      {Object.keys(placedBets).map((bet, index) => {
        return <Coins key={index} bet={placedBets[bet]} />;
      })}
    </>
  );
};

export default Roulette;