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
    Id: string,
    HasLimit: boolean,
    Limit: number,
    Probability: number,
    AccentProbability: number,
    IsStarting:boolean
}
export const initialLinearData: LinearRequest = {

    Title:"MyTestTitle",
    MeasuresCount:64,
    Beats:4,
    BeatType:"Quarter",
    NotesType:"Sixteenth",
    SpecialSnare:"None",
    StickingType:"None",
    ShowStickings:false,
    EnableHandRestrictions:false,
    RemoveMeasureLimits:false,
    Instruments:[
        {
            Id: "37",
            HasLimit: false,
            Limit: 0,
            Probability: 1,
            AccentProbability: 0,
            IsStarting:true
        },
        {
            Id: "39",
            HasLimit: false,
            Limit: 0,
            Probability: 1,
            AccentProbability: 0,
            IsStarting:false
        }
    ]
};
export const initialInstrumentData: LinearInstrumentRequest = {
    Id: "39",
    HasLimit: false,
    Limit: 0,
    Probability: 1,
    AccentProbability: 0,
    IsStarting:false
}
