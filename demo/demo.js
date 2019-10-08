import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, StaticRouter, Route } from 'react-router-dom';
import { GeneralContextProvider } from 'context/GeneralContext';
import {
  Header,
  Customiser,
  Body,
  Composer,
  Page,
  PageRibbon,
} from 'components';
import styles from './demo.scss';
import Data from './data.json';
import data from './examples';

const DEFAULT_THEME = 'images';

const DemoComponent = ({
  match,
  handlePopover,
  popoverOpened,
  popoverText,
  startup,
}) => {
  const theme = match.params.theme || DEFAULT_THEME;
  return (
    <Page
      theme={data[theme]}
      data={Data}
      startup={startup}
      handlePopover={handlePopover}
      popoverOpened={popoverOpened}
      popoverText={popoverText}
    />
  );
};

const ComposerComponent = ({ match, handlePopover }) => {
  const theme = match.params.theme || DEFAULT_THEME;
  return (
    <Customiser
      theme={theme}
      handlePopover={handlePopover}
      repository={Data.repository}
      module={data[theme].module}
      globalProps={data[theme].globalProps}
      componentClass={data[theme].example.componentClass}
      properties={data[theme].properties}
    />
  );
};

const HeaderComponent = ({ match }) => {
  const theme = match.params.theme || DEFAULT_THEME;
  return (
    <Header
      title={Data.title}
      framework={Data.framework}
      name={Data.name}
      repository={Data.repository}
      module={data[theme].module}
      size={Data.size}
      domain={Data.domain}
      description={Data.description}
      themes={Data.themes}
      theme={theme}
    />
  );
};

class Demo extends React.Component {
  static propTypes = {
    server: PropTypes.bool,
    location: PropTypes.string,
  };
  static defaultProps = {
    server: false,
    location: '',
  };
  constructor(props) {
    super(props);
    this.state = {
      popoverOpened: false,
      popoverText: '',
      startup: true,
    };
    if (typeof window !== 'undefined') {
      window.startup = () => {
        this.setState({
          startup: true,
        });
      };
    }
  }

  handlePopover = popover => {
    this.setState(popover);
  };

  render() {
    const { server, location } = this.props;
    const Router = server === true ? StaticRouter : BrowserRouter;

    return (
      <GeneralContextProvider>
        <Router location={location}>
          <div>
            <PageRibbon
              href={Data.repository}
              title="Github Repository"
              target="_blank"
              className={styles.ribbon}
              startup={this.state.startup}
              delay={1250}
            >
              <span>Support it on Github</span>
              <span role="img" aria-label="hi?">
                🙌🏻
              </span>
            </PageRibbon>
            <Body>
              <Route
                path={`${Data.domain}/:theme?`}
                component={HeaderComponent}
              />
              <Route
                path={`${Data.domain}/:theme?`}
                render={({ match }) => (
                  <DemoComponent
                    match={match}
                    startup={this.state.startup}
                    popoverOpened={this.state.popoverOpened}
                    popoverText={this.state.popoverText}
                    handlePopover={this.handlePopover}
                  />
                )}
              />
            </Body>
            <Composer>
              <Route
                path={`${Data.domain}/:theme?`}
                render={({ match }) => (
                  <ComposerComponent
                    match={match}
                    handlePopover={this.handlePopover}
                  />
                )}
              />
            </Composer>
          </div>
        </Router>
      </GeneralContextProvider>
    );
  }
}

export default Demo;
