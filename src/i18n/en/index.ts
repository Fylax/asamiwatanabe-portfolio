import type { BaseTranslation } from "../i18n-types.js";

const en = {
  hero: "A piece expressing a figure walking their own path, gently encouraged by the wind.",
  aboutme: {
    name: "Asami Watanabe",
    header: "About Me",
    description:
      "<strong style='font-size:var(--text-md)'>Illustrator / Painter</strong>\n" +
      "I create works in both analog and digital mediums, with themes of the universe, nature, and animals.\n" +
      "The twinkling of stars, the sky and sea, the quiet of nature, the presence of living beings—\n" +
      "By depicting the world that lies beyond what we can see, I aim to create pieces that unfold richly in the viewer’s heart and evoke a sense of story.",
  },
  ui: {
    screenreader: {
      change_language: "Change Language",
      open_menu: "Open menu",
      close_menu: "Close menu",
      instagram: "Instagram",
      telegram: "Telegram",
    },
    cta: {
      looking_for_commission: "Looking for a commissioned illustration?",
      send_me_message: "Send me a message",
    },
  },
  seo: {
    illustrator: "Illustrator",
    gender: "Female",
    japan: "Japan",
    artMedium: {
      liner_digital: "Fineliner; Digital painting",
      liner_color: "Fineliner; Coloured pencils",
      pencil_acrylic: "Graphite pencil; Acrylic paint",
      pencil_color: "Graphite pencil; Coloured pencils",
    },
    material: {
      ink: "Ink",
      digital: "Digital media",
      color_pencil: "Coloured pencil",
      graphite: "Graphite",
      acrylic: "Acrylic",
      paper: "Paper",
    },
    homepage: {
      title: "Asami Watanabe – Contemporary Japanese Artist",
      description:
        "The official portfolio of contemporary Japanese artist Asami Watanabe. Explore her dreamlike visual worlds, artistic practice, and curated galleries of paintings and illustrations.",
    },
    works: {
      Gallery_1_Fantastic_World: {
        title: "Fantastical Worlds – Artworks by Asami Watanabe",
        description:
          "Explore “Fantastical Worlds”, a collection of imaginative and dreamlike illustrations by contemporary Japanese artist Asami Watanabe. Myth, cosmic perspectives, and playful surrealism come together in scenes filled with wonder and storytelling.",
      },
      Gallery_2_Nature_Inner_World: {
        title: "Nature and the Inner World – Artworks by Asami Watanabe",
        description:
          "Discover “Nature and the Inner World”, where Asami Watanabe blends natural motifs with emotional symbolism. Animals, folklore, and introspective scenes reveal gentle narratives about memory, imagination, and the landscapes within.",
      },
      POP_Illustrations: {
        title: "Pop Illustrations – Artworks by Asami Watanabe",
        description:
          "Step into “Pop Illustrations”, a vibrant gallery of colorful, character‑driven artworks by Asami Watanabe. Playful, humorous, and full of energy, these pieces celebrate joyful moments and imaginative everyday scenes.",
      },
      Nigaoe_Works: {
        title: "Portrait Works – Illustrations by Asami Watanabe",
        description:
          "Browse “Portrait Works”, a collection of personalized illustrations by Asami Watanabe. Family portraits, baby posters, and commemorative pieces capture warmth, relationships, and meaningful milestones with cultural and emotional depth.",
      },
      Others: {
        title: "Other Works – Illustrations by Asami Watanabe",
        description:
          "Explore “Other Works”, a small collection of expressive illustrations by Asami Watanabe. Simple, symbolic, and heartfelt, these pieces highlight quiet emotions and seasonal moments.",
      },
    },
  },
  works: {
    Gallery_1_Fantastic_World: {
      title: "Gallery 1:<br>Fantastical Worlds",
      descriptions: {
        moonFlower:
          "A nighttime world where people gather, blooming beautifully yet fleetingly like moonlit flowers.",
        theStage:
          "What will be born from the egg? Excitement and anticipation swirl together. Now, let the show begin!",
        polaris:
          "From the North Star’s perspective, Earth’s history must still be quite short.",
        relaxingTime:
          "A lion brother and sister lying on a bed of stars, enjoying a slow, peaceful moment.",
        passionateAudience:
          "Fans wearing matching badges are so excited they could melt the ice!",
        fujinLajin:
          "An illustration inspired by the idea that the fierce winds of modern society might be powered by the gods of wind and thunder.",
        newYear:
          "A New Year’s greeting card inspired by the Year of the Dragon.",
      },
    },
    Gallery_2_Nature_Inner_World: {
      title: "Gallery 2:<br>Nature and the Inner World",
      descriptions: {
        fluffyShavedIce:
          "Polar bear fur looks white, but like shaved ice, each strand is actually transparent.",
        deepInTheSea:
          "The deep sea must be a world overflowing with unseen colors and shapes.",
        iWannaSea: "Did you know? My body is 80% made of the sea!",
        sakana:
          "Unknown creatures adorn themselves with wonderfully captivating designs.",
        busStop:
          "A giant snowman appears after an unexpected heavy snowfall in a small town.",
        picnic:
          "A rabbit family heads out for a picnic with rice balls in hand.",
        nishikigoi: "I’m for display only. Not edible.",
        playStaringContest:
          "Grandma’s room is full of fascinating things — I never get bored.",
        tripAdventure: "The destination is the moon, where rabbits live.",
        princessKaguya: "The world where Princess Kaguya resides.",
        maturi: "Welcome to the summer festival bursting with smiles.",
        arigatou: "A matryoshka doll filled with a heartfelt “thank you.”",
        hearts: "Other people are like mirrors reflecting who we are.",
        theFirstLightDawn:
          "A girl who decides to take flight, carrying both hope and uncertainty in her balloon.",
      },
    },
    POP_Illustrations: {
      title: "Pop Illustrations",
      descriptions: {
        wheel: "Flying Space Whale 1",
        wheel2: "Flying Space Whale 2",
        planets:
          "A planetary illustration blending traditional Japanese patterns with a mix of old and new.",
        circus:
          "Mesmerized by an enchanting performance inside a colorful tent.",
        bigTree:
          "Hanging sparkling ornaments on a tree, filled with love for dear ones.",
        boat: "Let’s travel on a special boat accompanied by joyful music!",
        twins:
          "A giant yo-yo bounces like a living creature — what a challenge!",
        funnyGuy:
          "The so-called ‘bad actor’ actually has a charming presence and is well loved.",
        pumpinkHouse: "Three witches dressing up and getting ready to go out.",
        lotusRootCastle:
          "A castle with magnificent lotus-root wheels — her favorite place.",
        threeHares: "Cute friends approach, saying they’re ready to listen.",
        lovelyHat:
          "His colorful hat is incredibly popular and stands strong even in the rain.",
        zoo: "Animals’ lively expressions can only be seen in nature.",
        nutsToYou: "A happy squirrel surrounded by its beloved acorns.",
        kittyTower:
          "Cat siblings who turned into a tower while fighting over territory.",
        letsStartTheParty: "Tonight we’re hosting a cheese party.",
        swimming: "Stars floating in the night sky move swiftly like sharks.",
        animalsLantern:
          "Adorable lanterns rise higher and higher until they reach above the clouds.",
        oshiruko:
          "They look like mochi, and might just melt away in a sweet red-bean-soup bath.",
      },
    },
    Nigaoe_Works: {
      title: "Portrait Works",
      seo_description:
        "Browse “Portrait Works”, a collection of personalized illustrations by Asami Watanabe. Family portraits, baby posters, and commemorative pieces capture warmth, relationships, and meaningful milestones with cultural and emotional depth.",
      descriptions: {
        family1:
          "A family portrait drawn with traditional Japanese auspicious patterns in the background, wishing for their happiness.",
        family2:
          "A surprise portrait gift from a wife for their wedding anniversary.",
        pet: "A commemorative portrait celebrating the arrival of a beloved family member, with the pet’s name “Sakura” in the background.",
        baby1: "A baby poster for a girl, with a birthday message.",
        baby2: "A baby poster for a boy, with a birthday message.",
        girl: "A portrait of a girl with a personalized message.",
        boy: "A portrait of a boy with a personalized message.",
      },
    },
    Others: {
      title: "Other Works",
      descriptions: {
        girl: "A Girl",
        newYearCard: "New Year’s card",
        smile: "Smile",
      },
    },
  },
} satisfies BaseTranslation;

export default en;
