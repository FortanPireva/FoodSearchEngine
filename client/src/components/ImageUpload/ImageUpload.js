import React, {useEffect, useState} from "react";
import {getStorage, uploadBytes, ref} from "firebase/storage"
import Firebase from "../../firebase/firebase";

const firebase = Firebase.instance;
export const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
            const storage = getStorage();
            const storageRef = ref(storage, 'some-child');
            uploadBytes(storageRef, selectedImage).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            })
        }, [selectedImage]
    );

    return (
        <div>
            {selectedImage && (
                <div>
                    <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)}/>
                    <br/>
                    <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
            )}
            <br/>
            <br/>
            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }}
            />
        </div>
    );
};
