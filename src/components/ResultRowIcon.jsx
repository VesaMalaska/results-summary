import { RxLightningBolt } from 'react-icons/rx';
import { BiBrain } from 'react-icons/bi';
import { HiOutlineChat } from 'react-icons/hi';
import { TbEye } from 'react-icons/tb';

export default function ResultRowIcon({ field }) {
    if (field === 'Reaction') {
        return <RxLightningBolt />;
    } 
    if (field === 'Verbal') {
        return <HiOutlineChat />;
    }
    if (field === 'Visual') {
        return <TbEye />;
    }
    if (field === 'Memory') {
        return <BiBrain />;
    }
}