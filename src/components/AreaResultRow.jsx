export default function AreaResultRow({ color }) {
    return (
        <div className={`
            flex
            items-center
            gap-3
            rounded-md
            bg-opacity-50
            p-4
            bg-${color}-500
        `}>
            <span className="text-xl">{color}</span>
            <span className="grow">Reaction</span>
            <div>80 / 100</div>
        </div>
    );
}