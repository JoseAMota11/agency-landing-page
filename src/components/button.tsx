import './button.css';

function Button({ children }: { children: React.ReactNode }) {
  return <button className="primary-button">{children}</button>;
}

export default Button;
