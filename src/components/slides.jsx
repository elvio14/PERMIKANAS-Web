export default function Slides({slides = [{title: "Default Title", image: "/Image_Placeholder.png"}]}) {
    return (
        <div>
            {slides.map((slide, index) => (
                <div key={index} style={{ backgroundImage: `url(${slide.image})` }} >
                    <h2>{slide.title}</h2>
                </div>
            ))

            }
        </div>
    )
}