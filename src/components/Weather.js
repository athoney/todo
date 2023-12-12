import "./styles.css"

export default function Weather() {
    return (
        <div className="weather">
            <div className="row">
                <div className="col-6">
                    <h3>ICON</h3>
                </div>
                <div className="col-6">
                    <h3>32°F</h3>
                    <p>Partly sunny</p>
                </div>
            </div>

        </div>
    );
}