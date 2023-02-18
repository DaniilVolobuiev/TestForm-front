import axios from './axios';
import { FormDataProps } from './../types/index';

const formApi = {
  async postFormData(formData: FormDataProps) {
    console.log('formdata', formData);
    const data = await axios.post('/form', formData);

    return data.data;
  },
};

export default formApi; 
