import { useFormikContext } from "formik";
import { useState, ChangeEvent } from "react";
import "./ImageField.module.css"

export default function ImageField(props: imageFieldprops) {
  const [imageBase64, setImage64] = useState("");
  const [imageURL, setImageURL] = useState(props.imageURL);
  const { values } = useFormikContext<any>();

  

  const handleOnChange = (eventargs: ChangeEvent<HTMLInputElement>) => {
    if (eventargs.currentTarget.files) {
      const file = eventargs.currentTarget.files[0];
      if (file) {
        toBase64(file)
          .then((base64Represenation: string) => {
            setImage64(base64Represenation);
          })
          .catch((error) => alert(error));
        values[props.field] = file;
        setImageURL("");
      } else {
        setImage64("");
      }
    }
  };
  const toBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };
  return (
    <div className="mb-3">
      <label htmlFor={props.field}>{props.displayname}</label>
      <div>
        <input
          type="file"
          id={props.field}
          accept=".jpg,.png,.jpeg"
          onChange={handleOnChange}
        />
      </div>
      {imageBase64 ? (
        <div className="maindiv">
          <img id="image" src={imageBase64} alt="selected image" />
        </div>
      ) : null}
      {imageURL ? (
        <div className="maindiv">
          <img src={imageURL} alt="selected image" id="image" />
        </div>
      ) : null}
    </div>
  );
}
interface imageFieldprops {
  displayname: string;
  imageURL: string;
  field: string;
}
ImageField.defaultProps={
    imageURL:""
}

