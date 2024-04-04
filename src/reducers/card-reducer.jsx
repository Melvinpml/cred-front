import {
  FETCH_CARDS_PROGRESS,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILED,
  ADD_CARD_PROGRESS,
  ADD_CARD_SUCCESS,
  ADD_CARD_FAILED,
  GET_STATEMENT_SUCCESS,
  GET_STATEMENT_FAILED,
  GET_STATEMENT_PROGRESS,
  PAY_BILL_SUCCESS,
  PAY_BILL_FAILED,
  PAY_BILL_PROGRESS
} from "../constants/action-types";
import { GetAllCardsState, AddCardState, GetStatementState, PayBillState } from '../models/cardState';

const defaultGetAllCardsState: GetAllCardsState = {
  inProgress: false,
  success: false,
  error: "",
  cards: []
}

const defaultAddCardState: AddCardState = {
  inProgress: false,
  success: false,
  error: ""
}

const defaultGetStatementState: GetStatementState = {
  inProgress: false,
  success: false,
  error: "",
  statement: [],
  smartStatemenyByCategory: [],
  smartStatementByVendor: []
}

const defaultPayBillState: PayBillState = {
  inProgress: false,
  success: false,
  error: ""
}

const defaultState = {
  getAllCardsState: defaultGetAllCardsState,
  addCardState: defaultAddCardState,
  getStatementState: defaultGetStatementState,
  payBillState: defaultPayBillState
}

function cardReducer(state = defaultState, action: any) {
  switch (action.type) {
    case FETCH_CARDS_PROGRESS:
      return {
        ...state,
        getAllCardsState: {
          ...state.getAllCardsState,
          inProgress: true,
          success: false,
          error: "",
          cards: []
        },
        payBillState: defaultPayBillState
      };

    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        getAllCardsState: {
          ...state.getAllCardsState,
          inProgress: false,
          success: true,
          error: "",
          cards: action.payload.data.content
        }
      };

    case FETCH_CARDS_FAILED:
      return {
        ...state,
        getAllCardsState: {
          ...state.getAllCardsState,
          inProgress: false,
          success: false,
          error: action.payload,
          cards: []
        }
      };

    case ADD_CARD_PROGRESS:
      return {
        ...state,
        addCardState: {
          ...state.addCardState,
          inProgress: true,
          success: false,
          error: ""
        }
      };

    case ADD_CARD_SUCCESS:
      return {
        ...state,
        addCardState: {
          ...state.addCardState,
          inProgress: false,
          success: true,
          error: ""
        }
      };

    case ADD_CARD_FAILED:
      return {
        ...state,
        addCardState: {
          ...state.addCardState,
          inProgress: false,
          success: false,
          error: action.payload
        }
      };

    case GET_STATEMENT_PROGRESS:
      return {
        ...state,
        getStatementState: {
          ...state.getStatementState,
          inProgress: true,
          success: false,
          error: ""
        }
      };

    case GET_STATEMENT_SUCCESS:
      const { statement, smartStatemenyByCategory, smartStatementByVendor } = action.payload[0].data;
      return {
        ...state,
        getStatementState: {
          ...state.getStatementState,
          inProgress: false,
          success: true,
          error: "",
          statement,
          smartStatemenyByCategory,
          smartStatementByVendor
        }
      };

    case GET_STATEMENT_FAILED:
      return {
        ...state,
        getStatementState: {
          ...state.getStatementState,
          inProgress: false,
          success: false,
          error: action.payload
        }
      };

    case PAY_BILL_PROGRESS:
      return {
        ...state,
        payBillState: {
          ...state.payBillState,
          inProgress: true,
          success: false,
          error: ""
        }
      };

    case PAY_BILL_SUCCESS:
      return {
        ...state,
        payBillState: {
          ...state.payBillState,
          inProgress: false,
          success: true,
          error: ""
        }
      };

    case PAY_BILL_FAILED:
      return {
        ...state,
        payBillState: {
          ...state.payBillState,
          inProgress: false,
          success: false,
          error: action.payload
        }
      };

    default:
      return state;
  }
}

export default cardReducer;
