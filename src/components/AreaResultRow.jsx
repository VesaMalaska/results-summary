export default function AreaResultRow({ field, score }) {
    let colorRgb = '';

    if (field === 'Reaction') {
        colorRgb = '235, 70, 60';
    } else if (field === 'Verbal') {
        colorRgb = '70, 165, 120';
    } else if (field === 'Visual') {
        colorRgb = '70, 50, 215';
    } else if (field === 'Memory') {
        colorRgb = '225, 185, 30';
    }

    return (
        <div className={`
            flex
            justify-between
            items-center
            gap-3
            rounded-md
            p-4
            sm:text-lg
            sm:rounded-lg
        `} style={{backgroundColor: 'rgba(' + colorRgb + ', 0.06)'}}>
            <div className="flex gap-3" style={{color: 'rgb(' + colorRgb + ')'}}>
                <span className='text-xl'>@</span>
                <span>{field}</span>
            </div>
            <div className=" text-dark-gray-blue font-bold flex gap-1">
                {score} <span className=" opacity-50"> / 100</span>
            </div>
        </div>
    );
}