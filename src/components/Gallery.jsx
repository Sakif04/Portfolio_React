export default function Gallery(){

    return(
        <div id="gallery" className="carousel slide relative bg-green-300 text-2xl text-orange-800">
            <h1> Gallery</h1>

            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(125).jpg" alt="" /><div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
        </div>



)

}