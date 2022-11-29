import StickmanArmLeft from "./StickmanArmLeft";
import StickmanArmRight from "./StickmanArmRight";
import StickmanHangman from "./StickmanHangman";
import StickmanHead from "./StickmanHead";
import StickmanLegLeft from "./StickmanLegLeft";
import StickmanLegRight from "./StickmanLegRight";
import StickmanTorso from "./StickmanTorso";

type Props = {
  errorsCount: number;
};

function Stickman({ errorsCount }: Props) {
  return (
    <svg
      width="205"
      height="271"
      viewBox="0 0 205 271"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="205" height="271" fill="" />
      <g id="hangman">
        {errorsCount >= 1 && <StickmanHead />}

        <g id="body">
          {errorsCount >= 2 && <StickmanTorso />}
          {errorsCount >= 3 && <StickmanArmLeft />}
          {errorsCount >= 4 && <StickmanArmRight />}
          {errorsCount >= 5 && <StickmanLegLeft />}
          {errorsCount >= 6 && <StickmanLegRight />}
        </g>

        <StickmanHangman />
      </g>
    </svg>
  );
}

export default Stickman;
