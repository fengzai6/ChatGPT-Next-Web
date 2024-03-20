import React from "react";
import styles from "./popup.module.scss";
import { Modal } from "./ui-lib";
import { IconButton } from "./button";
import ClearIcon from "../icons/clear.svg";
import CancelIcon from "../icons/cancel.svg";

export const dateId = 20240321;
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
          <p className={styles["title"]}>模型多多，趣味多多🎉</p>
          <p className={styles["tags-title"]}>现支持模型如下：</p>
          <p className={styles["tags"]}>
            <span className={styles["tag"]}>gpt-4</span>
            <span className={styles["tag"]}>gpt-4-1106-preview</span>
            <span className={styles["tag"]}>gpt-4-0125-preview</span>
            <span className={styles["tag"]}>gpt-4-turbo-preview</span>
            <span className={styles["tag"]}>gpt-3.5-turbo</span>
            <span className={styles["tag"]}>gpt-3.5-turbo-0125</span>
            <span className={styles["tag"]}>gpt-3.5-turbo-1106</span>
            <span className={styles["tag"]}>谷歌gemini-pro</span>
            <span className={styles["tag"]}>谷歌gemini-pro-vision</span>
            <span className={styles["tag"]}>claude-3-haiku-20240307</span>
          </p>
          <p className={styles["des"]}>
            Claude 3
            Haiku，构建能够提供近乎即时响应的生成式人工智能应用程序。Haiku
            具备图像转文本视觉能力，能够理解包括英语在内的多种语言，并在 200k
            上下文窗口中具有更高的可操控性 对比Gemini那可强多了
          </p>
          <div className={styles["tip"]}>
            <p className={styles["tip-title"]}>PS:</p>
            <p className={styles["tip-content"]}>
              {/* 发神经的语句 */}
              某个人，不回消息永远别回了，到底群消息重要还是我重要，整个群我只对你一个人有感觉，难道你心里就不明白吗？不然我整天闲得来这里聊天，我不会跑别的地方聊天玩吗？你以为我天天闲得慌吗？我如此的喜欢你，你却对我无动于衷，这甜甜的恋爱，你到底打不打算要了？我说的是谁自己心里清楚。今天疯狂星期四v我50，你还有机会挽救。
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PopupComponent;
