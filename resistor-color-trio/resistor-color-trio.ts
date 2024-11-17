type Color = keyof typeof COLORS;

export function decodedResistorValue(colors: Color[]) : string {
  let val: number = (COLORS[colors[0]] * 10 + (COLORS[colors[1]])) * (10 ** COLORS[colors[2]]);
  let metric: string = " ";
  if (val / 1000000000 >= 1){
    val = val / 1000000000;
    metric = " giga";
  }else if(val / 1000000 >= 1){
    val = val / 1000000;
    metric = " mega";
  }else if(val / 1000 >= 1){
    val = val / 1000;
    metric = " kilo";
  }

  return val + metric + "ohms";
}
export const COLORS = {
  black : 0,
  brown : 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet:7,
  grey:8,
  white:9,
}
