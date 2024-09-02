
import React from 'react';

import styles from "@/styles/styles.module.css";
type ColorSelectProps = {
    label: string;
    colors: { name: string; value: string }[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const ColorSelect:React.FC<ColorSelectProps> = ({ label, colors, onChange }) => {
    return (
        <div className={styles.select}>
            <label className={styles.label}>{label}</label>
            <select onChange={onChange} className={styles.selectChildren}>
                {colors.map((color) => (
                    <option key={color.value} value={color.value}>
                        {color.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ColorSelect;
