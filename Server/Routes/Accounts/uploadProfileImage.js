 const AWS = require('aws-sdk');
 const fs = require('fs');
 const fileType = require('file-type');
 const bluebird = require('bluebird');
 const multiparty = require('multiparty');
 
 // configure the keys for accessing AWS
 AWS.config.update({
   accessKeyId: process.env.AWS_NON_SECRET,
   secretAccessKey: process.env.AWS_SECRET
 });
 // configure AWS to work with promises
 AWS.config.setPromisesDependency(bluebird);
 const s3 = new AWS.S3();
 const uploadFile = (buffer, name, type) => {
   const params = {
     ACL: 'public-read',
     Body: buffer,
     Bucket: 'roshihealth',
     ContentType: type.mime,
     Key: `${name}.${type.ext}`
   };
   return s3.upload(params).promise();
 };
 module.exports = (request, response) => {
   const form = new multiparty.Form();
     form.parse(request, async (error, fields, files) => {
       if (error) throw new Error(error);
       try {
         const path = files.file[0].path;
         const buffer = fs.readFileSync(path);
         const type = fileType(buffer);
         const timestamp = Date.now().toString();
         const fileName = `bucketFolder/'${timestamp}'-lg`;
         const data = await uploadFile(buffer, fileName, type);
         return response.status(200).send(data);
       } catch (error) {
         return response.status(400).send(error);
       }
     });
 };