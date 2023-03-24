export default function ResultsOverviewScore({ totalScore }) {
    return (
        <div className="
            flex 
            flex-col 
            justify-center
            items-center
            gap-2
            pt-3
            from-violet-blue
            to-persian-blue
            bg-gradient-to-b
            rounded-full
            w-36
            aspect-square
        ">
            <div className="text-6xl text-white font-extrabold">{totalScore}</div>
            <div className="text-md text-light-lavender opacity-60">of 100</div>
        </div>
    );
}