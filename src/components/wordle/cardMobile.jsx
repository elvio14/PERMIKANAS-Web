export default function CardMobile({data, index}){
    if(data === null){
        return <div></div>
    }

    if(data.chapter === ""){
        data.chapter = "-"
    }

    if(data.city === ""){
        data.city = "-"
    }

    const getBackgroundColor = (index) => {
        if(index === 1) {
            return '#FFDF91'
        }else if(index === 2){
            return '#E2E2E2'
        }else if(index === 3) {
            return '#FBBAA2'
        }else {
            return'#F4EAD9'
        }
    }
    return (
        <div style={{ backgroundColor: getBackgroundColor(index) }} className='grid grid-cols-[1fr_2fr] gap-2 p-4 w-full items-center'>
            <div style={{
                backgroundColor: 'rgba(10,10,10,0.1)',
                color: index > 3 ? '#6D501E' : 'white'
                }} className="aspect-square p-1 m-4 bg-stone-500 bg-opacity-20 manrope-h2 text-xl flex text-white justify-center items-center">{index}</div>
            <div>
                <h2 className="manrope-h2 text-2xl overflow-x-hidden">{data.username}</h2>
                <div className="flex flex-col w-full justify-center items-center"><h2 className="manrope-h2 ml-2 text-bold">{data.totalScore + " pts"}</h2> </div>
            </div>
            <div className="flex flex-row justify-start items-center col-span-2">
                <div className="flex flex-col w-full justify-center items-center overflow-x-hidden"><h2 className="manrope-body ml-2">{data.chapter}</h2></div>
                <svg width={10} height={20}><line x1="0%" y1="0%" x2="0%" y2="100%" stroke="#6D501E" strokeWidth="2"/></svg>
                <div className="flex flex-col w-full justify-center items-center"><h2 className="manrope-body ml-2">{data.city}</h2> </div>
            </div>
            <div className="flex flex-row justify-start items-center">
            </div>
        </div>
    )
}