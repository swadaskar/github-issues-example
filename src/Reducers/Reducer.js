const initialState = {
  count: 0,
  counts: 0,
  countf: 0,
};
function Reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENTW":
      return {
        count: state.count + 1,
        counts: state.counts,
        countf: state.countf,
      };
    case "INCREMENTS":
      return {
        count: state.count,
        counts: state.counts + 1,
        countf: state.countf,
      };
    case "INCREMENTF":
      return {
        count: state.count,
        counts: state.counts,
        countf: state.countf + 1,
      };
    default:
      return state;
  }
}
export default Reducer