const { clipboard } = require('electron');
const fs = require('fs');
const qiniu = require('qiniu');

const { credentials } = require('../../credentials');

const qiniuConf = new qiniu.conf.Config();
qiniuConf.zone = qiniu.zone.Zone_z0;
qiniuConf.useHttpsDomain = true;
qiniuConf.useCdnDomain = true;

const mac = new qiniu.auth.digest.Mac(credentials.QINIU_AK, credentials.QINIU_SK);
const options = {
  scope: credentials.QINIU_BUCKET
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken = putPolicy.uploadToken(mac);

const formUploader = new qiniu.form_up.FormUploader();
var putExtra = new qiniu.form_up.PutExtra();

const Clipboard = {
  readImage() {
    const formats = clipboard.availableFormats();
    console.log('formats: ', formats);
    const image = clipboard.readImage();
    if (image.isEmpty()) {
      console.log('image is empty');
      return;
    }
    const imageBuffer = image.toPNG();
    const imageBase64 = imageBuffer.toString('base64');
    const key = '';

    formUploader.put(uploadToken, key, imageBase64, putExtra, function(respErr, respBody, respInfo) {
      if (respErr) {
        console.error(respErr);
      }
      if (respInfo.statusCode == 200) {
        console.log(respBody);
      } else {
        console.log(respInfo.statusCode);
        console.log(respBody);
      }
    });
  }
};

module.exports = Clipboard;
