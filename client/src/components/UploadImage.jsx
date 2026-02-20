const UploadImage = ({image, setImage, fileName, setFileName}) => {
  const noFile = "No selected file"
  
  return(
    <div className="flex flex-col gap-1 w-full">
      <h3 className="text-secondary font-medium">Upload a picture of your recipe</h3>
      <p>Click on the box below to upload an image from your files.</p>
      <p>Recommended size: 800x400 pixels</p>
      <form className="flex flex-col w-full h-56 bg-white border-2 border-primary rounded-lg items-center justify-center hover:cursor-pointer"
      action="" onClick={() => {document.querySelector(".upload-img").click()}}
      >
        {image ?
        <img src={image} alt={fileName} width={100} height={100} /> :
        <>
          <i aria-hidden className="fa-solid fa-image text-4xl text-primary"></i>
          <h3 className="font-medium">Browse files to upload</h3>
          <p className="text-gray-600 font-normal text-base">Supports: JPEG, JPG, PNG</p>
        </>
        }
        <input type="file" accept="images/*" className="upload-img" hidden 
        onChange={({ target: {files}}) => {
          if (files[0]) {
            setFileName(files[0].name)
            setImage(URL.createObjectURL(files[0]))
          }
        }}/>
      </form>
      <p className="flex flex-row gap-2 items-center">
        <i aria-hidden className={`fa-solid ${image ? 'fa-image' : 'fa-notdef'} text-primary`}></i>
        {fileName}
        {image && <i aria-hidden className="fa-solid fa-trash text-primary hover:cursor-pointer" 
        onClick={() => {
          setFileName(noFile)
          setImage(null)
        }}></i>}
      </p>
    </div>
  )
}

export default UploadImage;