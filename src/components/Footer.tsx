export default function Footer() {
  return (
    <footer className="bg-body-tertiary py-3 mt-5 border-top text-center">
      <div className="container">
        <small className="text-muted">
          © {new Date().getFullYear()} My Animation App. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
