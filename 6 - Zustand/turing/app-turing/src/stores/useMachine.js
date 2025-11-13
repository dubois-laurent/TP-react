import { create } from 'zustand'


const initialState = { 
    tape: ["_", "_", "_", "_", "_", "_",],
    head: 0,
    mode: "MOVE",
}

export const useMachineStore = create((set, get) => ({
    ...initialState,
    step: () => {
        const { tape, head, mode } = get()
        if (mode === "MOVE") {
            const newHead = head + 1
            const newMode = newHead >= tape.length ? "STOP" : "MOVE"
            const newTape = [...tape]
            newTape[head] = "1"
            set({ head: newHead, mode: newMode, tape: newTape })
            return
        }
    },
    reset: () => set({ ...initialState }),
}))
