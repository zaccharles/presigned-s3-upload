# presigned-s3-upload
Examples of uploading to S3 using presigned URLs and presigned POST.  

This repo has an accompanying blog post: [S3 Uploads - Proxies vs Presigned URLs vs Presigned POSTs](https://medium.com/@zaccharles/9661e2b37932).

## Backend
Run `npm install` then `serverless deploy` in the `backend` directory.  

This will create an S3 bucket, two Lambda functions, and an API Gateway REST API.  

Focus on `post-signer.js` and `url-signer.js`.

## Frontend
Open `client.html` in the `frontend` directory.  

Replace the example URL with the one from your deployed backend.

Focus on `presigned-post.js` and `presigned-url.js`.