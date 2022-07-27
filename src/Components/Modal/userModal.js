import { React, useState } from "react";
import "./style.css";
// import styles from "./userModal.module.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Link } from "react-router-dom";

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
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M10 10l4 4m0 -4l-4 4" />
    </svg>
);

const ForgotModal = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="forgot mt-2" onClick={() => setOpen(true)}>
                <p className="mt-2">Forgot Your Password?</p>
            </div>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                center
                classNames={{
                    overlay: "customOverlay",
                    modal: "customModal",
                }}
                closeIcon={closeIcon}>
                <div className="mb-4">
                    <div className="mtxt2 text-uppercase mt-5">
                        If you proceed your account will be wiped.
                    </div>
                    <div className="mtxt2 text-uppercase mb-5">
                        Make sure you have saved your seed so you can reimport
                        it.
                    </div>
                    <Link
                        to="/CreatePassword"
                        className="button acc2btn text-uppercase">
                        I Understand
                    </Link>
                </div>
            </Modal>
        </>
    );
};

const SeedModal = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                className="button acc2btn text-uppercase"
                onClick={() => setOpen(true)}>
                Reveal Seed Phrase
            </button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                center
                classNames={{
                    overlay: "customOverlay",
                    modal: "customModal",
                }}
                closeIcon={closeIcon}>
                <div className="m-5">
                    <button
                        className="generatedSeed"
                        onClick={() =>
                            navigator.clipboard.writeText(props.seed)
                        }>
                        <span className="generatedSeedText">{props.seed}</span>{" "}
                        <span className="copy"></span>
                    </button>
                </div>
            </Modal>
        </>
    );
};

export { ForgotModal, SeedModal };
export default ForgotModal;
