import React from 'react';

export default function ProjectList({projects}) {

    return (
       <div className='project_list'>
            {projects.map((item) => {
                return (
                    <img className='project_list_img' key={Math.random()} src={item.img} alt={item.category} />
                )
            })}
       </div>
    )
}