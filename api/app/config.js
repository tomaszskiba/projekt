const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://tomaszskiba:zaq12wss@ds157834.mlab.com:57834/projekt',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
