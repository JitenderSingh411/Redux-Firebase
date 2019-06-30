import React from 'react'

const ProjectList = () =>
{
    return(
        <div className="Project-List">
         <div className="card">
                            <div className="card-content">
                                <div className="card-title">Project 1</div>
                                <p>This is the content 1</p>
                                <p className='grey-text'>{Date()}}</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <div className="card-title">Project 2</div>
                                <p>This is the content 2</p>
                                <p className='grey-text'>{Date()}}</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <div className="card-title">Project 3</div>
                                <p>This is the content 3</p>
                                <p className='grey-text'>{Date()}}</p>
                            </div>
                        </div>
                        </div>
    )
}


export default ProjectList

