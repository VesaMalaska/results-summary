import ResultRowIcon from "./ResultRowIcon";
import { resultAreaColors } from "../utils/themeConfig";

export default function AreaResultRow({ field, score }) {

    const { rgbValue } = resultAreaColors.find((colorData) => {
        return colorData.resultArea === field;
    });

    return (
        <div className={`
            flex
            justify-between
            items-center
            gap-3
            rounded-md
            p-4
            font-bold
            sm:text-lg
            sm:rounded-lg
        `} style={{backgroundColor: 'rgba(' + rgbValue + ', 0.06)'}}>
            <div className="flex gap-3 items-center" style={{color: 'rgb(' + rgbValue + ')'}}>
                <span className='text-lg'>
                    <ResultRowIcon field={field} />
                </span>
                <span className=' font-medium'>
                    {field}
                </span>
            </div>
            <div className=" text-dark-gray-blue flex gap-1">
                {score} <span className=" opacity-50"> / 100</span>
            </div>
        </div>
    );
}