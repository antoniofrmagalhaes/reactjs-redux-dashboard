import { AnyAction, Reducer } from 'redux'
import produce from 'immer'
import { ProfileState } from './types'

const initialState: ProfileState = {
  first_name: '',
  last_name: ''
}

const profile: Reducer<ProfileState, AnyAction> = (
  state = initialState,
  action
): ProfileState => {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.first_name = action.payload.user.first_name
        draft.last_name = action.payload.user.last_name
        break
      }
      default:
        return state
    }
  })
}

export default profile
