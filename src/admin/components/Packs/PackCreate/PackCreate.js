import React from "react";
import s from "./PackCreate.module.css"
import PaqueteCreate from "../../../../components/PaqueteCreate/PaqueteCreate"

export default function PackCreate() {
  return <div>
    <div className={s.container}>
        <PaqueteCreate />
    </div>
  </div>;
}
