import ResultsOverviewScore from "./ResultsOverviewScore";
import ResultText from "./ResultText";
import { resultData, resultTexts, scoreRatings } from "../utils/resultData";

export default function ResultsOverview() {

    const totalScoreSum = resultData.reduce((total, current) => {
        return total + current.score; 
    }, 0);

    const totalScore = Math.round(totalScoreSum / 4);

    const scoreRating = scoreRatings.find(rating => {
        return totalScore < rating.max && totalScore > rating.min;
    });

    const resultText = resultTexts.find(resultSet => {
        return resultSet.title === scoreRating.rating;
    });

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
            sm:w-1/2
            sm:rounded-l-none
            sm:rounded-r-4xl
            sm:py-10
            sm:px-8
            sm:gap-8
        ">
            <h2 className="
                text-lg 
                leading-6 
                font-semibold 
                text-light-lavender
                sm:text-2xl
            ">Your Result</h2>
            <ResultsOverviewScore totalScore={totalScore} />
            <ResultText resultText={resultText} />
        </div>
    );
}