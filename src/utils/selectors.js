export const pageQuizData = state => {
  return state.quiz.questions[state.quiz.question - 1]
}
