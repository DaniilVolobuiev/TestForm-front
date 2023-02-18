import React from 'react';
import styled from 'styled-components';
import { SendButton } from '../../UI/SendButton';
import { TextField, TextFieldElem } from '../../UI/TextField';
import yellowFace from '../../assets/images/yellow_up.png';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { postData } from '../../redux/slices/dataSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

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
const Form = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    control,
    handleSubmit,

    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    mode: 'onSubmit',
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(postData(data));
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
            helperText={errors.name?.message}
            width="280px"
            height="93px"
            placeholder="Your name*"
            label="name"
            register={register}
            required
          />
          <TextField
            type="email"
            helperText={errors.email?.message}
            width="280px"
            height="93px"
            placeholder="Your e-mail*"
            label="email"
            register={register}
            required
          />
          <TextField
            helperText={errors.message?.message}
            width="280px"
            height="189px"
            placeholder="Your e-mail*"
            label="message"
            register={register}
            required
          />
        </FieldWrapper>
        <SendButton />
      </FormWrapper>
    </>
  );
};

export default Form;
