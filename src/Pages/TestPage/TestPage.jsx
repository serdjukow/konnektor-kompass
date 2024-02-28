import { useNavigate } from 'react-router-dom'
import ButtonStartTest from '../../components/ButtonStartTest/ButtunStartTest'

const TestPage = () => {
    const history = useNavigate()
    const onClick = () => {
        history('/test/start')
    }

    return (
        <section className="test">
            <div className="connector-test__start-container">
                <ButtonStartTest onClick={onClick} />
            </div>
        </section>
    )
}

export default TestPage