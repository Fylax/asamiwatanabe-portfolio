import type { TranslationFunctions } from "@i18n/i18n-types";
import type { LocalizedString } from "typesafe-i18n";

type Size = {
  height: number;
  width: number;
}

type Work = {
  file: ImageMetadata;
  title: string;
  alt: LocalizedString;
  medium: LocalizedString;
  materials: LocalizedString[];
  size: Size;
}

export type Collection = {
  title: LocalizedString;
  name: LocalizedString;
  description: LocalizedString;
  works: Work[];
}

const A5landscape: Size = {
  height: 148,
  width: 210,
};
const A4potrait: Size = {
  height: 297,
  width: 210,
};
const A4landscape: Size = {
  height: 210,
  width: 297,
};
const A3potrait: Size = {
  height: 420,
  width: 297,
};
const A3landscape: Size = {
  height: 297,
  width: 420,
};

export function getGallery(
  workIndex: number,
  L: TranslationFunctions,
  images: Map<string, ImageMetadata>
): Collection {
  switch (workIndex) {
    case 0:
      return getGallery1(L, images);
    case 1:
      return getGallery2(L, images);
    case 2:
      return getPopIllustrations(L, images);
    case 3:
      return getNigaoeWorks(L, images);
    case 4:
      return getOthers(L, images);
    default:
      throw "Invalid work index";
  }
}

