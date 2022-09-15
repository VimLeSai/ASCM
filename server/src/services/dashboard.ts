import { AppDataSource } from "./../data-source";
import { ascmfeed_v2 } from "./../entity/ascmfeed_v2";
import { ascmcounts } from "./../entity/ascmcounts";
import { Request, Response } from "express";

export const list = (req: Request, res: Response) => {
  res.send("Ok");
};

export const counts = async (req: Request, res: Response) => {
  const queryForTotal = AppDataSource.getRepository(ascmfeed_v2)
    .createQueryBuilder(ascmfeed_v2.name)
    .select("COUNT(*)", "count");

  const queryForSubmitted = AppDataSource.getRepository(ascmcounts)
    .createQueryBuilder(ascmcounts.name)
    .select("COUNT(*)", "count");

  const totalRecords = await queryForTotal.getRawOne().then((r) => r.count);
  const totalSubmittedRecords = await queryForSubmitted
    .getRawOne()
    .then((r) => r.count);

  res.json({
    total: Number(totalRecords),
    submitted: Number(totalSubmittedRecords),
    submittedPercentage: Number(
      (Number(totalSubmittedRecords) * 100) / (Number(totalRecords) || 1)
    ),
  });
};
