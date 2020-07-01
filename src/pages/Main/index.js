import React, { useState } from 'react';
import axios from 'axios';
import { FaMoneyBillAlt, FaPiggyBank, FaBitcoin } from 'react-icons/fa';

import Header from '../../components/Header';

import { Dashboard, Form, Display, Erro } from './styles';

const Main = () => {
  const [currency, setCurrency] = useState('');
  const [value, setValue] = useState('');
  const [bitcoinValue, setBitcoinValue] = useState('');
  const [showResultField, setShowResultField] = useState(false);
  const [inputError, setInputError] = useState('');

  async function handleSubmitValue(event) {
    event.preventDefault();

    if (!currency || !value) {
      setInputError('Informe os dados');
      return;
    }

    try {
      const response = await axios.get(
        `https://blockchain.info/tobtc?currency=${currency}&value=${value}`,
      );

      setShowResultField(true);
      setBitcoinValue(response.data);
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca');
    }
  }

  return (
    <>
      <Header />
      <Dashboard>
        <Form hasError={!!inputError}>
          <input
            className="currencyField"
            type="text"
            placeholder="Moeda"
            value={currency}
            onChange={(e) => setCurrency(e.target.value.toUpperCase())}
          />
          <input
            type="text"
            placeholder="Digite o valor"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" onClick={handleSubmitValue}>
            Buscar
          </button>
        </Form>
        {showResultField && (
          <Display>
            <div className="currencyDiv">
              <span>
                <strong>moeda</strong>
                <FaMoneyBillAlt size={25} />
              </span>
              <strong className="resultClass">{currency}</strong>
            </div>

            <div className="valueDiv">
              <span>
                <strong>valor</strong>
                <FaPiggyBank size={25} />
              </span>
              <strong className="resultClass">
                {value ? parseFloat(value).toFixed(2) : ''}
              </strong>
            </div>

            <div className="resultDiv">
              <span>
                <strong>bitcoins</strong>
                <FaBitcoin size={25} />
              </span>
              <strong className="resultClass">{bitcoinValue}</strong>
            </div>
          </Display>
        )}
        {inputError && <Erro>{inputError}</Erro>}
      </Dashboard>
    </>
  );
};

export default Main;
