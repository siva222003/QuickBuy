import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logoutUser: (state) => {
        state.data = [];
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
    },
  },
});

const createUser = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      dispatch(addUser(result))
      localStorage.setItem('userId', result.id);
      localStorage.setItem('token', result.token);
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const { addUser, setError, setLoading ,logoutUser} = userSlice.actions;
export { createUser };
export default userSlice.reducer;
