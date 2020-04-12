'use strict';

const AWS = require('aws-sdk');
const uuid = require('uuid');

const BUCKET_NAME = process.env['BUCKET_NAME'];

const s3 = new AWS.S3();

module.exports.sign = async _ => {
  let id = uuid.v4();

  let params = { 
    Bucket: BUCKET_NAME, 
    Key: id
  };
  
  let url = await s3.getSignedUrlPromise('putObject', params);

  return {
    statusCode: 200,
    body: JSON.stringify({ id, data: { url } }),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  };
};
