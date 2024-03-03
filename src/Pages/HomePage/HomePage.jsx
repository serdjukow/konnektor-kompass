import { Link } from 'react-router-dom'
import konnektoren_uebersicht from '../../assets/images/konnektoren.png'
import konnektoren_test from '../../assets/images/konnektor-test.png'
import test_result from '../../assets/images/test_result.png'

const HomePage = () => {
    return (
        <section className="home">
            <h1 className="home__title">Über das Projekt "Konnektor Kompas"</h1>
            <div className="home__container">
                <div className="home__item">
                    <p>Herzlich willkommen auf unserer Website! Unser Projekt bietet eine interaktive Möglichkeit, die deutschen Konnektoren zu lernen und zu trainieren. Konnektoren sind Wörter oder Wortgruppen, die Sätze oder Satzteile miteinander verbinden und dadurch den Textfluss verbessern. Durch die gezielte Verwendung von Konnektoren kann man seine Deutschkenntnisse effektiv verbessern und seinen Sprachstil verfeinern.</p>
                    <p>Unser Projekt ist nicht kommerziell und sammelt keine persönlichen Daten der Benutzer.</p>
                    <p>Unser Hauptziel ist es, ein nützliches und zugängliches Lernwerkzeug für alle zu schaffen, die ihre Deutschkenntnisse vertiefen möchten.</p>
                    <p>Wir hoffen, dass Ihnen unser Projekt gefällt und Sie davon profitieren können.</p>
                </div>
                <div className="home__item">
                    <h2 className="home__title">Wie funktioniert es?</h2>

                    <h3 className="home__subtitle">Konnektoren-Übersicht</h3>
                    <p>Auf dieser Seite finden Sie eine Übersicht über einige der wichtigsten Konnektoren. Durch Klicken auf jeden Konnektor wird ein Fenster mit einem Beispielsatz angezeigt.</p>
                    <div className="home__img">
                        <img src={konnektoren_uebersicht} alt="Konnektoren-Übersicht" />
                    </div>

                    <h3 className="home__subtitle">Konnektoren-Test</h3>
                    <p>Der Test präsentiert Ihnen einen Konnektor und bietet mehrere Antwortoptionen, aus denen Sie die richtige auswählen müssen.</p>
                    <div className="home__img">
                        <img src={konnektoren_test} alt="Konnektoren-Test" />
                    </div>
                    <p>Nach Abschluss des Tests wird eine Tabelle mit den Antworten angezeigt.</p>
                    <div className="home__img">
                        <img src={test_result} alt="Konnektoren-Test" />
                    </div>

                    <p>Das ist eine grobe Skizze, wie unser Anwendung funktioniert. Wir werden weiterhin an neuen Funktionen arbeiten, um das Lernen und die Übung von Konnektoren in der deutschen Sprache zu verbessern.</p>
                    <p>Viel Spaß beim Lernen!</p>
                </div>
                <div className="home__email">
                    <p>Haben Sie Fragen, Anregungen oder Probleme? Zögern Sie nicht, uns zu kontaktieren!</p>
                    <p>Sie können uns eine E-Mail senden an: <Link href="mailto:support@serdjukow.eu">support@serdjukow.eu</Link></p>
                </div>
            </div>
        </section>
    )
}

export default HomePage