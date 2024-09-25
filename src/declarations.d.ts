// declare module "*.svg" {
//     import React from 'react';
//     const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
//     export default ReactComponent;
//   }
declare module "*.svg" {
  const content: any;
  export default content;
}

  declare module "*.png" ;
  //   const value: any;
  //   export default value;
  // }