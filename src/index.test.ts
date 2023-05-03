import { start } from "./index";

describe("start", () => {
  it('Should log "Hello, World!"', () => {
    const consoleSpy = jest.spyOn(console, "log");
    start();
    expect(consoleSpy).toHaveBeenCalledWith("Hello, friend!");
  });
});
