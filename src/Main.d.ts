import { Component } from "react";
import { App } from "./App";
export interface MainProps {
    app: App;
}
interface MainState {
}
export declare class Main extends Component<MainProps, MainState> {
    constructor(props: MainProps);
    render(): JSX.Element;
}
export {};
