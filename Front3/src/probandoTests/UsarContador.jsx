import { useState, useCallback } from "react";

export default function useContador() {
    const [contador, setContador] = useState(0);
    const incrementar = useCallback(() => setContador((x) => x + 1), []);

    return { contador, setContador };
}