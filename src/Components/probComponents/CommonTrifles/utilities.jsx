import React from "react";

export function UseAllInput() {
  return (
    <div className="numelInput">
      <input type="text" placeholder={"Click here and press the key."} />
    </div>
  );
}

// Плюс svg и цвет по услов.
export function Plus({ item }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="85.384"
      height="51.454"
      className="plus"
      viewBox="0 0 234 141"
    >
      <path
        fill={item ? "#000000" : "#C5C6C6"}
        d="M102 56V26h30v30h30v29h-30v30h-30V85H73V56z"
      />
    </svg>
  );
}

// Буква svg и цвет по условию
export function Key({
  name, // a
  item, // akeyPress
}) {
  let key = null;

  const largeKey = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11118 5527"
      className="keyBoard-key-large"
    >
      <g fill={item ? "#000000" : "#C5C6C6"}>
        <path d="M10708 343l410 882v3717c0 161-66 307-172 413s-253 172-414 172H586c-161 0-308-66-414-172S0 5102 0 4942V1224l505-925c25-58 60-110 104-154h1C699 55 822 0 958 0h9280c136 0 259 55 348 145h1c54 55 96 122 121 198zM465 746l-277 523v3673c0 109 45 208 117 280s172 117 281 117h9946c109 0 208-45 281-117 72-72 116-171 116-280V1268l-198-401v3420c0 135-55 258-145 348-89 89-212 145-348 145H958c-136 0-259-56-348-145-90-89-145-213-145-348V746zm9773-622H958c-102 0-194 41-261 108S589 391 589 493v3794c0 101 41 193 108 260s159 109 261 109h9280c102 0 194-42 261-109s108-159 108-260V493c0-101-41-194-108-261s-159-108-261-108z" />
        <text
          x="50%"
          y="43%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Segoe UI Web (West European)"
          fontSize="1297.07"
          fontWeight="800"
        >
          {name}
        </text>
      </g>
    </svg>
  );

  const smallKey = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 335 331"
      className="keyBoard-key-normal"
    >
      <g fill={item ? "#000000" : "#C5C6C6"}>
        <path d="M310 21l25 52v223c0 10-4 19-11 25-6 6-15 10-25 10H35c-10 0-18-4-25-10-6-6-10-15-10-25V73l30-55c2-4 4-7 7-9 5-6 12-9 20-9h225c8 0 15 3 21 9 3 3 5 7 7 12zM28 45L11 76v220c0 7 3 13 7 17 5 4 11 7 17 7h264c7 0 13-3 17-7 5-4 7-10 7-17V76l-12-24v205c0 8-3 16-8 21-6 5-13 9-21 9H57c-8 0-15-4-20-9-6-5-9-13-9-21V45zM282 7H57c-6 0-11 3-15 7s-7 9-7 16v227c0 6 3 12 7 16s9 6 15 6h225c6 0 11-2 15-6s7-10 7-16V30c0-7-3-12-7-16s-9-7-15-7z" />
        <text
          x="50%"
          y="45%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Segoe UI Web (West European)"
          fontSize="142.158"
          fontWeight="800"
        >
          {name.toUpperCase()}
        </text>
      </g>
    </svg>
  );

  // проверка на больш. и мал. буквы
  if (name.length > 1) {
    key = largeKey;
  } else {
    key = smallKey;
  }

  return key;
}

// доп.вывод букв
export const Letter = (props) => {
  return (
    <div className="letter-item">
      <span>{props.text}</span>
    </div>
  );
};

// ? хз зачем.1
export function Emoji(props) {
  return (
    <div className="monitor-item">
      <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
      >
        {props.symbol}
      </span>
    </div>
  );
}
export default Emoji;

