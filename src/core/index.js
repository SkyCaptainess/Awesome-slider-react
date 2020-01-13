import React from 'react';
import PropTypes from 'prop-types';
import {
  onceNextCssLayout,
  onceTransitionEnd,
  onceAnimationEnd,
} from 'web-animation-club';
import { getClassName, MediaLoader } from '../helpers/components';
import {
  getRootClassName,
  setupClassNames,
  transformChildren,
} from './helpers';
import Bullets from './bullets';
import Buttons from './buttons';
import Media from './media';

const ROOTELM = 'awssld';
const mediaLoader = new MediaLoader();

export default class AwesomeSlider extends React.Component {
  static propTypes = {
    animation: PropTypes.string,
    bullets: PropTypes.bool,
    buttonContentLeft: PropTypes.node,
    buttonContentRight: PropTypes.node,
    buttons: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    controlsReturnDelay: PropTypes.number,
    cssModule: PropTypes.object,
    customContent: PropTypes.node,
    onLoadStart: PropTypes.func,
    disabled: PropTypes.bool,
    fillParent: PropTypes.bool,
    infinite: PropTypes.bool,
    media: PropTypes.array,
    name: PropTypes.string,
    onFirstMount: PropTypes.func,
    onResetSlider: PropTypes.func,
    onStartupRelease: PropTypes.func,
    onTransitionEnd: PropTypes.func,
    onTransitionRequest: PropTypes.func,
    onTransitionStart: PropTypes.func,
    organicArrows: PropTypes.bool,
    rootElement: PropTypes.string,
    selected: PropTypes.any,
    startup: PropTypes.bool,
    startupDelay: PropTypes.number,
    startupScreen: PropTypes.object,
    style: PropTypes.object,
    transitionDelay: PropTypes.number,
  };

  static defaultProps = {
    animation: null,
    bullets: true,
    buttonContentLeft: null,
    buttonContentRight: null,
    buttons: true,
    children: null,
    className: null,
    controlsReturnDelay: 0,
    cssModule: null,
    customContent: null,
    onLoadStart: null,
    disabled: false,
    fillParent: false,
    infinite: true,
    media: [],
    name: 'awesome-slider',
    onFirstMount: null,
    onResetSlider: null,
    onStartupRelease: null,
    onTransitionEnd: null,
    onTransitionRequest: null,
    onTransitionStart: null,
    organicArrows: true,
    rootElement: ROOTELM,
    selected: 0,
    startup: true,
    startupDelay: 0,
    startupScreen: null,
    style: {},
    transitionDelay: 0,
  };

  constructor(props) {
    super(props);
    this.rootElement = props.rootElement || ROOTELM;
    this.boxA = null;
    this.boxB = null;
    this.loaded = [];
    this.active = 'boxA';
    this.loader = 'boxB';
    this.nextIndex = null;
    this.loading = false;
    this.media = null;
    this.started = false;
    this.touchEnabled = false;
    this.setupStartup(props);
  }

  componentDidMount() {
    this.boxA.classList.add(this.classNames.active);
    if (this.props.startupScreen) {
      if (this.buttons) {
        // this.buttons.element.classList.add(this.classNames.controlsHidden);
        this.buttons.element.classList.add(this.classNames.controlsActive);
      }
      if (this.props.startup === true) {
        this.startup();
      }
    }
    if (this.props.onFirstMount) {
      this.props.onFirstMount({
        ...this.getInfo(),
      });
    }
    if (this.buttons) {
      onceNextCssLayout().then(() => {
        if (this.buttons) {
          this.buttons.element.classList.remove(this.classNames.controlsHidden);
        }
      });
    }
  }

