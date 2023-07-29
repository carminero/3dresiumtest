import { Component } from "react";
import { App } from "./App";
import { AppCesium3dViewer } from "./components/AppCesium3dViewer";

export interface MainProps
{
    app: App;
}

interface MainState 
{
}

export class Main extends Component<MainProps, MainState>
{
    constructor(props: MainProps)
    {
        super(props);
    }

    public render(): JSX.Element
    {
        return (
            <AppCesium3dViewer>
                <div className="features">
                    <div>
                        Visualizzatore 3d cesium
                    </div>

            
                </div>
            </AppCesium3dViewer>
        );
    }
}