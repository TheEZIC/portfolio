import { Inject, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AboutModule } from "./about/about.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeORMConfig } from "../TypeORM.config";
import { ProjectsModule } from "./projects/projects.module";
import { DataSource } from "typeorm";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env"
    }),
    TypeOrmModule.forRoot({
      ...(TypeORMConfig as any),
      autoLoadEntities: true,
    }),
    AboutModule,
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    this.runMigrations();
  }

  private runMigrations() {
    console.log("Running migrations");
    this.dataSource.runMigrations();
  }
}
