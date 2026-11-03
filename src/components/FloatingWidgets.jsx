import { useEffect, useState } from "react";
import "./FloatingWidgets.css";

const EMAIL = "rachanalad115@gmail.com";

export default function FloatingWidgets() {
  const [showTop, setShowTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
   
      <button
        type="button"
        className={`scroll-top-btn ${showTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <i className="bi bi-arrow-up"></i>
      </button>

      {chatOpen && (
        <div className="chat-popup" role="dialog" aria-label="Live chat">
          <button
            type="button"
            className="chat-popup-close"
            onClick={() => setChatOpen(false)}
            aria-label="Close chat"
          >
            <i className="bi bi-x-lg"></i>
          </button>
          <p>
            Welcome to our site, if you need help simply reply to this
            message, we are online and ready to help. You can also reach us
            through Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and we will
            get back to you as soon as possible.
          </p>
        </div>
      )}

      <button
        type="button"
        className="chat-btn"
        onClick={() => setChatOpen((open) => !open)}
        aria-label="Open chat"
        aria-expanded={chatOpen}
      >
        <i className={`bi ${chatOpen ? "bi-x-lg" : "bi-chat-fill"}`}></i>
        {!chatOpen && <span className="chat-badge">1</span>}
      </button>
    </>
  );
}