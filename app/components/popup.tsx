import React from "react";
import styles from "./popup.module.scss";
import { Modal } from "./ui-lib";
import { IconButton } from "./button";
import ClearIcon from "../icons/clear.svg";
import CancelIcon from "../icons/cancel.svg";

export const dateId = 202403220023;
const strDateId = dateId.toString();
export function PopupComponent(props: { onClose: () => void }) {
  const handleSaveSetting = () => {
    localStorage.setItem(
      "popupSetting",
      JSON.stringify({ id: dateId, showPopup: false }),
    );
    props.onClose();
  };
  const handleDateId = () => {
    const year = strDateId.substring(0, 4);
    const month = parseInt(strDateId.substring(4, 6)) - 1;
    const day = strDateId.substring(6, 8);
    const hour = strDateId.substring(8, 10);
    const minute = strDateId.substring(10, 12);
    return year + "/" + month + "/" + day + " " + hour + ":" + minute;
  };
  return (
    <div className="modal-mask">
      <Modal
        title={"通知"}
        date={handleDateId()}
        size="small"
        onClose={props.onClose}
        actions={[
          <IconButton
            text={"关闭"}
            icon={<CancelIcon />}
            key="cancel"
            onClick={() => {
              props.onClose();
            }}
          />,
          <IconButton
            type="primary"
            text={"不在提示"}
            icon={<ClearIcon />}
            key="ok"
            onClick={() => {
              handleSaveSetting();
              props.onClose();
            }}
          />,
        ]}
      >
        <div className={styles["notify"]} style={{}}>
          <p className={styles["title"]}>模型多多，趣味多多🎉</p>
          <p className={styles["tags-title"]}>现支持模型如下：</p>
          <p className={styles["tags"]}>
            <span className={styles["tag"]}>gpt-4</span>
            <span className={styles["tag"]}>gpt-4-1106-preview</span>
            <span className={styles["tag"]}>gpt-4-0125-preview</span>
            <span className={styles["tag"]}>gpt-4-turbo-preview</span>
            {/* <span className={styles["tag"]}>gpt-3.5-turbo</span>
            <span className={styles["tag"]}>gpt-3.5-turbo-0125</span>
            <span className={styles["tag"]}>gpt-3.5-turbo-1106</span> */}
            <span className={styles["tag"]}>谷歌gemini-pro</span>
            <span className={styles["tag"]}>谷歌gemini-pro-vision</span>
            <span className={styles["tag"]}>claude-3-haiku-20240307</span>
          </p>
          <p className={styles["des"]}>3.5-turbo模型暂时下线，不支持使用</p>
          <div className={styles["tip"]}>
            <p className={styles["tip-title"]}>PS:</p>
            <p className={styles["tip-content"]}>
              {/* 发神经的语句 */}
              不推荐福宝，推荐Claude 3 Haiku耶 超快聊天的同时可以发送图片哦
            </p>
          </div>
          <img
            className={styles["img"]}
            src="https://tse4-mm.cn.bing.net/th/id/OIP-C.X1Pwro4-I0v9cDhscrV5MwHaEK?rs=1&pid=ImgDetMain"
            alt=""
          />
        </div>
      </Modal>
    </div>
  );
}

export default PopupComponent;
