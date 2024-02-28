import './progress.scss'

const Progress = (props) => {
    const { bgcolor, completed, currentValue } = props;

    const getPercent = () => (100 / completed) * currentValue

    const containerStyles = {
        minHeight: 15,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        marginBottom: 20,
        fontSize: 13
    }

    const fillerStyles = {
        width: `${getPercent()}%`,
        backgroundColor: bgcolor,
    }

    return (
        <div className="progress__container" style={containerStyles}>
            <div className="progress__filler" style={fillerStyles}>
                <div className="progress__label">{`${currentValue}/${completed}`}</div>
            </div>
        </div>
    );
};

export default Progress;