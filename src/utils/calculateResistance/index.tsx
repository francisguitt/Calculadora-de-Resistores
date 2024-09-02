
type ColorCode = {
    digit?: number;
    multiplier: number;
    tolerance?: string;
};

const colorCode: Record<string, ColorCode> = {
    black: { digit: 0, multiplier: 1 },
    brown: { digit: 1, multiplier: 10, tolerance: '1%' },
    red: { digit: 2, multiplier: 100, tolerance: '2%' },
    orange: { digit: 3, multiplier: 1000 },
    yellow: { digit: 4, multiplier: 10000 },
    green: { digit: 5, multiplier: 100000, tolerance: '0.5%' },
    blue: { digit: 6, multiplier: 1000000, tolerance: '0.25%' },
    purple: { digit: 7, multiplier: 10000000, tolerance: '0.1%' },
    gray: { digit: 8, multiplier: 100000000, tolerance: '0.05%' },
    white: { digit: 9, multiplier: 1000000000 },
    gold: { multiplier: 0.1, tolerance: '5%' },
    silver: { multiplier: 0.01, tolerance: '10%' },
};

export type ResistanceResult = {
    resistance: number;
    tolerance: string;
};

export const calculateResistance = (bands: string[]): ResistanceResult => {
    const firstDigit = colorCode[bands[0]].digit!;
    const secondDigit = colorCode[bands[1]].digit!;
    const multiplier = colorCode[bands[2]].multiplier;
    const tolerance = colorCode[bands[3]].tolerance || '20%';

    const resistance = (firstDigit * 10 + secondDigit) * multiplier;

    return { resistance, tolerance };
};
