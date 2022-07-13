const Picget = (props) => {
  console.log('props :>> ', props);

  const upFile = e =>{
    const pic = image2Base64(e.target.files[0])
    console.log('e :>> ', pic);
  }

  return (
    <div className="w-full h-full bg-light-50 flex">
      <div className="w-1/2">
        {/* pic */}
        <div className="m-20 h-1/2 flex justify-center bg-blue-300 shadow-dark-50 shadow-2xl">
          <input
          onChange={upFile}
            className="h-20 flex align-item-center"
            type="file"
            accept=".jpg,.png,.bmp,.jpeg,.psd"
          />
        </div>
      </div>
      <div>
        {/* opt */}
      </div>
    </div>
  )
}


function image2Base64(img) {
  var canvas = new OffscreenCanvas(img.width, img.height)

  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, img.width, img.height);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL
}

export default Picget