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

function shuffle(array: React.ComponentType<IconBaseProps>[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

export const iconsLink = [
  AiFillMessage,
  AiFillBank,
  FaGoogle,
  TbBrandYahoo,
  MdAlternateEmail,
  MdMarkEmailRead,
  MdEuro,
  MdOutlineTextsms,
  SiGmail,
  LuDollarSign,
  IoLogoBitcoin,
  PiCrown,
];

export const shuffledIconsArray = shuffle(iconsLink); 

