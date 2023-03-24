import Card from "./Card";

export default function Overlay() {
    return (
        <div 
            className="flex justify-center items-center min-h-screen bg-overlay-bg" 
            style={{minHeight: "100svh"}}
        >
            <Card />
        </div>
    );
}