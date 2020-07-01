import styled from 'styled-components';
import { shade } from 'polished';

export const Dashboard = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  .currencyField {
    height: 60px;
    width: 130px;

    border: 0;
    margin-right: 15px;
  }

  input {
    flex: 1;
    height: 60px;
    padding: 0 20px;
    border: 2px solid #fff;
    outline: none;
    color: #3a3a3a;
  }

  button {
    width: 100px;
    height: 60px;
    border: 0;
    background: #f7a900;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#f7a900')};
    }
  }

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;

    height: 200px;
    width: 300px;

    .currencyField {
      height: 100px;
      width: 100%;

      border: 0;
      margin: 0 0 10px 0;
    }

    input {
      flex: 1;
      height: 60px;
      padding: 0 20px;
      border: 2px solid #fff;
      outline: none;
      color: #3a3a3a;
    }

    button {
      align-self: center;
      margin-top: 8px;
    }
  }
`;

export const Display = styled.div`
  display: flex;

  .currencyDiv,
  .valueDiv {
    display: flex;
    flex-direction: column;

    width: 260px;
    height: 120px;
    margin: 10px;
    padding: 8px;

    background-color: #e3e3e3;
    color: #2d2e2d;
    font-family: 'Poppins', sans-serif;

    &:hover {
      margin-top: 5px;
    }
  }

  .resultDiv {
    display: flex;
    flex-direction: column;

    width: 260px;
    height: 120px;
    margin: 10px;
    padding: 8px;

    background-color: #04d361;
    color: #fff;
    font-family: 'Poppins', sans-serif;

    &:hover {
      margin-top: 5px;
    }
  }

  .resultClass {
    font-size: 25px;
  }

  span {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Erro = styled.span`
  display: block;
  margin-top: 8px;
  color: #c53030;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
`;
