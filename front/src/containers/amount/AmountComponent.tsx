import React from "react";

import * as Models from "../../models/CardModels";
import "./AmountComponent.css";

interface Props {
  amount: Models.CardPriceAmount;
}

const AmountComponent: React.FC<Props> = ({
  amount
}) => {
  return (
    <>
     <div className="box">
     { amount.amount !== 0 ?
       <div className="container">
         <h2 className="month-title">Monthly fee</h2>
         <h1 className="month-fee">￥{amount.amount}</h1>
       </div>
       :
       <h2>合計金額を計算できませんでした。</h2>
     }
     </div>
    </>
  )
};

export default AmountComponent;