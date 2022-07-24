import { Skeleton } from "@mui/material";
import React, { memo } from "react";

const Chart = (props) => {
  if (props?.list) {
    return (
      <div
        className="jljfiojreiojtirdskdas"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginTop: 16,
          marginBottom: 50
        }}
      >
        <StatsCoin {...props}></StatsCoin>
        {props?.list?.map((item, key) => (
          <Wrap1Chart
            {...item}
            key={key}
            index={parseInt(key) + 1}
          ></Wrap1Chart>
        ))}
      </div>
    );
  } else {
    return (
      <div
        className="jljfiojreiojtirdskdas"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
          marginTop: 20,
        }}
      >
        {Array.from(Array(12).keys())?.map((item, key) => (
          <div
            key={key}
            className="fiawjroimsda"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NameExchangeSkeleton {...props}></NameExchangeSkeleton>
            <LongShortChartSkeleton {...props}></LongShortChartSkeleton>
          </div>
        ))}
      </div>
    );
  }
};

const StatsCoin = (props) => {
  return (
    <div
      className="fiawjroimsda"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <NameExchange2 {...props}></NameExchange2>
      <LongShortChart2 {...props}></LongShortChart2>
    </div>
  );
};
const Wrap1Chart = memo((props) => {
  return (
    <div
      className="fiawjroimsda"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NameExchange {...props}></NameExchange>
      <LongShortChart {...props}></LongShortChart>
    </div>
  );
});

const NameExchange = (props) => {
  return (
    <div
      className="fjlaijsiotjsesdklsmd"
      style={{
        display: "flex",
        alignItems: "center",
        maxWidth: 120,
        width: 120,
      }}
    >
      <img
        src={props?.exchangeLogo}
        alt="open"
        style={{ width: 24, height: 24, objectFit: "cover" }}
      />
      &nbsp;
      <div style={{ fontSize: 14, fontWeight: 600 }}>{props?.exchangeName}</div>
    </div>
  );
};

const LongShortChart = memo((props) => {
  return (
    <div
      className="jfioejteiorjsdkmsas"
      style={{
        flex: "1 1 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 35,
        background: "#FF0000",
        position: "relative",
        transition: "all .3s linear",
      }}
    >
      {/* Long */}
      <div
        className="kfkfsdkflsdlaripoakss"
        style={{
          position: "absolute",
          height: "100%",
          width: `${props?.longRate}%`,
          backgroundColor: "#00FF00",
          left: 0,
          transition: "all .3s linear",
        }}
      ></div>
      <div
        style={{
          width: "50%",
          height: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all .3s linear",
        }}
      >
        <div
          className="jiejfoiejoiwjsajoieajfos oejjawuioJILKJAlkSWJI"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: 14,
            fontWeight: 600,
            transition: "all .3s linear",
            color: "#000 !important",
          }}
        >
          {props?.longRate}%
        </div>
      </div>
      {/* Short */}
      <div
        style={{
          width: "50%",
          height: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all .3s linear",
        }}
      >
        <div
          className="oejjawuioJILKJAlkSWJI"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: 14,
            fontWeight: 600,
            transition: "all .3s linear",
          }}
        >
          {props?.shortRate}%
        </div>
      </div>
    </div>
  );
});
//
const NameExchange2 = memo((props) => {
  return (
    <div
      className="fjlaijsiotjsesdklsmd"
      style={{
        display: "flex",
        alignItems: "center",
        maxWidth: 120,
        width: 120,
      }}
    >
      <img
        src={
          props?.symbolLogo ||
          "https://cdn.coinglasscdn.com/static/exchanges/270.png"
        }
        alt="open"
        style={{ width: 24, height: 24, objectFit: "cover" }}
      />
      &nbsp;
      <div style={{ fontSize: 14, fontWeight: 600 }}>
        {props?.symbol} Staticstic
      </div>
    </div>
  );
});

const LongShortChart2 = memo((props) => {
  return (
    <div
      className="jfioejteiorjsdkmsas"
      style={{
        flex: "1 1 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 35,
        background: "#FF0000",
        position: "relative",
        transition: "all .3s linear",
      }}
    >
      {/* Long */}
      <div
        className="fioejfjdaksalga"
        style={{
          width: "100%",
          position: "absolute",
          top: "-100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontWeight: 600, fontSize: 14 }}>Long</div>
        <div style={{ fontWeight: 600, fontSize: 14 }}>Short</div>
      </div>
      <div
        className="oejjawuioJILKJAlkSWJI"
        style={{
          position: "absolute",
          height: "100%",
          width: `${props?.longRate}%`,
          backgroundColor: "#00FF00",
          left: 0,
          transition: "all .3s linear",
        }}
      ></div>
      <div
        style={{
          width: "50%",
          height: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all .3s linear",
        }}
      >
        <div
          className="oejjawuioJILKJAlkSWJI"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: 14,
            fontWeight: 600,
            transition: "all .3s linear",
          }}
        >
          {props?.longRate}%
        </div>
      </div>
      {/* Short */}
      <div
        style={{
          width: "50%",
          height: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all .3s linear",
        }}
      >
        <div
          className="oejjawuioJILKJAlkSWJI"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: 14,
            fontWeight: 600,
            transition: "all .3s linear",
          }}
        >
          {props?.shortRate}%
        </div>
      </div>
    </div>
  );
});

export default Chart;

const NameExchangeSkeleton = () => {
  return (
    <Skeleton
      variant={"rectangular"}
      animation={"wave"}
      className="fjlaijsiotjsesdklsmd"
      style={{
        display: "flex",
        alignItems: "center",
        maxWidth: 120,
        width: 120,
      }}
    >
      <Skeleton
        variant={"circular"}
        animation={"wave"}
        style={{ width: 24, height: 24, objectFit: "cover" }}
      />
      &nbsp;
      <Skeleton
        variant={"rectangular"}
        animation={"wave"}
        style={{ fontSize: 14, fontWeight: 600 }}
      ></Skeleton>
    </Skeleton>
  );
};
const LongShortChartSkeleton = () => {
  return (
    <Skeleton
      variant={"rectangular"}
      animation={"wave"}
      className="jfioejteiorjsdkmsas"
      style={{
        flex: "1 1 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 35,
        background: "#3d1c28",
        position: "relative",
        transition: "all .3s linear",
      }}
    >
      {/* Long */}
      <Skeleton
        variant={"rectangular"}
        animation={"wave"}
        style={{
          position: "absolute",
          height: "100%",
          backgroundColor: "#123b40",
          left: 0,
          transition: "all .3s linear",
        }}
      ></Skeleton>
      <Skeleton
        style={{
          width: "50%",
          height: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all .3s linear",
        }}
      >
        <Skeleton
          variant={"rectangular"}
          animation={"wave"}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: 14,
            fontWeight: 600,
            transition: "all .3s linear",
          }}
        ></Skeleton>
      </Skeleton>
      {/* Short */}
      <Skeleton
        variant={"rectangular"}
        animation={"wave"}
        style={{
          width: "50%",
          height: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all .3s linear",
        }}
      >
        <Skeleton
          variant={"rectangular"}
          animation={"wave"}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: 14,
            fontWeight: 600,
            transition: "all .3s linear",
          }}
        ></Skeleton>
      </Skeleton>
    </Skeleton>
  );
};
