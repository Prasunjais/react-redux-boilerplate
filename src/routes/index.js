import React, { Component } from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import { history } from '../helpers';

import Routers from './routes';

import * as Layout from '../layout';
import * as Pages from '../pages';

import { NotificationContainer } from 'react-notifications';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderRoute: false,
      pathname: null,
      loading: true,
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  updateWindowDimensions() {
  }

  componentWillMount() {
    if (history.location.pathname == '/healthCareProvider' || history.location.pathname == '/healthCareProvider/') {
      history.push('/healthCareProvider/login');
    }
    if (history.location.pathname == '/admin' || history.location.pathname == '/admin/') {
      history.push('/admin/login');
    }
  }

  routerGuard = () => { };

  render() {
    return (
      <>
        <NotificationContainer />

        <Router history={history}>
          {Routers.map(({ component, redirect, path, exact = false, childrens = [] }, index) => {
            if (childrens.length > 0) {
              return (
                <Route
                  path={path}
                  exact={exact}
                  key={path + index}
                  render={props => {
                    if (redirect) {
                      if (props.location.pathname === path) {
                        props.history.push(redirect);
                      }
                    }

                    const LayoutComponent = Layout[component];

                    return (
                      <LayoutComponent {...props}>
                        {childrens.map(({ component: ChildrenComponent, path: childrenPath, exact = false }, index) => {
                          this.routerGuard();
                          return (
                            <Route
                              path={path + childrenPath}
                              exact={exact}
                              key={path + childrenPath + index}
                              render={props => {
                                let PageComponent = Pages[ChildrenComponent];

                                return <PageComponent {...props} />;
                              }}
                            />
                          );
                        })}
                      </LayoutComponent>
                    );
                  }}
                />
              );
            }

            return (
              <Route
                path={path}
                exact={exact}
                key={path + index}
                render={props => {
                  if (component) {
                    let PageComponent = Pages[component];
                    return <PageComponent {...props} />;
                  }
                  if (redirect) {
                    return <Redirect to={redirect} />;
                  }
                  return <></>;
                }}
              />
            );
          })}
        </Router>
      </>
    );
  }
}

export default Routes;
