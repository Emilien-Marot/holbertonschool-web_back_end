import { uploadPhoto } from './utils';

export default function getFullResponseFromAPI(success) {
  if (success) {
    return Promise.resolve(uploadPhoto())
  } else {
    return (Promise.resolve(new Error('The fake API is not working currently')))
  }
}
