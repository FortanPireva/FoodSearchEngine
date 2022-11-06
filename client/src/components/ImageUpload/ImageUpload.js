import React, {useEffect, useState} from "react";
import {getStorage, uploadBytesResumable, ref, getDownloadURL} from "firebase/storage"
import Firebase from "../../firebase/firebase";

const firebase = Firebase.instance;
export const ImageUpload = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (!selectedImage) return;
        const storage = getStorage();
        const metadata = {
            contentType: 'image/jpeg'
        };

        // todo: do something with 'selectedImage.name' so that images in storage don't replace one another
        const storageRef = ref(storage, selectedImage.name);
        const uploadTask = uploadBytesResumable(storageRef, selectedImage, metadata);

        uploadTask.on('state_changed',
            () => {},
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    props.setImageUrl(downloadURL);
                });
            }
        );
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
