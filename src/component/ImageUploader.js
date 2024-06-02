import { requestOCR } from "../apis/api"
import { useState } from "react"

export function ImageUploader() {
    

    const [uploadImgUrl, setUploadImgUrl] = useState("")
    const onOCRRequest = () => {
        const OCRResult = requestOCR(uploadImgUrl)
    }

    const onchangeImageUpload = (e) => {
        const {files} = e.target
        const uploadfile = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(uploadfile);
        reader.onloadend = () => {
            var res = reader.result.split(",")[1]
            setUploadImgUrl(res);
        }
    }

    return (
        
        <>
            <input type="file" accept="image/*" onChange={onchangeImageUpload}/>
            <button onClick={onOCRRequest}> OCR </button>
        </>
    )
} 