import { Application } from 'express';
import { CandidateController } from '../presentation/controllers/candidateController';

export function setupRoutes(app: Application): void {
  // ... otras rutas existentes ...
  
  const candidateController = new CandidateController();
  app.use('/', candidateController.getRouter());
} 