import React, { useState } from 'react';
import arrimg from './arrImg';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';



export default function Portfolio({ arr }) {
    const filters = ["All", "Websites", "Flayers", "Business Cards"];
    const [selected, setSelected] = useState('All');
    
    const onSelectFilter = (filter) => {
        setSelected(() => filter);
    }

    return (
        <div className='portfolio'>
            <Toolbar
                filters={filters}
                selected={selected}
                onSelectFilter={onSelectFilter}
            />
            <ProjectList
                projects={arrimg(selected)}
            />
        </div>
        
    )

}