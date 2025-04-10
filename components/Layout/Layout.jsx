import React from 'react';
import Header from "../Header/Header"
import Head from "next/head.js";
import styles from "./Layout.module.css"
import {Bounce, ToastContainer} from "react-toastify";
import Footer from "../Footer/Footer.jsx";

const Layout = ({ children }) => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>CampusType</title>
                <link rel="icon" href="/CampusType.jpg"/>
            </Head>
            <div className={styles.contentWrapper}>
                <Header></Header>
                <main className={styles.content}>
                    {children}
                    <ToastContainer
                        position="top-left"
                        autoClose={3000}
                        hideProgressBar={false}
                        closeOnClick={true}
                        pauseOnHover={false}
                        draggable={false}
                        transition={Bounce}
                    />
                </main>
            </div>
        </>
    );
};

export default Layout;