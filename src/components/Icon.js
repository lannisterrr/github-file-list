import React from 'react';
import PropTypes from 'prop-types';

export default function FileIcon({ file }) {
  let icon;
  switch (file.type) {
    case 'folder':
      icon = 'fa-folder';
      break;

    default:
    case 'file':
      icon = 'fa-file-text-o';
      break;
  }
  return <i className={`fa ${icon}`}></i>;
}

FileIcon.propTypes = {
  file: PropTypes.object.isRequired,
};
