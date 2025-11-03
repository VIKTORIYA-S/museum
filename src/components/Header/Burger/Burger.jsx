import './Burger.scss';


function Burger({ isOpen, onToggle }) {
  return (
    <button
      className={`burger ${isOpen ? "active" : ""}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      onClick={onToggle}
      type="button"
    >
      <span className={`line line-1 ${isOpen ? "rotate" : ""}`}></span>
      <span className={`line line-2 ${isOpen ? "hide" : ""}`}></span>
      <span className={`line line-3 ${isOpen ? "rotate" : ""}`}></span>
    </button>
  );
}

export default Burger;