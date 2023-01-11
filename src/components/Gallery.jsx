import "../css/Gallery.css";
import pics from "../pics.json";

function Gallery() {
    return (
      <div className="gallery">
        {pics.images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
      );
}

export default Gallery;
