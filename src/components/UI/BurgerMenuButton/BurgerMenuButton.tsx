type BurgerMenuProps = {
  className?: string;
  style?: React.CSSProperties;
  open: boolean;
  navItems: any[];
  onClick: () => void;
};

function BurgerMenuButton({
  className = "",
  style = {},
  navItems,
  open,
  onClick,
}: BurgerMenuProps) {
  const classNames = `p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition-colors duration-150 ease-in-out ${className}`;

  return (
    <button
      aria-label="Main menu"
      aria-controls="mobile-menu"
      aria-expanded={open}
      style={style}
      onClick={onClick}
      className={classNames}
    >
      <span className="sr-only">Open main menu</span>
      {!open ? (
        <svg
          className="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ) : (
        <svg
          className="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
}

export default BurgerMenuButton;
