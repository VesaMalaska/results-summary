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
            sm:flex-row
            sm:min-h-fit
            sm:max-w-[46rem]
            sm:overflow-hidden
            sm:rounded-4xl
            sm:shadow-custom
        ">
            <ResultsOverview />
            <ResultsStats />            
        </div>
    );
}