import { renderHook } from "@testing-library/react";
import { typeOf } from "react-is";
import useContador from "./UsarContador";

test("devuelve el estado inicial y el método incrementar", () => {

    const { result } = renderHook(() => useContador());
    
    expect(result.current.contador).toBe(0);
    expect(typeof result.current.incrementar).toBe("function")

    test("incrementa el conteo al llamar al método incrementar", () => {

        act(() => {
        result.current.incrementar();
        });
        
        expect(result.current.contador).toBe(1);
        });
})