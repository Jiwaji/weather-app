import weatherIcon from './assets/weather.svg';

export default function WeatherCards() {
    return (
        <div className="cards">
            <div className="card">
                <p>Sun</p>
                <div><img src={weatherIcon} alt="weather" width="30px"/></div>
                <p>-15&#176; <span className='low-temp'>-30&#176;</span></p>
            </div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            {/* <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div> */}
        </div>
    )
}