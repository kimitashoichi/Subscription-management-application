import firebase from '../utils/firebase';
import * as Models from '../models/CardModels';


// TODO:ログイン後のユーザーしか使用できないようにしたいためユーザーIDを引数に渡す
export const AddCardBody = async (data: Models.CardBody) => {
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
export const GetAllCardBody = async () => {
  try {
    const cards: Models.CardBody[] = [];
    await firebase
    .firestore()
    .collection('test')
    .get()
    .then(snapShot => {
      if (snapShot.empty) {
        return;
      }
      snapShot.forEach(doc => {
        cards.push({
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