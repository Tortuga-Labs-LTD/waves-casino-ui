import { React, useState, useContext, useEffect } from 'react';
import styles from './CaribbeanStudPoker.module.css';
import AuthContext from '../../../../Components/Authentication/Auth';
import { SIGN_TYPE } from '@waves/signature-adapter';
import { BigNumber } from '@waves/bignumber';
import { Money } from '@waves/data-entities';
import { broadcast, nodeInteraction } from '@waves/waves-transactions';
import { CalculateFee } from '../../../../Components/Utils/Fee';
import ReactHowler from 'react-howler';
import {
  PayoutModal,
  HowToModal,
  BetHistoryModal,
  ResultModal,
} from './Modals/Modals';
import ErrorModal from '../../../../Components/Modal/errorModal';
import TableLayout from './TableLayout/TableLayout';
import Coins from './Coins/Coins';
import chipSfx from '../../../../assets/sounds/general/chip.mp3';
import selectSfx from '../../../../assets/sounds/general/fiche_select.mp3';
import clickSfx from '../../../../assets/sounds/general/click.mp3';
import cardSfx from '../../../../assets/sounds/general/card.mp3';
import wonSfx from '../../../../assets/sounds/general/win.mp3';
import loseSfx from '../../../../assets/sounds/general/lose.mp3';
import music1 from '../../../../assets/sounds/general/WAVES_Casino_Music_1.mp3';
import music2 from '../../../../assets/sounds/general/WAVES_Casino_Music_2.mp3';
import music3 from '../../../../assets/sounds/general/WAVES_Casino_Music_3.mp3';
import music4 from '../../../../assets/sounds/general/WAVES_Casino_Music_4.mp3';
import music5 from '../../../../assets/sounds/general/WAVES_Casino_Music_5.mp3';
import music6 from '../../../../assets/sounds/general/WAVES_Casino_Music_6.mp3';
import music7 from '../../../../assets/sounds/general/WAVES_Casino_Music_7.mp3';
import music8 from '../../../../assets/sounds/general/WAVES_Casino_Music_8.mp3';
import music9 from '../../../../assets/sounds/general/WAVES_Casino_Music_9.mp3';
import music10 from '../../../../assets/sounds/general/WAVES_Casino_Music_10.mp3';
import logo from '../../../../assets/navlogo.svg';
import cardBack from '../../../../assets/Pages/General/cardBack.png';

