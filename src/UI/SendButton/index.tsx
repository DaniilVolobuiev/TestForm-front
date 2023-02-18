import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks';

const SendButtonElem = styled.button<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fad34f;
  color: #fff;
  font-size: 18px;
  width: 218px;
  height: 78px;
  margin-top: 25px;
  border: none;
  border-radius: 500px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #f6c31b;
  }
  &:active {
    background-color: #ffdb65;
  }
`;

export const SendButton: React.FC = () => {
  const status = useAppSelector((state) => state.dataSlice.status);
  return (
    <>
      <SendButtonElem type="submit" disabled={status === 'loading'}>
        Send Message
      </SendButtonElem>
    </>
  );
};
