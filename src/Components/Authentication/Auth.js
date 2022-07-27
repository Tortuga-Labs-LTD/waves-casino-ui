import React, { Component } from "react";
import { nodeInteraction } from "@waves/waves-transactions";
import { Asset, Money } from "@waves/data-entities";
import { SeedAdapter } from "@waves/signature-adapter";

const AuthContext = React.createContext();

class AuthProvider extends Component {
    // Context state
    state = {
        user: {
            isLogged: false,
            isAuth: false,
            password: null,
            address: null,
            balance: null,
            hasScript: false,
            publicKey: null,
            isKeeper: null,
        },
        encryptionKey: null,
        seed: null,
        asset: null,
    };

    nodeUrl = process.env.REACT_APP_NODEURL;
    assetId = process.env.REACT_APP_ASSETID;

    componentWillUnmount() {
        if (this.state.intervalId) {
            clearInterval(this.state.intervalId);
        }
    }

    // Method to update state
    setUser = (user) => {
        this.setState((_) => ({ user }));
    };

    setSeed = (seed) => {
        this.setState((_) => ({ seed }));
    };

    setAsset = (asset) => {
        this.setState((_) => ({ asset }));
    };

    setEncryptionKey = (encryptionKey) => {
        this.setState((_) => ({ encryptionKey }));
    };

    logout = () => {
        if (this.state.intervalId) {
            clearInterval(this.state.intervalId);
        }
        this.setState({
            user: {
                isLogged: false,
                isAuth: false,
                password: null,
                address: null,
                balance: null,
                hasScript: false,
                publicKey: null,
            },
            encryptionKey: null,
            seed: null,
            asset: null,
        });
    };

    initiateUser = (address) => {
        Promise.all([this.getAsset(), this.checkScript(address)]).then(
            ([asset, hasScriptInfo]) => {
                this.setAsset(asset);
                this.setUser({ ...this.state.user, hasScript: hasScriptInfo });
                this.initiateBalance(address);
            }
        );
    };

    initiateBalance = (address) => {
        this.getBalance(address);
        const intervalId = setInterval(() => this.getBalance(address), 5000);
        this.setState({ intervalId: intervalId });
    };

    getBalance = (address) => {
        Promise.resolve(this.getAmount(address)).then((amount) => {
            if (this.state.asset) {
                this.setUser({
                    ...this.state.user,
                    balance: new Money(amount, this.state.asset),
                });
            }
        });
    };

    async getAmount(address) {
        const amount = await nodeInteraction.balanceDetails(
            address,
            this.nodeUrl
        );
        return amount.available;
    }

    async getAsset() {
        return new Asset({
            ticker: "WAVES",
            id: "WAVES",
            name: "Waves",
            precision: 8,
            description: "",
            height: 0,
            timestamp: new Date("2016-04-11T21:00:00.000Z"),
            sender: "",
            quantity: 10000000000000000,
            reissuable: false,
        });
    }

    async checkScript(address) {
        await nodeInteraction.scriptInfo(address, this.nodeUrl).then((info) => {
            return info.script ? true : false;
        });
    }

    createSignable = (tx) => {
        const type = tx.type;
        const adapter = new SeedAdapter(
            this.state.seed,
            process.env.REACT_APP_CODE.charCodeAt(0)
        );
        const signable = adapter.makeSignable({
            type: type,
            data: tx,
        });

        return signable;
    };

    render() {
        const { children } = this.props;
        const { user, asset, encryptionKey, seed } = this.state;
        const {
            setUser,
            setSeed,
            setEncryptionKey,
            initiateUser,
            createSignable,
            logout,
        } = this;

        return (
            <AuthContext.Provider
                value={{
                    user,
                    asset,
                    encryptionKey,
                    seed,
                    setUser,
                    setSeed,
                    setEncryptionKey,
                    initiateUser,
                    createSignable,
                    logout,
                }}>
                {children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContext;

export { AuthProvider };
