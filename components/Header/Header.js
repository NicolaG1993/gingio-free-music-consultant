import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header
            id={styles["Header"]}
            // style={
            //     scrollTop > 20 && !active
            //         ? { transform: "translateY(-60px)" }
            //         : { transform: "translateY(0%)" }
            // }
        >
            {/* <div className={styles["header-box"]}>
                <Link href="/">LOGO</Link>
            </div> */}
        </header>
    );
}
