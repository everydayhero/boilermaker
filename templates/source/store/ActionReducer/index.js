import axios from 'axios'

// Actions
export const fetch{{pascalCase name}} = (uid) => (dispatch) => {
  dispatch({
    type: 'FETCH_{{constantCase name}}',
    payload: { uid }
  })

  return axios.get('https://www.example.com', { params: {
    uid
  }}).then((res) => (res.data))
  .then((res) => {
    dispatch(fetch{{pascalCase name}}Success(res))
  }).catch((err) => {
    dispatch(fetch{{pascalCase name}}Failure(err))
    return Promise.reject(err)
  })
}

const fetch{{pascalCase name}}Success = (data) => ({
  type: 'FETCH_{{constantCase name}}_SUCCESS',
  payload: { data }
})

const fetch{{pascalCase name}}Failure = () => ({
  type: 'FETCH_{{constantCase name}}_FAILURE'
})

// Action Handlers
const handleFetch{{pascalCase name}} = () => ({
  status: 'fetching'
})

const handleFetch{{pascalCase name}}Success = (state, { data }) => ({
  status: 'fetching',
  data
})

const handleFetch{{pascalCase name}}Failure = () => ({
  status: 'failed'
})

const actionHandlers = {
  FETCH_{{constantCase name}}: handleFetch{{pascalCase name}},
  FETCH_{{constantCase name}}_SUCCESS: handleFetch{{pascalCase name}}Success,
  FETCH_{{constantCase name}}_FAILURE: handleFetch{{pascalCase name}}Failure
}

// Reducer
export default (state = {}, { type, payload }) => {
  const handler = actionHandlers[type]
  return handler ? handler(state, payload) : state
}
