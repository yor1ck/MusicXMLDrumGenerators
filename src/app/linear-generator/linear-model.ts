import { applyEach, required, schema ,max, min} from "@angular/forms/signals";


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
export const requestSchema = schema<LinearRequest>(rootPath => {
  required(rootPath.Title, { message: 'Title is required' });
  applyEach(rootPath.Instruments, instrumentsSchema);
});

const instrumentsSchema = schema<LinearInstrumentRequest>((path) => {
  min(path.Limit, 0, { message: 'Limit must be greater than 0' });
  max(path.Limit, 10, { message: 'Limit must be greater less then 10' });
  min(path.AccentProbability, 0, { message: 'Accent probability must be greater than 0' });
  max(path.AccentProbability, 100, { message: 'Accent probability must be less then 100' });
  min(path.Probability, 0, { message: 'Probability must be greater than 0' });
  max(path.Probability, 40, { message: 'Probability must be less then 40' });
});