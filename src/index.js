import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file => (
        <FileListItem key={file.id} file={file} />
      ))}
    </tbody>
  </table>
);

FileList.propTypes = {
  files: PropTypes.array,
};

const FileListItem = ({ file }) => (
  // extracted from FileList
  <tr key={file.id}>
    <td>{file.name}</td>
  </tr>
);

FileListItem.propTypes = {
  file: PropTypes.object,
};

const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: '2021-07-11 21:24:00',
    latestCommit: {
      message: 'Initial commit',
    },
  },

  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: '2021-07-11 21:24:00', // time
    latestCommit: {
      message: 'Initial Commit',
    },
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: '2021-07-18 21:24:00',
    latestCommit: {
      message: 'Added a readme',
    },
  },
];

ReactDOM.render(
  <FileList files={testFiles} />,
  document.querySelector('#root')
);
