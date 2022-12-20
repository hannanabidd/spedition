import "./Spinner.css";

export default function LoadingSpinner({ height = "80vh" }) {
  return (
    <div style={{ height: height }} className={"spinnerContainer"}>
      {/* <div className={"loadingSpinner"} /> */}
      <div className={"loading"}>
        <div className={"arc"}></div>
        <div className={"arc"}></div>
        <div className={"arc"}></div>
      </div>
    </div>
  );
}
