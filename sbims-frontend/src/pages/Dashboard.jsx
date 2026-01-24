export default function Dashboard() {
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Dashboard Overview</h2>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3>Total Products</h3>
          <p style={styles.number}>120</p>
        </div>

        <div style={styles.card}>
          <h3>Total Sales</h3>
          <p style={styles.number}>₦450,000</p>
        </div>

        <div style={styles.card}>
          <h3>Low Stock Items</h3>
          <p style={styles.number}>8</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  cardContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    flex: "1",
    minWidth: "200px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
  number: {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "10px",
  },
};
