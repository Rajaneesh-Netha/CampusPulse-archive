import "./AnnouncementBar.css";

export default function AnnouncementBar() {

  const messages = [
    "CampusPulse is currently in beta – explore the platform and share feedback",
    "Report campus issues easily and track resolution in real time",
    "Built for CBIT students to improve campus communication",
    "Your voice matters – help improve the campus with CampusPulse"
  ];

  const infiniteMessages = [...messages, ...messages];

  return (
    <div className="announcement-bar">
      <div className="announcement-content">
        <div className="ticker">
          {infiniteMessages.map((msg, index) => (
            <span key={index} className="ticker-item">
              {msg}
              <span className="separator">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}