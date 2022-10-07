import { SET_CHARACTER_LIST } from "./constant";

export const characterData = (data = [], action) => {
  switch (action.type) {
    case SET_CHARACTER_LIST:
      return [...action.data];

    default:
      return data;
  }
};
