import { FC } from "react";

interface IPropsMiPrimerComponent{
    text: string;
    color: string;
}

const MiPrimerComponente: FC<IPropsMiPrimerComponent> = ({text, color}) => {
  return (
    <div style={{color: `${color}`}}>
      <p>{text}</p>
    </div>
  )
}

export default MiPrimerComponente
