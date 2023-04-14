type roundToNumber = (num: number, decimals: number) => number;

export const round: roundToNumber = (num: number, decimals: number) => {
  return +(Math.round(+(num + `e+${decimals}`)) + `e-${decimals}`);
};