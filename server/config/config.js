var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 4000;
  process.env.NODE_ENV === 'production'
}