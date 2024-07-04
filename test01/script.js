const vsSource = `
    attribute vec4 aVertexPosition;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    void mainj() {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    }
`;

main();

function main() {
    const canvas = document.querySelector("#glCanvas");

    const gl = canvas.getContext("webgl");

    if (!gl) {
        alert("Impossible d'initialiser WebGl. Votre navigateur ou votre machine ne peut pas le supporter.");

        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
}