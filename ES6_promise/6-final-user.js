import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([uploadPhoto(fileName), signUpUser(firstName, lastName)])
    .then((val) => {
      const res = val.map((line) => {
        if (line.reason !== undefined) {
          return ({
            status: line.status,
            value: line.reason.toString()
          })
        }
        return (line)
      })
      console.log(res)
      return (res)
    });
}
