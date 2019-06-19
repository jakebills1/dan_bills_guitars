import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Icon } from "semantic-ui-react";
const Dropzone = ({ addFile }) => {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback(
    acceptedFiles => {
      // Do something with the files
      setFiles([...files, acceptedFiles[0]]);
      addFile(acceptedFiles[0]);
    },
    [files, addFile]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <>
      <div {...getRootProps()} style={styles.dropzone}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <>
            <p>Drop the files here ...</p>
            <div style={styles.cloud}>
              <Icon name="cloud download" size="massive" />
            </div>
          </>
        ) : (
          <>
            <p>Drag 'n' drop some files here, or click to select files</p>
            <div style={styles.cloud}>
              <Icon name="cloud upload" size="massive" />
            </div>
          </>
        )}
      </div>
      <div>
        <ul>
          {files.length !== 0 &&
            files.map(file => <li>Uploading... {file.name}</li>)}
        </ul>
      </div>
    </>
  );
};
const styles = {
  dropzone: {
    width: "300px",
    height: "300px",
    border: "1px black dashed",
    backgroundColor: "#948E8E",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  cloud: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "35%"
  }
};
export default Dropzone;
