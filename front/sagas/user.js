import {
  all, call, put, fork, takeLatest, takeEvery, delay,
} from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';

const HELLO_SAGA = 'HELLO_SAGA';
const BYE_SAGA = 'BYE_SAGA';

function loginAPI() {
  // 서버에 요청을 보내는 부분
}

function* login() {
  try {
    // yield fork(logger) // logger => 기록을 저장하는 함수, 10초 걸림
    yield call(loginAPI); // call 동기 fork 비동기
    yield put({
      // put은 dispatch 동일
      type: LOG_IN_SUCCESS,
    });
  } catch (e) {
    // loginAPI 실패
    // console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login); // 반복 요청 되어도 계속 실행
}

function* hello() {
  yield delay(1000);
  yield put({
    type: BYE_SAGA,
  });
}

function* watchHello() {
  yield takeLatest(HELLO_SAGA, hello); // 반복 요청 되었을 때 put 1번만실행
}

// function* watchHello() {
//   while (true) {
//     yield take(HELLO_SAGA);
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);
//   }
// }

// function* watchSignUp() {}
export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchHello)]);
}
