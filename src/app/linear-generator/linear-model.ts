import { applyEach, required, schema ,max, min, validate} from "@angular/forms/signals";
import { notesTypeIsValid } from "../shared/validators";


export interface LinearRequest {
    title:string,
    measuresCount:number,
    beats:number,
    beatType:string,
    notesType:string,
    specialSnare:string,
    stickingType:string,
    showStickings:boolean,
    enableHandRestrictions:boolean,
    removeMeasureLimits:boolean,
    instruments:LinearInstrumentRequest[]
}
export interface LinearInstrumentRequest {
    id: string,
    hasLimit: boolean,
    limit: number,
    probability: number,
    accentProbability: number,
    isStarting:boolean
}
export const initialLinearData: LinearRequest = {

    title:"MyTestTitle",
    measuresCount:64,
    beats:4,
    beatType:"Quarter",
    notesType:"Sixteenth",
    specialSnare:"None",
    stickingType:"None",
    showStickings:false,
    enableHandRestrictions:false,
    removeMeasureLimits:false,
    instruments:[
        {
            id: "37",
            hasLimit: false,
            limit: 0,
            probability: 1,
            accentProbability: 0,
            isStarting:true
        },
        {
            id: "39",
            hasLimit: false,
            limit: 0,
            probability: 1,
            accentProbability: 0,
            isStarting:false
        }
    ]
};
export const initialInstrumentData: LinearInstrumentRequest = {
    id: "39",
    hasLimit: false,
    limit: 0,
    probability: 1,
    accentProbability: 0,
    isStarting:false
}
export const requestSchema = schema<LinearRequest>(rootPath => {
  required(rootPath.title, { message: 'Title is required' });
  applyEach(rootPath.instruments, instrumentsSchema);  
  min(rootPath.measuresCount, 1, { message: 'Measures count must be greater than 0' });
  min(rootPath.beats, 1, { message: 'Beats count must be greater than 0' });
  max(rootPath.beats, 100, { message: 'Beats count must be less then 100' });
  validate(rootPath.instruments, ({ value })  => {
    return value.length >0 ? null : {kind: 'noInstruments',
          message: 'You must choose at least one instrument.'}});
    validate(rootPath.notesType, ({ value , valueOf })  => {
        if(notesTypeIsValid(valueOf(rootPath.beatType),value())){
            return null;
        }
        return {
          kind: 'WrongNoteDuration',
          message: 'This note duration is not possible with this beat type'}});
});

const instrumentsSchema = schema<LinearInstrumentRequest>((path) => {
  min(path.limit, 0, { message: 'Limit must be greater than 0' });
  max(path.limit, 10, { message: 'Limit must be less then 10' });
  min(path.accentProbability, 0, { message: 'Accent probability must be greater than 0' });
  max(path.accentProbability, 100, { message: 'Accent probability must be less then 100' });
  min(path.probability, 0, { message: 'Probability must be greater than 0' });
  max(path.probability, 40, { message: 'Probability must be less then 40' });
});