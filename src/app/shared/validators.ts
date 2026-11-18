export function notesTypeIsValid(beatType: string, notesType: string): boolean {
  if(beatType === "Quarter") {
    return true;
  }
  else if(beatType === "8th") {
    if (notesType === "Quarter" || notesType === "EighthTriplet"|| notesType === "Quintuplet" || notesType === "Septuplet" ) {
        return false;
    }
    return true;
  }
  else {
    if (notesType === "Sixteenth" || notesType === "ThirtySecond"){
        return true;
    }
    return false;
  }
}