function FeatureBlock({ title, description }) {
  return (
    <div className="features2">
      <h1 style={{ fontSize: 20, fontWeight: 500 }}>{title}</h1>
      <div style={{ fontSize: 16, color: "#61656E" }}>{description}</div>
    </div>
  );
}

export default FeatureBlock;