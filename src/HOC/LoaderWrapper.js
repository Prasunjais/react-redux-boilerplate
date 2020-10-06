import React, { Component } from 'react';

export const LoaderWrapper = (WrappedComponent) => {
  return (props) => {
    return class Temp extends Component {
      constructor(props) {
        super(props);
      }

      state = {
        loading: true,
      };

      componentWillMount() {
        callActions(props, this.props).then(() => {
          if (!props.loaderKey) {
            this.setState({
              loading: false,
            });
          }
        });
      }

      getComponentProps = () => {
        return this.props;
      };

      componentWillReceiveProps(compProp) {
        if (props.loaderKey) {
          if (this.isLoading(props, compProp)) {
            this.setState({
              loading: false,
            });
          }
        }
      }

      isLoading = ({ loaderKey }, componentProps) => {
        return loaderKey.every((key) => componentProps[key] !== '');
      };

      componentWillUnmount() {}

      render() {
        let { loading } = this.state;

        if (loading) {
          return (
            <div className="page-loader">
              <div className="position-relative w-100 h-100">
                <div className="loader-circle"></div>
              </div>
            </div>
          );
        } else {
          return (
            <>
              <WrappedComponent {...this.getComponentProps()} />
            </>
          );
        }
      }
    };
  };
};

const callActions = (props, componentProps) => {
  return new Promise((resolve, reject) => {
    Promise.all(
      props.actions.map((action) => {
        return componentProps[action]({
          page: 1,
          filter: '',
          search: '',
          ...(componentProps.match ? componentProps.match.params : {}),
          initialLoad: true,
          match: componentProps.match,
        });
      }),
    ).finally((data) => {
      resolve(true);
    });
  });
};
