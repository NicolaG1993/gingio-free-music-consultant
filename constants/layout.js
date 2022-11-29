import Head from "next/head";
import Header from "../components/Header/Header";

import {
    useEffect,
    useState,
    Children,
    isValidElement,
    cloneElement,
} from "react";

export default function Layout({ children, ...pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name="keywords"
                    content="FMC, Free, Music, Consultant, DJ, International, Live, Events, Entertainment, Musicians, Services, Management"
                />
                <meta
                    name="description"
                    content="FMC - Free Music Consultant"
                />
                <meta
                    property="og:description"
                    content="FMC - Free Music Consultant"
                />

                <meta property="og:url" content="https://www.fmc.com" />
                <meta property="og:image" content="/logo.png" />
                <meta property="og:image:alt" content="FMC Logo" />
                <link rel="icon" href="/icon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                ></link>
                <link
                    rel="apple-touch-icon"
                    sizes="192x192"
                    href="/android-chrome-192x192
                    .png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="512x512"
                    href="/android-chrome-512x512.png"
                />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="author" content="NGD - Nicola Gaioni Design" />
                <meta charSet="UTF-8" />
            </Head>

            <Header />

            {children}
        </>
    );
}
