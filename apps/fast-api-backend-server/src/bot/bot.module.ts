import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BotModuleBase } from "./base/bot.module.base";
import { BotService } from "./bot.service";
import { BotController } from "./bot.controller";
import { BotResolver } from "./bot.resolver";

@Module({
  imports: [BotModuleBase, forwardRef(() => AuthModule)],
  controllers: [BotController],
  providers: [BotService, BotResolver],
  exports: [BotService],
})
export class BotModule {}