  componentWillReceiveProps(newProps) {
    this.checkChildren(newProps);
    this.setupClassNames(newProps.cssModule);
    if (newProps.name !== this.props.name) {
      this.resetSlider(newProps.selected);
      return;
    }
    if (newProps.startup === true && this.started === false) {
      this.startup();
      return;
    }
    if (
      newProps.selected !== this.props.selected
      // || newProps.selected !== this.index
    ) {
      const index = this.getIndex(newProps.selected);
      // FORCED RIGHT WING WHEN INFINITE === 0
      const direction =
        newProps.infinite === true &&
        index === 0 &&
        this.index === this.media.length - 1
          ? true
          : !(this.index > index);

      this.goTo({
        index,
        direction,
      });
      return;
    }
    this.refreshSlider();
  }

  getRootClassName() {
    const {
      animation,
      className,
      cssModule,
      disabled,
      fillParent,
      infinite,
      organicArrows,
    } = this.props;

    return getRootClassName({
      animation,
      className,
      cssModule,
      current: this.state.index,
      disabled,
      fillParent,
      infinite,
      organicArrows,
      rootElement: this.rootElement,
      total: this.media.length,
    });
  }

  setupStartup(props) {
    this.checkChildren(props);
    this.setupClassNames(props.cssModule);
    if (props.startupScreen) {
      const nextIndex = this.getIndex(this.props.selected);
      this.index = null;
      this.state = {
        index: this.index,
        boxA: {
          className: this.classNames.startUp,
          children: props.startupScreen,
        },
        boxB: this.media[nextIndex] || null,
      };
    } else {
      this.started = true;
      this.index = this.getIndex(this.props.selected);
      this.state = {
        index: this.index,
        boxA: this.media[this.index] || null,
        boxB: null,
      };
    }
  }

  getInfo() {
    return {
      slides: this.media.length,
      currentIndex: this.index,
      currentSlide: this[this.active],
      currentMedia: this.media[this.index],
      element: this.slider,
    };
  }

  getBar() {
    if (!document) {
      return {};
    }
    const bar = document.createElement('div');
    bar.className = this.classNames.bar;
    return bar;
  }

  setupClassNames(cssModule) {
    this.classNames = setupClassNames(this.rootElement, cssModule);
  }

  getIndex(index) {
    let nextIndex = 0;
    if (typeof index === 'number') {
      return index;
    }
    if (typeof index === 'string') {
      this.media.forEach(({ slug }, idx) => {
        if (slug === index) {
          nextIndex = idx;
        }
      });
    }
    return nextIndex;
  }

  refreshSlider() {
    if (
      this.loading === true ||
      this.props.startup === false ||
      this.index === null
    ) {
      return;
    }

    const { index } = this;

    this.setState({
      index,
      [this.active]: this.media[this.getIndex(index)],
      [this.loader]: null,
    });
  }

  startup() {
    this.started = true;
    setTimeout(() => {
      this.goTo({
        index: this.props.selected,
        direction: true,
        touch: false,
      });
    }, this.props.startupDelay || 75);
  }

  resetSlider(index = 0) {
    this.index = index;

    this.setState(
      {
        index,
        [this.active]: this.media[this.getIndex(index)],
        [this.loader]: null,
      },
      () => {
        if (this.props.onResetSlider) {
          this.props.onResetSlider({
            ...this.getInfo(),
          });
        }
      }
    );
  }

  checkChildren(props) {
    if (props.children) {
      if (props.children !== this.props.children || !this.media) {
        this.media = transformChildren(props.children);
      }
    } else if (props.media && props.media.length) {
      // props.media !== this.props.media
      this.media = props.media;
    }
  }

  startBarAnimation({ active }) {
    return new Promise(resolve => {
      this.bar = this.getBar();
      active.appendChild(this.bar);
      onceNextCssLayout().then(() => {
        onceNextCssLayout().then(() => {
          this.bar.classList.add(this.classNames.barActive);
          resolve();
        });
        // STILL WAITING ON THE MULTIPLE LOADING THING
      });
    });
  }

  endBarAnimation(callback) {
    if (this.bar) {
      onceNextCssLayout().then(() => {
        onceTransitionEnd(this.bar).then(() => {
          callback();
        });
        this.bar.classList.add(this.classNames.barEnd);
      });
    }
  }

