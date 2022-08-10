#Waves Roulette

## Instructions for setup:

### In the .env.development/.env.production files update the environment variables as seen below:

REACT_APP_INSTANCE = `testnet, stagenet or mainnet`

REACT_APP_CODE = `Identifier for instance e.g.:'T' for testnet`

REACT_APP_NODEURL = `Url of the node api endpoint`

REACT_APP_APIURL = `Endpoint for your version of the waves-casino-api`

REACT_APP_EXPLORER = `Waves explorer endpoint for the selected instance`

REACT_APP_ROULETTE_ADDRESS = `Dapp address where you hosted the Roulette script`

REACT_APP_CSP_ADDRESS = `Dapp address where you hosted the Caribbean Stud Poker script`

##### Running the code locally:

Run `npm install` then `npm start`

##### You will need to run both the game master and the api to fully utilize the code:

###### Game Master:

`https://github.com/Tortuga-Labs-LTD/waves-casino-game-master`

###### API:

`https://github.com/Tortuga-Labs-LTD/waves-casino-api`
