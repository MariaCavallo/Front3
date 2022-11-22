import ComponentePlantilla from './components/week_2/mesa4/ComponentePlantilla'
import ComponenteFuncional from './components/week_2/mesa4/ComponenteFuncional'
import ComponenteClase from './components/week_2/mesa4/ComponenteClase'

const App = () => {
    const saludando = {
        saludo: "Buenas Noches América",
        texto: "Aguante Front",
        final: "'ta luego"
    }
    return (
        <div>
            <ComponenteClase saludo={saludando} />
            <ComponenteFuncional texto={saludando} />
            <ComponentePlantilla final={saludando.final} />
        </div>
    )
}

export default App