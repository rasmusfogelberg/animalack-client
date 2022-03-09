import './BurgerMenu.scss';

function BurgerMenu({ open, onToggleOpen }: any) {
  const burgerMenuClassName = `burgerMenu ${open ? "open" : ""}`;
  return (
    <div className={burgerMenuClassName} onClick={onToggleOpen}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BurgerMenu;
