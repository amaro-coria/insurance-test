import { Request, Response, NextFunction } from 'express';
import { Logger } from '@nestjs/common';

export function loggerMiddleware(req: Request, res: Response, next: NextFunction): void {
  const logger = new Logger('HTTP');
  const { method, originalUrl } = req;
  const userAgent = req.get('user-agent') || '';

  res.on('finish', () => {
    const { statusCode } = res;
    const contentLength = res.get('content-length');

    logger.log(`${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${req.ip}`);
  });

  next();
}
