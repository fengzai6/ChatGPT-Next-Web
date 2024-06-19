import React from "react";
import styles from "./popup.module.scss";
import { Modal } from "./ui-lib";
import { IconButton } from "./button";
import ClearIcon from "../icons/clear.svg";
import CancelIcon from "../icons/cancel.svg";

export const dateId = 202406191303;
const strDateId = dateId.toString();
export function PopupComponent(props: { onClose: () => void }) {
  const handleSaveSetting = () => {
    localStorage.setItem(
      "popupSetting",
      JSON.stringify({ id: dateId, hasNotice: false }),
    );
    props.onClose();
  };
  const handleDateId = () => {
    const year = strDateId.substring(0, 4);
    const month = strDateId.substring(4, 6);
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
          <p className={styles["title"]}>6月好运连连</p>
          <p className={styles["tags-title"]}>现支持模型如下：</p>
          <p className={styles["tags"]}>
            <span className={styles["tag"]}>gpt-4</span>
            <span className={styles["tag"]}>gpt-4-turbo</span>
            <span className={styles["tag"]}>gpt-3.5-turbo</span>
            <span className={styles["tag"]}>谷歌gemini-pro</span>
            <span className={styles["tag"]}>谷歌gemini-1.5-pro</span>
            <span className={styles["tag"]}>谷歌gemini-1.5-flash</span>
            <span className={styles["tag"]}>谷歌gemini-pro-vision</span>
          </p>
          <p className={styles["des"]}>保底可用模型gemini-pro系列</p>
          <div className={styles["tip"]}>
            <p className={styles["tip-title"]}>PS:</p>
            <p className={styles["tip-content"]}>{/* 发神经的语句 */}</p>
          </div>
          <img
            className={styles["img"]}
            src="https://pic.ziyuan.wang/user/guest/2024/04/arbgc-m4k32_b2a3072280319.gif"
          />
        </div>
      </Modal>
    </div>
  );
}

export default PopupComponent;
