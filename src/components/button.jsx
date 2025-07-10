function Button({ label, onClick, type = "button", className = "button" }) {
  return (
    <button type={type} onClick={onClick} className={`btn ${className}`}>
      {label}
    </button>
  );
}

export default Button;