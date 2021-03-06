import { Request, Response } from "express";
import { getCustomRepository, Not, IsNull } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class NpsController {

    /**
     * 
     Cálculo NPS 
     
     Notas: 1 2 3 4 5 6 7 8 9 10
     Detratores => 0 - 6
     Passivos => 7 - 8
     Promotores => 9 - 10

     (Nº de promotores - Nº de detratores) / (Nº de respondentes) x 100

     */

    async execute(request: Request, response: Response) {
        const { survey_id } = request.params;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveysUser = await surveysUsersRepository.find({
            survey_id,
            value: Not(IsNull())
        })

        const detractor = surveysUser.filter(
            (survey) => survey.value >= 0 && survey.value <= 6
        ).length

        const promoters = surveysUser.filter(
            (survey) => survey.value >= 9 && survey.value <= 10
        ).length

        const passive = surveysUser.filter(
            (survey) => survey.value >= 7 && survey.value <= 8
        ).length

        const totalAnswers = surveysUser.length;

        const calculate = Number((((promoters - detractor) / totalAnswers) * 100).toFixed(2));

        return response.json({
            detractor,
            promoters,
            passive,
            totalAnswers,
            nps: calculate
        })

    }
}

export { NpsController };
