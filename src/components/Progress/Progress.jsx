import './progress.scss'

const Progress = (props) => {
    const { bgcolor, completed, currentValue } = props;

    const getPercent = () => (100 / completed) * currentValue
    const fillerStyles = {
        width: `${getPercent()}%`,
        backgroundColor: bgcolor,
    }

    return (
        <div className="progress">
            <div className="progress__filler" style={fillerStyles}>
                <div className="progress__label">{`${currentValue}/${completed}`}</div>
            </div>
        </div>
    );
};

export default Progress;