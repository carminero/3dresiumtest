
import React  from 'react';
import { Viewer as CesiumViewer, Cesium3DTileStyle} from "cesium";
import { Cesium3DTileset, CesiumComponentRef } from "resium";

//import * as Cesium from "cesium";
import { Viewer } from "resium";




export class AppCesium3dViewer extends React.Component
{

    myref
    
    constructor(props:any){
        super(props);
        this.myref = React.createRef<CesiumComponentRef<CesiumViewer>>(); 
    }

    public render(): JSX.Element
    {
        
        return (
           <Viewer full ref={this.myref}>
            <Cesium3DTileset
                url="/tileset/tileset.json"
                style={
                new Cesium3DTileStyle({
                    color: {
                    conditions: [["true", "color('white')"]],
                    },
                })
                }
                onReady={tileset => {
                    debugger;
                this.myref.current?.cesiumElement?.zoomTo(tileset);
                }}
            />
            </Viewer>
        );
    }
}