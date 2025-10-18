import './button.css';

function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`primary-button ${className ?? ''}`.trim()}
    >
      {children}
    </button>
  );
}

export default Button;
