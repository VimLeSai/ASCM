import "reflect-metadata";
import { DataSource } from "typeorm";
import { ascmcounts } from "./entity/ascmcounts";
import { ascmfeed_v2 } from "./entity/ascmfeed_v2";
// import { ascmfeed_v20 } from "./entity/ascmfeed_v20";

const AppDataSource = new DataSource({
  type: "mariadb",
  host: "ascmconference-mariadb.c8kgwuuup0za.us-east-2.rds.amazonaws.com",
  port: 3306,
  username: "Manager",
  password: "detroit123!",
  database: "ascmdb",
  synchronize: false,
  logging: false,
  entities: [ascmcounts, ascmfeed_v2],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
