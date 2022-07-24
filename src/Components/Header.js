import React, { useEffect } from "react";

const HeaderPc = (props) => {
    useEffect(()=> {
        const script = document.createElement("script");
        script.src = "https://res.cloudinary.com/cockbook/raw/upload/v1658396887/single/a_aljgft.js";
        script.async = true;
        document.body.appendChild(script);
    
      }, [])
  return (
    <div
      style={{
        width: "100%",
        height: 110,
        background: "#000",
        position: "relative",
        zIndex: 99999999999999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 9,
      }}
    >
      <div style={{ width: "24vw", height: "100%" }}>
        <div
          style={{ height: "100%", width: "100%" }}
          onClick={() => window.location.reload()}
        >
          <img
            src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.15752-9/290134744_876034646692665_5486299521329709079_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=EvXlWkxpgYcAX-hV9td&_nc_ht=scontent.fhan2-1.fna&oh=03_AVKDMrCfhvnemcSEzydJUhM8AqQezXKZ1f2xFqJJNkdXOQ&oe=62FC7BEC"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
      {/*  */}
      <div
        style={{
          width: "calc(100% - 24vw)",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "25%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.15752-9/289048511_733310721216518_6932109375996455350_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Gv8jUsnCk_EAX9JEajY&tn=OUIugO7ORZs6GuOL&_nc_ht=scontent.fhan2-1.fna&oh=03_AVKxq94nr-3EwoPF0BAmfjNSvfDi0aVSwdSIkgJdqRNVtA&oe=62FE5E17"
            alt=""
            style={{ width: "90%", height: "90%", objectFit: "contain" }}
          />
        </div>
        <div
          style={{
            height: "100%",
            width: "25%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.15752-9/289048511_733310721216518_6932109375996455350_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Gv8jUsnCk_EAX9JEajY&tn=OUIugO7ORZs6GuOL&_nc_ht=scontent.fhan2-1.fna&oh=03_AVKxq94nr-3EwoPF0BAmfjNSvfDi0aVSwdSIkgJdqRNVtA&oe=62FE5E17"
            alt=""
            style={{ width: "90%", height: "90%", objectFit: "contain" }}
          />
        </div>
        <div
          style={{
            height: "100%",
            width: "25%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.15752-9/289048511_733310721216518_6932109375996455350_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Gv8jUsnCk_EAX9JEajY&tn=OUIugO7ORZs6GuOL&_nc_ht=scontent.fhan2-1.fna&oh=03_AVKxq94nr-3EwoPF0BAmfjNSvfDi0aVSwdSIkgJdqRNVtA&oe=62FE5E17"
            alt=""
            style={{ width: "90%", height: "90%", objectFit: "contain" }}
          />
        </div>
        {/*  */}
        <div
          style={{
            height: "100%",
            width: "25%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{ width: "90%", height: "90%" }}
            onClick={() =>
              (window.location.href =
                "https://accounts.binance.com/vi/register-person?ref=PZ8MW59R&fbclid=IwAR1_8XJ6KmzIkl6mTXC8JxJSiw1058PsuWG4KYolXQZQOpUm0zo5pDuIp-g")
            }
          >
            <img
              src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.15752-9/293596265_1183605825764588_4095954708134408879_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=RcdWE5drYsUAX995T4r&_nc_ht=scontent.fhan4-3.fna&oh=03_AVIGCSz4zZKPzLoYM4GmzvQ1y0ThfUCH7bwusrAsYmcobg&oe=62FC9C6B"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPc;
