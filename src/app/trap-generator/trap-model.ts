export interface TrapRequest {
    title:string,
    measuresCount:number,
    beatsCount:number,
    snare:string,
    polyrhythms:string,
    noMelody:boolean,
    notesProbabilities:TrapSimpleNoteRequest[],
    fragmentBases:TrapBaseFragmentRequest[],
    fragmentMelodies:TrapMelodyFragmentRequest[],
    lockedBases:number[],
    lockedMelodies:number[],

}
export interface TrapSimpleNoteRequest {
    id: string,
    probability: number,
}
export interface TrapBaseFragmentRequest {
    id: number,
    probability: number,
}
export interface TrapMelodyFragmentRequest {
    id: number,
    probability: number,
}