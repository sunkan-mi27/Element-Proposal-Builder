import { useRef, useEffect, useState } from "react";
import { useProposal } from "../context/ProposalContext";

const SignaturePad = () => {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);

  const { updateProposal } = useProposal();

  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");

    context.lineWidth = 2;
    context.lineCap = "round";
    context.strokeStyle = "#000";

    setCtx(context);
  }, []);

  const getPosition = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();

    return {
      x: (e.clientX ?? e.touches?.[0]?.clientX) - rect.left,
      y: (e.clientY ?? e.touches?.[0]?.clientY) - rect.top,
    };
  };

  const startDrawing = (e) => {
    if (!ctx) return;

    isDrawing.current = true;

    const pos = getPosition(e);

    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  const draw = (e) => {
    if (!isDrawing.current || !ctx) return;

    const pos = getPosition(e);

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  const clearCanvas = () => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const saveSignature = () => {
    const image = canvasRef.current.toDataURL("image/png");

    updateProposal("clientSignature", image);

    alert("Signature saved.");
  };

  return (
    <div>
      <label>Client Signature</label>

      <canvas
        ref={canvasRef}
        width={400}
        height={150}
        style={{
          border: "1px solid #d1d5db",
          borderRadius: 8,
          background: "#fff",
          touchAction: "none",
        }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />

      <div
        style={{
          display: "flex",
          gap: 10,
          marginTop: 10,
        }}
      >
        <button type="button" onClick={saveSignature}>
          Save Signature
        </button>

        <button type="button" onClick={clearCanvas}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default SignaturePad;
