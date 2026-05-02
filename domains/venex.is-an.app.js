addSubDomain({
  description: 'my profile site',
  domain: 'is-an.app', 
  subdomain: 'venex',
  owner: {
    repo: 'https://github.com/adornyt5-cloud/venex.is-an.app',
    email: 'adornyt5@gmail.com',
  },
  record: {
    CNAME: 'adornyt5-cloud.github.io',
  },
  proxy: false,
});
