import { Form } from "./Form";

export class TestForm implements Form {

    constructor() {}

    public getSvgString(dom: string): string {
        const svgString = `
        <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
          <style>
          </style>
          <foreignObject width='100%' height='100%'>
            <div xmlns='http://www.w3.org/1999/xhtml' style='font-size:40px'>
              ${ dom }
            </div>
          </foreignObject>
        </svg>
        `
        return svgString
    }
}
