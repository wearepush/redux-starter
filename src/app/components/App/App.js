import React from 'react';
import { object } from 'prop-types';
import { Container } from 'semantic-ui-react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route } from 'react-router-dom';

import { Header, Footer } from './../../components';
import styles from './App.scss';

const App = ({
  route: {
    routes
  },
  history
}) => (
  <Container className={styles.app}>
    <Header />
    <div className={styles.app__container}>
      <TransitionGroup className={styles.app__wrapper}>
        <CSSTransition
          key={history.location.pathname}
          classNames="route"
          timeout={{
            enter: 500,
            exit: 200,
          }}
        >
          <Switch
            location={history.location}
          >
            {routes.map((route, i) => (
              <Route
                key={route.key || i}
                path={route.path}
                exact={route.exact}
                strict={route.strict}
                render={props => (
                  <route.component
                    {...props}
                    key={history.location.pathname}
                    route={route}
                  />
                )}
              />
            ))}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
    <Footer />
  </Container>
);

App.propTypes = {
  history: object,
  route: object,
};

App.defaultProps = {
  history: {},
  route: {},
};

export default App;