  // REVISION
  // -- TINHA QUE UNIFICAR A PROMISE
  // -- O MEDIA PODE TER .URL
  // -- O MEDIA PODE TER .MEDIAS -- ARRAY DE MEDIAS PARA SER CARREGADO

  loadContent(active, media) {
    return new Promise((resolve, reject) => {
      if (this.props.onLoadStart || media.onLoadStart) {
        const caller = this.props.onLoadStart || media.onLoadStart;
        this.startBarAnimation({ active });
        caller({
          next: () => {
            this.endBarAnimation(() => {
              resolve(this.bar);
            });
          },
          error: reject,
          ...this.getInfo(),
        });
        return;
      }
      if (media.url || media.preload) {
        const urls = media.url ? [media.url] : media.preload || [];

        if (this.checkLoadedUrls(urls) === true) {
          resolve(null);
          return;
        }
        this.startBarAnimation({ active });
        mediaLoader.loadMultiple(urls).then(() => {
          this.pushLoaded(urls);
          this.endBarAnimation(() => {
            resolve(this.bar);
          });
        });
        return;
      }
      resolve(null);
    });
  }

  pushLoaded(urls) {
    this.loaded = [...this.loaded, ...urls];
  }

  checkLoadedUrls(urls) {
    let loaded = true;
    urls.forEach(url => {
      if (!this.loaded.includes(url)) {
        loaded = false;
      }
    });
    return loaded;
  }

  startAnimationMobile() {
    const { direction } = this;
    const active = this[this.active];
    const loader = this[this.loader];
    const contentEnterMoveClass = direction
      ? this.classNames.contentMoveRight
      : this.classNames.contentMoveLeft;
    const contentExitMoveClass = direction
      ? this.classNames.contentMoveLeft
      : this.classNames.contentMoveRight;
    if (this.props.onTransitionStart) {
      this.props.onTransitionStart({
        ...this.getInfo(),
        nextSlide: this[this.loader],
        nextIndex: this.nextIndex,
        nextMedia: this.media[this.nextIndex],
      });
    }
    const activeContent = active.querySelector(`.${this.classNames.content}`);
    activeContent.classList.add(contentExitMoveClass);
    activeContent.classList.add(this.classNames.contentExit);
    const loaderContent = loader.querySelector(`.${this.classNames.content}`);
    loaderContent.classList.add(contentEnterMoveClass);
    loaderContent.classList.add(this.classNames.contentStatic);
  }

  animateMobileEnd(callback) {
    const { direction } = this;
    const active = this[this.active];
    const loader = this[this.loader];
    const exitPosition = direction
      ? this.classNames.moveLeft
      : this.classNames.moveRight;
    const contentEnterMoveClass = direction
      ? this.classNames.contentMoveRight
      : this.classNames.contentMoveLeft;
    const contentExitMoveClass = direction
      ? this.classNames.contentMoveLeft
      : this.classNames.contentMoveRight;
    const loaderContent = loader.querySelector(`.${this.classNames.content}`);
    const activeContent = active.querySelector(`.${this.classNames.content}`);

    loaderContent.classList.remove(this.classNames.contentStatic);
    loader.classList.add(this.classNames.animatedMobile);
    active.classList.add(this.classNames.animatedMobile);
    onceNextCssLayout().then(() => {
      loader.style.transform = 'translate3d(0, 0, 0)';
      active.style.transform = `translate3d(${
        this.direction ? '-' : ''
      }100%, 0, 0)`;
      onceTransitionEnd(active).then(() => {
        if (!this.loading) {
          return;
        }
        loader.classList.add(this.classNames.active);
        active.classList.remove(this.classNames.active);
        active.classList.remove(exitPosition);
        loader.classList.remove(this.classNames.animatedMobile);
        active.classList.remove(this.classNames.animatedMobile);
        activeContent.classList.remove(contentExitMoveClass);
        activeContent.classList.remove(this.classNames.contentExit);
        loaderContent.classList.remove(contentEnterMoveClass);

        if (this.buttons) {
          setTimeout(() => {
            if (this.buttons) {
              this.buttons.element.classList.remove(
                this.classNames.controlsActive
              );
            }
          }, this.props.controlsReturnDelay);
        }

        if (this.activeArrow) {
          // this.activeArrow.classList.remove(this.activeArrowClass);
          this.activeArrow = null;
          this.activeArrowClass = null;
        }

        /* INVERT BOXES */
        this.active = this.active === 'boxA' ? 'boxB' : 'boxA';
        this.loader = this.active === 'boxA' ? 'boxB' : 'boxA';

        if (callback) {
          callback();
        }
      });
    });
  }

