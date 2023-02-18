import React from 'react';
import styled from 'styled-components';
import { Path, useForm, UseFormRegister, SubmitHandler } from 'react-hook-form';

interface IFormValues {
  name: string;
  email: string;
  message: string;
}

interface TextFieldProps {
  placeholder?: string;
  width?: string;
  height?: string;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
}

export const TextFieldElem = styled.textarea`
  min-width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  width: 100%;

  font-size: 18px;
  color: #2d2d2d;

  border: 1px solid #ccc;
  border-radius: 10px;

  position: relative;
  padding-left: 46px;
  padding-right: 46px;
  padding-top: 35px;
  resize: none;
  &::placeholder {
    font-size: 18px;
    position: absolute;
    top: 35px;
    left: 46px;
    font-family: 'ApercuArabicPro';
    color: #2d2d2d;
  }

  &:hover {
    border-color: #dcdcdc;
  }
  &:focus {
    outline: none;
    border-color: #1a73e8;
    box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.2);
  }
  @media (min-width: 950px) {
    min-width: 450px;
  }
`;

export const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  width,
  height,
  label,
  register,
  required,
}) => {
  return (
    <>
      <TextFieldElem
        placeholder={placeholder}
        width={width}
        height={height}
        {...register(label, { required })}
      />
    </>
  );
};
