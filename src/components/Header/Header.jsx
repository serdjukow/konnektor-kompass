const Header = ({ connectors }) => {
    return (
        <header className="header">
            <div className="logo">Konnektor-Kompass</div>
            <div className="info-panel">
                <span className="connectors-value">{connectors.length || 0}</span>
                <span className="answer-wrong">0</span>
                <span className="answer-right">0</span>
            </div>
        </header>
    );
}
export default Header