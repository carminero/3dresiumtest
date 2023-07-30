import React from 'react';
import { Viewer as CesiumViewer } from "cesium";
import { CesiumComponentRef } from "resium";
export declare class AppCesium3dViewer extends React.Component {
    myref: React.RefObject<CesiumComponentRef<CesiumViewer>>;
    constructor(props: any);
    render(): JSX.Element;
}
