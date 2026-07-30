import { useProposal } from "../context/ProposalContext";
import { useInspector } from "../context/InspectorContext";
import { useStyles } from "../context/StyleContext";

import "../styles/propertyInspector.css";

const PropertyInspector = () => {
  const { proposal, updateProposal } = useProposal();
  const { selected } = useInspector();
  console.log(selected);
  const { styles, updateStyle } = useStyles();

  if (!selected) {
    return (
      <div className="property-inspector">
        <h3>Property Inspector</h3>
        <p>Select any element inside the proposal.</p>
      </div>
    );
  }

  const style = styles[selected.type] || {};

  return (
    <div className="property-inspector">
      <h3>{selected.type} Inspector</h3>

      {/* ---------------- HEADINGS ---------------- */}

      {selected.type === "Heading" && (
        <>
          <label>Font Size</label>
          <input
            type="number"
            value={style.fontSize || ""}
            onChange={(e) =>
              updateStyle("Heading", "fontSize", Number(e.target.value))
            }
          />

          <label>Text Color</label>
          <input
            type="color"
            value={style.color || "#000000"}
            onChange={(e) => updateStyle("Heading", "color", e.target.value)}
          />

          <label>Alignment</label>
          <select
            value={style.textAlign || "left"}
            onChange={(e) =>
              updateStyle("Heading", "textAlign", e.target.value)
            }
          >
            <option>left</option>
            <option>center</option>
            <option>right</option>
            <option>justify</option>
          </select>

          <label>Font Weight</label>
          <select
            value={style.fontWeight || "700"}
            onChange={(e) =>
              updateStyle("Heading", "fontWeight", e.target.value)
            }
          >
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="600">600</option>
            <option value="700">700</option>
            <option value="800">800</option>
          </select>

          <label>Letter Spacing</label>
          <input
            type="number"
            value={style.letterSpacing || 0}
            onChange={(e) =>
              updateStyle("Heading", "letterSpacing", Number(e.target.value))
            }
          />
        </>
      )}

      {/* ---------------- PARAGRAPHS ---------------- */}

      {selected.type === "Paragraph" && (
        <>
          <label>Font Size</label>
          <input
            type="number"
            value={style.fontSize || ""}
            onChange={(e) =>
              updateStyle("Paragraph", "fontSize", Number(e.target.value))
            }
          />

          <label>Text Color</label>
          <input
            type="color"
            value={style.color || "#000000"}
            onChange={(e) => updateStyle("Paragraph", "color", e.target.value)}
          />

          <label>Alignment</label>
          <select
            value={style.textAlign || "left"}
            onChange={(e) =>
              updateStyle("Paragraph", "textAlign", e.target.value)
            }
          >
            <option>left</option>
            <option>center</option>
            <option>right</option>
            <option>justify</option>
          </select>

          <label>Line Height</label>
          <input
            type="number"
            step="0.1"
            value={style.lineHeight || 1.5}
            onChange={(e) =>
              updateStyle("Paragraph", "lineHeight", Number(e.target.value))
            }
          />

          <label>Letter Spacing</label>
          <input
            type="number"
            value={style.letterSpacing || 0}
            onChange={(e) =>
              updateStyle("Paragraph", "letterSpacing", Number(e.target.value))
            }
          />
        </>
      )}

      {/* ---------------- IMAGES ---------------- */}

      {selected.type === "Image" && (
        <>
          <label>Width</label>
          <input
            type="text"
            value={style.width || "100%"}
            onChange={(e) => updateStyle("Image", "width", e.target.value)}
          />

          <label>Border Radius</label>
          <input
            type="number"
            value={style.borderRadius || 0}
            onChange={(e) =>
              updateStyle("Image", "borderRadius", Number(e.target.value))
            }
          />

          <label>Opacity</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={style.opacity || 1}
            onChange={(e) =>
              updateStyle("Image", "opacity", Number(e.target.value))
            }
          />
        </>
      )}

      {/* ---------------- SIGNATURE ---------------- */}

      {selected.type === "Signature" && (
        <>
          <label>Signature Width</label>
          <input
            type="number"
            value={styles.Signature.width}
            onChange={(e) =>
              updateStyle("Signature", "width", Number(e.target.value))
            }
          />
        </>
      )}

      {/* ---------------- PRICING ---------------- */}

      {selected.type === "Pricing" && (
        <>
          <label>Currency</label>
          <input
            value={proposal.currency}
            onChange={(e) => updateProposal("currency", e.target.value)}
          />

          <label>Tax (%)</label>
          <input
            type="number"
            value={proposal.tax}
            onChange={(e) => updateProposal("tax", Number(e.target.value))}
          />

          <label>Discount (%)</label>
          <input
            type="number"
            value={proposal.discount}
            onChange={(e) => updateProposal("discount", Number(e.target.value))}
          />
        </>
      )}
    </div>
  );
};

export default PropertyInspector;
