export default function Carousel({ images }) {
    return (
        <div >
            {images && images.map((image) => (
                <img key={image.id} src={image.src} alt={`carousel-img-${image.id}`} />
            ))}
        </div>
    );
}