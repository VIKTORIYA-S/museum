
function SectionHeader({title, lineColor = '#000', lineWidth = '100%'
}) {
    return (
        <div className="section-header">
            <h2 className="section__title">{title}</h2>
            <hr className="section__line" style={{color: lineColor, width: lineWidth}}/>
        </div>
    );
}

export default SectionHeader;