import React from "react";
import '../Progresso/barraprogresso.css';
import ProgressBar from "@ramonak/react-progress-bar";

function BarraProgresso({ xp }) {
  const maxXP = 100;
  const minCompletion = 15; 

  let completion;
  let displayXP;

  if (xp >= maxXP) {
    completion = ((xp % maxXP) / maxXP) * 100;
    displayXP = xp % maxXP; 
  } else {
    completion = (xp / maxXP) * 100;
    displayXP = xp;
  }

  // Garantir que a barra de progresso nunca fique completamente vazia
  completion = Math.max(completion, minCompletion);

  const string = `${displayXP}/${maxXP}`;

  return (
    <div className="progresso">
      <ProgressBar
        completed={completion}
        bgColor="#F24194"
        customLabel={string}
        labelClassName="label"
        transitionDuration="2s"
        transitionTimingFunction="ease-in-out"
      />
    </div>
  );
}

export default BarraProgresso;