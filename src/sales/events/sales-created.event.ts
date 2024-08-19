export class SalesCreatedEvent {
  constructor(
    public readonly id: string,
    public readonly userData: any,
  ) { }
}