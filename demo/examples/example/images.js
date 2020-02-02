import React from 'react';
import AwesomeSlider from 'src';
import AwesomeFrame from 'src/components/react-awesome-frame';
import AwsSliderStyles from 'src/core/styles.scss';
import AwsFrameStyles from 'src/components/react-awesome-frame/styles.scss';
import { transitionStart, transitionEnd, resetSlider } from 'helpers/examples';
import { GeneralContext } from 'context/GeneralContext';
import { features, properties, globalProps } from 'examples/common';

function onFirstMount(slider) {
  resetSlider(slider, function() {
    slider.element.style.setProperty(
      '--transition-bezier',
      'cubic-bezier(0.45, 0, 0.2, 1)'
    );
    slider.element.style.setProperty('--slider-transition-duration', '700ms');
  });
}

const startupScreen = (
  <div style={{ backgroundColor: '#6978b5' }}>
    <img alt="bojack" src="/images/series/bojack-loader.svg" />
  </div>
);

function Component({ startup }) {
  return (
    <GeneralContext.Consumer>
      {context => {
        return (
          <AwesomeFrame
            cssModule={AwsFrameStyles}
            title="Netflix &mdash; Bojack Horseman"
          >
            <AwesomeSlider
              name="images"
              startup={startup}
              cssModule={AwsSliderStyles}
              startupScreen={startupScreen}
              onFirstMount={onFirstMount}
              onResetSlider={resetSlider}
              onTransitionStart={transitionStart}
              onTransitionEnd={transitionEnd}
              organicArrows={context.general['--organicArrows']}
              bullets={context.general['--bullets']}
              fillParent={context.general['--fillParent']}
            >
              <div
                data-slug="this-is-zero"
                style={{ backgroundColor: '#2d5182' }}
                data-src="/images/series/bojack-0.png"
              />
              <div
                data-slug="this-is-one"
                style={{ backgroundColor: '#62a4fa' }}
                data-src="/images/series/bojack-5.jpg"
              />
              <div
                data-slug="this-is-two"
                style={{ backgroundColor: '#f33d42' }}
                data-src="/images/series/bojack-3.jpg"
              />
              <div
                data-slug="this-is-three"
                style={{ backgroundColor: '#fafafa' }}
                data-src="/images/series/bojack-4.jpg"
              />
            </AwesomeSlider>
          </AwesomeFrame>
        );
      }}
    </GeneralContext.Consumer>
  );
}

const example = {
  title: 'Basic Usage',
  items: [
    {
      title: 'Installation',
      command: 'npm install --save react-awesome-slider',
    },
    {
      title: 'Basic Image Example',
      jsx: `
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const slider = (
  <AwesomeSlider>
    <div data-src="/path/to/image-0.png" />
    <div data-src="/path/to/image-1.png" />
    <div data-src="/path/to/image-2.jpg" />
  </AwesomeSlider>
);
`,
    },
    {
      title: 'Startup Screen',
      description:
        "The <b>startupScreen</b> prop defines the first screen that's rendered when the component mounts, it works like a pre-load screen. If not defined the component will default to the first child screen or to the screen defined on the <b>selected</b> prop.",
      jsx: `
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const startupScreen = (
  <div>
    <img src="/path/to/image-loader.png" />
  </div>
);

const slider = (
  <AwesomeSlider
    startupScreen={startupScreen}
  >
    <div data-src="/path/to/image-0.png" />
    <div data-src="/path/to/image-1.png" />
    <div data-src="/path/to/image-2.jpg" />
  </AwesomeSlider>
);
      `,
    },
    {
      title: 'Animation hooks',
      description:
        "The three main hooks are <b>onFirstMount</b>, <b>onAnimationStart</b> and <b>onAnimationEnd</b>. They're called with an object parameter containing the component's main <b>element</b>, <b>currentIndex</b>, <b>nextIndex</b>, <b>currentScreen</b> and <b>nextScreen</b>",
      jsx: `
const onAnimationStart = ({
  element,
  currentIndex,
  nextIndex,
  currentScreen,
  nextScreen,
}) => {
  /*
    ... do Something
  */
}

/* ... */

const slider = (
  <AwesomeSlider
    cssModule={styles}
    onFirstMount={onFirstMount}
    onAnimationStart={onAnimationStart}
    onAnimationEnd={onAnimationEnd}
  >
    <div data-src="/path/to/image-0.png" />
    <div data-src="/path/to/image-1.png" />
    <div data-src="/path/to/image-2.jpg" />
  </AwesomeSlider>
);
      `,
    },
  ],
  Component,
  componentClass: AwsSliderStyles.awssld,
};

export default {
  globalProps,
  features,
  example,
  module,
  properties,
};
