import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  return await Promise.allSettled([uploadPhoto(), createUser()])
    .then((val) => {
      const arr = val.map((line) => {
        if (line.reason !== undefined) {
          return null;
        }
        return (line.value);
      });
      return ({ photo: arr[0], user: arr[1] });
    });
}
