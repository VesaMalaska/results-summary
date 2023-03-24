import AreaResultRow from "./AreaResultRow";
import { resultData } from "../utils/resultData";

export default function ResultsStats() {
    return (
        <div className="
            flex 
            flex-col 
            flex-grow 
            gap-2 
            pt-5
            pb-8 
            px-7
            sm:px-10
            sm:py-12
        ">
            <h3 className="text-lg font-bold text-dark-gray-blue sm:text-2xl">Summary</h3>
            <div className="flex flex-col justify-around  py-4 gap-3 sm:gap-4 sm:pb-8">
                { resultData.map((resultSet, index) => {
                    return <AreaResultRow 
                        key={index}
                        field={resultSet.field}
                        score={resultSet.score}
                    />
                })}
            </div>
            <button className="
                text-white 
                bg-dark-gray-blue 
                py-4 
                text-lg
                font-bold
                rounded-full
                transition-colors
                from-light-slate-blue
                to-light-royal-blue
                hover:bg-gradient-to-b
            ">Continue</button>
        </div>
    );
}