const Craps = () => {
  const { user, asset, createSignable } = useContext(AuthContext);
  const env = process.env;
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
  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(true);
  const [bet, setBet] = useState();
  const [placedBet, setPlacedBet] = useState();
  const [raise, setRaise] = useState();
  const [total, setTotal] = useState(new BigNumber(0));
  const [amount, setAmount] = useState(new BigNumber(0.5));
  const [maxBet, setMaxBet] = useState(new BigNumber(0));
  const [minBet] = useState(new BigNumber(0.5));
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
  const [currentStep, setCurrentStep] = useState(0);
  const [sendingTx, setSendingTx] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [won, setWon] = useState(false);
  const [totalWon, setTotalWon] = useState(new BigNumber(0));
  const [waitingResult, setWaitingResult] = useState(false);

  const [dealer, setDealer] = useState({
    one: { flipped: false, rank: '2', suit: 'C' },
    two: { flipped: false, rank: '2', suit: 'C' },
    three: { flipped: false, rank: '2', suit: 'C' },
    four: { flipped: false, rank: '2', suit: 'C' },
    five: { flipped: false, rank: '2', suit: 'C' },
  });
  const [player, setPlayer] = useState({
    one: { flipped: false, rank: '2', suit: 'C' },
    two: { flipped: false, rank: '2', suit: 'C' },
    three: { flipped: false, rank: '2', suit: 'C' },
    four: { flipped: false, rank: '2', suit: 'C' },
    five: { flipped: false, rank: '2', suit: 'C' },
  });

  useEffect(() => {
    const handleState = async (latest, state) => {
      const address = process.env.REACT_APP_CSP_ADDRESS;
      const nodeUrl = process.env.REACT_APP_NODEURL;
      let playerHand = {
        one: { flipped: false, rank: '2', suit: 'C' },
        two: { flipped: false, rank: '2', suit: 'C' },
        three: { flipped: false, rank: '2', suit: 'C' },
        four: { flipped: false, rank: '2', suit: 'C' },
        five: { flipped: false, rank: '2', suit: 'C' },
      };
      let dealerHand = {
        one: { flipped: false, rank: '2', suit: 'C' },
        two: { flipped: false, rank: '2', suit: 'C' },
        three: { flipped: false, rank: '2', suit: 'C' },
        four: { flipped: false, rank: '2', suit: 'C' },
        five: { flipped: false, rank: '2', suit: 'C' },
      };
      let bet = new BigNumber(0);
      let total = new BigNumber(0);
      let placedBet = null;

      if (state.value > 0 && state.value < 4) {
        const ante = await nodeInteraction.accountDataByKey(
          `G_${latest.value}_ANTE`,
          address,
          nodeUrl
        );
        const parsedAnte = new BigNumber(
          ante.value / Math.pow(10, asset.precision)
        );
        bet = parsedAnte;
        total = parsedAnte;
        placedBet = { target: 'ante', amount: parsedAnte };
      }

      if (state.value > 1 && state.value < 4) {
        const playerCards = await nodeInteraction.accountDataByKey(
          `G_${latest.value}_PLAYER_SORTEDHAND`,
          address,
          nodeUrl
        );
        const dealerCards0 = await nodeInteraction.accountDataByKey(
          `G_${latest.value}_CARD_2`,
          address,
          nodeUrl
        );

        const splitPlayerCards = playerCards.value.split('+');
        const splitdealerCards0 = dealerCards0.value.split('+');

        const playerCardsList = [
          splitPlayerCards[0].split('/'),
          splitPlayerCards[1].split('/'),
          splitPlayerCards[2].split('/'),
          splitPlayerCards[3].split('/'),
          splitPlayerCards[4].split('/'),
        ];
        const dealerCard = splitdealerCards0[2].split('/');

        playerHand = {
          one: {
            flipped: true,
            rank: playerCardsList[0][0],
            suit: playerCardsList[0][1],
          },
          two: {
            flipped: true,
            rank: playerCardsList[1][0],
            suit: playerCardsList[1][1],
          },
          three: {
            flipped: true,
            rank: playerCardsList[2][0],
            suit: playerCardsList[2][1],
          },
          four: {
            flipped: true,
            rank: playerCardsList[3][0],
            suit: playerCardsList[3][1],
          },
          five: {
            flipped: true,
            rank: playerCardsList[4][0],
            suit: playerCardsList[4][1],
          },
        };

        dealerHand = {
          ...dealerHand,
          one: {
            flipped: true,
            rank: dealerCard[0],
            suit: dealerCard[1],
          },
        };
      }

      if (state.value === 3) {
        setRaise({ target: 'raise', amount: bet.mul(2) });
      }

      return [bet, total, placedBet, playerHand, dealerHand];
    };

    const startup = async () => {
      try {
        const address = process.env.REACT_APP_CSP_ADDRESS;
        const nodeUrl = process.env.REACT_APP_NODEURL;
        const maximumBet = await nodeInteraction.accountDataByKey(
          `G_MAXBET`,
          address,
          nodeUrl
        );
        setMaxBet(new Money(maximumBet.value, asset));
        const latest = await nodeInteraction.accountDataByKey(
          `P_${user.address}_CURRENTGAME`,
          address,
          nodeUrl
        );
        const state = await nodeInteraction.accountDataByKey(
          `G_${latest.value}_STATE`,
          address,
          nodeUrl
        );
        setCurrentStep(state.value);
        const [bet, total, placedBet, playerHand, dealerHand] =
          await handleState(latest, state);
        setBet(bet);
        setTotal(total);
        setPlacedBet(placedBet);
        setPlayer(playerHand);
        setDealer(dealerHand);
        if (loading) setLoading(false);
      } catch (error) {
        setCurrentStep(0);
        if (loading) setLoading(false);
      }
    };

    startup();
  }, [loading, user.address, asset]);

  useEffect(() => {
    let interval = null;
    if (currentStep === 1) {
      const address = process.env.REACT_APP_CSP_ADDRESS;
      const nodeUrl = process.env.REACT_APP_NODEURL;
      interval = setInterval(() => {
        Promise.resolve(
          nodeInteraction.accountDataByKey(
            `P_${user.address}_CURRENTGAME`,
            address,
            nodeUrl
          )
        ).then((latest) => {
          Promise.resolve(
            nodeInteraction.accountDataByKey(
              `G_${latest.value}_STATE`,
              address,
              nodeUrl
            )
          ).then((state) => {
            if (state.value === 2) {
              Promise.all([
                nodeInteraction.accountDataByKey(
                  `G_${latest.value}_PLAYER_SORTEDHAND`,
                  address,
                  nodeUrl
                ),
                nodeInteraction.accountDataByKey(
                  `G_${latest.value}_CARD_2`,
                  address,
                  nodeUrl
                ),
              ]).then(([playerCards, dealerCards0]) => {
                const splitPlayerCards = playerCards.value.split('+');
                const splitdealerCards0 = dealerCards0.value.split('+');

                const playerCardsList = [
                  splitPlayerCards[0].split('/'),
                  splitPlayerCards[1].split('/'),
                  splitPlayerCards[2].split('/'),
                  splitPlayerCards[3].split('/'),
                  splitPlayerCards[4].split('/'),
                ];
                const dealerCard = splitdealerCards0[2].split('/');

                const playerHand = {
                  one: {
                    flipped: true,
                    rank: playerCardsList[0][0],
                    suit: playerCardsList[0][1],
                  },
                  two: {
                    flipped: true,
                    rank: playerCardsList[1][0],
                    suit: playerCardsList[1][1],
                  },
                  three: {
                    flipped: true,
                    rank: playerCardsList[2][0],
                    suit: playerCardsList[2][1],
                  },
                  four: {
                    flipped: true,
                    rank: playerCardsList[3][0],
                    suit: playerCardsList[3][1],
                  },
                  five: {
                    flipped: true,
                    rank: playerCardsList[4][0],
                    suit: playerCardsList[4][1],
                  },
                };

                const dealerHand = {
                  one: {
                    flipped: true,
                    rank: dealerCard[0],
                    suit: dealerCard[1],
                  },
                  two: {
                    flipped: false,
                    rank: '2',
                    suit: 'C',
                  },
                  three: {
                    flipped: false,
                    rank: '2',
                    suit: 'C',
                  },
                  four: {
                    flipped: false,
                    rank: '2',
                    suit: 'C',
                  },
                  five: {
                    flipped: false,
                    rank: '2',
                    suit: 'C',
                  },
                };

                setPlayer(playerHand);
                setDealer(dealerHand);
                if (soundOn) {
                  const audio = new Audio(cardSfx);
                  audio.volume = soundVolume;
                  audio.play();
                }
                setCurrentStep(state.value);
                if (interval) {
                  clearInterval(interval);
                }
              });
            }
          });
        });
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentStep, soundOn, soundVolume, user.address]);

  useEffect(() => {
    let interval = null;
    if (currentStep === 3) {
      const address = process.env.REACT_APP_CSP_ADDRESS;
      const nodeUrl = process.env.REACT_APP_NODEURL;
      interval = setInterval(() => {
        Promise.resolve(
          nodeInteraction.accountDataByKey(
            `P_${user.address}_CURRENTGAME`,
            address,
            nodeUrl
          )
        ).then((latest) => {
          Promise.resolve(
            nodeInteraction.accountDataByKey(
              `G_${latest.value}_STATE`,
              address,
              nodeUrl
            )
          ).then((state) => {
            if (state.value === 4) {
              Promise.all([
                nodeInteraction.accountDataByKey(
                  `G_${latest.value}_DEALER_SORTEDHAND`,
                  address,
                  nodeUrl
                ),
                nodeInteraction.accountDataByKey(
                  `G_${latest.value}_PAYOUT`,
                  address,
                  nodeUrl
                ),
              ]).then(([dealerCards, payout]) => {
                const splitDealerCards = dealerCards.value.split('+');

                const filteredDealerCards = splitDealerCards.filter((card) => {
                  return card !== `${dealer.one.rank}/${dealer.one.suit}`;
                });

                const dealerCardsList = [
                  filteredDealerCards[0].split('/'),
                  filteredDealerCards[1].split('/'),
                  filteredDealerCards[2].split('/'),
                  filteredDealerCards[3].split('/'),
                  filteredDealerCards[3].split('/'),
                ];

                const dealerHand = {
                  ...dealer,
                  two: {
                    flipped: true,
                    rank: dealerCardsList[0][0],
                    suit: dealerCardsList[0][1],
                  },
                  three: {
                    flipped: true,
                    rank: dealerCardsList[1][0],
                    suit: dealerCardsList[1][1],
                  },
                  four: {
                    flipped: true,
                    rank: dealerCardsList[2][0],
                    suit: dealerCardsList[2][1],
                  },
                  five: {
                    flipped: true,
                    rank: dealerCardsList[3][0],
                    suit: dealerCardsList[3][1],
                  },
                };
                let won = 'lost';
                let totalWon = new BigNumber(0);

                const parsedPayout = new BigNumber(
                  payout.value / Math.pow(10, asset.precision)
                );
                const ante = new BigNumber(bet);

                if (parsedPayout.eq(ante.mul(3))) {
                  won = 'tie';
                }

                if (parsedPayout.gt(ante.mul(3))) {
                  won = 'won';
                  totalWon = parsedPayout.sub(ante.mul(3));
                }

                setDealer(dealerHand);
                setCurrentStep(state.value);
                setBet(new BigNumber(0));
                setTotal(new BigNumber(0));
                setPlacedBet();
                setRaise();
                setWaitingResult(true);
                if (soundOn && (won === 'won' || won === 'lost')) {
                  const audio = new Audio(cardSfx);
                  audio.volume = soundVolume;
                  audio.play();
                }
                setTimeout(() => {
                  setWon(won);
                  setTotalWon(totalWon);
                  setShowResult(true);
                  if (soundOn && (won === 'won' || won === 'lost')) {
                    let audio = new Audio(loseSfx);
                    if (won) {
                      audio = new Audio(wonSfx);
                    }
                    audio.volume = soundVolume;
                    audio.play();
                  }
                }, 2000);

                if (interval) {
                  clearInterval(interval);
                }
              });
            } else if (state.value > 4) {
              if (interval) {
                clearInterval(interval);
              }
            }
          });
        });
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentStep, dealer, user.address, asset, bet, soundOn, soundVolume]);

  const checkSelected = (value) => {
    return amount.toFormat(2) === value.toFormat(2)
      ? styles.selectedChip
      : styles.chip;
  };

  const checkEnabled = (value) => {
    return value.add(total).gt(maxBet)
      ? styles.disabledChip
      : styles.enabledChip;
  };

  const toBig = (value) => {
    return new BigNumber(value);
  };

  const changeAmount = (value) => {
    setAmount(value);
    if (soundOn) {
      const audio = new Audio(selectSfx);
      audio.volume = soundVolume;
      audio.play();
    }
  };

  const addBet = () => {
    if (!user.balance) throw new Error('No balance');
    if (user.balance.getTokens().sub(total.add(amount).mul(3)).lt(0))
      return null;
    if (total.add(amount).gt(maxBet)) return null;
    if (currentStep > 0 && currentStep < 4) return null;
    if (sendingTx) return null;
    if (waitingResult) return null;

    const amountAfterBet = bet ? bet.add(amount) : new BigNumber(0).add(amount);

    if (placedBet) {
      const newAmount = placedBet.amount.add(amount);
      setPlacedBet({ target: 'ante', amount: newAmount });
    } else {
      setPlacedBet({ target: 'ante', amount });
    }
    setBet(amountAfterBet);
    setTotal(total.add(amount));
    if (soundOn) {
      const audio = new Audio(chipSfx);
      audio.volume = soundVolume;
      audio.play();
    }
  };

  const deal = () => {
    if (!asset) throw new Error('No asset');
    setSendingTx(true);
    if (soundOn) {
      const audio = new Audio(clickSfx);
      audio.volume = soundVolume;
      audio.play();
    }

    const baseTx = {
      senderPublicKey: user.publicKey,
      // feeAssetId: env.REACT_APP_ASSETID,
      type: SIGN_TYPE.SCRIPT_INVOCATION,
      payment: [],
      dApp: env.REACT_APP_CSP_ADDRESS,
    };

    Promise.resolve(CalculateFee(baseTx)).then((feeDetails) => {
      const fee = new Money(feeDetails.feeAmount, asset);
      const payment = [
        new Money(
          new BigNumber(bet * Math.pow(10, asset.precision)),
          asset
        ),
      ];
      const func = env.REACT_APP_CSP_DEAL_FUNCTION;

      if (user.isKeeper) {
        const tx = {
          ...baseTx,
          sender: user.address,
          timestamp: Date.now(),
          version: 1,
          data: {
            dApp: env.REACT_APP_CSP_ADDRESS,
            call: {
              function: func,
              args: [],
            },
            fee: fee,
            payment: payment,
          },
        };

        window.WavesKeeper.signAndPublishTransaction(tx)
          .then(
            () => {
              setDealer({
                one: { flipped: false, rank: '2', suit: 'C' },
                two: { flipped: false, rank: '2', suit: 'C' },
                three: { flipped: false, rank: '2', suit: 'C' },
                four: { flipped: false, rank: '2', suit: 'C' },
                five: { flipped: false, rank: '2', suit: 'C' },
              });
              setPlayer({
                one: { flipped: false, rank: '2', suit: 'C' },
                two: { flipped: false, rank: '2', suit: 'C' },
                three: { flipped: false, rank: '2', suit: 'C' },
                four: { flipped: false, rank: '2', suit: 'C' },
                five: { flipped: false, rank: '2', suit: 'C' },
              });
              setCurrentStep(1);
              setSendingTx(false);
            },
            (e) => {
              setError(true);
              setErrorMessage({ message: e.data });
              setSendingTx(false);
            }
          )
          .catch((e) => {
            console.log(e);
            setError(true);
            setErrorMessage({ message: e.data });
            setSendingTx(false);
          });
      } else {
        const tx = {
          ...baseTx,
          sender: user.address,
          timestamp: Date.now(),
          version: 1,
          call: {
            function: func,
            args: [],
          },
          fee: fee,
          payment: payment,
        };

        const signable = createSignable(tx);

        signable
          .getDataForApi()
          .then((data) => {
            broadcast(data, env.REACT_APP_NODEURL).then(
              () => {
                setDealer({
                  one: { flipped: false, rank: '2', suit: 'C' },
                  two: { flipped: false, rank: '2', suit: 'C' },
                  three: { flipped: false, rank: '2', suit: 'C' },
                  four: { flipped: false, rank: '2', suit: 'C' },
                  five: { flipped: false, rank: '2', suit: 'C' },
                });
                setPlayer({
                  one: { flipped: false, rank: '2', suit: 'C' },
                  two: { flipped: false, rank: '2', suit: 'C' },
                  three: { flipped: false, rank: '2', suit: 'C' },
                  four: { flipped: false, rank: '2', suit: 'C' },
                  five: { flipped: false, rank: '2', suit: 'C' },
                });
                setCurrentStep(1);
                setSendingTx(false);
              },
              (e) => {
                setError(true);
                setErrorMessage(e);
                setSendingTx(false);
              }
            );
          })
          .catch((e) => {
            setError(true);
            setErrorMessage(e);
            setSendingTx(false);
          });
      }
    });
  };

  const raiseBet = () => {
    if (!asset) throw new Error('No asset');
    setSendingTx(true);
    if (soundOn) {
      const audio = new Audio(clickSfx);
      audio.volume = soundVolume;
      audio.play();
    }

    const baseTx = {
      senderPublicKey: user.publicKey,
      // feeAssetId: env.REACT_APP_ASSETID,
      type: SIGN_TYPE.SCRIPT_INVOCATION,
      payment: [],
      dApp: env.REACT_APP_CSP_ADDRESS,
    };

    Promise.resolve(CalculateFee(baseTx)).then((feeDetails) => {
      const fee = new Money(feeDetails.feeAmount, asset);
      const amount = new BigNumber(bet * Math.pow(10, asset.precision));
      const payment = [new Money(amount.mul(2), asset)];
      const func = env.REACT_APP_CSP_RAISEORFOLD_FUNCTION;

      if (user.isKeeper) {
        const tx = {
          ...baseTx,
          sender: user.address,
          timestamp: Date.now(),
          version: 1,
          data: {
            dApp: env.REACT_APP_CSP_ADDRESS,
            call: {
              function: func,
              args: [
                {
                  type: 'string',
                  value: 'raise',
                },
              ],
            },
            fee: fee,
            payment: payment,
          },
        };

        window.WavesKeeper.signAndPublishTransaction(tx)
          .then(
            () => {
              setRaise({ target: 'raise', amount: bet.mul(2) });
              setTotal(total.add(bet.mul(2)));
              setCurrentStep(3);
              setSendingTx(false);
              if (soundOn) {
                const audio = new Audio(chipSfx);
                audio.volume = soundVolume;
                audio.play();
              }
            },
            (e) => {
              setError(true);
              setErrorMessage({ message: e.data });
              setSendingTx(false);
            }
          )
          .catch((e) => {
            console.log(e);
            setError(true);
            setErrorMessage({ message: e.data });
            setSendingTx(false);
          });
      } else {
        const tx = {
          ...baseTx,
          sender: user.address,
          timestamp: Date.now(),
          version: 1,
          call: {
            function: func,
            args: [
              {
                type: 'string',
                value: 'raise',
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
              () => {
                setRaise({ target: 'raise', amount: bet.mul(2) });
                setTotal(total.add(bet.mul(2)));
                setCurrentStep(3);
                setSendingTx(false);
                if (soundOn) {
                  const audio = new Audio(chipSfx);
                  audio.volume = soundVolume;
                  audio.play();
                }
              },
              (e) => {
                setError(true);
                setErrorMessage(e);
                setSendingTx(false);
              }
            );
          })
          .catch((e) => {
            setError(true);
            setErrorMessage(e);
            setSendingTx(false);
          });
      }
    });
  };

  const fold = () => {
    if (!asset) throw new Error('No asset');
    setSendingTx(true);
    if (soundOn) {
      const audio = new Audio(clickSfx);
      audio.volume = soundVolume;
      audio.play();
    }

    const baseTx = {
      senderPublicKey: user.publicKey,
      // feeAssetId: env.REACT_APP_ASSETID,
      type: SIGN_TYPE.SCRIPT_INVOCATION,
      payment: [],
      dApp: env.REACT_APP_CSP_ADDRESS,
    };

    Promise.resolve(CalculateFee(baseTx)).then((feeDetails) => {
      const fee = new Money(feeDetails.feeAmount, asset);
      const func = env.REACT_APP_CSP_RAISEORFOLD_FUNCTION;

      if (user.isKeeper) {
        const tx = {
          ...baseTx,
          sender: user.address,
          timestamp: Date.now(),
          version: 1,
          data: {
            dApp: env.REACT_APP_CSP_ADDRESS,
            call: {
              function: func,
              args: [
                {
                  type: 'string',
                  value: 'fold',
                },
              ],
            },
            fee: fee,
            payment: [],
          },
        };

        window.WavesKeeper.signAndPublishTransaction(tx)
          .then(
            () => {
              resetGame();
              setCurrentStep(0);
              setSendingTx(false);
            },
            (e) => {
              setError(true);
              setErrorMessage({ message: e.data });
              setSendingTx(false);
            }
          )
          .catch((e) => {
            console.log(e);
            setError(true);
            setErrorMessage({ message: e.data });
            setSendingTx(false);
          });
      } else {
        const tx = {
          ...baseTx,
          sender: user.address,
          timestamp: Date.now(),
          version: 1,
          call: {
            function: func,
            args: [
              {
                type: 'string',
                value: 'fold',
              },
            ],
          },
          fee: fee,
          payment: [],
        };

        const signable = createSignable(tx);

        signable
          .getDataForApi()
          .then((data) => {
            broadcast(data, env.REACT_APP_NODEURL).then(
              () => {
                resetGame();
                setCurrentStep(0);
                setSendingTx(false);
              },
              (e) => {
                setError(true);
                setErrorMessage(e);
                setSendingTx(false);
              }
            );
          })
          .catch((e) => {
            setError(true);
            setErrorMessage(e);
            setSendingTx(false);
          });
      }
    });
  };

  const resetGame = () => {
    setBet();
    setPlacedBet();
    setRaise();
    setTotal(toBig(0));
    if (currentStep !== 4) {
      setDealer({
        one: { flipped: false, rank: '2', suit: 'C' },
        two: { flipped: false, rank: '2', suit: 'C' },
        three: { flipped: false, rank: '2', suit: 'C' },
        four: { flipped: false, rank: '2', suit: 'C' },
        five: { flipped: false, rank: '2', suit: 'C' },
      });
      setPlayer({
        one: { flipped: false, rank: '2', suit: 'C' },
        two: { flipped: false, rank: '2', suit: 'C' },
        three: { flipped: false, rank: '2', suit: 'C' },
        four: { flipped: false, rank: '2', suit: 'C' },
        five: { flipped: false, rank: '2', suit: 'C' },
      });
      if (soundOn) {
        const audio = new Audio(cardSfx);
        audio.volume = soundVolume;
        audio.play();
      }
    }
    if (soundOn) {
      const audio = new Audio(clickSfx);
      audio.volume = soundVolume;
      audio.play();
    }
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
      setSoundVolume(Number(localStorage.getItem('soundVolume')));
    }
    if (
      localStorage.getItem('music') &&
      localStorage.getItem('music') !== 'true'
    ) {
      setMusicOn(false);
    }
    if (localStorage.getItem('musicVolume')) {
      setMusicVolume(Number(localStorage.getItem('musicVolume')));
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

  const errorWipe = () => {
    setBet();
    setPlacedBet();
    setTotal(toBig(0));
    setError(null);
    setErrorMessage({ message: 'Something went wrong' });
  };

  const closeResult = () => {
    setShowResult(false);
    resetGame();
    setWaitingResult(false);
  };

  return (
    <>
      <ErrorModal
        open={error}
        errorMessage={errorMessage}
        onClose={errorWipe}
      />
      {start ? (
        <div className={styles.bg}>
          <div className={styles.table}>
            <div className={styles.chips}>
              <div
                className={`${checkSelected(toBig(0.1))} ${checkEnabled(
                  toBig(0.1)
                )} ${styles.purpleChip}`}
                onClick={() => changeAmount(toBig(0.1))}
              ></div>
              <div
                className={`${checkSelected(toBig(1))} ${checkEnabled(
                  toBig(1)
                )} ${styles.whiteChip}`}
                onClick={() => changeAmount(toBig(1))}
              ></div>
              <div
                className={`${checkSelected(toBig(5))} ${checkEnabled(
                  toBig(5)
                )} ${styles.redChip}`}
                onClick={() => changeAmount(toBig(5))}
              ></div>
              <div
                className={`${checkSelected(toBig(10))} ${checkEnabled(
                  toBig(10)
                )} ${styles.blueChip}`}
                onClick={() => changeAmount(toBig(10))}
              ></div>
              <div
                className={`${checkSelected(toBig(25))} ${checkEnabled(
                  toBig(25)
                )} ${styles.greenChip}`}
                onClick={() => changeAmount(toBig(25))}
              ></div>
              <div
                className={`${checkSelected(toBig(500))} ${checkEnabled(
                  toBig(500)
                )} ${styles.indigoChip}`}
                onClick={() => changeAmount(toBig(500))}
              ></div>
            </div>
            <div className={styles.craps}>
              <div className={styles.info}>
                <div className={styles.infoItems}>
                  <div>
                    <p className={styles.infoText}>Balance:</p>
                    <p className={styles.infoText}>
                      {user.balance.toFormat(2)} {asset.name}
                    </p>
                  </div>
                </div>
                <div className={styles.infoItems}>
                  <div>
                    <p className={styles.infoText}>Current Bet:</p>
                    <p className={styles.infoText}>
                      {total.toFormat(2)} {asset.name}
                    </p>
                  </div>
                </div>
                <div className={styles.infoItems}>
                  <div className={styles.desktopTotals}>
                    <p className={styles.infoText}>
                      Min Bet: {minBet.toFormat()} {asset.name}
                    </p>
                    <p className={styles.infoText}>
                      Max Bet: {maxBet.toFormat()} {asset.name}
                    </p>
                  </div>
                  <div className={styles.mobileTotals}>
                    <p className={styles.infoText}>
                      Min: {minBet.toFormat()} {asset.name}
                    </p>
                    <p className={styles.infoText}>
                      Max: {maxBet.toFormat()} {asset.name}
                    </p>
                  </div>
                </div>
                <div className={styles.modals}>
                  <PayoutModal />
                  <HowToModal />
                  <BetHistoryModal userAddress={user.address} asset={asset} />
                </div>
              </div>
              <div className={styles.matWrapper}>
                <TableLayout
                  addBet={addBet}
                  cardBack={cardBack}
                  dealer={dealer}
                  player={player}
                />
              </div>
              <div className={styles.playOrReset}>
                {currentStep === 0 || currentStep >= 4 ? (
                  <div className={styles.blocksLeft}>
                    <p>Place Your Bet And Click Deal To Start The Game!</p>
                  </div>
                ) : null}
                {currentStep === 1 ? (
                  <div className={styles.blocksLeft}>
                    <p>Fetching Opening Cards</p>
                    <p>Please Wait</p>
                  </div>
                ) : null}
                {currentStep === 2 ? (
                  <div className={styles.blocksLeft}>
                    <p>Decide Between Raising or Folding</p>
                  </div>
                ) : null}
                {currentStep === 3 ? (
                  <div className={styles.blocksLeft}>
                    <p>Fetching Remaining Dealer Cards</p>
                    <p>Please Wait</p>
                  </div>
                ) : null}
              </div>
            </div>
            <div className={styles.actions}>
              <button
                className={styles.actionButton}
                disabled={
                  total.lt(minBet) ||
                  total.gt(maxBet) ||
                  (currentStep > 0 && currentStep < 4) ||
                  sendingTx ||
                  waitingResult
                }
                onClick={() => deal()}
              >
                Deal
              </button>
              <div className={styles.mainActButtons}>
                <button
                  className={styles.actionButton}
                  disabled={currentStep !== 2 || sendingTx}
                  onClick={() => raiseBet()}
                >
                  Raise
                </button>
                <button
                  className={styles.actionButton}
                  disabled={currentStep !== 2 || sendingTx}
                  onClick={() => fold()}
                >
                  Fold
                </button>
              </div>
              <button
                className={styles.actionButton}
                disabled={
                  total <= 0 ||
                  (currentStep > 0 && currentStep < 4) ||
                  sendingTx
                }
                onClick={() => resetGame()}
              >
                Reset
              </button>
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
              soundOn={soundOn}
              won={won}
              totalWon={totalWon}
            />
          ) : null}
        </div>
      ) : (
        <div className={styles.landingWrapper}>
          <div className={styles.landing}>
            <img className={styles.landingLogo} src={logo} alt='WAVES logo' />
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
            <p className={styles.landingName}>Caribbean Stud Poker</p>
          </div>
        </div>
      )}
      {placedBet && document.getElementById(placedBet.target) ? (
        <Coins bet={placedBet} />
      ) : null}
      {raise && document.getElementById(raise.target) ? (
        <Coins bet={raise} />
      ) : null}
    </>
  );
};

export default Craps;
