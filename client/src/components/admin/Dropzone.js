import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
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
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
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
    border: "1px black dashed"
  }
};
export default Dropzone;
