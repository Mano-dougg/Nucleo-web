// -- STYLES
import './styles.scss';

// -- FUNCTION
function Skills() {
    return (
        <div id='skills'>
            <hr/>
            <h2>Skills</h2>

            <section>

                <table className='caixa'>
                    <caption>Front-End</caption>

                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Figma</td>
                            <td>⭐️⭐️⭐️⭐️</td>
                        </tr>
                        <tr>
                            <td>HTML / CSS</td>
                            <td>⭐️⭐️⭐️⭐️</td>
                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td>⭐️⭐️⭐️</td>
                        </tr>
                        <tr>
                            <td>React</td>
                            <td>⭐️⭐️</td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <caption>Idiomas</caption>

                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Inglês</td>
                            <td>⭐️⭐️⭐️⭐️⭐️</td>
                        </tr>
                        <tr>
                            <td>Italiano</td>
                            <td>⭐️⭐️⭐️⭐️⭐️</td>
                        </tr>
                        <tr>
                            <td>Francês</td>
                            <td>⭐️⭐️⭐️</td>
                        </tr>
                        <tr>
                            <td>Espanhol</td>
                            <td>⭐️⭐️</td>
                        </tr>
                    </tbody>
                </table>

            </section>

        </div>
    )
};

export default Skills;