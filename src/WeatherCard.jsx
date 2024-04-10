import './WeatherCard.css'

export default function WeatherCard() {
    return (
        <div className="card">
            <p>Sun</p>
            <div><img src={weatherIcon} alt="weather" width="30px" /></div>
            <p>-15&#176; <span className='low-temp'>-30&#176;</span></p>
        </div>
    )
}