import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  password: string;
}

interface UserState {
  users: User[];
  currentUser: string | null;
}

const initialState: UserState = {
  users: [],
  currentUser: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    signUp(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    signIn(state, action: PayloadAction<{ id: string; password: string }>) {
      const user = state.users.find(
        (u) =>
          u.id === action.payload.id && u.password === action.payload.password,
      );
      if (user) {
        state.currentUser = user.id;
        localStorage.setItem("auth_token", user.id);
      }
    },
    signOut(state) {
      state.currentUser = null;
      localStorage.removeItem('auth_token');
      localStorage.removeItem('persist:leadData');
    },
  },
});

export const { signUp, signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
