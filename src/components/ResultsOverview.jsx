import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ResultsOverviewScore from "./ResultsOverviewScore";
import ResultText from "./ResultText";
import { resultData, resultTexts, scoreRatings } from "../utils/resultData";

export default function ResultsOverview() {

    const animationControls = useAnimation();

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

    const runLoaderAnimation = async () => {
        await animationControls.start({ y: '-' + totalScore + '%' });
        await animationControls.start({
            opacity: 0.4,
            transition: {
                delay: 0.25,
                duration: 0.01
            }
        });
        await animationControls.set({ y: '-' + 100 + '%' });
        await animationControls.start({ 
            opacity: 0,
            transition: {
                ease: "easeOut",
                duration: 0.7,
            }
         });
    }

    useEffect(() => {
        runLoaderAnimation();
    }, []);

    return (
        <div 
            className="
                w-full
                relative
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
                overflow-hidden
                sm:w-1/2
                sm:rounded-l-none
                sm:rounded-r-4xl
                sm:py-10
                sm:px-8
                sm:gap-8
            " 
        >
            <h2 className="
                text-lg 
                leading-6 
                font-semibold 
                text-light-lavender
                sm:text-2xl
            ">Your Result</h2>
            <ResultsOverviewScore totalScore={totalScore} />
            <motion.div
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 190, mass: 0.5, delay: 1.3 }}
            >                
                <ResultText resultText={resultText} />
            </motion.div>
            <motion.div 
<<<<<<< HEAD
                className="absolute -bottom-full w-full h-full bg-white opacity-10"
=======
                className="absolute -bottom-full w-full h-full bg-white opacity-20"
>>>>>>> c9f7901273ba047ae71602e3232cd348478e2457
                animate={animationControls}
                transition={{ type: 'tween', ease: 'easeOut', delay: 0.4, duration: 0.7}} 
            ></motion.div>
        </div>
    );
}