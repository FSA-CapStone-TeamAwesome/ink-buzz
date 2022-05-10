import { auth } from "firebase-admin"


`databases/database/documents/users/${auth.uid}`
//on sign up create the above path

let userObject = {
  owner: auth.uid,
  data: {
    isAdmin: 'true or false',
    email: 'emailstring',
    location: 'coordinates in string, set on login?',
    followers: {},
    following: {},
  },
  photos: {
    photoDateString: {location: 'path in string',
                  permission: 'public or private',
                  category: 'regular or wishlist or profilePic'}
  },
  account: {
    payPal: '',
    Stripe: '',
  }
}
