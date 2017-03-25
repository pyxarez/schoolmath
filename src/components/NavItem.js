import React from 'react';

export default function NavItem({isActive, link, title, onClick}) {
  return (
    <a
      onClick={onClick}
      href={link}
      className={isActive
      ? "navigation__link navigation__link_active"
      : "navigation__link"}>{title}</a>
  );
}
