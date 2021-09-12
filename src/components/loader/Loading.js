import * as React from "react";
import style from './Loader.module.css'

function Loading(props) {
  return (
    <div className={style.box}>
      <div className={style.spinner}></div>
    </div>
  );
}

export default Loading;
