import {
  AiFillMessage,
  AiFillBank,
} from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { TbBrandYahoo } from "react-icons/tb";
import { MdAlternateEmail, MdMarkEmailRead, MdEuro, MdOutlineTextsms } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { LuDollarSign } from "react-icons/lu";
import { IoLogoBitcoin } from "react-icons/io";
import { PiCrown } from "react-icons/pi";
import { IconBaseProps } from "react-icons";

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

export const iconsLink = [
  {component: AiFillMessage, size: 38, color: 'lightblue', id: 1},
  {component: AiFillBank, size: 40, color: 'wheat', id: 2},
  {component: FaGoogle, size: 32, color: 'orange', id: 3},
  {component: TbBrandYahoo, size: 40, color: 'purple', id: 4},
  {component: MdAlternateEmail, size: 40, color: 'pink', id: 5},
  {component: MdMarkEmailRead, size: 40, color: 'lightgreen', id: 6},
  {component: SiGmail, size: 38, color: 'darkyellow', id: 7},
  {component: LuDollarSign, size: 40, color: 'green', id: 8},
  {component: MdEuro, size: 38, color: 'blue', id: 9},
  {component: IoLogoBitcoin, size: 40, color: 'darkgrey', id: 10},
  {component: MdOutlineTextsms, size: 40, color: 'purple', id: 11},
  {component: PiCrown, size: 40, color: 'orange', id: 12},
];

// export const shuffledIconsArray = shuffle(iconsLink); 

