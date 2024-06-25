const ShowMedia = document.querySelector("#show_media")

ShowMedia.addEventListener("click", ()=>{
  const div = document.querySelector("#media")
  div.classList.toggle("section_info-socialmedia-position")
})