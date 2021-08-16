import { useMemo } from 'preact/hooks';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from '@apollo/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Login } from './pages/Login';

export function App() {
  const client = useMemo(() => new ApolloClient({
    uri: 'http://localhost:4002',
    cache: new InMemoryCache(),
  }), []);

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}
