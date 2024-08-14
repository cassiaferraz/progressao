import "./qualityProgressIcon.css"

export default function QualityProgressIcon({realMax, value, referenceValue, percent}) {

    let real_max
    if(percent || !realMax) {
        real_max = 100
    }
    else {
        real_max = realMax
    }
 
    let max
    if(real_max >= (referenceValue / 0.9)) {
 
        if (value <= referenceValue) {
            max = referenceValue / 0.9
        }
        else if(value <= (real_max * 0.9)){
            max = value / 0.9
        }
        else {
            max = real_max
        }
 
    }
    else {
        max = real_max
    }
    return (
        <div className="quality_progress">
            <div className="quality_progress_bar">
                <progress max={max} value={value}>
                    {value}
                </progress>
            </div>
            <div className="quality_progress_value" style={{
                width: `${value / max * 165}px`
            }}>{value}{percent ? '%' : ''}</div>
            <div className="reference_bar" style={{
                display: referenceValue ? "block" : "none"
            }}>
                <div className="reference_bar_line" style={{
                    left: `${referenceValue * 100 / max }%`
                }}>
                    <div className="reference_bar_triangle">
                        <div className="reference_value">{referenceValue}{percent ? '%' : ''}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}