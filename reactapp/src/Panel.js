import React, { useState } from "react";

export default function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);

  const handleShow = () => {
    setIsActive(true);
  };

  return (
    <section>
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={handleShow}>Show Story</button>
      )}
    </section>
  );
}
