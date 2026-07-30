import DocumentRenderer from "../elements/DocumentRenderer";
import usePersistence from "../hooks/usePersistence";

const PrintView = () => {
  usePersistence();

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "40px",
        minHeight: "100vh",
      }}
    >
      <DocumentRenderer />
    </div>
  );
};

export default PrintView;
