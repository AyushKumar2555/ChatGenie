// src/components/AIButton.jsx
function AIButton({ label, onClick, variant = "secondary" }) {
  const baseClasses = "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors";
  const primaryClasses = "bg-pink-500 text-white hover:bg-pink-600";
  const secondaryClasses = "bg-gray-100 text-gray-700 hover:bg-gray-200";
  
  const buttonClass = `${baseClasses} ${variant === "primary" ? primaryClasses : secondaryClasses}`;
  
  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
}

export default AIButton;