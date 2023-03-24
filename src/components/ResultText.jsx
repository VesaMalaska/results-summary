export default function ResultText({ resultText }) {
    return (
        <div className="px-5">
            <h3 className="text-white text-2xl leading-6 font-bold">{resultText.title}</h3>
            <p className="py-4 text-light-lavender text-md leading-5">
                {resultText.text}
            </p>
        </div>
    );
}