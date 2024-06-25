// -- REACT
import { useState, useEffect } from 'react';
// -- STYLES
import './styles.scss';

function Switch(props) {
  const [tipo, setTipo] = useState(props.tipo1);

  document.body.setAttribute(props.classe, tipo);
  
  function switchTipo() {
    setTipo(tipo == props.tipo1? props.tipo2 : props.tipo1);
  };

  useEffect(() => {
    document.body.setAttribute(props.classe, tipo);
  }, [tipo]);

  return (
    <div id='switch'>
      <input type='checkbox' id='checkbox' onChange={switchTipo}/>
      <label htmlFor='checkbox'></label>
    </div>
  );
};

export default Switch;

