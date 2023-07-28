import React, { useRef, useState } from "react";

export const Pin = ({ length, maxChar }) => {
  const [inputLength] = useState(new Array(length).fill(0));
  const inputRef = useRef([]);

  const handleFocus = (e, currentIndex) => {
    const { value } = e.target;
    if (value.length >= maxChar && currentIndex < length - 1) {
      inputLength.current[currentIndex + 1].focus();
    }
  };

  const handleBackspace = (e, currentIndex) => {
    const { value } = e.target;
    if (value.length === 0 && currentIndex > 0) {
      inputRef.current[currentIndex - 1].focus();
    }
  };

  const keyHandler = (e) => {
    // console.log(e);
    if (e.keyCode === 8) {
      handleBackspace(e, index);
    } else {
      handleFocus(e, index);
    }
  };

  const pasteHandler = (e) => {
    // console.log(e.clipboardData.getData("Text"));
    let pasteValue = e.clipboardData.getData("Text").trim().split("");
    // console.log(pasteValue);
    //   console.log(pasteValue.length=length);
    pasteValue.length = length;
    // console.log(pasteValue);
  };

  return (
    <div onPaste={pasteHandler}>
      {inputLength.map((el, index) => {
        return (
          <input
            type="text"
            ref={(e) => {
              inputRef.current[index] = e;
            }}
            maxLength={maxChar}
            onChange={(e) => handleFocus(e, index)}
            onKeyUp={keyHandler}
          />
        );
      })}
    </div>
  );
};
