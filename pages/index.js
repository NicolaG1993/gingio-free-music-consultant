import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import whatsAppLogo from "../public/assets/WhatsApp.webp";
import gingioLogo from "../public/assets/gingio.png";
import payPalLogo from "../public/assets/Paypal.png";

export default function Home({ scrollTop, width, height, isSmallDevice }) {
    const [animationReady, setAnimationReady] = useState(false);
    const [overSection, setOverSection] = useState(false);
    const [chatButton, setChatButton] = useState(false);

    const [heading1Style, setHeading1Style] = useState(
        "heading-from-right-before"
    );
    const [heading2Style, setHeading2Style] = useState(
        "heading-fade-in-before"
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationReady(true);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // INTERSECTION OBSERVER STUFF
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting) {
                        if (i === 0) {
                            setHeading1Style("heading-from-right-after");
                        }
                        if (i === 1) {
                            setHeading2Style("heading-fade-in-after");
                        }
                    } else {
                        return;
                    }
                });
            },
            {
                threshold: [0],
            }
        );
        // ELEMENTS TO OBSERVE
        const heading1 = document.querySelector("#heading1");
        const heading2 = document.querySelector("#heading2");
        // START OBSERVING ELEMENTS
        io.observe(heading1);
        io.observe(heading2);
    }, [scrollTop]);

    const renderAnimationA = animationReady
        ? {
              transform: "translateX(0)",
              opacity: "1",
          }
        : {
              transform: "translateX(-50%)",
              opacity: "0",
          };
    const renderAnimationB = animationReady
        ? {
              transform: "translateY(0)",
              opacity: "1",
          }
        : {
              transform: "translateY(-50px)",
              opacity: "0",
          };

    return (
        <>
            <main
                className={styles.main}
                style={
                    overSection
                        ? { transform: "translateX(-30%)" }
                        : { transform: "translateX(0)" }
                }
            >
                <Head>
                    <title>Create Next App</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <section className={styles.section} id={styles.Home}>
                    <div className={styles.content}>
                        <div>
                            <div>
                                <Image
                                    src={"/assets/logo.png"}
                                    width="240"
                                    height="100"
                                    alt="logo"
                                    className={styles.logo}
                                    style={renderAnimationA}
                                />
                                <p
                                    className={styles.description}
                                    style={renderAnimationB}
                                >
                                    Local and Global FREE First Class Music
                                    Consulting for Artists and music
                                    Enterpreneurs.
                                </p>
                                <p
                                    onClick={() => setOverSection("about")}
                                    className={styles.navLink}
                                    style={renderAnimationB}
                                >
                                    ABOUT US
                                </p>
                                <p
                                    onClick={() => setOverSection("disclaimer")}
                                    className={styles.navLink}
                                    style={renderAnimationB}
                                >
                                    Disclaimer
                                </p>
                            </div>

                            <div>
                                <div>
                                    <span
                                        className={styles.poweredBy}
                                        style={renderAnimationA}
                                    >
                                        POWERED BY
                                        <Image
                                            src={gingioLogo}
                                            width="auto"
                                            height="20"
                                            alt="Gingio Logo"
                                        />
                                    </span>

                                    <a
                                        href="https://wa.me/13102806893 "
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.chat}
                                        onMouseEnter={() => setChatButton(true)}
                                        onMouseLeave={() =>
                                            setChatButton(false)
                                        }
                                        style={renderAnimationA}
                                    >
                                        <div
                                            className={styles.popout}
                                            style={
                                                chatButton
                                                    ? { width: "120px" }
                                                    : { width: "0" }
                                            }
                                        >
                                            <p
                                                style={
                                                    chatButton
                                                        ? {
                                                              opacity: "1",
                                                              transform:
                                                                  "translateX(0)",
                                                          }
                                                        : {
                                                              opacity: "0",
                                                              transform:
                                                                  "translateX(100%)",
                                                          }
                                                }
                                            >
                                                Chat with us!
                                            </p>
                                        </div>

                                        <Image
                                            src={whatsAppLogo}
                                            width="60"
                                            height="60"
                                            alt="WhatsApp Logo"
                                        />
                                    </a>
                                </div>

                                <div className={styles.copyrights}>
                                    <p>
                                        © {new Date().getFullYear()} GINGIO,
                                        Privacy Policy
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.brandMission}>
                        <p id="heading1" className={heading1Style}>
                            Unify dreams and reality, connect yourself locally
                            and globally to
                        </p>
                        {/* <p id="heading1" className={heading1Style}>
                            Unify dreams and reality, connect yourself globally
                            to
                        </p> */}
                        <p id="heading2" className={heading2Style}>
                            BE MORE!
                        </p>
                    </div>
                </section>

                <section className={styles.smallSection}>
                    <div className={styles.donations}>
                        <div>
                            <p>
                                Please donate in order to keep our free service
                                active for the ones in need
                            </p>

                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.paypal.com/donate/?hosted_button_id=RDC639FH4EJDN"
                            >
                                {/* PAYPAL */}
                                <Image
                                    src={payPalLogo}
                                    layout="fill"
                                    objectFit="contain"
                                    alt="PayPal Logo"
                                />
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <section
                className={styles.section}
                id={styles.OverSection}
                style={
                    overSection
                        ? { transform: "translateX(0)", opacity: "1" }
                        : { transform: "translateX(100%)", opacity: "1" }
                }
            >
                <div>
                    <div>LOGO</div>
                    <span onClick={() => setOverSection(false)}>Close</span>
                </div>

                <div className={styles.about}>
                    {overSection === "about" && (
                        <>
                            <h3>ABOUT US</h3>
                            <p>
                                CEO and Creative Designer Jannik Olander was
                                born in the small country of Denmark. Though
                                raised on the Danish countryside, he was
                                fascinated with style, energy, and the arts from
                                a young age. Through endeavors in the fashion
                                industry he was able to refine a distinct style
                                of beauty, quality, and spirituality. But it was
                                not until he traveled to the Far East that
                                Jannik truly gained the vision which inspired
                                him to create the first piece of Nialaya
                                Jewelry. Jannik visited a local bazaar on his
                                first trip to India. While walking through the
                                crowded market he was stopped by a local Shaman
                                who asked to read his palm. The Shaman sat
                                peacefully on a blanket made of yellow silk. The
                                once smooth fabric was weathered and red dust
                                covered parts of a once beautiful golden French
                                lily. The Shaman’s honest eyes were a calm and
                                piercing emerald green. Having felt a sincere
                                and calm energy from the man, he decided to give
                                him a few minutes of his time. He took a seat
                                next to him. “First, tell me your name”, said
                                the Shaman. They sat in silence as the Shaman
                                looked deeply into Jannik’s eyes. He then began
                                to examine his palm.
                            </p>
                        </>
                    )}

                    {overSection === "disclaimer" && (
                        <>
                            <h3>DISCLAIMER</h3>
                            <p></p>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}
