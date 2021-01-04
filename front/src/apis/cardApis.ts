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