import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnsewerController {

    /**
     * 
     * https://localhost:3333/answers/YDlqaG-3nSO.dBgQYDlqiBREJn9lJhLtAAAAAX7gOfADyDyhx4xLnlgCtqo
     * 
     Route Params => Parametro que compõe a rota
     routes.get("/answers/:value")

     Query Params => Busca, Paginação, não obrigatórios
     ?
     chave=valor
     */

    async execute(request: Request, response: Response) {
        const { value } = request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        })

        if (!surveyUser) {
            throw new AppError("Survey User does not exists!")
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser);

    }
}

export { AnsewerController }