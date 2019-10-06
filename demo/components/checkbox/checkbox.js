import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Styles from './checkbox.scss';

const CheckBox = ({ checked, onChange }) => {
  const classnames = [Styles.container];
  const [state, setState] = useState(checked);
  const input = useRef();

  const onPress = () => {
    const newState = !state;
    setState(newState);
    onChange({
      target: {
        checked: newState,
      },
    });
  };

  useEffect(() => {
    if (checked !== state) {
      setState(checked);
    }
  }, [checked]);

  if (state) {
    classnames.push(Styles.checked);
  }

  return (
    <button onClick={onPress} className={classnames.join(' ')}>
      <input ref={input} type="checkbox" checked={state} />
    </button>
  );
};

CheckBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CheckBox;
