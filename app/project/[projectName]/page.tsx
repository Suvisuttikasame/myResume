import ProjectInfo from "./components/ProjectInfo";
import BackButton from "../components/BackButton";
import ProjectImages from "./components/ProjectImages";
import { Suspense } from "react";
import Loading from "./loading";

type props = {
  params: { projectName: string };
};
type projectDescription = {
  [projectName: string]: {
    detail: string;
    stack: string;
    feature: string[];
    live: string;
  };
};
type projectImages = {
  [projectName: string]: string[];
};
const project: projectDescription = {
  "fast-pizza-co": {
    detail:
      "This project is a pizza shop simulation. For every customer who is hungry and a pizza lover, just go to a fast-pizza-co app then choose the type of pizza you love and let check it out. credit. Jonas Schmedtmann",
    stack: "React, tailwin, redux-toolkit",
    feature: [
      "check in a customer name and store in redux",
      "menu selection page to order pizza with quantity",
      "checkout form with customer information",
      "search order by order number",
    ],
    live: "-",
  },
  "world-wise-react": {
    detail:
      "This project is a small location tracking project from the React course. This app helps users who want to travel and have plans to set their activities and locations together on a map. So, whenever users want to check out details, just hit the pin on a map, and they can see the location that they've gone to in the past. credit. Jonas Schmedtmann",
    stack: "React, css module, json-server",
    feature: [
      "login and store user data in a context api",
      "submit location form to pin location on a map and save data in json-server",
      "delete location that's pin on a map",
    ],
    live: "-",
  },
  Proshop: {
    detail:
      "This project is ecommerce platform project from MERN course in order to demonstrate how online shop work roughly regarding to both admin and client usage. credit. Brad Traversy",
    stack: "React, Redux, Nodejs, Express and MongoDB",
    feature: [
      "both admin and client authentication",
      "admin product management",
      "admin user management",
      "admin order management",
      "client product review",
      "client product search",
      "client checkout process(payment method SCB QR code sandbox)",
    ],
    live: "-",
  },
  "smart-farm": {
    detail:
      "This is a smart farm project with drip irrigation system aim to help local people to harvest yields in dry area. The IoT system is brought to use to collecting farm status through Lora protocol (no mornitoring app) moreover we have microcontroller and floating sensor to control water level in a tank, and solenoid valve to open and close a tank punctually.",
    stack:
      "cubecell, Lora cat, floating sensor, solenoid valve, relay, water pump",
    feature: [
      "collecting farm status including pump running time, tank open status and water level on firebase",
      "automatically fill in water in order to make sure that a tank does not have water lower than threshold",
      "automatically drip water in a farm punctually",
    ],
    live: "-",
  },
};
const images: projectImages = {
  "fast-pizza-co": ["/asset/form-pizza.png", "/asset/place-order-pizza.png"],
  "world-wise-react": [
    "/asset/map-world-wise.png",
    "/asset/form-world-wise.png",
  ],
  Proshop: ["/asset/home-propshop.png", "/asset/item-propshop.png"],
  "smart-farm": [
    "/asset/board-smart-farm.jpg",
    "/asset/cb-smart-farm.jpg",
    "/asset/line-smart-farm.jpg",
  ],
};

export default function SubProject({ params }: props) {
  return (
    <main className="flex flex-col gap-8 py-8 px-16 justify-center items-center flex-1">
      <BackButton position="start" />
      <ProjectInfo
        projectName={params.projectName}
        projectDesc={project[params.projectName]}
      />
      <Suspense fallback={<Loading />}>
        <ProjectImages images={images[params.projectName]} />
      </Suspense>
    </main>
  );
}
