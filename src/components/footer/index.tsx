import styles from "@/styles/styles.module.css";
import { SocialLink } from "@/utils/Links";
import { Icons } from "@/icons";
import Link from "next/link";
export const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footerContent}>
                    <Link href={SocialLink.instagram}><Icons.Instagram size={40} color="#d1d1d1a4" /></Link>
                    <Link href={SocialLink.github}><Icons.Git size={40} color="#d1d1d1a3"/></Link>
                    <Link href={SocialLink.youtube}><Icons.Youtube size={40} color="#d1d1d1a4" /></Link>
                </div>
            </div>
        </>
    )
}