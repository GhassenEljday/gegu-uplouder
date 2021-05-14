import axios from "axios";
import { ReactComponent as AddImage } from "../images/photo.svg";

export default function ImageUplouder(props: any) {
  const UploudImage = (files: any) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "GejUploud");
    formData.append("cloud_name", "ghasseneljday");
    // change the step number
    props.step(2);

    // send a post request to cloudinary for upload the image.
    axios
      .post(
        "https://api.cloudinary.com/v1_1/ghasseneljday/image/upload",
        formData
      )
      .then((response: any) => {
        const data = response;
        // send back the response to the App component.
        props.response(data);
        // change the step number.
        props.step(3);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const dragOver = (e: any): void => {
    e.preventDefault();
  };

  const dragEnter = (e: any): void => {
    e.preventDefault();
  };

  const dragLeave = (e: any): void => {
    e.preventDefault();
  };

  const fileDrop = (e: any): void => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    UploudImage(files);
  };

  return (
    <div className="IU-container">
      <div className="IU-info">
        <h2 className="uploud">Uploud your image</h2>
        <p className="text" id="file-type">
          file should be Jpeg, Png,...
        </p>
      </div>
      <div
        className="impage"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        <AddImage id="add-image" />
        <p className="text">Drag & Drop your image here</p>
      </div>
      <div className="second">
        <p className="text" id="file-type">
          Or
        </p>
        <div className="input">
          <input
            onChange={(event: any) => {
              UploudImage(event.target.files);
            }}
            type="file"
            id="file"
            className="inputfile"
          />
          <label htmlFor="file">Choose a file</label>
        </div>
      </div>
    </div>
  );
}
