import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

// components
import Coders from './components/coders';
import Projects from './components/projects';
import AddCoder from './components/addCoder';

// apollo client setup
const apolloClient = new ApolloClient(
  {
    uri: 'http://localhost:5000/api'
  }
);

const App = () => (
  <ApolloProvider client={apolloClient}>
      <h2>Coders Incorporated</h2>
      <Coders />
      <Projects />
      <AddCoder />
  </ApolloProvider>
);

export default App;