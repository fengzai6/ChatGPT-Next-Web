import React from "react";
import styles from "./popup.module.scss";
import { Modal } from "./ui-lib";
import { IconButton } from "./button";
import ClearIcon from "../icons/clear.svg";
import CancelIcon from "../icons/cancel.svg";

export const dateId = 202403271225;
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
          <p className={styles["title"]}>偶尔的小抽风见谅</p>
          <p className={styles["tags-title"]}>现支持模型不一定如下：</p>
          <p className={styles["tags"]}>
            <span className={styles["tag"]}>gpt-4</span>
            <span className={styles["tag"]}>gpt-4-1106-preview</span>
            <span className={styles["tag"]}>gpt-4-0125-preview</span>
            <span className={styles["tag"]}>gpt-4-turbo-preview</span>
            <span className={styles["tag"]}>gpt-3.5-turbo</span>
            <span className={styles["tag"]}>gpt-3.5-turbo-16k</span>
            {/* <span className={styles["tag"]}>gpt-3.5-turbo-1106</span> */}
            <span className={styles["tag"]}>谷歌gemini-pro</span>
            <span className={styles["tag"]}>谷歌gemini-pro-vision</span>
            {/* <span className={styles["tag"]}>claude-3-haiku-20240307</span> */}
          </p>
          <p className={styles["des"]}>
            基础问题建议使用3.5-turbo，回复快，消耗少（gpt4费用为3.5的15倍，轻点😳），保底可用模型Gemini-pro
          </p>
          <div className={styles["tip"]}>
            <p className={styles["tip-title"]}>PS:</p>
            <p className={styles["tip-content"]}>
              {/* 发神经的语句 */}
              通知不在自动弹出，有的时候左下角会有红点，点击不在提示去除；
              gpt模型预计要晚点恢复，先用gemini-pro
            </p>
          </div>
          <img
            className={styles["img"]}
            src="https://i0.hdslb.com/bfs/article/679dcbdba4e6e0c246e07002281a71993493131519527445.jpg@.webp"
          />
        </div>
      </Modal>
    </div>
  );
}

export default PopupComponent;