  runAnimation({
    active,
    media,
    contentExitMoveClass,
    contentEnterMoveClass,
    activeContentElement,
    loaderContentElement,
    loader,
    loaderPosition,
    exitPosition,
    callback,
    transitionDelay,
  }) {
    this.loadContent(active, media).then(bar => {
      activeContentElement.classList.add(contentExitMoveClass);
      activeContentElement.classList.add(this.classNames.contentExit);
      loaderContentElement.classList.add(contentEnterMoveClass);
      loaderContentElement.classList.add(this.classNames.contentStatic);
      setTimeout(() => {
        onceNextCssLayout().then(() => {
          active.classList.add(this.classNames.animated);
          loader.classList.add(this.classNames.animated);
          loaderContentElement.classList.remove(this.classNames.contentStatic);
          active.classList.add(this.classNames.exit);
          loader.classList.add(loaderPosition);
          active.classList.add(exitPosition);
          onceAnimationEnd(active).then(() => {
            loader.classList.add(this.classNames.active);
            loader.classList.remove(loaderPosition);
            loader.classList.remove(this.classNames.animated);
            active.classList.remove(this.classNames.animated);
            active.classList.remove(this.classNames.active);
            active.classList.remove(exitPosition);
            active.classList.remove(this.classNames.exit);
            activeContentElement.classList.remove(contentExitMoveClass);
            activeContentElement.classList.remove(this.classNames.contentExit);
            loaderContentElement.classList.remove(contentEnterMoveClass);
            // removeElement BAR;
            if (bar) {
              active.removeChild(bar);
            }

            if (this.buttons) {
              setTimeout(() => {
                if (this.buttons) {
                  this.buttons.element.classList.remove(
                    this.classNames.controlsActive
                  );
                }
              }, this.props.controlsReturnDelay);
            }

            // * INVERT BOXES *
            this.active = this.active === 'boxA' ? 'boxB' : 'boxA';
            this.loader = this.active === 'boxA' ? 'boxB' : 'boxA';
            const release = !this.activeArrow;

            if (this.activeArrow) {
              onceTransitionEnd(this.activeArrow, {
                tolerance: this.index === null ? 0 : 2,
              }).then(() => {
                this.releaseTransition();
              });

              this.activeArrow.classList.remove(this.activeArrowClass);
              this.activeArrow = null;
              this.activeArrowClass = null;
            }

            callback({
              release,
            });
          });
        });
      }, transitionDelay);
    });
  }

  releaseTransition() {
    this.loading = false;
    if (this.props.onTransitionEnd) {
      this.props.onTransitionEnd({
        ...this.getInfo(),
      });
    }
  }

  startAnimation(direction, media, callback) {
    const { transitionDelay } = this.props;
    const active = this[this.active];
    const loader = this[this.loader];
    const loaderPosition = direction
      ? this.classNames.moveRight
      : this.classNames.moveLeft;
    const exitPosition = direction
      ? this.classNames.moveLeft
      : this.classNames.moveRight;
    const contentEnterMoveClass = direction
      ? this.classNames.contentMoveRight
      : this.classNames.contentMoveLeft;
    const contentExitMoveClass = direction
      ? this.classNames.contentMoveLeft
      : this.classNames.contentMoveRight;
    const activeContentElement = active.querySelector(
      `.${this.classNames.content}`
    );
    const loaderContentElement = loader.querySelector(
      `.${this.classNames.content}`
    );

    active.style.removeProperty('transform');
    loader.style.removeProperty('transform');

    if (this.props.onTransitionStart) {
      this.props.onTransitionStart({
        ...this.getInfo(),
        nextSlide: this[this.loader],
        nextIndex: this.nextIndex,
        nextMedia: this.media[this.nextIndex],
      });
    }

    const animationObject = {
      active,
      media,
      contentExitMoveClass,
      contentEnterMoveClass,
      activeContentElement,
      loaderContentElement,
      loader,
      loaderPosition,
      exitPosition,
      callback,
      transitionDelay,
    };

    this.runAnimation(animationObject);
  }

