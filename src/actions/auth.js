import {
  firebase,
  googleAuthProvider,
  githubAuthProvider
} from '../firebase/firebase';

export const login = uid => ({
  type: 'LOGIN',
  uid
});

export const startGoogleLogin = () => {
  return () => {
    return firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .catch(error => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          const pendingCred = error.credential;
          return firebase
            .auth()
            .fetchProvidersForEmail(error.email)
            .then(providers => {
              return firebase
                .auth()
                .signInWithRedirect(providers[0])
                .then(result => {
                  return result.user;
                });
            })
            .then(user => {
              return user.linkWithCredential(pendingCred);
            });
        }
        throw error;
      });
  };
};

export const startGithubLogin = () => {
  return () => {
    return firebase
      .auth()
      .signInWithPopup(githubAuthProvider)
      .catch(error => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          const pendingCred = error.credential;
          return firebase
            .auth()
            .fetchProvidersForEmail(error.email)
            .then(providers => {
              return firebase
                .auth()
                .signInWithRedirect(providers[0])
                .then(result => {
                  return result.user;
                });
            })
            .then(user => {
              return user.linkWithCredential(pendingCred);
            });
        }
        throw error;
      });
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
