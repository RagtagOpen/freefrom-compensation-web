import { setAlert } from "actions/alertActions"
import {
  SET_AGREEMENT,
  SET_COOKIES,
  SET_LOCATION,
  SET_QUESTION,
  GET_QUESTION_DATA,
  SET_QUIZ_TALLY,
  SET_MINDSET,
  SET_COMPLETED,
} from "actions/types"
import { get } from "utils/api"
import { shuffle } from "utils/helpers"

// Set Agreement
export const setAgreement = agreement => dispatch => {
  dispatch({
    type: SET_AGREEMENT,
    payload: agreement,
  })
}

export const setCookies = opt => dispatch => {
  dispatch({
    type: SET_COOKIES,
    payload: opt,
  })
}

export const setLocation = location => dispatch => {
  dispatch({
    type: SET_LOCATION,
    payload: location,
  })
}

export const setQuestion = index => dispatch => {
  dispatch({
    type: SET_QUESTION,
    payload: index,
  })
}

export const getQuizQuestionData = () => async dispatch => {
  try {
    const res = await get("/quiz_questions")

    // If we need to shuffle questions, shuffle(res.data) here
    const data = res.data

    data.map(async (question, index) => {
      // Generating the tally empty object here to prevent any errors
      data[index].tally = {}

      try {
        const res = await get(`/quiz_questions/${question.id}/quiz_responses`)

        const responseData = shuffle(res.data)

        data[index].responses = responseData
      } catch (err) {
        console.log(err)
        dispatch(setAlert(err, "danger"))
      }
    })

    dispatch({
      type: GET_QUESTION_DATA,
      payload: data,
    })
  } catch (err) {
    console.log(err)
    dispatch(setAlert(err, "danger"))
  }
}

export const setQuizTally = (question, response) => dispatch => {
  dispatch({
    type: SET_QUIZ_TALLY,
    payload: { question, response },
  })
}

export const setMindset = mindset => dispatch => {
  dispatch({
    type: SET_MINDSET,
    payload: mindset,
  })
}

export const setCompleted = completed => dispatch => {
  dispatch({
    type: SET_COMPLETED,
    payload: completed,
  })
}
