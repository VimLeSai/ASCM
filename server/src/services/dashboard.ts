import { AppDataSource } from "./../data-source";
import { ascmfeed_v2 } from "./../entity/ascmfeed_v2";
import { ascmcounts } from "./../entity/ascmcounts";
import { Request, Response } from "express";

export const list = (req: Request, res: Response) => {
  res.send("Ok");
};

export const counts = async (req: Request, res: Response) => {
  const ascmFeedRepo = AppDataSource.getRepository(ascmfeed_v2);
  const ascmCountsRepo = AppDataSource.getRepository(ascmcounts);

  const queryForTotal = ascmFeedRepo
    .createQueryBuilder(ascmfeed_v2.name)
    .select("COUNT(*)", "count");

  const queryForSubmitted = ascmCountsRepo
    .createQueryBuilder(ascmcounts.name)
    .select("COUNT(*)", "count");

  const totalRecords = await queryForTotal.getRawOne().then((r) => r.count);
  const totalSubmittedRecords = await queryForSubmitted
    .getRawOne()
    .then((r) => r.count);

  const headCounts = await ascmFeedRepo.find({
    take: 10,
    select: {
      count: true,
    },
  });

  const surveyCounts = await ascmCountsRepo
    .createQueryBuilder(ascmcounts.name)
    .select("max(submit_date)", "session_start_date")
    .select("count(id)", "count")
    .groupBy("minute(submit_date)")
    .getRawMany();

  res.json({
    headCounts: headCounts.map((d) => d.count),
    surveyCounts: surveyCounts.map((d) => Number(d.count)).splice(0, 10),
    total: Number(totalRecords),
    submitted: Number(totalSubmittedRecords),
    submittedPercentage: Number(
      (Number(totalSubmittedRecords) * 100) / (Number(totalRecords) || 1)
    ),
  });
};
