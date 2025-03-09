import { PrismaClient } from '@prisma/client';
import { CandidatePositionResponseDto } from '../dtos/CandidateStageDto';

export class CandidateService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getCandidatesByPosition(positionId: number): Promise<CandidatePositionResponseDto[]> {
    const applications = await this.prisma.application.findMany({
      where: {
        positionId: positionId
      },
      include: {
        candidate: true,
        interviews: true
      }
    });

    return applications.map(app => {
      const averageScore = app.interviews.length > 0
        ? app.interviews.reduce((acc, int) => acc + (int.score ?? 0), 0) / app.interviews.length
        : 0;

      return {
        full_name: `${app.candidate.firstName} ${app.candidate.lastName}`,
        current_interview_step: app.currentInterviewStep.toString(),
        average_score: Number(averageScore.toFixed(1))
      };
    });
  }

  async updateCandidateStage(candidateId: number, newStage: string): Promise<void> {
    await this.prisma.application.updateMany({
      where: {
        candidateId: candidateId
      },
      data: {
        currentInterviewStep: parseInt(newStage)
      }
    });
  }
} 