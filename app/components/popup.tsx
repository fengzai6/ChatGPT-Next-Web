import React from "react";
import styles from "./popup.module.scss";
import { Modal } from "./ui-lib";
import { IconButton } from "./button";
import ClearIcon from "../icons/clear.svg";
import CancelIcon from "../icons/cancel.svg";

export const dateId = 20240203;
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
          <p className={styles["title"]}>🤧啊啊啊！</p>
          <p>很抱歉，由于模型资源有限，gpt-4暂无法使用</p>
          <p>现在支持模型如下：</p>
          <p className={styles["tags"]}>
            {/* <span className={styles["tag"]}>gpt-4-0314</span> */}
            <span className={styles["tag"]}>gpt-3.5-turbo</span>
            <span className={styles["tag"]}>gpt-3.5-turbo-0301</span>
            <span className={styles["tag"]}>gpt-3.5-turbo-0613</span>
            <span className={styles["tag"]}>gpt-3.5-turbo-1106</span>
            <span className={styles["tag"]}>谷歌gemini-pro</span>
          </p>
          <p>😉使用愉快~</p>
          <div className={styles["tip"]}>
            <p className={styles["tip-title"]}>PS:</p>
            <p className={styles["tip-content"]}>
              {/* 一段人生格言 */}
              人生是一段旅程，不要在乎目的地，而要在乎沿途的风景
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PopupComponent;
