import ResultsOverviewScore from "./ResultsOverviewScore";
import ResultText from "./ResultText";

export default function ResultsOverview() {
    return (
        <div className="
            w-full
            border-t-lg
            from-light-slate-blue
            to-light-royal-blue
            bg-gradient-to-b
            p-5
            flex
            flex-col
            items-center
            gap-6
            rounded-b-3xl
            text-center
        ">
            <h2 className="text-lg leading-6 font-semibold text-light-lavender">Your Result</h2>
            <ResultsOverviewScore />
            <ResultText />
        </div>
    );
}