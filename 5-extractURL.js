const domainName = (url) => removeProtocol(url);

const removeProtocol = (url) =>
  url.includes('://') ? url.split('://')[1] : url;
module.exports = { domainName, removeProtocol };
