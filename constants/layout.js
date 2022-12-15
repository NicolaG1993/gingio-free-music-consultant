import Head from "next/head";
import Header from "../components/Header/Header";
import useWindowDimensions from "../utils/useWindowDimensions";
import useScrollPosition from "../utils/useScrollPosition";

import {
    useEffect,
    useState,
    Children,
    isValidElement,
    cloneElement,
} from "react";

export default function Layout({ children, ...pageProps }) {
    const { width, height } = useWindowDimensions();
    const { scrollTop } = useScrollPosition();
    const [isSmallDevice, setIsSmallDevice] = useState(false);
    const [animationReady, setAnimationReady] = useState(false);
    const [cookiesConfirm, setCookiesConfirm] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationReady(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(
        () => (width > 550 ? setIsSmallDevice(false) : setIsSmallDevice(true)),
        [width]
    );

    const renderAnimation = animationReady
        ? {
              transform: "translateY(0)",
              opacity: "1",
          }
        : {
              transform: "translateY(50px)",
              opacity: "0",
          };

    // Passing props form Layout to children component:
    //Create recursive Map on children.
    function recursiveMap(children, fn) {
        return Children.map(children, (child) => {
            if (!isValidElement(child) || typeof child.type == "string") {
                return child;
            }

            if (child.props.children) {
                child = cloneElement(child, {
                    children: recursiveMap(child.props.children, fn),
                });
            }

            return fn(child);
        });
    }
    // Add props to all child elements.
    const childrenWithProps = recursiveMap(children, (child) => {
        // Checking isValidElement is the safe way and avoids a TS error too.
        if (isValidElement(child)) {
            // Pass additional props here
            return cloneElement(child, {
                scrollTop: scrollTop,
                width: width,
                height: height,
                isSmallDevice: isSmallDevice,
            });
        }

        return child;
    });

    return (
        <>
            <Head>
                <meta
                    name="keywords"
                    content="FMC, Free, Music, Consultant, DJ, International, Live, Events, Entertainment, Musicians, Services, Management"
                />
                <meta
                    name="description"
                    content="FMC • FREE First Class Music Consultant"
                />
                <meta
                    property="og:description"
                    content="FMC • FREE First Class Music Consultant"
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

            {childrenWithProps}

            {!cookiesConfirm && (
                <div className="cookieWrap" style={renderAnimation}>
                    <p>
                        This website uses essential cookies to improve the user
                        experience.
                    </p>
                    <span onClick={() => setCookiesConfirm(true)}>
                        I understand
                    </span>
                </div>
            )}
        </>
    );
}
