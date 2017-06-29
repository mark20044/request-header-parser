module.exports = (request, callback) => {
  var output = {
    ipaddress: request.headers['x-forwarded-for'].match(/(.*?)\,/)[0],
    language: request.headers['accept-language'].match(/(.*?)\,/)[0],
    software: request.headers['user-agent'].match(/\(.*?\)/)[0].slice(1,-1)
  };
    
  callback(null, output);
}