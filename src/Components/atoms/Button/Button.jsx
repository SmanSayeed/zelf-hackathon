import "./Button.scss";
export default function Button({ children, variant = "default", className }) {
  let variantStyle = "btn-default";
  if (variant == "primary") {
    variantStyle = "btn-primary";
  }

  return (
    <>
      <div className={`btn ${variantStyle} ${className}`}>
        {children}
      </div>
    </>
  );
}
