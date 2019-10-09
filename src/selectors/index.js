export const getErrorsReducer = state => state.errors;
export const getSecurityReducer = state => state.security;
export const getComputerBuildDetailsReducer = state =>
  state.computerBuildDetails;
export const getBuildNoteReducer = state =>
  state.computerBuildDetails.buildNote;
export const getComputerPartReducer = state =>
  state.computerBuildDetails.computerPart;
export const getDirectionReducer = state =>
  state.computerBuildDetails.direction;
export const getOverclockingNoteReducer = state =>
  state.computerBuildDetails.overclockingNote;
export const getPurposeReducer = state => state.computerBuildDetails.purpose;
export const getComputerBuildReducer = state => state.computerBuild;

export const getComputerPartsList = state => state.computerParts;
export const getPurposeList = state => state.purposeList;
export const getBuildNotesList = state => state.buildNotes;
export const getDirectionsList = state => state.directions;
export const getOverclockingNotesList = state => state.overclockingNotes;
export const getComputerBuildsList = state => state.computerBuilds;

export const getTotalPrice = state => state.totalPrice;