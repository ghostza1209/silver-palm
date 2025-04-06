import { ReactNode } from "react";
import { Key } from "react";

export interface Image {
  key?: Key;
  src: string;
  width: number;
  height: number;
  alt?: string;
  caption?: ReactNode;
  original: string;
}

export const images: Image[] = [
  {
    src: "/images/back.jpg",
    original: "//images/back.jpg",
    width: 850,
    height: 445,
    caption: "Rear view",
  },
  {
    src: "/images/bedroom-2.jpg",
    original: "//images/bedroom-2.jpg",
    width: 792,
    height: 445,
    caption: "Bedroom 1",
  },
  {
    src: "/images/bedroom-2_closet.jpg",
    original: "//images/bedroom-2_closet.jpg",
    width: 900,
    height: 445,
    caption: "Bedroom 1 (walk-in closet)",
  },
  {
    src: "/images/dining-room.jpg",
    original: "//images/dining-room.jpg",
    width: 792,
    height: 445,
    caption: "Dining Room",
  },
  {
    src: "/images/first-floor.jpg",
    original: "//images/first-floor.jpg",
    width: 792,
    height: 445,
    caption: "First floor",
  },
  {
    src: "/images/front-left-view.jpg",
    original: "//images/front-left-view.jpg",
    width: 792,
    height: 445,
    caption: "Front view",
  },
  {
    src: "/images/front-right-view.jpg",
    original: "//images/front-right-view.jpg",
    width: 900,
    height: 445,
    caption: "Front view",
  },
  {
    src: "/images/front-view_2.jpg",
    original: "//images/front-view_2.jpg",
    width: 792,
    height: 445,
    caption: "Front view",
  },
  {
    src: "/images/gym-room.jpg",
    original: "//images/gym-room.jpg",
    width: 792,
    height: 445,
    caption: "Gym Room",
  },
  {
    src: "/images/kitchen-room_2.jpg",
    original: "//images/kitchen-room_2.jpg",
    width: 792,
    height: 445,
    caption: "Kitchen",
  },
  {
    src: "/images/kitchen-room_3.jpg",
    original: "//images/kitchen-room_3.jpg",
    width: 920,
    height: 445,
    caption: "Kitchen",
  },
  {
    src: "/images/kitchen-room.jpg",
    original: "//images/kitchen-room.jpg",
    width: 850,
    height: 445,
    caption: "Kitchen Room",
  },
  {
    src: "/images/living-room.jpg",
    original: "//images/living-room.jpg",
    width: 792,
    height: 445,
    caption: "Living Room",
  },
  {
    src: "/images/living-room_2.jpg",
    original: "//images/living-room_2.jpg",
    width: 890,
    height: 445,
    caption: "Living Room",
  },
  {
    src: "/images/living-room_3.jpg",
    original: "//images/living-room_3.jpg",
    width: 792,
    height: 445,
    caption: "Living Room",
  },
  {
    src: "/images/master-bedroom_1.jpg",
    original: "//images/master-bedroom_1.jpg",
    width: 960,
    height: 445,
    caption: "Master Bedroom",
  },
  {
    src: "/images/master-bedroom_2.jpg",
    original: "//images/master-bedroom_2.jpg",
    width: 792,
    height: 445,
    caption: "Master Bedroom",
  },
  {
    src: "/images/master-bedroom_3.jpg",
    original: "//images/master-bedroom_3.jpg",
    width: 950,
    height: 445,
    caption: "Master Bedroom",
  },
  {
    src: "/images/master-bedroom_4.jpg",
    original: "//images/master-bedroom_4.jpg",
    width: 850,
    height: 500,
    caption: "Master Bedroom",
  },
  {
    src: "/images/master-bedroom-bathroom_2.jpg",
    original: "//images/master-bedroom-bathroom_2.jpg",
    width: 850,
    height: 500,
    caption: "Master Bedroom's bathroom",
  },
  {
    src: "/images/master-bedroom-bathroom_3.jpg",
    original: "//images/master-bedroom-bathroom_3.jpg",
    width: 850,
    height: 500,
    caption: "Master Bedroom's bathroom",
  },
  {
    src: "/images/master-bedroom-bathroom_4.jpg",
    original: "//images/master-bedroom-bathroom_4.jpg",
    width: 850,
    height: 500,
    caption: "Master Bedroom's bathroom",
  },
  {
    src: "/images/master-bedroom-bathroom_5.jpg",
    original: "//images/master-bedroom-bathroom_5.jpg",
    width: 850,
    height: 500,
    caption: "Bedroom 1 bathroom",
  },
  {
    src: "/images/master-bedroom-bathroom_6.jpg",
    original: "//images/master-bedroom-bathroom_6.jpg",
    width: 850,
    height: 500,
    caption: "Bedroom 1 bathroom",
  },
  {
    src: "/images/master-bedroom-bathroom_7.jpg",
    original: "//images/master-bedroom-bathroom_7.jpg",
    width: 850,
    height: 500,
    caption: "Bedroom 1 bathroom",
  },
  {
    src: "/images/master-bedroom-bathroom.jpg",
    original: "//images/master-bedroom-bathroom.jpg",
    width: 850,
    height: 500,
    caption: "Master Bedroom's bathroom",
  },
  {
    src: "/images/pool-view_1.jpg",
    original: "//images/pool-view_1.jpg",
    width: 850,
    height: 500,
    caption: "Pool View",
  },
  {
    src: "/images/pool-view_2.jpg",
    original: "//images/pool-view_2.jpg",
    width: 850,
    height: 500,
    caption: "Pool View",
  },
  {
    src: "/images/second-floor.jpg",
    original: "//images/second-floor.jpg",
    width: 850,
    height: 500,
    caption: "Second floor",
  },
  {
    src: "/images/second-floor_2.jpg",
    original: "//images/second-floor_2.jpg",
    width: 850,
    height: 500,
    caption: "Second floor",
  },
  // {
  //   src: "/images/floorplan-1st-floor.jpg",
  //   original: "//images/floorplan-1st-floor.jpg",
  //   width: 750,
  //   height: 500,
  //   caption: "Floor plan (1st floor)",
  // },
  // {
  //   src: "/images/floorplan-2nd-floor.jpg",
  //   original: "//images/floorplan-2nd-floor.jpg",
  //   width: 750,
  //   height: 500,
  //   caption: "Floor plan (2nd floor)",
  // },
];
