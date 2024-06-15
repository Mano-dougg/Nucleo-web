function Wins() {
    const newVictoryCount = Number() + 1;
    localStorage.setItem('Venci', newVictoryCount.toString());
  }
  
  function Loses() {
    const newDefeatCount = Number() + 1;
    localStorage.setItem('Perdi', newDefeatCount.toString());
  }


export default Wins ; Loses