import React from 'react';

export default function Toolbar({filters, selected, onSelectFilter}) {

    return (
       <ul className='toolbar'>
            {filters.map((item) => {
                return (
                    <li
                        key={item}
                        className={item === selected ? 'toolbar_btn_active' : 'toolbar_btn'}
                        onClick={() => onSelectFilter(item)}
                    >{item}</li>
                )
            })}
       </ul>
    )

}