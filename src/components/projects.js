import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getProjectsQuery } from '../queries/queries';

function Projects()
{
  const { loading, error, data } = useQuery(getProjectsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h3>Projects</h3>
      {data.projects.map(project => (
        <div key={project.id}>
          <p><b>{project.id}</b>: {project.name} - level({project.details})</p>
          <p>{project.coders.map(coder => (
            <i>{coder.id}</i>
          ))}</p>
          <hr></hr>
        </div>
        ))
      }
    </div>
  )
}

export default Projects;