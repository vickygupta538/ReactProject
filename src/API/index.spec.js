import axios from "axios";
import { get } from "./index";
// import jest from "jest";
import { searchCharacter } from "../endpoints";
jest.mock("axios");

describe("API layer tests", () => {
  it("should call a fetchData function", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: "test data"
      })
    );
    const result = await get(searchCharacter, "sk");
    expect(result).toEqual({ data: "test data" });
  });
});
