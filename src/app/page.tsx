"use client"

import React, { useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ColorSelect from '@/components/colorSelect';
import { calculateResistance, ResistanceResult } from '../utils/calculateResistance';

import { colors } from "@/components/colorsListCode";
import styles from "@/styles/styles.module.css";

import resistor2 from "../../public/images-removebg-preview (4).png";
import { Footer } from '@/components/footer';
import { Button } from '@/components/buttons';
import { SocialLink } from '@/utils/Links';

const Home: React.FC = () => {

    const [bands, setBands] = useState<string[]>(['black', 'black', 'black', 'gold']);
    const [resistance, setResistance] = useState<ResistanceResult | null>(null);

    const handleChange = (index: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newBands = [...bands];
        newBands[index] = e.target.value;
        setBands(newBands);
    };

    const handleCalculate = () => {
        const result = calculateResistance(bands);
        setResistance(result);
        setTimeout(() => {
            clearFields();
            // setResistance(null);  
        }, 2000);
    };
    const clearFields = () => {
        setBands(['black', 'black', 'black', 'gold']);
    }

    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerTitle}>
                    <h1 className={styles.title}>Códigos de Resistores</h1>
                    <Link href={SocialLink.instagram} style={{ color: "#ddd" }}>desenvovido por guittzoom</Link>
                </div>
                <div className={styles.headerContent}>

                    <ColorSelect label="Faixa 1" colors={colors} onChange={handleChange(0)} />
                    <ColorSelect label="Faixa 2" colors={colors} onChange={handleChange(1)} />
                    <ColorSelect label="Faixa 3 (Multiplicador)" colors={colors} onChange={handleChange(2)} />
                    <ColorSelect label="Faixa 4 (Tolelância)" colors={colors} onChange={handleChange(3)} />

                    {resistance && (

                        <div className={styles.result}>
                            <h2 style={{ color: "#000" }}>Resistência: {resistance.resistance}Ω</h2>
                            <h3 style={{ color: "#00ff" }}>Tolerância: ±{resistance.tolerance}</h3>
                            <Image src={resistor2} width={100} height={100} alt='' />
                        </div>
                    )}
                    <div className={`${styles.buttonArea}`}>
                        <Button label="Calcular" onChange={handleCalculate} />
                    </div>

                    <Footer />
                </div>

            </header>
        </>
    );
};

export default Home;

