import "./CustomDesignCta.css";

export default function CustomDesignCta() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <h2 className="cta-title">Looking For A Custom Design?</h2>
            <p className="cta-text">
              We are happy to customise your products based on your needs, send
              us a note!!!
            </p>
          </div>

          <div className="col-lg-6">
            <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Enter Your email here..."
                aria-label="Email address"
              />
              <button type="submit" aria-label="Send">
                <i className="bi bi-send-fill"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}