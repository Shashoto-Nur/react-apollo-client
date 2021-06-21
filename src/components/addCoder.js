import { gql, useMutation } from '@apollo/client';

const addCoderQuery = gql`
  mutation AddCoder($name: String!) {
    addCoder(name: $name) {
      id
      name
    }
  }
`;

function AddCoder() {
    let input;
    const [addCoder, { data }] = useMutation(addCoderQuery);

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        addCoder({ variables: { name: input.value } });
        input.value = '';
    }

    console.log(data) // returned value
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input ref={node => { input = node; }} />
          <button type="submit">Add Coder</button>
        </form>
      </div>
    );
  }

export default AddCoder;