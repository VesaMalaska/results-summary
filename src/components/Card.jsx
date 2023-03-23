import ResultsOverview from "./ResultsOverview";
import ResultsStats from "./ResultsStats";

export default function Card() {
    return (
        <div className="
            bg-white 
            min-h-screen
            w-full
            flex 
            flex-col
            font-primary
        ">
            <ResultsOverview />
            <ResultsStats />            
        </div>
    );
}