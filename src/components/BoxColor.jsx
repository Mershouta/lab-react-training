function BoxColor({ r, g, b }) {
    return (
      <div
        style={{
          height: '100px',
          width: '30px',
          backgroundColor: `rgb(${r},${g},${b})`,
        }}
      ></div>
    );
  }
  
  export default BoxColor;