const css = `
.fil4 {
  fill: none;
}
.fil1 {
  fill: #898989;
}
.fil0 {
  fill: #2b2a29;
}
.fil3 {
  fill: #898989;
  fill-rule: nonzero;
}
.fil2 {
  fill: #2b2a29;
  fill-rule: nonzero;
}

`;

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      version="1.1"
      viewBox="0 0 15308 14253"
      width="95px"
      id="useAllKeysPress-logo"
    >
      <style type="text/css">{css}</style>
      <g>
        <path
          className={"fil0"}
          d="M8289 738l2427 0c213,0 406,87 546,227 141,140 228,334 228,546l0 2439c0,213 -87,406 -228,547 -140,140 -333,227 -546,227l-2427 0c-212,0 -406,-87 -546,-227 -86,-86 -151,-192 -190,-310l0 0 0 0c-24,-75 -37,-154 -37,-237l0 -2439c0,-212 87,-406 227,-546 140,-140 334,-227 546,-227zm-95 3864l291 -519c-81,-14 -153,-54 -209,-109 -36,-37 -66,-80 -86,-128l0 0 -533 286c31,108 90,205 168,283 98,98 226,166 369,187zm2406 -513l268 502c120,-29 228,-91 313,-176 56,-55 101,-121 134,-193l-239 -369c-20,45 -48,86 -83,121 -71,71 -170,115 -278,115l-115 0zm-2953 -2719l513 155c0,-108 45,-206 116,-278 52,-52 118,-89 192,-106l-473 -218c-63,32 -121,74 -170,124 -88,87 -151,198 -178,323zm3068 -123l-2161 0c-77,0 -146,31 -197,82 -50,50 -82,120 -82,196l0 2170c0,77 32,147 82,197 51,51 120,82 197,82l2161 0c77,0 146,-31 197,-82 50,-50 82,-120 82,-197l0 -2170c0,-76 -32,-146 -82,-196 -51,-51 -120,-82 -197,-82z"
        />
        <path
          className={"fil0"}
          d="M5863 5085l2427 0c212,0 406,87 546,227 140,140 227,333 227,546l0 2439c0,213 -87,406 -227,546 -140,140 -334,227 -546,227l-2427 0c-213,0 -406,-87 -546,-227 -86,-86 -152,-192 -190,-310l0 0 0 0c-24,-74 -37,-154 -37,-236l0 -2439c0,-213 87,-406 227,-546 140,-140 333,-227 546,-227zm-95 3863l291 -518c-81,-15 -154,-54 -210,-110 -36,-36 -65,-80 -85,-128l0 0 -534 286c32,108 90,206 168,284 98,98 227,165 370,186zm2405 -512l268 501c121,-29 229,-90 313,-175 56,-56 102,-121 135,-193l-240 -370c-20,46 -48,86 -82,121 -72,71 -170,116 -279,116l-115 0zm-2953 -2720l514 156c0,-108 44,-207 115,-278 52,-52 119,-90 193,-106l-474 -218c-63,32 -120,73 -170,123 -87,87 -150,199 -178,323zm3068 -123l-2161 0c-76,0 -146,32 -196,82 -51,51 -82,120 -82,197l0 2170c0,76 31,146 82,197 50,50 120,81 196,81l2161 0c77,0 147,-31 197,-81 51,-51 82,-121 82,-197l0 -2170c0,-77 -31,-146 -82,-197 -50,-50 -120,-82 -197,-82z"
        />
        <path
          className={"fil0"}
          d="M3690 9513l2427 0c212,0 406,87 546,227 140,140 227,333 227,546l0 2439c0,213 -87,406 -227,546 -140,140 -334,227 -546,227l-2427 0c-213,0 -406,-87 -546,-227 -86,-86 -152,-192 -190,-310l0 0 0 0c-25,-74 -38,-154 -38,-236l0 -2439c0,-213 87,-406 228,-546 140,-140 333,-227 546,-227zm-96 3863l291 -518c-80,-15 -153,-54 -209,-110 -36,-36 -65,-80 -85,-128l0 0 -534 286c31,108 90,206 168,284 98,98 226,165 369,186zm2406 -512l268 501c121,-28 228,-90 313,-175 56,-56 101,-121 134,-193l-239 -370c-20,46 -48,86 -83,121 -71,71 -169,116 -278,116l-115 0zm-2953 -2720l513 156c0,-108 45,-207 116,-278 52,-52 118,-90 193,-106l-474 -218c-63,32 -120,73 -170,123 -87,87 -150,199 -178,323zm3068 -123l-2161 0c-76,0 -146,32 -197,82 -50,51 -81,120 -81,197l0 2170c0,76 31,146 81,197 51,50 121,82 197,82l2161 0c77,0 147,-32 197,-82 51,-51 82,-121 82,-197l0 -2170c0,-77 -31,-146 -82,-197 -50,-50 -120,-82 -197,-82z"
        />
        <path
          className={"fil1"}
          d="M8268 9513l4379 0 1264 0c212,0 406,87 546,227 140,140 227,333 227,546l0 2439c0,213 -87,406 -227,546 -140,140 -334,227 -546,227l-1173 0 -4470 0c-213,0 -406,-87 -546,-227 -86,-86 -152,-192 -190,-310l0 0 0 0c-24,-74 -37,-154 -37,-236l0 -2439c0,-213 87,-406 227,-546 140,-140 333,-227 546,-227zm-95 3863l291 -518c-81,-15 -154,-54 -210,-110 -36,-36 -65,-80 -85,-128l0 0 -534 286c32,108 90,206 168,284 98,98 227,165 370,186zm5621 -512l268 501c121,-28 229,-90 314,-175 55,-56 101,-121 134,-193l-240 -370c-20,46 -48,86 -82,121 -72,71 -170,116 -278,116l-116 0zm-6169 -2720l514 156c0,-108 44,-207 115,-278 52,-52 119,-90 193,-106l-473 -218c-64,32 -121,73 -171,123 -87,87 -150,199 -178,323zm6285 -123l-1157 0 -4221 0c-76,0 -146,32 -196,82 -51,51 -82,120 -82,197l0 2170c0,76 31,146 82,197 50,50 120,82 196,82l4191 0 1187 0c76,0 146,-32 196,-82 51,-51 82,-121 82,-197l0 -2170c0,-77 -31,-146 -82,-197 -50,-50 -120,-82 -196,-82z"
        />
        <path
          className={"fil1"}
          d="M1234 738l767 0 4116 0c212,0 406,87 546,227 140,140 227,334 227,546l0 2439c0,213 -87,406 -227,547 -140,140 -334,227 -546,227l-1229 0c-389,0 -454,143 -454,583l0 2990c0,213 -87,406 -227,546 -140,140 -334,227 -546,227l-2427 0c-213,0 -406,-87 -546,-227 -86,-86 -152,-192 -190,-310l0 0 0 0c-24,-74 -37,-154 -37,-236 0,-2262 0,-4524 0,-6786 0,-212 87,-406 227,-546 140,-140 333,-227 546,-227zm-14 7304c0,76 31,146 82,197 50,50 120,81 196,81l2161 0c77,0 147,-31 197,-81 51,-51 82,-121 82,-197l0 -2566 0 -657 0 -1 0 -559c1,-89 65,-277 288,-285l1889 0c77,0 147,-31 197,-82 51,-50 82,-120 82,-197l0 -2170c0,-76 -31,-146 -82,-196 -50,-51 -120,-82 -197,-82l-4114 0 -503 0c-76,0 -146,31 -196,82 -51,50 -82,120 -82,196 0,2173 0,4345 0,6517zm-81 906l291 -518c-81,-15 -154,-54 -210,-110 -36,-36 -65,-80 -85,-128l0 0 -534 286c32,108 90,206 168,284 98,98 227,165 370,186zm2405 -512l268 501c121,-29 229,-90 313,-175 56,-56 102,-121 135,-193l-240 -370c-20,46 -48,86 -82,121 -72,71 -170,116 -279,116l-115 0zm2456 -4347l268 502c121,-29 228,-91 313,-176 56,-55 101,-121 134,-193l-239 -369c-20,45 -48,86 -83,121 -71,71 -169,115 -278,115l-115 0zm-5409 -2719l514 155c0,-108 44,-206 115,-278 52,-52 119,-89 193,-106l-474 -218c-63,32 -120,74 -170,124 -87,87 -150,198 -178,323z"
        />
        <polygon
          className={"fil2"}
          points="7681,7600 6890,7600 6890,6279 7189,6279 7189,7359 7681,7359 "
        />
        <path
          className={"fil2"}
          d="M10305 3238l-327 0 -94 -294 -473 0 -94 294 -324 0 484 -1321 355 0 473 1321zm-490 -522l-143 -445c-10,-33 -18,-73 -22,-118l-7 0c-3,38 -11,77 -23,115l-145 448 340 0z"
        />
        <polygon
          className={"fil2"}
          points="5476,12047 4685,12047 4685,10726 4984,10726 4984,11805 5476,11805 "
        />
        <path
          className={"fil3"}
          d="M2357 5111c0,204 -96,307 -287,307 -185,0 -278,-100 -278,-300l0 -394 154 0 0 395c0,111 44,166 130,166 84,0 127,-53 127,-160l0 -401 154 0 0 387zm101 282l0 -122c25,15 50,26 74,34 25,7 48,11 70,11 27,0 48,-4 63,-11 16,-8 23,-19 23,-34 0,-9 -3,-17 -10,-24 -7,-6 -16,-11 -27,-16 -11,-5 -23,-9 -36,-13 -13,-4 -26,-8 -38,-13 -19,-7 -36,-15 -51,-23 -15,-9 -27,-19 -37,-30 -10,-11 -18,-24 -23,-38 -5,-15 -8,-32 -8,-52 0,-27 6,-51 18,-71 12,-19 28,-35 48,-48 20,-12 42,-22 68,-27 25,-6 52,-9 80,-9 21,0 43,1 65,5 22,3 44,8 66,14l0 116c-19,-11 -39,-19 -61,-25 -22,-5 -43,-8 -64,-8 -10,0 -19,1 -28,3 -9,1 -17,4 -23,7 -7,4 -12,8 -16,13 -4,5 -6,11 -6,18 0,9 3,17 9,23 6,6 13,12 22,16 10,5 20,9 31,13 11,3 22,7 34,11 20,7 38,14 54,23 16,8 30,18 42,29 11,11 20,24 26,39 6,15 9,32 9,53 0,29 -6,54 -18,74 -13,21 -30,37 -50,50 -21,13 -45,22 -72,28 -27,6 -55,9 -85,9 -53,0 -103,-8 -149,-25zm899 -188l-318 0c5,71 50,106 134,106 53,0 100,-12 141,-38l0 109c-45,24 -103,36 -176,36 -78,0 -139,-22 -183,-66 -43,-43 -65,-104 -65,-182 0,-81 23,-145 71,-192 46,-48 104,-71 173,-71 71,0 126,21 165,63 38,42 58,100 58,172l0 63zm-139 -92c0,-70 -29,-105 -85,-105 -24,0 -45,10 -63,30 -18,20 -28,45 -32,75l180 0z"
        />
        <path
          className={"fil3"}
          d="M9871 12263l-194 0 -199 -296c-4,-6 -10,-19 -18,-38l-2 0 0 334 -154 0 0 -682 154 0 0 322 2 0c4,-9 10,-21 19,-38l189 -284 183 0 -238 325 258 357zm479 -201l-318 0c5,71 50,106 134,106 54,0 101,-12 141,-38l0 109c-45,24 -103,36 -175,36 -79,0 -140,-22 -184,-65 -43,-44 -65,-105 -65,-183 0,-81 24,-145 71,-192 47,-47 104,-71 173,-71 71,0 126,21 165,63 39,42 58,100 58,172l0 63zm-139 -92c0,-70 -29,-105 -85,-105 -24,0 -45,10 -63,30 -17,20 -28,45 -32,75l180 0zm692 -194l-198 526c-47,127 -119,190 -215,190 -36,0 -66,-4 -90,-12l0 -120c21,12 42,17 66,17 38,0 65,-18 81,-54l25 -61 -198 -486 167 0 91 296c5,19 10,40 13,66l2 0c3,-19 8,-40 16,-65l92 -297 148 0zm29 474l0 -121c25,14 50,26 74,33 25,7 48,11 70,11 26,0 48,-4 63,-11 15,-7 23,-19 23,-33 0,-10 -4,-18 -10,-24 -7,-7 -16,-12 -27,-17 -11,-5 -23,-9 -36,-13 -13,-4 -26,-8 -38,-13 -19,-7 -36,-15 -51,-23 -15,-9 -27,-18 -37,-30 -10,-11 -18,-23 -23,-38 -5,-15 -8,-32 -8,-52 0,-27 6,-51 18,-70 12,-20 28,-36 48,-49 19,-12 42,-21 68,-27 25,-6 52,-9 79,-9 22,0 44,2 66,5 22,3 44,8 66,15l0 116c-19,-12 -40,-20 -62,-25 -21,-6 -43,-9 -63,-9 -10,0 -20,1 -28,3 -9,2 -17,4 -23,8 -7,3 -12,7 -16,12 -4,6 -6,12 -6,18 0,9 3,17 9,23 6,6 13,12 22,16 9,5 20,9 31,13 11,4 22,7 33,11 20,7 38,15 55,23 16,8 30,18 41,29 12,11 21,24 27,39 6,15 9,33 9,53 0,29 -6,54 -19,74 -12,21 -29,37 -50,50 -20,13 -44,22 -72,28 -27,6 -55,9 -84,9 -54,0 -103,-8 -149,-25zm629 -222l0 235 -154 0 0 -682 241 0c172,0 258,72 258,217 0,69 -24,124 -74,167 -49,42 -115,63 -197,63l-74 0zm0 -329l0 213 61 0c82,0 123,-36 123,-108 0,-70 -41,-105 -123,-105l-61 0zm748 213c-18,-10 -39,-15 -63,-15 -33,0 -58,12 -77,36 -18,24 -27,56 -27,97l0 233 -150 0 0 -487 150 0 0 90 2 0c24,-66 66,-99 128,-99 16,0 28,2 37,6l0 139zm504 150l-318 0c5,71 50,106 134,106 54,0 101,-12 141,-38l0 109c-45,24 -103,36 -175,36 -79,0 -140,-22 -183,-65 -44,-44 -66,-105 -66,-183 0,-81 24,-145 71,-192 47,-47 105,-71 173,-71 71,0 126,21 165,63 39,42 58,100 58,172l0 63zm-139 -92c0,-70 -28,-105 -85,-105 -24,0 -45,10 -62,30 -18,20 -29,45 -33,75l180 0zm197 280l0 -121c25,14 49,26 74,33 24,7 48,11 70,11 26,0 47,-4 63,-11 15,-7 23,-19 23,-33 0,-10 -4,-18 -11,-24 -7,-7 -16,-12 -27,-17 -11,-5 -23,-9 -36,-13 -13,-4 -25,-8 -37,-13 -20,-7 -37,-15 -51,-23 -15,-9 -27,-18 -38,-30 -9,-11 -17,-23 -22,-38 -5,-15 -8,-32 -8,-52 0,-27 6,-51 18,-70 11,-20 27,-36 47,-49 20,-12 43,-21 68,-27 26,-6 52,-9 80,-9 22,0 43,2 66,5 22,3 44,8 65,15l0 116c-19,-12 -39,-20 -61,-25 -22,-6 -43,-9 -64,-9 -10,0 -19,1 -28,3 -8,2 -16,4 -23,8 -6,3 -12,7 -15,12 -4,6 -6,12 -6,18 0,9 3,17 8,23 6,6 14,12 23,16 9,5 19,9 30,13 12,4 23,7 34,11 20,7 38,15 54,23 16,8 30,18 42,29 11,11 20,24 27,39 6,15 9,33 9,53 0,29 -6,54 -19,74 -13,21 -29,37 -50,50 -21,13 -45,22 -72,28 -27,6 -55,9 -84,9 -54,0 -103,-8 -149,-25zm429 0l0 -121c24,14 49,26 74,33 24,7 47,11 69,11 27,0 48,-4 63,-11 16,-7 23,-19 23,-33 0,-10 -3,-18 -10,-24 -7,-7 -16,-12 -27,-17 -11,-5 -23,-9 -36,-13 -13,-4 -25,-8 -37,-13 -20,-7 -37,-15 -52,-23 -14,-9 -27,-18 -37,-30 -10,-11 -17,-23 -22,-38 -6,-15 -8,-32 -8,-52 0,-27 6,-51 17,-70 12,-20 28,-36 48,-49 20,-12 43,-21 68,-27 26,-6 52,-9 80,-9 21,0 43,2 65,5 23,3 45,8 66,15l0 116c-19,-12 -39,-20 -61,-25 -22,-6 -43,-9 -64,-9 -10,0 -19,1 -28,3 -9,2 -16,4 -23,8 -7,3 -12,7 -16,12 -4,6 -5,12 -5,18 0,9 2,17 8,23 6,6 13,12 23,16 9,5 19,9 30,13 11,4 23,7 34,11 20,7 38,15 54,23 16,8 30,18 42,29 11,11 20,24 26,39 7,15 10,33 10,53 0,29 -7,54 -19,74 -13,21 -29,37 -50,50 -21,13 -45,22 -72,28 -27,6 -55,9 -85,9 -53,0 -103,-8 -148,-25z"
        />
        <polygon
          className={"fil3"}
          points="9332,10893 9898,10610 9898,10817 13650,10817 13650,10968 9898,10968 9898,11176 "
        />
        <polygon
          className={"fil3"}
          points="5762,2575 5196,2292 5196,2499 2602,2499 2602,2650 5196,2650 5196,2858 "
        />
        <polygon
          className={"fil1"}
          points="2602,4326 2602,2507 2753,2507 2753,4326 "
        />
        <polygon className={"fil4"} points="0,0 15308,0 15308,14253 0,14253 " />
      </g>
    </svg>
  );
};
