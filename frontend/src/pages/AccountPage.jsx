import { layout } from "../styles/commonStyles";

export default function AccountPage() {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div style={layout.page}>
      <h1 style={layout.heading}>My Account</h1>
      {token ? (
        <>
          <p>You are logged in ✅</p>
          <button onClick={handleLogout} style={layout.button}>Logout</button>
        </>
      ) : (
        <p>Guest user (not logged in)</p>
      )}
    </div>
  );
}
