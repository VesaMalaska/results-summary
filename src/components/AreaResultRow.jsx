import ResultRowIcon from "./ResultRowIcon";

export default function AreaResultRow({ field, score }) {

    let colorRgb = '';
    
    if (field === 'Reaction') {
        colorRgb = '245, 90, 90';
    } else if (field === 'Verbal') {
        colorRgb = '80, 175, 140';
    } else if (field === 'Visual') {
        colorRgb = '70, 50, 205';
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
            font-bold
            sm:text-lg
            sm:rounded-lg
        `} style={{backgroundColor: 'rgba(' + colorRgb + ', 0.06)'}}>
            <div className="flex gap-3 items-center" style={{color: 'rgb(' + colorRgb + ')'}}>
                <span className='text-lg'>
                    <ResultRowIcon field={field} />
                </span>
                <span className=' font-medium'>
                    {field}
                </span>
            </div>
            <div className=" text-dark-gray-blue flex gap-1">
                {score} <span className=" opacity-50"> / 100</span>
            </div>
        </div>
    );
}