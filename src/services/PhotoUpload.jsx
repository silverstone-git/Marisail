import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./MediaUpload.scss";

const PhotoUploader = () => {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {

    const allImages = acceptedFiles.every((file) => file.type.startsWith('image/'));

    if (!allImages) {
        alert('Please drop only image files.');
        return;
    }

    const newFiles = acceptedFiles.filter((newFile) => 
        !files.some(file => file.path === newFile.path)
    );

    const filesWithPreview = newFiles.map((newFile) => ({
    ...newFile,
    preview: URL.createObjectURL(newFile),
    }));

    setFiles((prevFiles) => [...prevFiles, ...filesWithPreview]);

  };

  // onclick file upload
  const handleUpload = async (e) => {
    e.preventDefault();
    // upload logic
    console.log("Files ready to upload:", files);

    const formData = new FormData();
    formData.append("operation", "upload");

    files.map((fileAndPreviewUrl) => {
          formData.append("previews", JSON.stringify(fileAndPreviewUrl.preview))
          formData.append("payloads", fileAndPreviewUrl.newFile)
    })

    const res = await fetch('/api/upload-media', {
            method: 'POST',
            body: formData,
    });

    // if server action instead of api handler (not recommended for huge files)
    //uploadServerAction(formData);

    alert("Files uploaded successfully!");
    setFiles([])
  };

  const removeFile = (filePath) => {
    setFiles(files.filter((file) => file.path !== filePath));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ["image/*"],
    multiple: true
  });

  return (
    <div className="photo-uploader-container">
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "dropzone-active" : ""}`}
      >
        <input {...getInputProps()} accept="image/*" multiple={true} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag & drop photos here, or click to select files</p>
        )}
      </div>

      <div className="preview-container">
        {files.length > 0 && (
          <>
            <h2 className="preview-title">Preview</h2>
            <div className="preview-grid">
              {files.map((file, index) => (
                <div key={index} className="preview-item">
                  <img
                    src={file.preview}
                    alt="Preview"
                    className="preview-image"
                  />
                  <button
                    onClick={() => removeFile(file.path)}
                    className="remove-button"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {files.length > 0 && (
        <button
          onClick={handleUpload}
          className="upload-button"
        >
          Upload Photo
        </button>
      )}
    </div>
  );
};

export default PhotoUploader;