import React from "react";
import styles from "./popup.module.scss";
import { Modal } from "./ui-lib";
import { IconButton } from "./button";
import ClearIcon from "../icons/clear.svg";
import CancelIcon from "../icons/cancel.svg";

export const dateId = 20240307;
export function PopupComponent(props: { onClose: () => void }) {
  const handleSaveSetting = () => {
    localStorage.setItem(
      "popupSetting",
      JSON.stringify({ id: dateId, showPopup: false }),
    );
    props.onClose();
  };

  return (
    <div className="modal-mask">
      <Modal
        title={"通知"}
        date={
          // deteId转为日期格式
          new Date(
            Math.floor(dateId / 10000),
            Math.floor((dateId % 10000) / 100) - 1,
            dateId % 100,
          ).toLocaleDateString()
        }
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
          {/* <p className={styles["title"]}>✨🌟支持谷歌视觉🌟✨</p> */}
          <p className={styles["tags-title"]}>现支持模型如下：</p>
          <p className={styles["tags"]}>
            <span className={styles["tag"]}>gpt-4</span>
            <span className={styles["tag"]}>gpt-4-1106-preview</span>
            <span className={styles["tag"]}>gpt-4-turbo-preview</span>
            <span className={styles["tag"]}>gpt-3.5-turbo</span>
            <span className={styles["tag"]}>gpt-3.5-turbo-1106</span>
            <span className={styles["tag"]}>谷歌gemini-pro</span>
            <span className={styles["tag"]}>谷歌gemini-pro-vision</span>
          </p>
          <p className={styles["des"]}>
            谷歌视觉gemini-pro-vision模型为识别图片，可以上传多个图片进行提问，支持复制粘贴🦆
          </p>
          <div className={styles["tip"]}>
            <p className={styles["tip-title"]}>PS:</p>
            <p className={styles["tip-content"]}>
              {/* 疯狂星期四语句 */}
              独自一人远离家乡在广东打工，同事欺我，老板骂我，顾客打我，我流浪街头，衣衫褴褛，身无分文，活得不如一条流浪狗。天地浩大，却没有我的容身之处。我想问一问苍天，今天肯德基疯狂星期四，谁能请我吃🍔🍟
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PopupComponent;