  goTo({ index, direction, touch = false }) {
    const nextIndex = this.getIndex(index);
    if (this.loading === true || index === this.index) {
      if (this.props.onTransitionReject) {
        this.props.onTransitionReject({
          ...this.getInfo(),
          forceTransition: () => {
            this.goTo({ index, direction, touch });
          },
        });
      }
      return;
    }

    this.loading = true;
    this.direction = direction;
    if (touch === true) {
      this.chargeIndex(nextIndex, () => {
        this.activateArrows(direction);
        this.startAnimationMobile();
      });
      return;
    }

    this.activateArrows(direction, () => {
      this.chargeIndex(nextIndex, media => {
        this.renderedLoader = true;
        this.startAnimation(direction, media, ({ release = true }) => {
          this.index = this.nextIndex;
          this.setState({ index: this.index }, () => {
            if (release === true) {
              this.releaseTransition();
            }
          });
        });
      });
    });
  }

  chargeIndex(index, callback) {
    this.nextIndex =
      index > this.media.length - 1
        ? 0
        : index < 0
        ? this.media.length - 1
        : index;
    const state = {};
    const media = this.media[this.nextIndex];
    state[this.loader] = {
      loader: true,
      ...media,
    };
    this.setState(state, () => {
      callback(media);
    });
  }

  unchargeIndex() {
    const state = {};
    state[this.loader] = null;
    this.setState(state, () => {});
  }

  activateArrows(direction, callback) {
    const dirName = direction ? 'right' : 'left';
    const arrowClass = getClassName(
      `${this.rootElement}__controls__arrow-${dirName}`,
      this.props.cssModule
    );

    if (this.buttons) {
      const activeArrow = direction ? this.buttons.next : this.buttons.prev;
      this.activeArrow = activeArrow.querySelector(`.${arrowClass}`);
    }

    if (!this.activeArrow) {
      if (callback) {
        callback();
      }
      return;
    }

    this.activeArrowClass = getClassName(
      `${this.rootElement}__controls__arrow-${dirName}--active`,
      this.props.cssModule
    );

    // This is due to the usage of pseudo elements animation
    onceTransitionEnd(this.activeArrow, {
      tolerance: this.index === null ? 0 : 2,
    }).then(() => {
      if (callback) {
        callback();
      }
    });

    this.buttons.element.classList.add(this.classNames.controlsActive);
    this.activeArrow.classList.add(this.activeArrowClass);
  }

  transitionRequest(event) {
    if (this.props.onTransitionRequest) {
      this.props.onTransitionRequest({
        eventName: event,
        ...this.getInfo(),
      });
    }
  }

  clickNext = () => {
    this.transitionRequest('next');
    const next = this.index === null ? 0 : this.index + 1;
    this.goTo({
      index: next,
      direction: true,
    });
  };

  clickPrev = () => {
    this.transitionRequest('prev');
    this.goTo({
      index: this.index - 1,
      direction: false,
    });
  };

  touchStart = event => {
    if (this.animating) {
      return;
    }
    if (this.index === null) {
      return;
    }
    const native = event.nativeEvent;
    this.touchStartPoint = native.touches[0].clientX;
  };

