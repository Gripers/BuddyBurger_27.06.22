import React from "react";
import "../styles/mobile-shopping-cart.scss";
import { Drawer } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useCart } from "react-use-cart";
import empty_cart_pic from "../img/empty_cart.png";
import axios from "axios";
import { DopFuncsContext } from "../anyFunc/dopFuncs";

const MobileShoppingCart = () => {
  const [mscOpen, setMSCOpen] = React.useState(false);
  const { t } = useTranslation();
  const {
    items,
    updateItemQuantity,
    removeItem,
    isEmpty,
    emptyCart,
    totalItems,
  } = useCart();
  const { handleLoginOpen } = React.useContext(DopFuncsContext);
  let total = 0;

  const toGroup = () => {
    axios.post(
      `https://api.telegram.org/bot5340893698:AAH4J2w4HGhs-TgdYmLZ5UFWEDPvFDPZ1O4/sendMessage?chat_id=-1001694192631&text=${encodeURIComponent(
        `<b>Заказ:</b> ${(Math.floor(Math.random() * 10000) + 10000)
          .toString()
          .substring(1)}
<b>Телефон:</b> +998974251244
${items
  .map((item) => {
    return `
<b>${item.name_ru}</b>
${item.count} x ${item.price} = ${item.count * item.price} UZS`;
  })
  .join("\n")}

<b>Сумма:</b> ${total} UZS`
      )}&parse_mode=html`
    );
  };

  const funcs = () => {
    toGroup();
    emptyCart();
    setMSCOpen(false);
  };

  const funcss = () => {
    setMSCOpen(false);
    handleLoginOpen();
  };

  return (
    <div className="mobile-shopping-cart-display">
      <button
        style={{
          boxShadow: "4px 6px 30px rgb(0 0 0 / 38%)",
          zIndex: "9999999",
        }}
        onClick={() => setMSCOpen(true)}
      >
        <span>{totalItems}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="white"
          className="bi bi-cart-fill"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </button>

      <Drawer
        style={{ zIndex: "9999999" }}
        open={mscOpen}
        onClose={() => setMSCOpen(false)}
        anchor={"right"}
        transitionDuration={1000}
        className="mobile-shopping-cart-drawer-opener"
      >
        <div className="mobile-shopping-cart-container">
          <div className="mobile-shopping-cart-header">
            <span>{t("btns.cart")}</span>
            <svg
              className="MuiSvgIcon-root jss51"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              onClick={() => setMSCOpen(false)}
            >
              <path d="M18.3 5.71a.9959.9959 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
            </svg>
          </div>
          {isEmpty ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "contain",
                }}
                src={empty_cart_pic}
                alt=""
              />
              <h4
                style={{
                  fontFamily: "Proxima-Nova Semibold",
                  fontSize: "20px",
                }}
              >
                {t("empty")}
              </h4>
            </div>
          ) : (
            <></>
          )}
          <div className="mobile-shopping-cart-body">
            {items.map((item) => {
              const priceCount = item.count * item.price;
              total += priceCount;

              if (item.count >= 1) {
                return (
                  <div key={item.id} className="mobile-shopping-cart-body-item">
                    <div className="mobile-shopping-cart-body-item-first">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="mobile-shopping-cart-body-item-second">
                      <p>{item.name_ru}</p>
                      <p className="mt-2" style={{ color: "#51267d" }}>
                        {priceCount} UZS
                      </p>
                    </div>
                    <div className="mobile-shopping-cart-body-item-third">
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.count--)
                        }
                      >
                        -
                      </button>
                      <span>{item.count}</span>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.count++)
                        }
                      >
                        +
                      </button>
                    </div>
                    <div className="mobile-shopping-cart-body-item-fourth">
                      <svg
                        className="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        onClick={() => removeItem(item.id)}
                      >
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                      </svg>
                    </div>
                  </div>
                );
              } else {
                removeItem(item.id);
              }
            })}
          </div>
          <div
            className="mobile-shopping-cart-foot mt-3"
            style={{ display: isEmpty ? "none" : "block" }}
            onClick={() =>
              localStorage.getItem("user") || localStorage.getItem("admin")
                ? funcs()
                : funcss()
            }
          >
            <button>
              <p>{t("order")}</p>
              <p>{total} UZS</p>
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileShoppingCart;
