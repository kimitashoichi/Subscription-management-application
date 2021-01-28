import React, { useState, useEffect } from "react";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import * as Models from "../../models/CardModels";
import "./AmountComponent.css";

interface Props {
  amount: Models.CardPriceAmount;
}

const monthList = {
  oneMonth : {
    month: "Monthly Fee",
    value: 1
  },
  threeMonth : {
    month: "Three Month Fee",
    value: 3
  },
  sixMonth : {
    month: "Six Month Fee",
    value: 6
  },
  oneYear : {
    month: "One Year Fee",
    value: 12
  }, 
}

const AmountComponent: React.FC<Props> = ({
  amount
}) => {
  let fle = amount.amount;
  const [month, setMonth] = useState<string>('Monthly Fee');
  const [flexAmount ,setFlexAmount] = useState<number>(fle);

  useEffect(() => {
    localStorage.setItem('amount', String(fle));
    setFlexAmount(fle);
  }, [fle])
 
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    switch(event.target.value) {
      case monthList.oneMonth.month:
        setMonth(event.target.value as string);
        setFlexAmount(amount.amount * monthList.oneMonth.value)
        return;
      case monthList.threeMonth.month:
        setMonth(event.target.value as string);
        setFlexAmount(amount.amount * monthList.threeMonth.value)
        return;
      case monthList.sixMonth.month:
        setMonth(event.target.value as string);
        setFlexAmount(amount.amount * monthList.sixMonth.value);
        return;
      case monthList.oneYear.month:
        setMonth(event.target.value as string);
        setFlexAmount(amount.amount * monthList.oneYear.value);
        return;
      default:
        return;
    }
  };

  return (
    <>
     {console.log(amount.amount)}
     <div className="box">
     { amount.amount !== 0 ?
       <div className="container">
         <FormControl variant="outlined">
         <Select
          value={month}
          onChange={event => handleChange(event)}
        >
          <MenuItem value={monthList.oneMonth.month}>Monthly Fee</MenuItem>
          <MenuItem value={monthList.threeMonth.month}>Three Month Fee</MenuItem>
          <MenuItem value={monthList.sixMonth.month}>Six Month Fee</MenuItem>
          <MenuItem value={monthList.oneYear.month}>One Year Fee</MenuItem>
        </Select>
         </FormControl>
         <h1 className="month-fee">￥{flexAmount}</h1>
       </div>
       :
       <h2>合計金額を計算できませんでした。</h2>
     }
     </div>
    </>
  )
};

export default AmountComponent;