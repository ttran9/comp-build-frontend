import {
  GET_COMPUTER_BUILD_DETAILS,
  DELETE_COMPUTERPART,
  GET_COMPUTERPART,
  DELETE_PURPOSE,
  GET_PURPOSE,
  DELETE_BUILD_NOTE,
  GET_BUILD_NOTE,
  DELETE_DIRECTION,
  GET_DIRECTION,
  DELETE_OVERCLOCKING_NOTE,
  GET_OVERCLOCKING_NOTE
} from "../actions/types";
import {
  getBuildNotesList,
  getComputerPartsList,
  getDirectionsList,
  getOverclockingNotesList,
  getPurposeList, getTotalPrice
} from "../selectors";

const initialState = {
  computerParts: [],
  computerPart: {},
  directions: [],
  direction: {},
  buildNotes: [],
  buildNote: {},
  purposeList: [],
  purpose: {},
  overclockingNotes: [],
  overclockingNote: {},
  computerBuild: {},
  totalPrice: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COMPUTER_BUILD_DETAILS:
      const computerBuild = action.payload;
      return {
        ...state,
        computerBuild: computerBuild,
        computerParts: computerBuild.computerParts,
        directions: computerBuild.directions,
        buildNotes: computerBuild.buildNotes,
        purposeList: computerBuild.purposeList,
        overclockingNotes: computerBuild.overclockingNotes,
        totalPrice: computerBuild.totalPrice
      };
    case DELETE_COMPUTERPART:
      return {
        ...state,
        computerParts: getComputerPartsList(state).filter(
          computerPart =>
            computerPart.uniqueIdentifier !== action.payload.uniqueIdentifier
        ),
        totalPrice: getTotalPrice(state) - action.payload.deletedItemPrice
      };
    case GET_COMPUTERPART:
      return {
        ...state,
        computerPart: action.payload
      };
    case DELETE_PURPOSE:
      return {
        ...state,
        purposeList: getPurposeList(state).filter(
          purpose =>
            purpose.uniqueIdentifier !== action.payload.uniqueIdentifier
        )
      };
    case GET_PURPOSE:
      return {
        ...state,
        purpose: action.payload
      };
    case DELETE_BUILD_NOTE:
      return {
        ...state,
        buildNotes: getBuildNotesList(state).filter(
          buildNote =>
            buildNote.uniqueIdentifier !== action.payload.uniqueIdentifier
        )
      };
    case GET_BUILD_NOTE:
      return {
        ...state,
        buildNote: action.payload
      };
    case DELETE_DIRECTION:
      return {
        ...state,
        directions: getDirectionsList(state).filter(
          direction =>
            direction.uniqueIdentifier !== action.payload.uniqueIdentifier
        )
      };
    case GET_DIRECTION:
      return {
        ...state,
        direction: action.payload
      };
    case DELETE_OVERCLOCKING_NOTE:
      return {
        ...state,
        overclockingNotes: getOverclockingNotesList(state).filter(
          overclockingNote =>
            overclockingNote.uniqueIdentifier !==
            action.payload.uniqueIdentifier
        )
      };
    case GET_OVERCLOCKING_NOTE:
      return {
        ...state,
        overclockingNote: action.payload
      };
    default:
      return state;
  }
}
