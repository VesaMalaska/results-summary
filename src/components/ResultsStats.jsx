import AreaResultRow from "./AreaResultRow";
import { resultData } from "../utils/resultData";

export default function ResultsStats() {
    return (
        <div className="flex flex-col flex-grow gap-2 pt-5 pb-8 px-7">
            <h3 className="text-lg font-bold text-dark-gray-blue">Summary</h3>
            <div className="flex flex-col justify-around  py-4 gap-3">
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
            ">Continue</button>
        </div>
    );
}