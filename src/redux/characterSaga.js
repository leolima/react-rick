import { takeEvery, put } from "redux-saga/effects";
import { CHARACTER_LIST, SET_CHARACTER_LIST } from "./constant";

function* getCharacters() {
  let data = yield fetch("https://rickandmortyapi.com/api/character");
  data = yield data.json();

  yield put({ type: SET_CHARACTER_LIST, data: data?.results || [] });
}

function* characterSaga() {
  yield takeEvery(CHARACTER_LIST, getCharacters);
}

export default characterSaga;
