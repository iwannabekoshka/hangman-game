type Props = {};

function StickmanHead({}: Props) {
  return (
    <g id="head">
      <circle id="face" cx="160" cy="83" r="30.5" fill="white" stroke="black" />
      <circle
        id="eye-right"
        cx="172.5"
        cy="72.5"
        r="4"
        fill="white"
        stroke="black"
      />
      <circle
        id="eye-left"
        cx="144.5"
        cy="72.5"
        r="4"
        fill="white"
        stroke="black"
      />
      <path
        id="mouth"
        d="M143 89L151 96C151 96 159 87.0741 160.5 93.537C162 100 178 89 178 89"
        stroke="black"
      />
    </g>
  );
}

export default StickmanHead;
