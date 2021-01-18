/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ChartType } from "./model/types";
import { Param } from "./model/param";
export namespace Components {
    interface DiscoveryAnnotation {
        "debug": boolean;
        "height": number;
        "options": Param;
        "result": string;
        "type": ChartType;
        "width": number;
    }
    interface DiscoveryChartLine {
        "debug": boolean;
        "height": number;
        "options": Param;
        "result": string;
        "type": ChartType;
        "width": number;
    }
    interface DiscoverySpinner {
        "message": string;
    }
    interface DiscoveryTile {
        "debug": boolean;
        "language": 'warpscript' | 'flows';
        "options": Param;
        "type": ChartType;
        "url": string;
    }
    interface DiscoveryTileResult {
        "debug": boolean;
        "height": number;
        "options": Param;
        "result": string;
        "start": number;
        "type": ChartType;
        "width": number;
    }
}
declare global {
    interface HTMLDiscoveryAnnotationElement extends Components.DiscoveryAnnotation, HTMLStencilElement {
    }
    var HTMLDiscoveryAnnotationElement: {
        prototype: HTMLDiscoveryAnnotationElement;
        new (): HTMLDiscoveryAnnotationElement;
    };
    interface HTMLDiscoveryChartLineElement extends Components.DiscoveryChartLine, HTMLStencilElement {
    }
    var HTMLDiscoveryChartLineElement: {
        prototype: HTMLDiscoveryChartLineElement;
        new (): HTMLDiscoveryChartLineElement;
    };
    interface HTMLDiscoverySpinnerElement extends Components.DiscoverySpinner, HTMLStencilElement {
    }
    var HTMLDiscoverySpinnerElement: {
        prototype: HTMLDiscoverySpinnerElement;
        new (): HTMLDiscoverySpinnerElement;
    };
    interface HTMLDiscoveryTileElement extends Components.DiscoveryTile, HTMLStencilElement {
    }
    var HTMLDiscoveryTileElement: {
        prototype: HTMLDiscoveryTileElement;
        new (): HTMLDiscoveryTileElement;
    };
    interface HTMLDiscoveryTileResultElement extends Components.DiscoveryTileResult, HTMLStencilElement {
    }
    var HTMLDiscoveryTileResultElement: {
        prototype: HTMLDiscoveryTileResultElement;
        new (): HTMLDiscoveryTileResultElement;
    };
    interface HTMLElementTagNameMap {
        "discovery-annotation": HTMLDiscoveryAnnotationElement;
        "discovery-chart-line": HTMLDiscoveryChartLineElement;
        "discovery-spinner": HTMLDiscoverySpinnerElement;
        "discovery-tile": HTMLDiscoveryTileElement;
        "discovery-tile-result": HTMLDiscoveryTileResultElement;
    }
}
declare namespace LocalJSX {
    interface DiscoveryAnnotation {
        "debug"?: boolean;
        "height"?: number;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param;
        "result"?: string;
        "type"?: ChartType;
        "width"?: number;
    }
    interface DiscoveryChartLine {
        "debug"?: boolean;
        "height"?: number;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param;
        "result"?: string;
        "type"?: ChartType;
        "width"?: number;
    }
    interface DiscoverySpinner {
        "message"?: string;
    }
    interface DiscoveryTile {
        "debug"?: boolean;
        "language"?: 'warpscript' | 'flows';
        "onStatusHeaders"?: (event: CustomEvent<string[]>) => void;
        "options"?: Param;
        "type"?: ChartType;
        "url"?: string;
    }
    interface DiscoveryTileResult {
        "debug"?: boolean;
        "height"?: number;
        "options"?: Param;
        "result"?: string;
        "start"?: number;
        "type"?: ChartType;
        "width"?: number;
    }
    interface IntrinsicElements {
        "discovery-annotation": DiscoveryAnnotation;
        "discovery-chart-line": DiscoveryChartLine;
        "discovery-spinner": DiscoverySpinner;
        "discovery-tile": DiscoveryTile;
        "discovery-tile-result": DiscoveryTileResult;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "discovery-annotation": LocalJSX.DiscoveryAnnotation & JSXBase.HTMLAttributes<HTMLDiscoveryAnnotationElement>;
            "discovery-chart-line": LocalJSX.DiscoveryChartLine & JSXBase.HTMLAttributes<HTMLDiscoveryChartLineElement>;
            "discovery-spinner": LocalJSX.DiscoverySpinner & JSXBase.HTMLAttributes<HTMLDiscoverySpinnerElement>;
            "discovery-tile": LocalJSX.DiscoveryTile & JSXBase.HTMLAttributes<HTMLDiscoveryTileElement>;
            "discovery-tile-result": LocalJSX.DiscoveryTileResult & JSXBase.HTMLAttributes<HTMLDiscoveryTileResultElement>;
        }
    }
}
