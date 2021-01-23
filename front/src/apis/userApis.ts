import firebase from '../utils/firebase';
import * as Models from "../models/UserModels";


// firebaseからログイン時に返却されるオブジェクトを使用できる形に整える関数
function setUserInfo(fuser: firebase.User | null): Models.LoginUser | null {
  if (!fuser) {
      return null;
  }
  return {
    id: fuser.uid,
    email: fuser.email ? fuser.email : '',
    name: fuser.displayName ? fuser.displayName : '',
  }
}


// ログイン機能
export const login = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    let loginUser = null;
    await firebase
    .auth()
    .signInWithPopup(provider)
    .then((user) => {
      if (!user) {
        return;
      }
      const data = Object.assign({}, setUserInfo(user.user));
      signUp(data);
      loginUser = data;
    }).catch((error) => {
      throw new Error(error.message); 
    })
    return { loginUser };
  } catch (error) {
    return { error };
  }
}

// 初回ログイン時にFireStoreにデータを追加する機能
export const signUp = async(data: Models.LoginUser) => {
  try {
    let flag: boolean = true;

    // check already signup user
    await firebase
    .firestore()
    .collection('users')
    .doc(data.id)
    .get()
    .then(user => {
      if(user.exists){
        flag = false;
      }
    })

    // create user model
    if(flag) {
      await firebase
      .firestore()
      .collection('users')
      .doc(data.id)
      .set(data)
      .catch(error => {
        throw new Error(error.message);
      })
    }

    const success = {success: '200 OK signUp API'};
    return { success };
  } catch(error) {
    return { error }; 
  }
}

// ログアウト機能
export const logout = async () => {
  try {
    await firebase
    .auth()
    .signOut()
    .then(info => {
      console.log('Logout API', info)
    }).catch(error => {
      throw new Error(error.message);
    })
    const success = { success: 'Logout OK'}
    return { success };
  } catch(error) {
    return { error };
  };
};

// ログイン状態の監視
export const loginMonitoring = async () => {
  try {
    let userInfo;
    await firebase
    .auth()
    .onAuthStateChanged(user => {
      if (!user) {
        return;
      }
      const data = Object.assign({}, setUserInfo(user));
      console.log(data.id, 'login check user');
      userInfo = data;
    })
    return { userInfo }
  } catch(error) {
    return { error };
  }
}

// ユーザーデータの取得
export const getUserData = async (id: string) => {
  try {
    let userInfo;
    if (id) {
      console.log(id)
      await firebase
      .firestore()
      .collection('users')
      .doc(id)
      .get()
      .then(doc => {
        if(!doc){
          return;
        }
        const uData = Object.assign({}, doc.data());
        console.log(uData, 'check api login state')
        userInfo = uData
      })
    }
    return { userInfo }
  } catch(error) {
    return { error }
  }
}