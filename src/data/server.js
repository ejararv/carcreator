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
            modelName: "MuscleCar",
            cost: 6000,
            engines: [
              { modelName: "5.2L 532BHP", cost: 5600 },
              { modelName: "4.2L 443BHP", cost: 4000 },
              { modelName: "3.6L 374BHP", cost: 2500 },
              { modelName: "2.0L 116BHP", cost: 1500 },
            ],
            automaticGearbox: "Yes",
          },
          {
            id: 2,
            modelName: "Porsche 911",
            cost: 5000,
            engines: [
              { modelName: "4.2L 443BHP", cost: 4000 },
              { modelName: "3.6L 374BHP", cost: 2500 },
              { modelName: "2.0L 116BHP", cost: 1500 },
            ],
            automaticGearbox: "Yes",
          },
          {
            id: 3,
            modelName: "GMC",
            cost: 3000,
            engines: [
              { modelName: "3.6L 374BHP", cost: 2500 },
              { modelName: "2.0L 116BHP", cost: 1500 },
            ],
            automaticGearbox: "No",
          },
          {
            id: 4,
            cost: 1000,
            modelName: "Fiat",
            engines: [{ modelName: "2.0L 116BHP", cost: 1500 }],
            automaticGearbox: "No",
          },
        ],
      };
    });
  },
});
