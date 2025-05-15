import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { store } from '@/util/httpUtil';


const initialState: any = {
  payload: [],
  error: '',
  loading: true,
};

export const submitForm = createAsyncThunk(
    'leadData/fetch',
    (formData: any, { rejectWithValue }) => {
      return store('api/submit-lead', { ...formData })
          .then((response: any) => {
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
    }
);


export const leadDataSlice = createSlice({
  name: 'leadDataSlice',
  initialState,
  reducers: {
    cleanLeadData(state) {
      state.loading = false;
      state.payload = [];
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(submitForm.pending, state => {
      state.loading = true;
      state.error = '';
      state.payload = [];
    });

    builder.addCase(submitForm.fulfilled, (state, action) => {
      state.loading = false;
      state.payload = action.payload;
    });
    builder.addCase(submitForm.rejected, (state, action) => {
      state.loading = false;
      state.payload = [];
      state.error = action.payload?.toString();
    });
  },
});


export const {cleanLeadData} = leadDataSlice.actions;