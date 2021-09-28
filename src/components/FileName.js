import React from 'react';
import PropTypes from 'prop-types';

export default function FileName({ file }) {
  return <span>{file.name}</span>;
}

FileName.propTypes = {
  file: PropTypes.object.isRequired,
};
