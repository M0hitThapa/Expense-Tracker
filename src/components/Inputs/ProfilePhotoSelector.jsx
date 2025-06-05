import React, { useRef, useState } from 'react'
import { LuUser, LuUpload, LuTrash} from "react-icons/lu"

const ProfilePhotoSelector = ({image, setImage}) => {
    const inputRef = useRef(null)
    const [previewUrl, setPreviewUrl] = useState(null)

    const handleImageChange = (event) => {
const file = event.target.files[0];
if (file) {
    setImage(file)

    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
}
    }



    const handleRemoveImage = () => {
        setImage(null)
        setPreviewUrl(null)
    };

const onChooseFile = () => {
    inputRef.current.click();
}


  return <div className='flex justify-center mb-6'>
<input
type='file'
accept='image/*'
ref={inputRef}
onChange={handleImageChange}
className='hidden'
/>
{!image ? (
    <div className='w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full relative'>
        <LuUser className='text-4xl text-[#006d6fe8]' />
        <button type='button' className='w-7 h-7 flex items-center justify-center bg-[#006d6fe8] text-white absolute rounded-full -bottom-1 -right-1'
         onClick={onChooseFile}>
            <LuUpload />


        </button>

    </div>
): (
    <div className='relative'>
    <img
    src={previewUrl}
    alt='profile photo'
    className='w-16 h-16 rounded-full object-cover'
    />    
    <button type='button' className='w-7 h-7 flex items-center justify-center bg-red-500 absolute -bottom-1 -right-1 rounded-full text-white ' onClick={handleRemoveImage}>
        <LuTrash />

    </button>

    </div>
)}
    </div>
  
}

export default ProfilePhotoSelector