function getGallery1(L: TranslationFunctions, images: Map<string, ImageMetadata>): Collection {
  const mediums = L.seo.artMedium;
  const materials = L.seo.material;

  const descriptions = L.works.Gallery_1_Fantastic_World.descriptions;

  return {
    title: L.seo.works.Gallery_1_Fantastic_World.title(),
    name: L.works.Gallery_1_Fantastic_World.title(),
    description: L.seo.works.Gallery_1_Fantastic_World.description(),
    works: [
      {
        file: images.get("01_Gallery_1_Fantastic_World/01_moon_flower.jpg")!,
        title: "Moon Flower",
        alt: descriptions.moonFlower(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4potrait,
      },
      {
        file: images.get("01_Gallery_1_Fantastic_World/02_the_stage.jpg")!,
        title: "The Stage",
        alt: descriptions.theStage(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4landscape,
      },
      {
        file: images.get("01_Gallery_1_Fantastic_World/03_polaris.jpg")!,
        title: "Polaris",
        alt: descriptions.polaris(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4potrait,
      },
      {
        file: images.get("01_Gallery_1_Fantastic_World/04_relaxing_time.jpg")!,
        title: "Relaxing Time",
        alt: descriptions.relaxingTime(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4landscape,
      },
      {
        file: images.get("01_Gallery_1_Fantastic_World/05_a_passionate_audience.jpg")!,
        title: "A Passionate Audience",
        alt: descriptions.passionateAudience(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4potrait,
      },
      {
        file: images.get("01_Gallery_1_Fantastic_World/06_fu-jin_laijin.jpg")!,
        title: "Fūjin & Raijin",
        alt: descriptions.fujinLajin(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4landscape,
      },
      {
        file: images.get("01_Gallery_1_Fantastic_World/07_new_year.jpg")!,
        title: "New Year",
        alt: descriptions.newYear(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4landscape,
      },
    ],
  };
}

function getGallery2(L: TranslationFunctions, images: Map<string, ImageMetadata>): Collection {
  const mediums = L.seo.artMedium;
  const materials = L.seo.material;

  const descriptions = L.works.Gallery_2_Nature_Inner_World.descriptions;

  return {
    title: L.seo.works.Gallery_2_Nature_Inner_World.title(),
    name: L.works.Gallery_2_Nature_Inner_World.title(),
    description: L.seo.works.Gallery_2_Nature_Inner_World.description(),
    works: [
      {
        file: images.get("02_Gallery_2_Nature_Inner_World/01_fluffy_shaved_ice.jpg")!,
        title: "Fluffy Shaved Ice",
        alt: descriptions.fluffyShavedIce(),
        medium: mediums.liner_color(),
        materials: [
          materials.ink(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A4potrait,
      },
      {
        file: images.get("02_Gallery_2_Nature_Inner_World/02_deep_in_the_sea.jpg")!,
        title: "Deep In The Sea",
        alt: descriptions.deepInTheSea(),
        medium: mediums.liner_color(),
        materials: [
          materials.ink(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A4landscape,
      },
      {
        file: images.get("02_Gallery_2_Nature_Inner_World/03_i_wanna_sea.jpg")!,
        title: "I Wanna Sea",
        alt: descriptions.iWannaSea(),
        medium: mediums.liner_color(),
        materials: [
          materials.ink(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A4potrait,
      },
      {
        file: images.get("02_Gallery_2_Nature_Inner_World/04_sakana.jpg")!,
        title: "Sakana",
        alt: descriptions.sakana(),
        medium: mediums.liner_color(),
        materials: [
          materials.ink(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A4landscape,
      },
      {
        file: images.get("02_Gallery_2_Nature_Inner_World/05_busstop.jpg")!,
        title: "Bus Stop",
        alt: descriptions.busStop(),
        medium: mediums.liner_color(),
        materials: [
          materials.ink(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A4potrait,
      },
      {
        file: images.get("02_Gallery_2_Nature_Inner_World/06_picnic.jpg")!,
        title: "Picnic",
        alt: descriptions.picnic(),
        medium: mediums.liner_color(),
        materials: [
          materials.ink(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A4landscape,
      },
      {
        file: images.get("02_Gallery_2_Nature_Inner_World/07_nishikigoi.jpg")!,
        title: "Nishikigoi",
        alt: descriptions.nishikigoi(),
        medium: mediums.liner_color(),
        materials: [
          materials.ink(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A4potrait,
      },
      {
        file: images.get("02_Gallery_2_Nature_Inner_World/08_play_a_staring_contest.jpg")!,
        title: "Play a Starring Contest",
        alt: descriptions.playStaringContest(),
        medium: mediums.liner_color(),
        materials: [
          materials.ink(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A4potrait,
      },
      {
        file: images.get("02_Gallery_2_Nature_Inner_World/09_trip_adventure.jpg")!,
        title: "Trip Adventure",
        alt: descriptions.tripAdventure(),
        medium: mediums.liner_color(),
        materials: [
          materials.ink(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A4potrait,
      },
      {
        file: images.get("02_Gallery_2_Nature_Inner_World/10_princess_kaguya.jpg")!,
        title: "Princess Kaguya",
        alt: descriptions.princessKaguya(),
        medium: mediums.liner_color(),
        materials: [
          materials.ink(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A4landscape,
      },
      {
        file: images.get("02_Gallery_2_Nature_Inner_World/11_maturi.jpg")!,
        title: "Matsuri",
        alt: descriptions.maturi(),
        medium: mediums.liner_color(),
        materials: [
          materials.ink(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A4landscape,
      },
      {
        file: images.get("02_Gallery_2_Nature_Inner_World/12_arigatou.jpg")!,
        title: "Arigatō",
        alt: descriptions.arigatou(),
        medium: mediums.liner_color(),
        materials: [
          materials.ink(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A4potrait,
      },
      {
        file: images.get("02_Gallery_2_Nature_Inner_World/13_hearts.jpg")!,
        title: "Hearts",
        alt: descriptions.hearts(),
        medium: mediums.pencil_acrylic(),
        materials: [
          materials.graphite(),
          materials.acrylic(),
          materials.paper(),
        ],
        size: A3landscape,
      },
      {
        file: images.get("02_Gallery_2_Nature_Inner_World/14_the_first_light_dawn.jpg")!,
        title: "The First Light Dawn",
        alt: descriptions.theFirstLightDawn(),
        medium: mediums.pencil_acrylic(),
        materials: [
          materials.graphite(),
          materials.acrylic(),
          materials.paper(),
        ],
        size: A3potrait,
      },
    ],
  };
}

function getPopIllustrations(L: TranslationFunctions, images: Map<string, ImageMetadata>): Collection {
  const mediums = L.seo.artMedium;
  const materials = L.seo.material;

  const descriptions = L.works.POP_Illustrations.descriptions;
  return {
    title: L.seo.works.POP_Illustrations.title(),
    name: L.works.POP_Illustrations.title(),
    description: L.seo.works.POP_Illustrations.description(),
    works: [
      {
        file: images.get("03_POP_Illustrations/01_wheel.jpg")!,
        title: "Whale",
        alt: descriptions.wheel(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4potrait,
      },
      {
        file: images.get("03_POP_Illustrations/02_wheel2.jpg")!,
        title: "Whale",
        alt: descriptions.wheel2(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4potrait,
      },
      {
        file: images.get("03_POP_Illustrations/03_planets.jpg")!,
        title: "Planets",
        alt: descriptions.planets(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4potrait,
      },
      {
        file: images.get("03_POP_Illustrations/04_circus.jpg")!,
        title: "Circus",
        alt: descriptions.circus(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4landscape,
      },
      {
        file: images.get("03_POP_Illustrations/05_big_tree.jpg")!,
        title: "Big Tree",
        alt: descriptions.bigTree(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4potrait,
      },
      {
        file: images.get("03_POP_Illustrations/06_a_boat.jpg")!,
        title: "A Boat",
        alt: descriptions.boat(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4landscape,
      },
      {
        file: images.get("03_POP_Illustrations/07_twins.jpg")!,
        title: "Twins",
        alt: descriptions.twins(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4landscape,
      },
      {
        file: images.get("03_POP_Illustrations/08_a_funny_guy.jpg")!,
        title: "A Funny Guy",
        alt: descriptions.funnyGuy(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4potrait,
      },
      {
        file: images.get("03_POP_Illustrations/09_a_pumpkin_house.jpg")!,
        title: "A Pumpkin House",
        alt: descriptions.pumpinkHouse(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4landscape,
      },
      {
        file: images.get("03_POP_Illustrations/10_lotus_root_castle.jpg")!,
        title: "Lotus Root Castle",
        alt: descriptions.lotusRootCastle(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4potrait,
      },
      {
        file: images.get("03_POP_Illustrations/11_the_three_hares.jpg")!,
        title: "The Three Hares",
        alt: descriptions.threeHares(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4landscape,
      },
      {
        file: images.get("03_POP_Illustrations/12_lovely_hat.jpg")!,
        title: "Localy Hat",
        alt: descriptions.lovelyHat(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4potrait,
      },
      {
        file: images.get("03_POP_Illustrations/13_zoo.jpg")!,
        title: "Zoo",
        alt: descriptions.zoo(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4landscape,
      },
      {
        file: images.get("03_POP_Illustrations/14_nuts_to_you.jpg")!,
        title: "Nuts To You",
        alt: descriptions.nutsToYou(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4landscape,
      },
      {
        file: images.get("03_POP_Illustrations/15_kitty_tower.jpg")!,
        title: "Kitty Tower",
        alt: descriptions.kittyTower(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4potrait,
      },
      {
        file: images.get("03_POP_Illustrations/16_lets_start_the_party.jpg")!,
        title: "Let's Start The Party",
        alt: descriptions.letsStartTheParty(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4landscape,
      },
      {
        file: images.get("03_POP_Illustrations/17_swimming.jpg")!,
        title: "Swimming",
        alt: descriptions.swimming(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4landscape,
      },
      {
        file: images.get("03_POP_Illustrations/18_animals_lantern.jpg")!,
        title: "Animals Lantern",
        alt: descriptions.animalsLantern(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4landscape,
      },
      {
        file: images.get("03_POP_Illustrations/19_oshiruko.jpg")!,
        title: "Oshiruko",
        alt: descriptions.oshiruko(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4landscape,
      },
    ],
  };
}

function getNigaoeWorks(L: TranslationFunctions, images: Map<string, ImageMetadata>): Collection {
  const mediums = L.seo.artMedium;
  const materials = L.seo.material;

  const description = L.works.Nigaoe_Works.descriptions;
  return {
    title: L.seo.works.Nigaoe_Works.title(),
    name: L.works.Nigaoe_Works.title(),
    description: L.seo.works.Nigaoe_Works.description(),
    works: [
      {
        file: images.get("04_Nigaoe_Works/01_family.jpg")!,
        title: "Family",
        alt: description.family1(),
        medium: mediums.liner_color(),
        materials: [
          materials.ink(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A4potrait,
      },
      {
        file: images.get("04_Nigaoe_Works/02_family.jpg")!,
        title: "Family",
        alt: description.family2(),
        medium: mediums.liner_color(),
        materials: [
          materials.ink(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A5landscape,
      },
      {
        file: images.get("04_Nigaoe_Works/03_pet.jpg")!,
        title: "Pet",
        alt: description.pet(),
        medium: mediums.liner_color(),
        materials: [
          materials.ink(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A4potrait,
      },
      {
        file: images.get("04_Nigaoe_Works/04_baby1.jpg")!,
        title: "Baby",
        alt: description.baby1(),
        medium: mediums.liner_color(),
        materials: [
          materials.ink(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A4potrait,
      },
      {
        file: images.get("04_Nigaoe_Works/05_baby2.jpg")!,
        title: "Baby",
        alt: description.baby2(),
        medium: mediums.liner_color(),
        materials: [
          materials.ink(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A4potrait,
      },
      {
        file: images.get("04_Nigaoe_Works/06_a_girl.jpg")!,
        title: "A Girl",
        alt: description.girl(),
        medium: mediums.liner_color(),
        materials: [
          materials.ink(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A4potrait,
      },
      {
        file: images.get("04_Nigaoe_Works/07_a_boy.jpg")!,
        title: "A Boy",
        alt: description.boy(),
        medium: mediums.liner_color(),
        materials: [
          materials.ink(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A4potrait,
      },
    ],
  };
}

function getOthers(L: TranslationFunctions, images: Map<string, ImageMetadata>): Collection {
  const mediums = L.seo.artMedium;
  const materials = L.seo.material;

  const descriptions = L.works.Others.descriptions;

  return {
    title: L.seo.works.Others.title(),
    name: L.works.Others.title(),
    description: L.seo.works.Others.description(),
    works: [
      {
        file: images.get('05_Others/01_a_girl.jpg')!,
        title: "A Girl",
        alt: descriptions.girl(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4potrait,
      },
      {
        file: images.get("05_Others/02_new_year_card.jpg")!,
        title: "New Year Card",
        alt: descriptions.newYearCard(),
        medium: mediums.pencil_color(),
        materials: [
          materials.graphite(),
          materials.color_pencil(),
          materials.paper(),
        ],
        size: A4landscape,
      },
      {
        file: images.get("05_Others/03_smile.jpg")!,
        title: "Smile",
        alt: descriptions.smile(),
        medium: mediums.liner_digital(),
        materials: [materials.ink(), materials.digital()],
        size: A4landscape,
      },
    ],
  };
}
