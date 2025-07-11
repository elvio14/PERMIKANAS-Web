import { ResultType } from "./resultTypes";

export default function ResultImage({panelResults, widthPixels}) {
    const size = widthPixels / 5;

    return (
        <svg width={widthPixels} height={size * 6}>
            {panelResults && panelResults.map((panelRow, rowIndex) => (
                panelRow.map((panel, index) => (
                    <rect
                        key={rowIndex + "-" + index}
                        x={index * size}
                        y={rowIndex * size}
                        width={size}
                        height={size}
                        fill={panel == ResultType.CORRECT ?
                                "darkseagreen":
                            panel == ResultType.PRESENT ?
                                "sandybrown":
                            panel == ResultType.ABSENT ?
                                "dimgray":
                            panel == ResultType.BLANK ?
                                "papayawhip":
                            "papayawhip" //default                            
                        }
                    />
                ))
            )
            )}
        </svg>
    )
}