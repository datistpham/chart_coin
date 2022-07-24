import { useEffect } from "react";

const HeaderMobile = (props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://res.cloudinary.com/cockbook/raw/upload/v1658414524/single/a_u5skml.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <section
      style={{
        width: "100%",
        height: 50,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999999999,
        background: "#17171a",
        textTransform: "uppercase",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        fontWeight: 600,
        fontSize: 18,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      Bitupdown
    </section>
  );
};
export default HeaderMobile;
