document.querySelector("#newForm").style.display = "none";
document.querySelector("#uploadnews").addEventListener("click", () => {
     let cartmenu = document.querySelector("#newForm");
     let extended = cartmenu.style.display === "block";
     cartmenu.style.display = extended ? "none" : "block";
});
document.querySelector(".newClose").addEventListener("click", () => {
     document.querySelector("#newForm").style.display = "none";
})

// Images and Videsos Upload
let fileUploader = document.getElementById("image")
fileUploader.addEventListener("change",(ev)=>{
     let fileLabel = document.querySelector(".image-space")
     let file = fileUploader.files[0]
     let imageMimes = ["image/jpeg","image/png","image/svg+xml","image/tiff","image/webp"]
     let videoMimes = ["video/mp4","video/mpeg","video/ogg","video/mp2t","video/webm","video/3gpp"]
     if (imageMimes.includes(file.type)) {
          //max image size = 5mb
          if (file.size > 5000000) {
               alert("image size must not exceed 5mb")
          }
          else{
               let image = document.createElement("img")
               image.src = URL.createObjectURL(file)
               // fileLabel.replaceChildren("")
               fileLabel.appendChild(image)
          }
     }
     if(videoMimes.includes(file.type)){
          //max image size = 35mb
          if (file.size > 35000000) {
               alert("video size must not exceed 35mb")
          }
          else{
               let video = document.createElement("video")
               video.src = URL.createObjectURL(file)
               // fileLabel.replaceChildren("")
               fileLabel.appendChild(video)
          }
     }
     else{
          fileUploader.files.pop()
     }
})
// Cover Image Upload
let fileUploade = document.getElementById("imageCover")
fileUploade.addEventListener("change",(ev)=>{
     let fileLabel = document.querySelector(".imageCover")
     let file = fileUploade.files[0]
     let imageMimes = ["image/jpeg","image/png","image/svg+xml","image/tiff","image/webp"]
     if (imageMimes.includes(file.type)) {
          //max image size = 5mb
          if (file.size > 5000000) {
               alert("image size must not exceed 5mb")
          }
          else{
               let image = document.createElement("img")
               image.src = URL.createObjectURL(file)
               fileLabel.replaceChildren("")
               fileLabel.appendChild(image)
          }
     }
     else{
          fileUploade.files.pop()
     }
})
// airtist Image Upload
let fileUpload = document.getElementById("airtistImg")
fileUpload.addEventListener("change",(ev)=>{
     let fileLabel = document.querySelector(".airtistImg")
     let file = fileUpload.files[0]
     let imageMimes = ["image/jpeg","image/png","image/svg+xml","image/tiff","image/webp"]
     if (imageMimes.includes(file.type)) {
          //max image size = 5mb
          if (file.size > 5000000) {
               alert("image size must not exceed 5mb")
          }
          else{
               let image = document.createElement("img")
               image.src = URL.createObjectURL(file)
               fileLabel.replaceChildren("")
               fileLabel.appendChild(image)
          }
     }
     else{
          fileUpload.files.pop()
     }
})