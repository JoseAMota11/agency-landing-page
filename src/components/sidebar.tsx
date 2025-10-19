import './sidebar.css';
import Button from './button';
import { useEffect, useRef, type Dispatch, type SetStateAction } from 'react';
import { motion, AnimatePresence } from 'motion/react';

function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="sidebar"
          ref={ref}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <a href="#" className="sidebar--link">
            Home
          </a>
          <a href="#" className="sidebar--link">
            About Us
          </a>
          <a href="#" className="sidebar--link">
            Our App
          </a>
          <a href="#" className="sidebar--link">
            Contacts
          </a>
          <div className="sidebar--actions">
            <button type="button" className="login-btn">
              Log in
            </button>
            <Button>Sign up</Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
