export const initialState = { count: 0 };
export function reducer(state, action) {
  if (action.type === "inc") {
    return { count: state.count + 1 };
  }
  if (action.type === "dec") {
    return { count: state.count - 1 };
  }
}
