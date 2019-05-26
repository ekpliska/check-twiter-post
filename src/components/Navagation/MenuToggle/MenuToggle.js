import React from 'react';
import MenuToggleStyle from './MenuToggle.module.css';

const MenuToggle = (props) => {

    const cls = [
        MenuToggleStyle.menuToggle,
        'fa',
    ];

    if (props.isOpen) {
        cls.push('fa-times');
        cls.push(MenuToggleStyle.open);
    } else {
        cls.push('fa-bars');
    }

    return (
        <i
            className={cls.join(' ')}
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle;