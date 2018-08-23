import { CognitoUserAttribute } from 'amazon-cognito-identity-js'

import { getUserPool } from './config'

export default function(email, password, customAttributesList) {
  const userPool = getUserPool()
  const attributeList = [
    ...customAttributesList.map(
      attribute => new CognitoUserAttribute(attribute)
    ),
    new CognitoUserAttribute({
      Name: 'email',
      Value: email
    })
  ]

  return new Promise((resolve, reject) => {
    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}
