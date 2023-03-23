import * as d3 from 'd3';

export async function getStaticProps(context) {
    const properties = await d3.csv('http://localhost:3000/properties.csv');
  
    return {
      props: { properties }, // will be passed to the page component as props
    };
  }

  import React from 'react';

  function NumberLine({ min, max, value }) {
    const range = max - min;
    const offset = (value - min) / range * 100;
  
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100%', height: 4, backgroundColor: '#ccc', position: 'relative' }}>
          <div style={{ position: 'absolute', left: `${offset}%`, top: -10, transform: 'translateX(-50%)' }}>
            <div style={{ width: 20, height: 20, backgroundColor: '#007bff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              {value}
            </div>
          </div>
        </div>
        <div style={{ marginLeft: 10 }}>{min}</div>
        <div style={{ flexGrow: 1 }} />
        <div style={{ marginRight: 10 }}>{max}</div>
      </div>
    );
  }
  
  export default NumberLine;

<NumberLine min={239000} max={15000000} value={999999} />
  