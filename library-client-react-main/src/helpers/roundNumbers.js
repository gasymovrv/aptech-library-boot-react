export default function roundNumbers(value, decimals) {
    return Number(Math.round(`${value}e${decimals}`)+`e-${decimals}`);
}