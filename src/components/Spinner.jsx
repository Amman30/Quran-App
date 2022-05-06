import spinner from "./assets/96.gif";

export default function Spinner() {
    return (
        <div className="spinner">
            <br />
            <img src={spinner} alt="Loading..." />
            <br />
        </div>
    );
}
