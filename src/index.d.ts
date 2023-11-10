declare module "*.png";
declare module "*.jpg";
declare module "*.module.css" {
    const classes: {[key: string]: string};
    export default classes;
}
declare module "uuid";

declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
