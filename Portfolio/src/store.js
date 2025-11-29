import {create} from 'zustand';


export const useStore = create((set) => ({
    minimise: false,
    toggleMinimise: () => set((state) => ({minimise: !state.minimise })),
    startmenu: "start-button_not_clicked",
    toggleStartButton: () => set((state) => ({startmenu: state.startmenu === "start-button_not_clicked" ? "start-button_clicked" : "start-button_not_clicked"})),
    on: false,
    toggleOn: () => set((state) => ({on: !state.on })),
    window: false,
    toggleWindow: () => set((state) => ({window: !state.window})),
    currentWindow: "::",
    toggleCurrentWindow: (window) => set((state) => ({currentWindow: state.currentWindow = window}))
}))

