import styles from "@/styles/styles.module.css";

type PropsButton = {
    label: string,
    onChange: () => void

}

export const Button = ({ label, onChange }: PropsButton) => {
    return (
        <button
            onClick={onChange}
            className={styles.buttonCalculate}>{label}</button>
    )

} // end Button