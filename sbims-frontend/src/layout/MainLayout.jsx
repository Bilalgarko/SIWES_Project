import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={styles.content}>
        {children}
      </div>
    </div>
  );
}

const styles = {
  content: {
    marginLeft: "250px",
    padding: "30px",
    width: "100%",
  },
};
