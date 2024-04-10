import "./HighlightCard.css"

export default function HighlightCard({ children }) {
    return (
        <div className="highlight-card">
            <p className="highlight-card-title">UV Index</p>
            <div className="highlight-card-content">
                { children }
            </div>
        </div>
    )
}