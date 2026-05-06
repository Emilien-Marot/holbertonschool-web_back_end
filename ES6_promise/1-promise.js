import { uploadPhoto } from './utils';

export default function getFullResponseFromAPI(success) {
  return (new Promise(() => {
    if (success) {
      return (uploadPhoto());
    }
    throw 'The fake API is not working currently';
  }))
}
