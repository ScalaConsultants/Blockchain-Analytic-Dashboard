import React from 'react';

const BarChartSegments = (
  { data, 
    activeSegment, 
    onClick, 
    segmentStyles: { colors: { grey, common }, borderRadius, boxShadow } 
  }: any) => 
  data.reduce((acc: any, object: any, index: any) => {
    if (!object.isOthers) {
      acc.elements.push((
        <div
          onClick={() => onClick(index)}
          key={object.key} 
          style={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: object.color, 
            position: 'absolute', 
            left: acc.position, 
            top: 0, 
            width: object.width, 
            height: '100%',
            boxShadow: index < 10 && index === activeSegment ? boxShadow : '',
            borderRadius: index < 10 && index === activeSegment ? borderRadius : index === 0 ? '2px 0px 0px 2px' : '',
            color: index < 10 && index === activeSegment ? common.white : grey[400],
            zIndex: index < 10 && index === activeSegment ? 100 : 0,
            transform: index < 10 && index === activeSegment ? 'scale(1.05)' : ''
          }}>
          {index < 10 ? <div>{`${Math.floor(object.value)}%`}</div> : null}
        </div>
      ))
    }
    return {
      position: acc.position + object.width,
      elements: acc.elements
    };
  }, { position: 0, elements: [] }).elements

export default BarChartSegments;