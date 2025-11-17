import "./loaders.css";

export default function LoaderAnimation() {
  return (
    <div className="container py-5">
      <div className="d-flex align-items-center justify-content-center">
        <h2 className="mb-4">Loader Animations</h2>
      </div>

      {/* Row 1 */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card text-center loader-card">
            <div className="card-body">
              <div className="spinner"></div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center loader-card">
            <div className="card-body">
              <div className="dot-loader">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



