import { Router, Request, Response } from 'express';
import { addCandidate, findCandidateById } from '../../application/services/candidateService';
import { CandidateService } from '../../domain/services/CandidateService';
import { CandidateStageDto } from '../../domain/dtos/CandidateStageDto';

export class CandidateController {
  private router: Router;
  private candidateService: CandidateService;

  constructor() {
    this.router = Router();
    this.candidateService = new CandidateService();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/positions/:id/candidates', this.getCandidatesByPosition.bind(this));
    this.router.put('/candidates/:id/stage', this.updateCandidateStage.bind(this));
  }

  private async getCandidatesByPosition(req: Request, res: Response): Promise<void> {
    try {
      const positionId = parseInt(req.params.id);
      const candidates = await this.candidateService.getCandidatesByPosition(positionId);
      res.json(candidates);
    } catch (error: unknown) {
      res.status(500).json({
        message: 'Error al obtener los candidatos',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  private async updateCandidateStage(req: Request, res: Response): Promise<void> {
    try {
      const candidateId = parseInt(req.params.id);
      const { new_stage } = req.body as CandidateStageDto;

      await this.candidateService.updateCandidateStage(candidateId, new_stage);

      res.json({
        message: "Candidate stage updated successfully",
        candidate_id: candidateId,
        new_stage: new_stage
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: 'Error al actualizar la etapa del candidato',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  public getRouter(): Router {
    return this.router;
  }
}

export const addCandidateController = async (req: Request, res: Response) => {
    try {
        const candidateData = req.body;
        const candidate = await addCandidate(candidateData);
        res.status(201).json({ message: 'Candidate added successfully', data: candidate });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ message: 'Error adding candidate', error: error.message });
        } else {
            res.status(400).json({ message: 'Error adding candidate', error: 'Unknown error' });
        }
    }
};

export const getCandidateById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }
        const candidate = await findCandidateById(id);
        if (!candidate) {
            return res.status(404).json({ error: 'Candidate not found' });
        }
        res.json(candidate);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export { addCandidate };