import { Component } from "react";


//import * as Cesium from "cesium";
import { Viewer } from "resium";

export interface AppCesiumProps
{

}

interface AppCesiumState
{

}

export class AppCesiumViewer extends Component<AppCesiumProps, AppCesiumState>
{
    public render(): JSX.Element
    {
        return (
            <Viewer full />
        );
    }
}