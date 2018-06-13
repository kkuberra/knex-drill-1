// Update with your config settings.

module.exports = {
  
  development: {
    client: "pg",
    connection: 'postgres://localhost/resolutions'
  },
  production: {
    client: "pg",
    connection: "postgres://wsspptiaawtvbm:68088bd8c1053f01b0d978010b9f134645f0d15f122b608b9d659d1bd42567a8@ec2-23-23-226-190.compute-1.amazonaws.com:5432/d5vra0rtf30mch?ssl=true"
  }
};
