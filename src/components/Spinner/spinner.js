import '../../assets/css/style.scss'
const Spinner = ({
    width,
    height = "100vh",
    backgroundColor,
    borderTop = "10px solid #d6a15e",
    InnerHeight,
    InnerWidth,
  }) => (
    <div
      className="animation"
      style={{
        background: backgroundColor,
        //width: width,
        height: height,
      }}
    >
      <div
        className="animation-image"
        style={{
          width: InnerWidth,
          height: InnerHeight,
          background: backgroundColor,
          borderTop: borderTop,
        }}
      ></div>
    </div>
  );
  
  export default Spinner;
  