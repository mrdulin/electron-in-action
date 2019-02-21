const credentials = {
  QINIU_AK: process.env.QINIU_AK || '',
  QINIU_SK: process.env.QINIU_SK || '',
  QINIU_BUCKET: process.env.QINIU_BUCKET || ''
};

module.exports = { credentials };
