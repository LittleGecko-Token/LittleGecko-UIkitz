import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 15 2" {...props}>
      <path xmlns="http://www.w3.org/2000/svg" d="M650 1446 c-97 -27 -163 -69 -252 -158 -75 -75 -88 -92 -88 -121 0 -26 -9 -42 -41 -72 -36 -35 -40 -37 -33 -15 12 36 11 92 -2 97 -6 2 -17 -18 -26 -44 l-15 -48 -10 35 c-9 30 -12 32 -18 16 -5 -11 -3 -32 3 -49 7 -20 8 -36 2 -48 -6 -10 -10 -33 -10 -52 0 -19 -9 -45 -19 -58 l-19 -24 1 54 c1 34 -2 55 -10 58 -9 3 -10 -7 -6 -34 l6 -38 -23 23 c-29 31 -37 21 -16 -22 9 -19 16 -56 16 -83 l0 -48 -19 31 c-11 18 -25 35 -31 39 -20 12 -24 -5 -8 -33 9 -15 21 -53 27 -85 6 -32 13 -62 16 -68 4 -5 -5 -9 -19 -9 -30 0 -36 -26 -8 -33 10 -3 6 -5 -10 -6 -16 0 -28 -6 -28 -12 0 -8 14 -10 40 -6 38 5 40 4 34 -19 -4 -17 -1 -26 10 -30 9 -3 16 -11 16 -17 0 -6 8 -20 18 -31 15 -18 13 -17 -16 3 -36 25 -43 12 -15 -29 16 -22 16 -23 0 -17 -27 10 -21 -19 12 -55 18 -20 39 -32 58 -34 33 -2 100 -30 110 -47 3 -6 1 -7 -6 -3 -16 10 -61 -1 -90 -23 -32 -25 -20 -44 17 -25 15 7 35 14 45 14 17 0 17 -2 3 -22 -18 -25 -21 -68 -6 -68 6 0 10 4 10 10 0 18 62 80 80 80 10 0 42 -16 71 -36 77 -51 98 -61 152 -69 41 -6 47 -10 42 -26 -9 -26 21 -25 35 1 13 25 45 32 90 21 19 -5 29 -9 23 -10 -38 -3 16 -40 80 -55 24 -6 29 -2 44 28 9 19 24 36 33 39 12 3 8 -9 -17 -45 -56 -85 -38 -94 33 -18 33 35 50 47 55 38 5 -8 -5 -20 -27 -35 -19 -13 -34 -28 -34 -33 0 -13 17 -13 25 0 3 5 15 15 26 20 18 10 19 9 13 -14 -4 -16 -2 -26 5 -26 14 0 24 42 19 85 -4 33 -2 35 32 41 113 19 227 62 273 102 15 14 17 13 17 -6 0 -11 -12 -35 -26 -52 -15 -17 -23 -34 -19 -38 8 -8 65 57 65 75 0 7 6 10 14 7 16 -6 33 15 19 25 -25 17 -21 42 12 75 29 30 39 34 68 29 28 -4 40 0 70 27 45 39 46 50 7 50 -39 0 -38 12 5 51 26 24 35 40 34 63 l-1 31 -13 -30 c-7 -16 -17 -29 -22 -28 -4 1 -16 -6 -26 -14 -21 -20 -21 -11 -2 65 20 78 7 198 -31 282 -26 59 -30 118 -10 163 6 13 5 16 -7 12 -8 -4 -20 -18 -26 -32 -12 -25 -12 -25 -30 -7 -10 11 -18 23 -17 28 0 5 -4 10 -10 13 -13 5 -34 -39 -34 -75 -1 -24 -2 -23 -15 12 -7 21 -18 43 -24 49 -17 17 -13 24 14 31 24 6 52 42 41 54 -3 3 -18 -5 -32 -19 l-26 -24 6 23 c9 27 -9 30 -32 4 -10 -10 -16 -16 -15 -13 8 14 -60 111 -112 159 -71 67 -139 105 -220 127 -70 18 -211 18 -275 1z m249 -17 c24 -5 67 -21 96 -34 54 -26 139 -94 118 -95 -7 0 10 -29 36 -64 75 -99 95 -160 96 -286 0 -128 -20 -193 -66 -209 -21 -7 -28 -7 -26 2 1 7 -6 11 -15 11 -10 -1 -18 1 -18 5 0 3 -13 12 -30 19 -27 12 -41 32 -22 32 4 0 13 4 20 9 10 6 9 16 -8 45 -18 30 -19 35 -6 30 15 -6 16 0 11 52 -4 33 -6 72 -6 87 0 15 -4 38 -9 52 -6 16 -5 25 2 27 7 3 7 12 -3 28 -7 14 -12 30 -11 36 1 6 -17 21 -40 34 -55 30 -53 27 -39 44 10 12 8 16 -8 21 -12 3 -31 3 -42 0 -15 -5 -19 -4 -15 4 9 14 13 13 -127 16 -92 2 -120 -1 -124 -11 -3 -8 -9 -11 -14 -8 -5 3 -23 3 -39 -1 -27 -6 -28 -8 -14 -22 14 -15 12 -18 -28 -37 -23 -12 -43 -28 -43 -36 0 -8 -8 -26 -18 -40 -10 -14 -13 -26 -7 -30 6 -4 6 -18 1 -38 -6 -19 -6 -34 0 -37 5 -4 5 -13 0 -23 -5 -9 -11 -41 -13 -70 -4 -42 -2 -52 8 -48 20 8 17 -7 -7 -39 -18 -22 -20 -29 -8 -36 8 -5 21 -9 29 -9 12 0 12 -2 2 -9 -8 -4 -13 -12 -13 -16 1 -5 -5 -10 -12 -11 -30 -4 -57 -16 -53 -22 2 -4 -11 -7 -30 -7 -31 0 -35 4 -54 48 -57 139 -23 324 83 457 21 26 32 47 26 51 -12 7 48 57 101 84 97 51 234 68 339 44z m-92 -150 c32 14 34 14 26 -6 -5 -13 -3 -15 13 -9 46 19 53 19 47 -4 -5 -20 -4 -21 15 -11 11 6 28 11 37 11 12 0 14 -4 5 -19 -14 -28 -13 -31 14 -31 13 0 32 -3 41 -7 15 -5 14 -8 -6 -19 -17 -10 -19 -13 -8 -14 9 0 27 -9 40 -20 21 -17 22 -19 6 -20 -17 0 -17 -2 2 -26 25 -32 27 -50 5 -58 -13 -5 -12 -9 5 -28 28 -29 27 -48 -1 -41 l-23 6 23 -25 c27 -30 28 -41 2 -33 -19 6 -19 5 -4 -32 9 -21 21 -44 26 -50 13 -16 -5 -17 -31 -3 -33 17 2 -62 37 -86 23 -16 28 -24 19 -33 -15 -15 -67 -14 -67 1 0 6 -3 8 -7 5 -3 -4 4 -18 17 -32 20 -21 21 -25 6 -25 -9 0 -26 5 -38 11 -24 13 -31 8 -22 -16 6 -15 16 -17 73 -12 36 2 75 8 86 11 11 3 5 -1 -14 -10 -35 -15 -102 -15 -178 1 l-31 7 20 34 c25 43 20 43 -26 -1 -21 -19 -48 -35 -60 -35 -13 0 -45 -7 -72 -16 -78 -24 -134 -29 -134 -10 0 12 -7 14 -31 9 -19 -4 -34 -1 -38 6 -6 9 -23 7 -70 -5 -40 -10 -67 -12 -73 -6 -9 9 60 21 152 28 19 1 58 7 85 12 l50 10 -59 1 -60 1 34 35 c19 19 28 35 21 35 -7 0 -31 -18 -53 -39 -21 -22 -53 -43 -71 -46 -32 -7 -32 -7 -9 10 31 23 28 32 -11 27 -22 -2 -38 2 -46 12 -11 13 -11 16 2 16 24 0 57 33 66 68 9 31 9 32 -15 26 -28 -7 -29 -2 -10 29 8 12 17 32 20 44 6 18 4 21 -16 15 -21 -5 -22 -4 -8 14 7 10 21 25 30 33 13 12 12 13 -12 7 -22 -5 -25 -3 -21 14 3 11 11 25 19 31 18 15 18 29 -1 29 -20 0 -19 6 6 46 19 32 20 34 2 34 -16 1 -15 3 6 20 13 11 31 20 40 20 11 1 9 4 -8 14 -20 11 -21 14 -6 19 9 4 28 7 42 7 22 0 24 3 19 26 -7 25 -5 26 23 21 24 -5 31 -3 31 9 0 16 12 16 53 -1 13 -6 16 -4 11 10 -6 15 -4 16 16 5 17 -9 29 -9 47 -1z m-452 -534 c51 -121 149 -191 285 -201 l55 -4 -80 40 c-103 51 -67 52 56 1 l94 -39 69 14 c79 17 98 13 31 -7 -25 -7 -45 -17 -45 -21 0 -12 88 -21 149 -15 32 2 72 12 90 22 19 9 30 11 26 5 -29 -46 -182 -65 -284 -34 -30 8 -90 17 -135 19 -44 2 -101 10 -126 19 -53 19 -146 81 -154 102 -3 9 -11 12 -18 8 -7 -4 -10 -3 -5 1 4 5 1 18 -7 29 -15 24 -66 161 -66 179 0 18 33 -40 65 -118z"/>
      <path xmlns="http://www.w3.org/2000/svg" d="M597 1046 c3 -5 -6 -7 -21 -4 -21 4 -24 3 -15 -8 6 -8 18 -14 26 -14 8 0 11 -5 8 -10 -3 -6 1 -13 10 -16 14 -6 14 -9 -2 -28 -10 -11 -11 -15 -3 -8 18 16 38 16 22 0 -22 -22 -14 -57 16 -72 16 -8 34 -22 41 -30 12 -14 10 -16 -15 -17 -28 -1 -28 -1 6 -11 37 -10 70 -34 70 -51 0 -6 9 -30 21 -54 25 -53 37 -47 69 32 21 52 35 64 95 79 11 3 3 4 -19 2 l-39 -2 29 23 c83 68 78 61 59 89 -16 25 -16 26 7 19 22 -6 22 -5 4 9 -10 9 -23 13 -27 10 -5 -3 -6 2 -2 11 3 9 9 13 12 8 10 -14 31 -14 31 1 0 7 9 16 20 19 30 8 24 25 -6 19 -15 -3 -24 -1 -21 4 3 5 -24 9 -59 9 -61 0 -63 -1 -57 -23 l6 -24 -26 26 c-33 33 -64 33 -99 -1 -19 -18 -28 -22 -28 -12 0 8 4 19 9 25 7 6 -15 9 -59 9 -37 0 -66 -4 -63 -9z m239 -41 c25 -62 12 -188 -16 -145 -6 10 -9 -4 -8 -45 1 -34 -4 -71 -11 -84 l-13 -24 -14 24 c-7 13 -14 51 -14 84 -1 36 -4 53 -9 42 -6 -17 -8 -16 -20 7 -10 17 -12 41 -7 78 9 70 28 98 67 98 25 0 32 -6 45 -35z"/>
    </Svg>
  );
};

export default Icon;