export interface TrapRequest {
    title:string,
    patternsCount:number,
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
export const initialTrapData: TrapRequest = 
{
  "fragmentBases": [
    {
      "id": 2,
      "probability": 2
    },
    {
      "id": 3,
      "probability": 2
    },
    {
      "id": 7,
      "probability": 1
    }
  ],
  "fragmentMelodies": [
    {
      "id": 1,
      "probability": 1
    },
    {
      "id": 2,
      "probability": 1
    },
    {
      "id": 3,
      "probability": 1
    },
    {
      "id": 4,
      "probability": 1
    }
  ],
  "notesProbabilities": [
    {
      "id": "39",
      "probability": 1
    },
    {
      "id": "51",
      "probability": 1
    },
    {
      "id": "42",
      "probability": 1
    }
  ],
  "beatsCount": 4,
  "measuresCount": 2,
  "patternsCount": 16,
  "title": "fills",
  "snare": "HalfTime",
  "polyrhythms": "TwoToThree",
  "noMelody": false,
  "lockedBases": [
    0,
    0,
    0,
    0,0,0,0,0
  ],
  "lockedMelodies": [
    0,
    0,
    0,
    0,0,0,0,0
  ]
}
export const initialTrapInstrumentData: TrapSimpleNoteRequest = {
    id: "39",
    probability: 1,
}