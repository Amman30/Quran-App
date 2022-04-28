import spinner from "./assets/spii.svg";

export default function Spinner() {
    return (
        <div className="spinner">
            <img src={spinner} alt="Loading..." />
        </div>
    );
}
