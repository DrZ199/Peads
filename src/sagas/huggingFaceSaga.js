
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Hugging Face API call saga
function* fetchAnswer(action) {
  try {
    const response = yield call(axios.post, 'https://api-inference.huggingface.co/models/deepset/roberta-base-squad2', {
      headers: { Authorization: `Bearer ${process.env.HF_API_KEY}` },
      data: {
        inputs: {
          question: action.payload.question,
          context: action.payload.context,
        },
      },
    });
    yield put({ type: 'FETCH_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_ERROR', payload: error.message });
  }
}

// Root saga
export default function* rootSaga() {
  yield takeLatest('FETCH_REQUEST', fetchAnswer);
}
