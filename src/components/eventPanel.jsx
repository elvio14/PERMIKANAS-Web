export default function EventPanel({ev, index, panelWidth}){

    return (
        <div 
            key={index}
            className="aspect-square mx-4 border border-transparent rounded-xl hover:border-2 hover:border-white inline-block items-center justify-center bg-cover bg-center cursor-pointer"
            style={{
                backgroundImage: `url(${ev.image})`,
                objectFit: "cover",
                width: panelWidth,
            }}
        >
            <div className="h-full w-full flex flex-col justify-end p-4 bg-gradient-to-b from-black/0 to-black/30 rounded-2xl">
              <h3 className="text-white text-sm truncate">{
                    new Date(ev.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                      })}</h3>
              <div className=" overflow-hidden">
                  <h2 className="text-4xl text-white truncate">{ev.title}</h2>
                  <h4 className="text-white text-sm truncate">Held by {ev.heldBy}</h4>
              </div>
            </div>
        </div>
    )
}