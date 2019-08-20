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
            <p>
              To add pictures: Drag and drop some files here, or click to select
              files
            </p>
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
    width: "100%",
    height: "33%",
    border: "thin black dashed",
    backgroundColor: "#948E8E",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1%",
    marginTop: "5%"
  },
  cloud: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "35%"
  }
};
export default Dropzone;
