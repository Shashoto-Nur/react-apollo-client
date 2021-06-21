import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getCodersQuery } from '../queries/queries';

function Coders()
{
  const { loading, error, data } = useQuery(getCodersQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h3>Coders</h3>
      {data.coders.map(coder => (
        <div key={coder.id}>
          <h4><i>{coder.id}</i>: {coder.name} - level({coder.level})</h4>
          <div>{coder.projects.map(project => (
            <div>
              pro-id:
              <i> { project.id }</i>
            </div>
          ))}</div>
          <hr></hr>
        </div>
        ))
      }
    </div>
  )
}

export default Coders;