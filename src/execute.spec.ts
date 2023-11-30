import execute from "./execute";

describe("Execute commands", () => {
  const consoleSpy = jest.spyOn(console, "log");

  describe("Command E", () => {
    it("moves right", () => {
      execute("E");

      expect(consoleSpy).toHaveBeenCalledWith(
        'Commands ran: E. Final position: {"x":1,"y":0}'
      );
    });

    it("does not move right beyond the edge", () => {
      execute("E E E E E E E E E E E");

      expect(consoleSpy).toHaveBeenCalledWith(
        'Commands ran: E E E E E E E E E E E. Final position: {"x":9,"y":0}'
      );
    });
  });

  describe("Command N", () => {
    it("moves up", () => {
      execute("N");

      expect(consoleSpy).toHaveBeenCalledWith(
        'Commands ran: N. Final position: {"x":0,"y":1}'
      );
    });

    it("does not move up beyond the edge", () => {
      execute("N N N N N N N N N N N");

      expect(consoleSpy).toHaveBeenCalledWith(
        'Commands ran: N N N N N N N N N N N. Final position: {"x":0,"y":9}'
      );
    });
  });

  describe("Command S", () => {
    it("moves down", () => {
      execute("N N S");

      expect(consoleSpy).toHaveBeenCalledWith(
        'Commands ran: N N S. Final position: {"x":0,"y":1}'
      );
    });

    it("does not move down beyond the edge", () => {
      execute("N N N N N N N N N S S S S S S S S S S");

      expect(consoleSpy).toHaveBeenCalledWith(
        'Commands ran: N N N N N N N N N S S S S S S S S S S. Final position: {"x":0,"y":0}'
      );
    });
  });

  describe("Command W", () => {
    it("moves left", () => {
      execute("E E W");

      expect(consoleSpy).toHaveBeenCalledWith(
        'Commands ran: E E W. Final position: {"x":1,"y":0}'
      );
    });

    it("does not move left beyond the edge", () => {
      execute("E E E E E E E E E W W W W W W W W W W");

      expect(consoleSpy).toHaveBeenCalledWith(
        'Commands ran: E E E E E E E E E W W W W W W W W W W. Final position: {"x":0,"y":0}'
      );
    });
  });

  describe("Invalid command", () => {
    it("throws error", () => {
      expect(() => execute("Z")).toThrow("Invalid direction");
    });
  });
});
