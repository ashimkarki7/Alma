import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { store } from "@/util/httpUtil";
import {IObjectLiteral} from '@/types/type';

export interface LeadEntry {
  name: string;
  submitted: string;
  status: "Pending" | "Reached Out";
  country: string;
  formData: IObjectLiteral;
}

interface LeadState {
  payload: LeadEntry[];
  error: any;
  loading: boolean;
}

const initialState: LeadState = {
  payload: [],
  error: "",
  loading: true,
};
export const submitForm = createAsyncThunk(
  "leadData/fetch",
  (formData: IObjectLiteral, { rejectWithValue }) => {
    return store("api/submit-lead", { ...formData })
      .then((response: IObjectLiteral) => {
        if (response.status === 200) {
          return Promise.resolve(response?.data);
        } else {
          // TODO
        }
      })
      .catch((error) => {
        const errorThrown = JSON.parse(error);
        return rejectWithValue(errorThrown?.message);
      });
  },
);

export const leadDataSlice = createSlice({
  name: "leadDataSlice",
  initialState,
  reducers: {
    cleanLeadData(state) {
      state.loading = false;
      state.payload = [];
      state.error = "";
    },
    updateLeadStatus(state, action:any) {
      debugger;
      const idx = action.payload;
      if (state.payload[idx]) {
        state.payload[idx].status = "Reached Out";
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitForm.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(submitForm.fulfilled, (state, action) => {
      state.loading = false;
      if (Array.isArray(action.payload?.data)) {
        state.payload = [...state.payload, ...action.payload.data];
      } else {
        state.payload.push(action.payload.data);
      }
    });
    builder.addCase(submitForm.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.toString();
    });
  },
});

export const { cleanLeadData,updateLeadStatus } = leadDataSlice.actions;
