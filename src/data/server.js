import { createServer } from "miragejs";

createServer({
  routes() {
    this.get("/api/cars", () => {
      return {
        user: {
          money: 1000,
        },
        cars: [
          {
            id: 1,
            modelName: "PRO RS3",
            engines: [
              "5.2L 532BHP",
              "4.2L 443BHP",
              "3.6L 374BHP",
              "2.0L 116BHP",
            ],
            automaticGearbox: "Yes",
          },
          {
            id: 2,
            modelName: "UBER RS2",
            engines: ["4.2L 443BHP", "3.6L 374BHP", "2.0L 116BHP"],
            automaticGearbox: "Yes",
          },
          {
            id: 3,
            modelName: "STANDART",
            engines: ["3.6L 374BHP", "2.0L 116BHP"],
            automaticGearbox: "No",
          },
          {
            id: 4,
            modelName: "WK",
            engines: ["2.0L 116BHP"],
            automaticGearbox: "No",
          },
        ],
        colors: [" #000000", "#0d4671", "#63803a", "#841210", "#a09e9f"],
      };
    });
  },
});
