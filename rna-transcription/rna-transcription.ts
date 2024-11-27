type RNAkey = keyof typeof RNA;

export function toRna(seq : string) : string {
  let seq2: string =  seq.split('').map((i) => RNA[i as RNAkey] || '').join('');
  if(seq2.length == seq.length){
    return seq2;
  }else{
    throw new Error("Invalid input DNA.")
  }
}

export const RNA = {
  G : 'C',
  C : 'G',
  T : 'A',
  A : 'U'

}
