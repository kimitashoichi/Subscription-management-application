import React from "react";

import * as Models from "../../models/CardModels";

interface Props {
  amount: Models.CardPriceAmount;
}

const AmountComponent: React.FC<Props> = ({
  amount
}) => {
  return (
    <>
     <h1>合計金額</h1>
     { amount.amount !== 0 ?
       <h2>{amount.amount}</h2>
       :
       <h2>合計金額を計算できませんでした。</h2>
     }
    </>
  )
};

export default AmountComponent;