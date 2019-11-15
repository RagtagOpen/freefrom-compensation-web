import {
  LOAD_MINDSET_SUCCESS,
  LOAD_MINDSET_ERROR,
  LOAD_MINDSETS_SUCCESS,
  LOAD_MINDSETS_ERROR,
} from "actions/types"
import { mindsetData } from "data"

const initialState = {
  loading: true,
  loaded: false,
  error: false,
  all: [],
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case LOAD_MINDSET_SUCCESS:
      return {
        ...state,
        current: payload,
        loading: false,
        error: false,
      }
    case LOAD_MINDSET_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      }
    case LOAD_MINDSETS_SUCCESS:
      const payloadWithData = payload

      payload.map(mindset => {
        const filteredMindset = mindsetData.filter(
          mindsetData => mindset.name === mindsetData.name
        )[0]
        mindset.slug = filteredMindset.slug
        mindset.image = filteredMindset.image
      })

      return {
        ...state,
        all: payloadWithData,
        loading: false,
        loaded: true,
        error: false,
      }
    case LOAD_MINDSETS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      }
    default:
      return state
  }
}
