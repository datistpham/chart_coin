import axios from "axios";
import React, { Fragment, memo, useEffect, useState } from "react";
import Chart from "./Chart";
import Menu from "./Menu";
import Option from "./Option";
import Title from "./Title";
import { isMobile, MobileView, isDesktop } from "react-device-detect";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import HeaderPc from "./Header";
import HeaderMobile from "./HeaderMobile";

SwiperCore.use([Autoplay]);
const Main = (props) => {
  const [listSymbol, setListSymbol] = useState(() => []);
  const [data, setData] = useState(() => []);
  const [symbol, setSymBol] = useState(() => "BTC");
  const [timeType, setTimeType] = useState(() => ({
    time: 5,
    timeType: 3,
    isHour: false,
  }));
  useEffect(() => {
    (async () => {
      const res = await axios({
        url: `https://fapi.coinglass.com/api/support/symbol`,
        method: "get",
        responseType: "json",
      });
      const result = await res.data;
      setListSymbol(() => result.data);
    })();
    return () => setListSymbol(() => []);
  }, []);
  useEffect(() => {
    (async () => {
      const res = await axios({
        url: `https://fapi.coinglass.com/api/futures/longShortRate?symbol=${symbol}&timeType=${parseInt(
          timeType.timeType
        )}`,
        method: "get",
        responseType: "json",
      });
      const result = await res.data;
      setData(() => result.data[0]);
    })();
  }, [timeType, symbol]);
  useEffect(() => {
    const intervalId = setInterval(async () => {
      const res = await axios({
        url: `https://fapi.coinglass.com/api/futures/longShortRate?symbol=${symbol}&timeType=${parseInt(
          timeType.timeType
        )}`,
        method: "get",
        responseType: "json",
      });
      const result = await res.data;
      setData(() => result.data[0]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [data, timeType, symbol]);
  const [select, setSelect] = useState(() => 1);
  return (
    <Fragment>
      {isDesktop === true && (
        <HeaderPc></HeaderPc>
      )}
      {
        select=== 2 && <>
        <div className="fioujeirjsaipoeaswe" style={{position: "fixed"}}>
          <Trading symbol={"BINANCE:BTCUSDT"}></Trading>
        </div>
        <div style={{height: "calc(50vh - 141px)", marginTop: 50}} className="asasasasssaasasasas">
        </div>
      </>
      }
      <div
        className="jfioejrioeeoafd"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Only for mobile */}
        {
          parseInt(select) !== 2 && <div
          className="fjirfjgorjeiorj"
          style={{
            width: "100%",
            height: parseInt(select)===2 ? "calc(50vh - 141px)" : "100%",
            backgroundColor: "#000",
            position: parseInt(select)===2 ? "fixed" : "relative",
            marginTop: 50,
            zIndex: 9999
          }}
        >
          {(isMobile === true && parseInt(select)!== 2) && (
            <>
              <div className="fioujeirjsaipoeaswe" style={{position: "fixed"}}>
                <Trading symbol={"BINANCE:BTCUSDT"}></Trading>
              </div>
              <div style={{height: "calc(50vh - 141px)", marginTop: 0}} className="asasasasssaasasasas">
              </div>
            </>
            
          )}
          {isMobile === true && (
            <MobileView>
              {
                parseInt(select ) !== 2 &&
                <HeaderMobile></HeaderMobile>
              }
            </MobileView>
          )}
          {/* {isMobile === true && (
            <MobileView>
              <div
                style={{ width: "100%", height: "calc(50vh - 141px + 50px)" }}
              >
                Bitupdown
              </div>
            </MobileView>
          )} */}

          {select === 1 && (
            <>
              <div
                style={{
                  position: "relative",
                  zIndex: 20,
                  background: "#17171a",
                  minHeight: "100vh",
                }}
              >
                <div style={{ paddding: 24, minHeight: "100vh" }}>
                  <Title {...data}></Title>
                  <Option
                    listSymbol={listSymbol}
                    symbol={symbol}
                    timeType={timeType}
                    setSymBol={setSymBol}
                    setTimeType={setTimeType}
                    {...data}
                  ></Option>
                  <br />
                  <Chart {...data}></Chart>
                </div>
              </div>
            </>
          )}
          {select === 3 && (
            <>
              {isMobile === true && (
                <>
                  <MobileView>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        background: "#000",
                        zIndex: 999,
                      }}
                    ></div>
                  </MobileView>
                  <MobileView>
                    <div
                      style={{
                        width: "100%",
                        height: "calc(120px)",
                        background: "#000",
                        position: "relative",
                        zIndex: 999,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        autoplay={{ delay: 2000 }}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          Yêu cầu đặt quảng cáo
                        </SwiperSlide>
                        <SwiperSlide>
                          Yêu cầu đặt quảng cáo
                        </SwiperSlide>
                        <SwiperSlide>
                          Yêu cầu đặt quảng cáo
                        </SwiperSlide>
                        <SwiperSlide>
                          Yêu cầu đặt quảng cáo
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </MobileView>
                </>
              )}
              <Trading symbol={"BINANCE:ETHUSDT"}></Trading>
            </>
          )}
          {select === 4 && (
            <>
              {isMobile === true && (
                <>
                  <MobileView>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        background: "#000",
                        zIndex: 999,
                      }}
                    ></div>
                  </MobileView>
                  <MobileView>
                    <div
                      style={{
                        width: "100%",
                        height: "calc(120px)",
                        background: "#000",
                        position: "relative",
                        zIndex: 999,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        autoplay={{ delay: 2000 }}
                        className="mySwiper"
                      >
                        <SwiperSlide>Yêu cầu đặt quảng cáo</SwiperSlide>
                        <SwiperSlide>Yêu cầu đặt quảng cáo</SwiperSlide>
                        <SwiperSlide>Yêu cầu đặt quảng cáo</SwiperSlide>
                        <SwiperSlide>Yêu cầu đặt quảng cáo</SwiperSlide>
                      </Swiper>
                    </div>
                  </MobileView>
                </>
              )}
              <Trading symbol={"FOREXCOM:NSXUSD"}></Trading>
            </>
          )}
          {select === 2 && <></>}
        </div>
        }
        <Menu setSelect={setSelect} select={select}></Menu>
        {isMobile === true && (
          <MobileView>
            <div style={{ width: "100%", height: "50px" }}></div>
          </MobileView>
        )}
        {isDesktop === true && (
          <div
            style={{
              width: "60vw",
              minHeight: "100%",
              background: "#000",
              position: "relative",
              zIndex: 99999999999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 9,
            }}
          >
            <div
              className="geiofrjioerjrewweqwq"
              style={{ width: "100%", height: "60%" }}
            >
              <Trading symbol={"BINANCE:BTCUSDT"}></Trading>
            </div>
            {/*  */}
            <div
              className="hfjaehrouierheaiow"
              style={{
                width: "100%",
                height: "40%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 9,
              }}
            >
              <div
                className="fiorujediorsdarer"
                style={{ flex: "1 1 0", height: "100%" }}
              >
                <Trading symbol={"BINANCE:ETHUSDT"}></Trading>
              </div>
              <div
                className="fiorujediorsdarer"
                style={{ flex: "1 1 0", height: "100%" }}
              >
                <Trading symbol={"FOREXCOM:NSXUSD"}></Trading>
              </div>
            </div>
          </div>
        )}
        {isDesktop === true && (
          <div
            className="fdiotrjueiorjwioejwieo"
            id="iaerjiorjiowejioweawada"
            style={{
              width: "16vw",
              height: "100%",
              background: "#fff",
              zIndex: 999999999999,
              color: "#000",
            }}
          ></div>
        )}
        {isMobile === true && (
          <div
            className="fdiotrjueiorjwioejwieo"
            id="iaerjiorjiowejioweawada"
          ></div>
        )}
      </div>
    </Fragment>
  );
};

export default Main;

const Trading = memo((props) => {
  return (
    <>
      <TradingViewWidget
        symbol={props?.symbol}
        theme={Themes.DARK}
        locale={"vi_VN"}
        width={"100%"}
        className="fjioedjpoijfedpiojr"
        timezone="Asia/Ho_Chi_Minh"
        toolbar_bg={"#f1f3f6"}
        enable_publishing={false}
        allow_symbol_change={true}
        interval={1}
        container_id="tradingview_d85a3"
      />
    </>
  );
});

