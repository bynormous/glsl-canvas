import IterableStringMap from '../core/iterable';
import Geometry from '../geometry/geometry';
export declare enum BufferFloatType {
    FLOAT = 0,
    HALF_FLOAT = 1
}
export declare class Buffer {
    static floatType: BufferFloatType;
    texture: WebGLTexture;
    buffer: WebGLFramebuffer;
    BW: number;
    BH: number;
    index: number;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, BW: number, BH: number, index: number);
    getFloatType(gl: WebGLRenderingContext | WebGL2RenderingContext): number;
    getTexture(gl: WebGLRenderingContext | WebGL2RenderingContext, BW: number, BH: number, index: number): WebGLTexture;
    resize(gl: WebGLRenderingContext | WebGL2RenderingContext, BW: number, BH: number): void;
}
export declare class IOBuffer {
    program: WebGLProgram;
    geometry: Geometry;
    input: Buffer;
    output: Buffer;
    index: number;
    key: string;
    vertexString: string;
    fragmentString: string;
    BW: number;
    BH: number;
    isValid: boolean;
    constructor(index: number, key: string, vertexString: string, fragmentString: string);
    create(gl: WebGLRenderingContext | WebGL2RenderingContext, BW: number, BH: number): void;
    render(gl: WebGLRenderingContext | WebGL2RenderingContext, BW: number, BH: number): void;
    resize(gl: WebGLRenderingContext | WebGL2RenderingContext, BW: number, BH: number): void;
    destroy(gl: WebGLRenderingContext | WebGL2RenderingContext): void;
}
export default class Buffers extends IterableStringMap<IOBuffer> {
    get count(): number;
    static getBuffers(gl: WebGLRenderingContext | WebGL2RenderingContext, fragmentString: string, vertexString: string): Buffers;
}
