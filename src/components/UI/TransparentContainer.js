const TransparentContainer = (props) => {
  return (
    <div
      className={`bg-violet-200/20 rounded-md p-4 backdrop-blur-md drop-shadow-lg my-12 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default TransparentContainer;
