import {security as type} from '../types';
import { SessionService } from '../../mobileCommons/security/services';

const initialState = SessionService.userInfo || {actorType: 2};


export const security = (state = initialState, action) => {
    switch(action.type)	 {
        case type.LOGIN_REQUEST:
            return {
                ...state
            }
        case type.LOGIN_AUTH:
            return {
                ...state,
                ...action.payload
            };
        case type.LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case type.LOGIN_FAIL:
            return {
                actorType: state.actorType
            };
        case type.LOGOUT:
            return {
                actorType: state.actorType
            };
        default:
            return state;
    }
}
