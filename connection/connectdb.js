module.exports = {
  config: {
    server: 'hc-sysdev\\qa',
    database: 'LearningReact',
    user: 'qat',
    password: 'qapass1'
  },
  port: function() {
    var portdata = process.env.PORT || 5000;
    return portdata;
  },
  bar: function() {
    console.log('Ass');
  }
};
