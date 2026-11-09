export interface LinearRequest {
    Title:string,
    MeasuresCount:number,
    Beats:number,
    BeatType:string,
    NotesType:string,
    SpecialSnare:string,
    StickingType:string,
    ShowStickings:boolean,
    EnableHandRestrictions:boolean,
    RemoveMeasureLimits:boolean,
    Instruments:LinearInstrumentRequest[]
}
export interface LinearInstrumentRequest {
    Id: number,
    HasLimit: boolean,
    Limit: number,
    Probability: number,
    AccentProbability: number,
    IsStarting:boolean
}