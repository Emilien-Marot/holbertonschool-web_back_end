import { uploadPhoto } from './utils';

export default function getFullResponseFromAPI(success) {
  if (success) {
    return Promise.resolve(uploadPhoto())
  } else {
    return (new Promise(() => {throw 'The fake API is not working currently'}))
  }
}
