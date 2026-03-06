import './AnnouncementBar.css';

export default function AnnouncementBar() {
  const messages = [
    "CampusPulse is currently in its testing phase. Feel free to explore and try out the platform."
  ];

  return (
    <div className="announcement-bar">
      <div className="announcement-content">
        <div className="ticker">
          {[...messages, ...messages].map((msg, idx) => (
            <span key={idx} className="ticker-item">
              {msg}
              <span className="separator">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