  touchMove = event => {
    if (this.animating || !this.touchStartPoint) {
      return;
    }
    const native = event.nativeEvent;
    let diff = native.touches[0].clientX - this.touchStartPoint;
    const active = this[this.active];
    const loader = this[this.loader];
    const direction = !(diff > 0);
    const abs = Math.abs(diff);
    if (this.touchEnabled === false) {
      if (abs > 20) {
        this.touchEnabled = true;
        this.touchStartPoint = native.touches[0].clientX;
      }
      return;
    }
    if (abs >= 10) {
      if (this.loading === false) {
        this.goTo({
          index: direction ? this.index + 1 : this.index - 1,
          direction,
          touch: true,
        });
      } else if (this.direction === true) {
        diff += 10;
        if (Math.abs(diff) > active.offsetWidth) {
          diff = -active.offsetWidth;
        } else if (diff > 0) {
          diff = 0;
        }
        active.style.transform = `translate3d(${diff}px, 0, 0)`;
        loader.style.transform = `translate3d(calc(100% + ${diff}px), 0, 0)`;
      } else {
        diff -= 10;
        if (Math.abs(diff) > active.offsetWidth) {
          diff = active.offsetWidth;
        } else if (diff < 0) {
          diff = 0;
        }
        active.style.transform = `translate3d(${diff}px, 0, 0)`;
        loader.style.transform = `translate3d(calc(-100% + ${diff}px), 0, 0)`;
      }
    }
  };

  touchEnd = () => {
    if (this.animating || !this.touchStartPoint || !this.loading) {
      return;
    }

    this.touchStartPoint = null;
    this.animating = true;
    this.touchEnabled = false;
    this.animateMobileEnd(() => {
      this.index = this.nextIndex;
      this.setState({ index: this.index });
      if (this.props.onTransitionEnd) {
        this.props.onTransitionEnd({
          ...this.getInfo(),
        });
      }
      this.animating = false;
      this.loading = false;
      this.unchargeIndex();
    });
  };

  bulletClick = event => {
    const button = event.currentTarget;
    const index = parseInt(button.getAttribute('data-index'), 10);
    this.goTo(
      {
        index,
        direction: !(this.index > index),
      },
      () => {
        onceNextCssLayout().then(() => {
          button.classList.add(this.classNames.bulletsLoading);
        });
      }
    );
  };

  renderBox(box) {
    return (
      <div
        ref={el => {
          this[`box${box}`] = el;
        }}
        className={this.classNames.box}
        onTouchStart={this.touchStart}
        onTouchMove={this.touchMove}
        onTouchEnd={this.touchEnd}
      >
        {this.state[`box${box}`] && (
          <Media
            media={this.state[`box${box}`]}
            className={this.classNames.content}
          />
        )}
      </div>
    );
  }

  render() {
    const {
      cssModule,
      organicArrows,
      bullets,
      style,
      customContent,
      buttons,
      buttonContentLeft,
      buttonContentRight,
    } = this.props;
    const { rootElement } = this;

    return (
      <div
        ref={slider => {
          this.slider = slider;
        }}
        className={this.getRootClassName()}
        style={style}
      >
        <div
          ref={wrapper => {
            this.wrapper = wrapper;
          }}
          className={this.classNames.wrapper}
        >
          <div
            ref={container => {
              this.container = container;
            }}
            className={this.classNames.container}
          >
            {this.renderBox('A')}
            {this.renderBox('B')}
          </div>
          {buttons && (
            <Buttons
              rootElement={rootElement}
              cssModule={cssModule}
              onMount={btns => {
                this.buttons = btns;
              }}
              onNext={this.clickNext}
              onPrev={this.clickPrev}
              organicArrows={organicArrows}
              buttonContentLeft={buttonContentLeft}
              buttonContentRight={buttonContentRight}
            />
          )}
          {customContent}
        </div>
        {bullets && (
          <Bullets
            cssModule={cssModule}
            rootElement={rootElement}
            media={this.media}
            selected={this.state.index}
            onClick={info => {
              this.transitionRequest('bullet');
              this.goTo(info);
            }}
          />
        )}
      </div>
    );
  }
}
