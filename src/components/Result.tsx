import { useClipboard } from "use-clipboard-copy";
import toast, { Toaster } from "react-hot-toast";
import { ReactComponent as Done } from "../images/done.svg";

export default function Result(props: any) {
  const imgUrl = props.response.data.secure_url;
  const clipboard = useClipboard();

  const notify = () => toast.success("Copied successfully");

  var animateButton = function (e: any) {
    e.preventDefault();
    //reset animation
    e.target.classList.remove("animate");

    e.target.classList.add("animate");
    setTimeout(function () {
      e.target.classList.remove("animate");
    }, 700);
  };

  var bubblyButtons = document.getElementsByClassName("bubbly-button");

  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener("click", animateButton, false);
  }

  return (
    <div className="IU-container">
      <div className="success">
        <Done id="done" />
        <h3>Uplouded Successfully</h3>
      </div>
      <div className="image-result">
        <img src={imgUrl} alt="" />
      </div>
      <div className="result">
        <input
          ref={clipboard.target}
          type="text"
          name=""
          id="inp-result"
          readOnly
          value={imgUrl}
        />
        <button
          className="bubbly-button"
          onClick={() => {
            clipboard.copy();
            notify();
          }}
          id="copy"
        >
          Copy
        </button>
        <Toaster />
      </div>
    </div>
  );
}
