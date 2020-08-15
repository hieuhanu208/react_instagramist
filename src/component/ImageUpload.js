import React, {useState} from 'react'
import { Button } from '@material-ui/core'
import {db, storage} from '../firebase'
import firebase from "firebase";
import  '../component/css/ImageUpload.css';

function ImageUpload({username}) {

    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState('');
    const [caption, setCaption] = useState('');

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
        "state_changed", 
        (snapshot) => {
           const progress = Math.round(
               (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
           setProgress(progress)
        },
        (error) => {
            console.log(error)
        },
        () => {
            storage.ref("images").child(image.name).getDownloadURL()
            .then(url => {
                db.collection('posts').add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    caption: caption,
                    imageUrl: url,
                    username: username
                });
                setProgress(0);
                setCaption("");
                setImage(null);

            })
        }
        ) 
    }
    
    return (
        <div className="imageupload">
            <progress className="image__upload" value={progress} max="100"></progress>
            <input type="text" 
             placeholder="Enter a caption" 
             onChange={e => {
                 setCaption(e.target.value)
             }}
             value={caption}>
            </input>
            <input type="file" onChange={handleChange}></input>
            <Button onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default ImageUpload
