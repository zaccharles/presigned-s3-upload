'use strict';

const AWS = require('aws-sdk');
const uuid = require('uuid');

const BUCKET_NAME = process.env['BUCKET_NAME'];

const s3 = new AWS.S3();

module.exports.sign = async _ => {
  let id = uuid.v4();
  
  let params = { 
    Bucket: BUCKET_NAME, 
    Fields: { 
      key: id
    },
    Expires: 300,
    Conditions: [
      ["content-length-range", 0, 524288]
    ]
  };

  let data = await createPresignedPostPromise(params);

  return {
    statusCode: 200,
    body: JSON.stringify({ id, data }),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  };
};

function createPresignedPostPromise(params) {
  return new Promise((resolve, reject) => {
    s3.createPresignedPost(params, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    })
  });
}