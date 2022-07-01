import React from "react";
import { useTranslation } from "react-i18next";
import { useCart } from "react-use-cart";
import empty_cart_pic from "../img/empty_cart.png";
import "../styles/cart.scss";
import axios from "axios";
import { DopFuncsContext } from "../anyFunc/dopFuncs";

const Cart = () => {
  const { isEmpty, items, updateItemQuantity, removeItem, emptyCart } =
    useCart();
  const { t } = useTranslation();
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
  };

  const funcss = () => {
    handleLoginOpen();
  };

  return (
    <div>
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
            style={{ width: "200px", height: "200px", objectFit: "contain" }}
            src={empty_cart_pic}
            alt=""
          />
          <h4 style={{ fontFamily: "Proxima-Nova Semibold", fontSize: "20px" }}>
            {t("empty")}
          </h4>
        </div>
      ) : (
        <></>
      )}
      <div className="cart-items-container">
        {items.map((item) => {
          if (item.count >= 1) {
            const priceCount = item.count * item.price;
            total += priceCount;

            return (
              <>
                <div key={item.id} className="cart-items-item">
                  <div className="cart-items-item-left">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cart-items-item-medium mx-4">
                    <span className="des">{item.name_ru}</span>
                    <div className="flexer mt-2">
                      <div className="cart-items-counter-div">
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
                      {item.price ? (
                        <span style={{ color: "#51267d" }}>
                          {priceCount} UZS
                        </span>
                      ) : (
                        <span style={{ color: "#51267d" }}>null</span>
                      )}
                    </div>
                  </div>
                  <div className="cart-items-item-right">
                    <svg
                      class="MuiSvgIcon-root"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      width="18"
                      height="18"
                      onClick={() => removeItem(item.id)}
                    >
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                    </svg>
                  </div>
                </div>
                <hr className="cart-hr" />
              </>
            );
          } else {
            removeItem(item.id);
          }
        })}
      </div>
      <div
        className="cart-order-btn-div"
        style={{ display: isEmpty ? "none" : "block" }}
        onClick={() =>
          localStorage.getItem("user") || localStorage.getItem("admin")
            ? funcs()
            : funcss()
        }
      >
        <button>
          {t("order")}
          <p>{total} UZS</p>
        </button>
      </div>
    </div>
  );
};

export default Cart;
