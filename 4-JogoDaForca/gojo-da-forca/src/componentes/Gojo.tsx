import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import gojo0 from "../assets/gojo-start.png";
import gojo1 from "../assets/gojo-1.png";
import gojo2 from "../assets/gojo-2.png";
import gojo3 from "../assets/gojo-3.png";
import gojo4 from "../assets/gojo-4.png";
import gojo5 from "../assets/gojo-5.jpg";
import vitoria from "../assets/GameWin.jpeg"
import red from "../assets/red.png";
import slash1 from "../assets/slash1.mp3"
import slash2 from "../assets/slash2.mp3"
import slash3 from "../assets/slash3.mp3"

const slashAudios = [slash1, slash2, slash3];

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const redAppear = keyframes`
  0% { opacity: 1; transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { opacity: 0; transform: translate(1px, -2px) rotate(-1deg); }
`;

const Intacto = styled.img`
  height: 40vh;
  aspect-ratio: 1/1;
  object-fit: cover;
  display: none;
`;
const Damage1 = styled.img`
  height: 40vh;
  aspect-ratio: 1/1;
  aspect-ratio: 1/1;
  object-fit: cover;
  display: none;
  animation: ${shake} 0.2s;
  animation-iteration-count: 1;
`;
const Damage2 = styled.img`
  height: 40vh;
  aspect-ratio: 1/1;
  object-fit: cover;
  display: none;
  animation: ${shake} 0.2s;
  animation-iteration-count: 1;
`;
const Damage3 = styled.img`
  height: 40vh;
  aspect-ratio: 1/1;
  object-fit: cover;
  display: none;
  animation: ${shake} 0.2s;
  animation-iteration-count: 1;
`;
const Damage4 = styled.img`
  height: 40vh;
  aspect-ratio: 1/1;
  object-fit: cover;
  display: none;
  animation: ${shake} 0.2s;
  animation-iteration-count: 1;
`;
const GameOver = styled.img`
  height: 40vh;
  aspect-ratio: 1/1;
  object-fit: cover;
  display: none;
  animation: ${shake} 0.2s;
  animation-iteration-count: 1;
`;

const sunray = keyframes`
 0% { box-shadow:
      0 0 50px #fff,
      -10px 0 40px #fbff00,
      10px 0 40px #ffdd00; };

  50% { box-shadow:
    0 0 50px #fff,
    -20px 0 80px #fbff00,
    20px 0 80px #ffdd00; };

    100% { box-shadow:
      0 0 50px #fff,
      -10px 0 40px #fbff00,
      10px 0 40px #ffdd00; };
`

const Victory = styled.img`
  height: 40vh;
  aspect-ratio: 1/1;
  object-fit: cover;
  display: none;
  margin-left: -40vh;
  animation: ${sunray} 2s ease-in-out;
  animation-iteration-count: infinite;
`;

const Red = styled.img`
  height: 40vh;
  aspect-ratio: 1/1;
  object-fit: cover;
  margin-left: -40vh;
  opacity: 0;
  animation: ${redAppear} 0.2s;
`;

interface damageTakenProps {
  damageTaken: number;
  kaisenVencida: boolean;
}

export default function Gojo({ damageTaken, kaisenVencida }: damageTakenProps ) {
  const [prevDamageTaken, setPrevDamageTaken] = useState(0);

  useEffect(() => {
    if (damageTaken === 0) {
      setPrevDamageTaken(0);
    } else if (damageTaken > prevDamageTaken) {
      const randomIndex = Math.floor(Math.random() * slashAudios.length);
      const audio = new Audio(slashAudios[randomIndex]);
      audio.play();
      setTimeout(() => {
        setPrevDamageTaken(damageTaken);
      }, 100);
    }
  }, [damageTaken, prevDamageTaken]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Intacto src={gojo0} style={{ display: damageTaken === 0 ? "flex" : "none" }} />
      <Damage1 src={gojo1} style={{ display: damageTaken === 1 ? "flex" : "none" }} />
      <Damage2 src={gojo2} style={{ display: damageTaken === 2 ? "flex" : "none" }} />
      <Damage3 src={gojo3} style={{ display: damageTaken === 3 ? "flex" : "none" }} />
      <Damage4 src={gojo4} style={{ display: damageTaken === 4 ? "flex" : "none" }} />
      <GameOver src={gojo5} style={{ display: damageTaken === 5 ? "flex" : "none" }} />
      <Victory src={vitoria} style={{ display: kaisenVencida ? "flex" : "none"}} ></Victory>
      {damageTaken > prevDamageTaken && <Red src={red} />}
    </div>
  );
}
