import React from 'react'

function ProjectDetails(props) {
  const id = props.match.params.id
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project title - { id }</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti minus voluptatibus asperiores ut? Veritatis omnis explicabo nesciunt numquam repellendus neque sit laudantium dicta consequatur veniam optio rem eos reprehenderit quae ipsam, fuga tempore sunt eveniet! Odit, autem deserunt officiis adipisci neque rerum quia illum mollitia commodi, ut, provident eaque numquam.
                </p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by ...</div>
                <div>3rd of September</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
