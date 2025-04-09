declare module "parallax-js" {
    export default class Parallax {
        constructor(
            element: HTMLElement,
            options?: ParallaxOptions
        );

        destroy(): void;
    }

    interface ParallaxOptions {
        calibrateX?: boolean;
        calibrateY?: boolean;
        invertX?: boolean;
        invertY?: boolean;
        limitX?: number;
        limitY?: number;
        scalarX?: number;
        scalarY?: number;
        frictionX?: number;
        frictionY?: number;
        originX?: number;
        originY?: number;
    }
}