import AreaResultRow from "./AreaResultRow";

export default function ResultsStats() {
    return (
        <div className="flex flex-col flex-grow justify-between pt-5 pb-8 px-7">
            <h3 className="text-xl font-bold text-dark-gray-blue">Summary</h3>
            <AreaResultRow color="red" />
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