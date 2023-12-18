// // lib/s3-utils.ts
// import s3 from './aws-config';

// export const getSignedUrl = (bucket: string, key: string, expiresInSeconds = 60) => {
//   const params = {
//     Bucket: bucket,
//     Key: key,
//     Expires: expiresInSeconds,
//   };

//   return s3.getSignedUrl('getObject', params);
// };
