export default function getFullResponseFromAPI(success) {
  if (success) {
    return Promise.resolve({ status: 200, body: 'Success' });
  }
  return (Promise.resolve(new Error('The fake API is not working currently')));
}
