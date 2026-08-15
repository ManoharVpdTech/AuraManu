import React from "react";
import Card from "../../../../components/ui/card";
import useAuth from "../../../../hooks/useAuth";

export const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">IDENTITY Scope</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Operator Profile</h1>
      </div>
      <Card>
        <h3 style={{ color: "#63f5e8", marginBottom: "1rem" }}>Account Metadata</h3>
        <p><strong>NAME:</strong> {user?.name}</p>
        <p><strong>EMAIL ADDRESS:</strong> {user?.email}</p>
        <p><strong>ASSIGNED SECURITY SCOPE:</strong> {user?.role}</p>
      </Card>
    </div>
  );
};

export default Profile;

