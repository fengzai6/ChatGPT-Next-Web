import CancelIcon from "../icons/cancel.svg";
import ClearIcon from "../icons/clear.svg";
import Copy from "../icons/copy.svg";
import { IconButton } from "./button";
import styles from "./popup.module.scss";
import { Modal, showToast } from "./ui-lib";

const year = "2024";
const month = "07";
const day = "21";
const time = "1538";

export const dateId: string = year + month + day + time;

export function PopupComponent(props: { onClose: () => void }) {
  const handleSaveSetting = () => {
    localStorage.setItem(
      "popupSetting",
      JSON.stringify({ id: dateId, hasNotice: false }),
    );
    props.onClose();
  };

  const handleDateId = () => {
    const year = dateId.substring(0, 4);
    const month = dateId.substring(4, 6);
    const day = dateId.substring(6, 8);
    const hour = dateId.substring(8, 10);
    const minute = dateId.substring(10, 12);
    return year + "/" + month + "/" + day + " " + hour + ":" + minute;
  };

  const handleCopy = () => {
    const url = "https://chat.qqwj.top";
    const input = document.createElement("input");
    document.body.appendChild(input);
    input.setAttribute("value", url);
    input.select();
    navigator.clipboard.writeText(url);
    document.body.removeChild(input);
    showToast("已复制到剪贴板");
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
          <p className={styles["title"]}>欢迎使用 Chat With U！</p>
          <p className={styles["tags-title"]}>现支持模型如下：</p>
          <p className={styles["tags"]}>
            <span className={styles["tag"]}>gpt-4</span>
            <span className={styles["tag"]}>gpt-4-turbo</span>
            {/* <span className={styles["tag"]}>claude-3.5-sonnet</span> */}
            <span className={styles["tag"]}>谷歌gemini-pro</span>
            <span className={styles["tag"]}>谷歌gemini-1.5-pro</span>
            <span className={styles["tag"]}>谷歌gemini-1.5-flash</span>
          </p>
          {/* <p className={styles["tags-title"]}>未来可能支持模型：</p>
          <p className={styles["tags"]}>
            <span className={styles["tag"]}>文心一言</span>
            <span className={styles["tag"]}>豆包</span>
            <span className={styles["tag"]}>通义千问</span>
            <span className={styles["tag"]}>其他</span>
          </p> */}
          <p className={styles["des"]}>保底可用模型gemini-pro系列</p>
          <div className={styles["tip"]}>
            <p className={styles["tip-title"]}>PS:</p>
            <p className={styles["tip-content"]}>
              密码联系qqwj03
              <IconButton
                text={"点我快速复制新域名：https://chat.qqwj.top"}
                icon={<Copy />}
                onClick={() => {
                  handleCopy();
                }}
              />
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PopupComponent;
