"use client";
import { useState, useRef, useEffect } from "react";

const Canvas = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState("black");
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.lineWidth = brushSize;
    context.strokeStyle = brushColor;
  }, [brushSize, brushColor]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const exportImage = () => {
    const canvas = canvasRef.current;
    let dataURL = canvas.toDataURL("image/png");
    let linkElement = document.createElement("a");
    linkElement.href = dataURL;
    linkElement.download = "canvas.png";
    linkElement.click();
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={320}
        height={320}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        style={{ border: "1px solid black" }}
      />
      <div className='flex flex-col w-80 py-5'>
        <input
          type='range'
          min='1'
          max='20'
          value={brushSize}
          onChange={(event) => setBrushSize(event.target.value)}
        />
        <label>{brushSize}</label>
        <input
          type='color'
          value={brushColor}
          onChange={(event) => setBrushColor(event.target.value)}
        />
        <div>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded'
            onClick={clearCanvas}
          >
            Clear
          </button>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={exportImage}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
