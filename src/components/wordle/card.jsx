export default function Card({data, index}){
    if(data === null){
        return <div></div>
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
        <div style={{ backgroundColor: getBackgroundColor(index) }} className='grid grid-cols-[8fr_2fr_2fr_1fr] gap-2 p-4 w-full items-center text-[#6D501E]'>
            <div className="flex flex-row justify-start items-center">
                <div style={{backgroundColor: index > 3 ? 'transparent' : 'rgba(10,10,10,0.1'}} className="aspect-square px-4 py-2 bg-stone-500 bg-opacity-20 manrope-h2 text-xl text-white mr-2">{index}</div>
                <h2 className="manrope-h2">{data.username}</h2>
            </div>
            <div className="flex flex-row justify-start items-center">
                <svg width={10} height={20}><line x1="0%" y1="0%" x2="0%" y2="100%" stroke="#6D501E" strokeWidth="2"/></svg>
                <div className="flex flex-col w-full justify-center items-center"><h2 className="manrope-body ml-2">{data.chapter}</h2></div>
            </div>
            <div className="flex flex-row justify-start items-center">
                <svg width={10} height={20}><line x1="0%" y1="0%" x2="0%" y2="100%" stroke="#6D501E" strokeWidth="2"/></svg>
                <div className="flex flex-col w-full justify-center items-center"><h2 className="manrope-body ml-2">{data.city}</h2> </div>
            </div>
            <div className="flex flex-row justify-start items-center">
                <svg width={10} height={20}><line x1="0%" y1="0%" x2="0%" y2="100%" stroke="#6D501E" strokeWidth="2"/></svg>
                <div className="flex flex-col w-full justify-center items-center"><h2 className="manrope-h2 ml-2 text-bold">{data.totalScore}</h2> </div>
            </div>
        </div>
    )
}