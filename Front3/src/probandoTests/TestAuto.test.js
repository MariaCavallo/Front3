import AutoDeCarreras from "./AutoDeCarreras";
import { render, screen } from '@testing-library/react';

describe("El componente AutoDeCarrera", () => {
    test("se renderiza correctamente", () => {
        render(<AutoDeCarreras />);

        const componente = screen.getByText("Por favor, revisar el estado de la carrera");

        expect(componente).toBeInTheDocument();
    });

    test("muestra el mensaje de largada", () => {
        render(<AutoDeCarreras estado={"largada"} />);

        const componente = screen.getByText("El auto sale a toda marcha");

        expect(componente).toBeInTheDocument();
    });

    test("muestra el mensaje de espera", () => {
        render(<AutoDeCarrera estado={"espera"} />);
        
        const componente = screen.getByText("El auto está listo para largar");
        
        expect(componente).toBeInTheDocument();
    });
});