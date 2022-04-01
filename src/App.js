import React, { Suspense} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuotes = React.lazy(() => import('./pages/NewQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));




function App() {
  return (
    <div>
      <Layout>
        <Suspense
          fallback={
            <div className='centered'>
              <LoadingSpinner/>
            </div>
          }
        >
          <Switch>
            <Route path='/' exact>
              <Redirect to="/quotes"></Redirect>
            </Route>
            <Route path='/quotes' exact>
              <AllQuotes/>
            </Route>
            <Route path='/quotes/:quoteId'>
              <QuoteDetail/>
            </Route>
            <Route path='/new-quote'>
              <NewQuotes/>       
            </Route>
            <Route path='*'>
              <NotFound/>
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
