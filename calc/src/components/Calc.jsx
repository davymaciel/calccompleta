import React, { useState } from 'react';

const IMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sexo, setSexo] = useState(''); // Novo estado para o sexo

  const CalcIMC = () => {
    const alturaM = altura / 100;
    const calcIMC = (peso / (alturaM ** 2)).toFixed(2);
    setResultado(calcIMC);

    let msg = '';
    
    // Faixas de IMC podem variar dependendo do sexo
    if (sexo === 'masculino') {
      if (calcIMC < 18.5) {
        msg = 'Abaixo do peso';

      } else if (calcIMC >= 18.5 && calcIMC < 24.9) {
        msg = 'Peso adequado';

      } else if (calcIMC >= 25 && calcIMC < 29.9) {
        msg = 'Sobrepeso';
        
      } else {
        msg = 'Obesidade';
      }
    } else if (sexo === 'feminino') {
      if (calcIMC < 18) {
        msg = 'Abaixo do peso';
      } else if (calcIMC >= 18 && calcIMC < 24) {
        msg = 'Peso adequado';

      } else if (calcIMC >= 24 && calcIMC < 29) {
        msg = 'Sobrepeso';

      } else {
        msg = 'Obesidade';

      }
    } else {
      msg = 'Por favor, selecione um sexo.';
    }

    setMensagem(msg);
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <h2>A classificação do índice de massa corporal (IMC) pode ajudar a identificar <br></br>problemas de obesidade ou desnutrição, em crianças, adolescentes, adultos e idosos.<br></br>O IMC é calculado dividindo o peso (em kg) pela altura ao quadrado (em m),<br></br> de acordo com a seguinte fórmula: IMC = peso / (altura x altura).</h2>
      <h2>Calcule seu IMC, inserindo seu peso, altura e gênero:</h2>

      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder="Peso (Kg)"
      />
      <br></br>
      
      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        placeholder="Altura (cm)"
      />
      <br></br>

      {/* Inputs para selecionar o sexo */}
      <div>
        <label>Gênero:</label>
        <br></br>
        <input
          type="radio"
          value="masculino"
          checked={sexo === 'masculino'}
          onChange={(e) => setSexo(e.target.value)}
        /> Masculino
        <br></br>
        <input
          type="radio"
          value="feminino"
          checked={sexo === 'feminino'}
          onChange={(e) => setSexo(e.target.value)}
        /> Feminino
      </div>
      <br></br>

      <button onClick={CalcIMC}>Calcular IMC</button>

      {resultado && (
        <div>
          <p>Seu IMC é: {resultado}</p>
          <p>{mensagem}</p>
        </div>
      )}
      <img 
                src='./tabela.png' 
                alt="Tabela de IMC"
                style={{ marginTop: '20px', width: '80%', maxWidth: '600px' }} 
      />
    </div>
  );
};

export default IMC;