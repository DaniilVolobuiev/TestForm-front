import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import formApi from '../../api/requests';
import { FormDataProps } from '../../types';

export const postData = createAsyncThunk('form/postFormData', async (formData: FormDataProps) => {
  try {
    const response = formApi.postFormData(formData);
    console.log(response);
    return response;
  } catch (error) {
    alert(error);
  }
});

interface InitialStateProps {
  status: 'loading' | 'success';
}

const initialState: InitialStateProps = {
  status: 'loading',
};

export const dataReducer = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postData.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(postData.fulfilled, (state) => {
      state.status = 'success';
    });
  },

  // export const {  } = itemsReducer.actions;
});
export default dataReducer.reducer;
