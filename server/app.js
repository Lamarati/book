import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors'
import parentDebug from 'debug'

import books from './api/books/books.controller.js'
import { getConfig } from './config.js';
import { getCorsPublicOptions } from './utils/cors.js';

const debug = parentDebug('book:app');

export default function createApp() {
  const app = express();
  const config = getConfig();

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  
  const corsOptions = getCorsPublicOptions(config);

  /**
   * Controllers
   */
  app.use(cors(corsOptions), books)
  
  app.use(function(req, res, next) {
    next(createError(404));
  });
  
  debug('App setup succesful')

  return app;
}
