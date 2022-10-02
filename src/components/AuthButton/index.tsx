import React from "react";

export default function AuthButton() {
  return (
    <div className="flex justify-end">
      <button className="btn mr-2">
        Login
      </button>
      <button className="btn">
        Register
      </button>
    </div>
  );
}
