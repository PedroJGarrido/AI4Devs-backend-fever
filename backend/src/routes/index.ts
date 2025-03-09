import { Application } from 'express';
import { CandidateController } from '../presentation/controllers/candidateController';
import candidateRoutes from './candidateRoutes';

export function setupRoutes(app: Application): void {
  const candidateController = new CandidateController();
  app.use('/', candidateController.getRouter());
  app.use('/candidates', candidateRoutes);
}