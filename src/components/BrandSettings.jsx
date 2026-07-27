import { useBrand } from "../context/BrandContext";
import ImageUploader from "./ImageUploader";

const BrandSettings = () => {
  const { brand, setBrand } = useBrand();

  const update = (field, value) =>
    setBrand((prev) => ({
      ...prev,
      [field]: value,
    }));

  return (
    <div className="brand-settings">
      <h3>Brand Kit</h3>

      <input
        placeholder="Company Name"
        value={brand.companyName}
        onChange={(e) => update("companyName", e.target.value)}
      />

      <input
        placeholder="Email"
        value={brand.companyEmail}
        onChange={(e) => update("companyEmail", e.target.value)}
      />

      <input
        placeholder="Phone"
        value={brand.companyPhone}
        onChange={(e) => update("companyPhone", e.target.value)}
      />

      <input
        placeholder="Website"
        value={brand.companyWebsite}
        onChange={(e) => update("companyWebsite", e.target.value)}
      />

      <input
        placeholder="Address"
        value={brand.companyAddress}
        onChange={(e) => update("companyAddress", e.target.value)}
      />

      <input
        type="color"
        value={brand.primaryColor}
        onChange={(e) => update("primaryColor", e.target.value)}
      />

      <ImageUploader
        label="Company Logo"
        value={brand.logo}
        onChange={(value) => update("logo", value)}
      />
    </div>
  );
};

export default BrandSettings;
