const ImageUploader = ({ label, value, onChange }) => {
  const handleFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      onChange(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="image-uploader">
      <label>{label}</label>

      <input type="file" accept="image/*" onChange={handleFile} />

      {value && (
        <img
          src={value}
          alt={label}
          style={{
            width: 120,
            marginTop: 10,
            borderRadius: 8,
          }}
        />
      )}
    </div>
  );
};

export default ImageUploader;
