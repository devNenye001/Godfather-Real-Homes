
function HeroText({ title, subtitle, className }) {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

export default HeroText;