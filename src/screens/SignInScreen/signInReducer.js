const initialState = {
  loading: false,
  data: null,
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOGIN':
      return { ...state, loading: true };

    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, data: payload };

    default:
      return state;
  }
};
