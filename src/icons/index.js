import {
  FaCircle,
  FaChurch,
  FaMonument,
  FaRoad,
  FaTree,
  FaSynagogue,
  FaSubway,
  FaUniversity,
  FaTrain,
  FaLandmark,
  FaMusic,
  FaPiggyBank,
  FaBuilding,
} from 'react-icons/fa';
import {
  GiCastle,
  GiChurch,
  GiCoffin,
  GiFamilyHouse,
  GiStoneBridge,
  GiSwordsEmblem,
  GiVillage,
} from 'react-icons/gi';
import { ImPower } from 'react-icons/im';
import { SiInternetarchive } from 'react-icons/si';
import { AiTwotoneExperiment } from 'react-icons/ai';
import { BiBuildingHouse, BiMapPin } from 'react-icons/bi';
import { GoRadioTower } from 'react-icons/go';

const icons = {
  architectural: <SiInternetarchive />,
  bank: <FaPiggyBank />,
  battle: <GiSwordsEmblem />,
  bridge: <GiStoneBridge />,
  castle: <GiCastle />,
  cathedral: <GiChurch />,
  cemetery: <GiCoffin />,
  church: <FaChurch />,
  default: <FaCircle />,
  department: <FaBuilding />,
  district: <BiMapPin />,
  metro: <FaSubway />,
  monument: <FaMonument />,
  museum: <FaLandmark />,
  neighborhood: <BiBuildingHouse />,
  neighbourhood: <BiBuildingHouse />,
  palace: <GiFamilyHouse />,
  park: <FaTree />,
  'power station': <ImPower />,
  railway: <FaTrain />,
  'radio station': <GoRadioTower />,
  'record label': <FaMusic />,
  research: <AiTwotoneExperiment />,
  residence: <GiFamilyHouse />,
  street: <FaRoad />,
  synagogue: <FaSynagogue />,
  university: <FaUniversity />,
  village: <GiVillage />,
};

export default icons;
