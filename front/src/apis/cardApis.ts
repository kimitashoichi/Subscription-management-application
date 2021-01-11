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
    return { cards }
  } catch (error) {
    return { error }
  }
};

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