import React from 'react';

export default function NavItem({isActive, title, onClick}) {
  return (
    <a onClick={onClick} className={isActive
      ? "navigation__link navigation__link_active"
      : "navigation__link"}>{title}</a>
  );
}
