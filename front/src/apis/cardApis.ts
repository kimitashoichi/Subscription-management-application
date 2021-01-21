import firebase from '../utils/firebase';
import * as Models from '../models/CardModels';


export const AddCardBody = async (data: Models.AddCardBody) => {
  try {
    await firebase
    .firestore()
    .collection('test')
    .doc()
    .set(data)
    .catch((error) => {
      console.log('postIdea Error Firebase')
      throw new Error(error.message);
    })
    const success = { success: 'PostIdea 200 ok' };
    return { success }
  } catch(error) {
    console.log('postIdea Error')
    return { error }
  }
}


// TODO:ユーザーIDが一致したデータしか取得できないようにする => 本来であれば引数にユーザーIDを渡す
export const GetAllCardBody = async (id: string) => {
  try {
    const cards: Models.CardBody[] = [];
    await firebase
    .firestore()
    .collection('test')
    .where('userId', '==', id)
    .get()
    .then(snapShot => {
      if (snapShot.empty) {
        return;
      }
      snapShot.forEach(doc => {
        cards.push({
          id: doc.id,
          userId: doc.data().userId,
          name: doc.data().name ? doc.data().name : "empty",
          price: doc.data().price ? doc.data().price : 0,
          caption: doc.data().caption ? doc.data().caption : "empty"
        });
      });
    }).catch(error => {
      throw new Error(error.message)
    });
    CalculationOfTotalAmount(TotalAmountCalculation(id, cards), id);
    return { cards }
  } catch (error) {
    return { error }
  }
};

function TotalAmountCalculation (userId: string, cards: Models.CardBody[]) :any {
  let postData = {};
  let amount = 0;
  for(let i = 0; i < cards.length; i++) {
    amount += cards[i].price;
  }
  postData = {
    userId: userId,
    amount: amount
  }
  return { postData }
}

// 合計金額の投稿処理
export const CalculationOfTotalAmount = async (postData: any, userId: string) => {
  try {
    await firebase
    .firestore()
    .collection("amount")
    .doc(userId)
    .set(postData)
    .catch((error) => {
      console.log('postIdea Error Firebase')
      throw new Error(error.message);
    })
    console.log('CALC AMOUNT OK API')
    const success = { success: 'PostIdea 200 ok' };
    return { success }
  } catch (error) {
    return { error }
  }
}

// 合計金額の取得処理
export const GetAmount = async (userId: string) => {
  try {
    let amount;
    await firebase
    .firestore()
    .collection("amount")
    .doc(userId)
    .get()
    .then(doc => {
      if (!doc.exists) {
        return;
      }
      const data = Object.assign({}, doc.data())
      amount = data;
      console.log("amont", amount);
    }).catch((error) => {
      throw new Error(error.message);
    })
    return { amount }
  } catch (error) {
    return { error }
  }
}

// 削除処理
export const DeleteCardBody = async (id: string) => {
  try {
    await firebase
    .firestore()
    .collection("test")
    .doc(id)
    .delete()
    .catch(errror => {
      throw new Error(errror.message)
    })
    const success = {success: "200 OK DELETE SUCCESS"};
    return { success }
  } catch  (error) {
    return { error }
  }
}

// 編集処理
export const EditCardBody = async (data: Models.CardBody) => {
  try {
    await firebase
    .firestore()
    .collection("test")
    .doc(data.id)
    .update(data)
    .catch(error => {
      throw new Error(error.message)
    })
    const success = {success: "200 OK EDIT SUCCESS"};
    return {success}
  } catch (error) {
    return { error }
  }
}