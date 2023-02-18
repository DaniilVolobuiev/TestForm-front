import React from 'react';
import styled from 'styled-components';
import { SendButton } from '../../UI/SendButton';
import { TextField, TextFieldElem } from '../../UI/TextField';
import yellowFace from '../../assets/images/yellow_up.png';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { postData } from '../../redux/slices/dataSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type FormData = yup.InferType<typeof schema>;

const FormWrapper = styled.form`
  flex: 1;
  margin-left: 7%;
  margin-bottom: 40px;
  @media (max-width: 950px) {
    margin-right: 7%;
  }
`;
const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Header = styled.div`
  margin-bottom: 30px;
  font-size: 40px;
  color: #3e3e3e;
`;

const YellowFace = styled.div`
  position: relative;
  width: 88px;
  left: -17%;
  @media (max-width: 950px) {
    left: -10%;
  }
`;

const schema = yup
  .object({
    name: yup.string().min(3, 'Must be at least 3 characters long').required(),
    email: yup.string().email('Must be a valid email').required(),
    message: yup.string().min(10, 'Must be at least 10 characters long').required(),
  })
  .required();

const Form = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,

    formState: { errors },
  } = useForm<FormData>({
    // defaultValues: {
    //   name: '',
    //   email: '',
    //   message: '',
    // },

    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(postData(data));
    reset();
  };
  return (
    <>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <YellowFace>
          <img src={yellowFace} />
        </YellowFace>

        <Header>Reach Out To Us!</Header>
        <FieldWrapper>
          <TextField
            width="280px"
            height="93px"
            placeholder="Your name*"
            label="name"
            register={register}
            required
            errors={errors}
          />
          {errors.name && <p style={{ color: '#ca1c1c' }}>{errors.name.message}</p>}
          <TextField
            type="email"
            width="280px"
            height="93px"
            placeholder="Your e-mail*"
            label="email"
            register={register}
            required
          />
          {errors.email && <p style={{ color: '#ca1c1c' }}>{errors.email.message}</p>}
          <TextField
            width="280px"
            height="189px"
            placeholder="Your message*"
            label="message"
            register={register}
            required
          />
          {errors.message && <p style={{ color: '#ca1c1c' }}>{errors.message.message}</p>}
        </FieldWrapper>
        <SendButton />
      </FormWrapper>
    </>
  );
};

export default Form;
