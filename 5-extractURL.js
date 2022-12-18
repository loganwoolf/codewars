const domainName = (url) => removeSlug(removeProtocol(url));

const removeProtocol = (url) =>
  url.includes('://') ? url.split('://')[1] : url;

const removeSlug = (url) => (url.includes('/') ? url.split('/')[0] : url);

const removeTLD = (url) => url.slice(0, url.lastIndexOf('.'));

module.exports = { domainName, removeProtocol, removeSlug, removeTLD };
