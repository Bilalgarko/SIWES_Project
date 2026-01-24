export default function Navbar({ setIsOpen, darkMode, setDarkMode }) {
  return (
    <div
      style={{
        height: "60px",
        backgroundColor: darkMode ? "#1e293b" : "white",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        justifyContent: "space-between",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <button
        onClick={() => setIsOpen(prev => !prev)}
        style={{
          fontSize: "20px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: darkMode ? "white" : "black",
        }}
      >
        ☰
      </button>

      <h3>Welcome Back 👋</h3>

      <button
        onClick={() => setDarkMode(prev => !prev)}
        style={{
          padding: "6px 12px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
        }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
