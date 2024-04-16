function createMarkup(example) {
    return { __html: example }
}

const PrepositionenCard = ({ item }) => {
    const colors = {
        "mit Genitiv": "blue",
        "mit Dativ": "yellow",
        "mit Akkusativ": "green",
        "mit Dativ oder Akkusativ": "violet",
    }
    
    return (
        <div id={item.id} className={`card ${colors[item.type]}`}>
            <div className="card__body">
                <p className="card__text">{item.type.replace(/-/g, ' ')}</p>
                <h2>{item.title}</h2>
                <p
                    className="card__exemple"
                    dangerouslySetInnerHTML={createMarkup(item.example)}
                ></p>
            </div>
        </div>
    )
}
export default PrepositionenCard