import { Command } from 'commander';
import * as Commander from 'commander';

export abstract class BaseCommand {
  protected readonly name: string;
  protected readonly description: string;
  protected command: Commander.Command;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;

    this.command = new Command(name);
    this.command.description(description);

    this.command.action(async () => {
      await this.action();
    });
  }

  protected abstract action(): Promise<void>;
  abstract create(): Commander.Command;
}
