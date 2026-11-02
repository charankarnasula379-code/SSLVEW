const imageModules = import.meta.glob("../assets/*.jpg", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const img = (name: string): string => imageModules[`../assets/${name}.jpg`] ?? "";

export type Product = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  image: string;
  alt: string;
  description: string;
  application: string;
  details: string[];
  featured?: boolean;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

type RawProduct = Omit<Product, "category" | "categorySlug" | "image"> & { file: string };

const catalogue: { category: Category & { image?: string }; items: RawProduct[] }[] = [
  {
    category: {
      slug: "p15-screw-press-components",
      name: "P15 Screw Press Components",
      description:
        "Wear and drive components for the P15 twin screw press used to extract crude palm oil from digested fruit.",
      image: "",
    },
    items: [
      {
        slug: "adjusting-cone",
        name: "Adjusting Cone",
        file: "30",
        alt: "Machined adjusting cone for a P15 palm oil screw press",
        description:
          "Sets the back pressure inside the press cage so oil extraction and cake discharge stay consistent.",
        application: "Pressure adjustment and cake discharge control on P15 screw presses",
        details: [
          "Machined from wear-resistant material",
          "Profiled to suit P15 press cone guides",
          "Supplied as a replacement or new-build part",
        ],
      },
      {
        slug: "cone-guide",
        name: "Cone Guide",
        file: "6",
        alt: "Cone guide component for a P15 palm oil screw press",
        description:
          "Guides and supports the adjusting cone so it travels true under continuous pressing load.",
        application: "Cone alignment and support inside the press outlet assembly",
        details: [
          "Machined bore for smooth cone travel",
          "Built for continuous mill duty",
          "Made to match your existing press",
        ],
      },
      {
        slug: "drive-shaft",
        name: "Drive Shaft",
        file: "29",
        alt: "Drive shaft for a P15 palm oil screw press",
        description:
          "Transmits gearbox torque to the pressing worm on the driven side of the twin screw press.",
        application: "Torque transmission on the drive side of the P15 press",
        details: [
          "Turned and ground to the original shaft profile",
          "Heat-treated for shock and torque loads",
          "Machined from your sample or drawing",
        ],
      },
      {
        slug: "non-drive-shaft",
        name: "Non-Drive Shaft",
        file: "28",
        alt: "Non-drive shaft for a P15 palm oil screw press",
        description: "Supports and locates the worm assembly on the non-driven side of the press.",
        application: "Worm support on the non-drive side of the P15 press",
        details: [
          "Matched to the drive shaft as a pair",
          "Precision machined bearing seats",
          "Available as a replacement part",
        ],
      },
      {
        slug: "outlet-piece",
        name: "Outlet Piece",
        file: "5",
        alt: "Outlet piece casting for a palm oil screw press",
        description:
          "Forms the discharge end of the press cage where pressed cake leaves the machine.",
        application: "Cake discharge at the press outlet",
        details: [
          "Cast and machined to press dimensions",
          "Wear surfaces built up where required",
          "Fits standard P15 cage assemblies",
        ],
      },
      {
        slug: "p15-spacer",
        name: "Spacer",
        file: "4",
        alt: "Machined spacer ring for a P15 palm oil screw press worm assembly",
        description: "Maintains correct spacing between worm sections along the press shaft.",
        application: "Worm assembly spacing inside the press cage",
        details: [
          "Machined to the required width",
          "Hardened faces for wear resistance",
          "Supplied in sets",
        ],
      },
      {
        slug: "spur-gears",
        name: "Spur Gears",
        file: "31",
        alt: "Cut spur gears for a palm oil screw press drive",
        description:
          "Cut gears that transfer drive between the twin press shafts and keep them in time.",
        application: "Press shaft drive and synchronisation",
        details: [
          "Teeth cut to the original module and count",
          "Heat treated for load-bearing service",
          "Cut from your sample gear",
        ],
      },
      {
        slug: "strainer",
        name: "Strainer",
        file: "3",
        alt: "Strainer plate for a palm oil screw press cage",
        description:
          "Perforated pressing surface that lets extracted oil drain while retaining fibre and nuts.",
        application: "Oil drainage within the press cage",
        details: [
          "Perforation pattern matched to the original",
          "Wear-resistant plate material",
          "Made in sets for full cage replacement",
        ],
      },
      {
        slug: "tie-rods",
        name: "Tie Rods",
        file: "27",
        alt: "Tie rods for clamping a palm oil screw press cage",
        description:
          "Clamp the press cage halves together and hold them tight under pressing pressure.",
        application: "Cage clamping on the P15 press",
        details: [
          "Threaded and machined to length",
          "High-tensile material",
          "Supplied with matching nuts on request",
        ],
      },
      {
        slug: "worm-length-shaft",
        name: "Worm Length Shaft",
        file: "2",
        alt: "Worm length shaft for a P15 palm oil screw press",
        description: "Full-length shaft that carries the worm screws through the press cage.",
        application: "Worm carrier shaft in the P15 press",
        details: [
          "Machined over the full pressing length",
          "Keyways cut to the original layout",
          "Straightened and checked for run-out",
        ],
      },
      {
        slug: "worm-screws",
        name: "Worm Screws",
        file: "p15-1",
        alt: "Hardened worm screws for a P15 palm oil screw press",
        description:
          "The main pressing element — hardened screws that convey and compress digested fruit to release oil.",
        application: "Oil extraction pressing inside the P15 press",
        details: [
          "Hard-faced flights for long wear life",
          "Cast and machined in-house",
          "Made to original P15 profiles",
        ],
      },
      {
        slug: "press-cage",
        name: "Cage",
        file: "p-15-2",
        alt: "Press cage assembly for a P15 palm oil screw press",
        description:
          "Housing that holds the strainer bars and contains the pressing action of the worm screws.",
        application: "Pressing chamber of the P15 screw press",
        details: [
          "Fabricated and machined as a matched pair",
          "Accepts standard strainer sets",
          "Rebuild and refurbishment available",
        ],
      },
    ],
  },
  {
    category: {
      slug: "digester",
      name: "Digester",
      description:
        "Stirring arms, shafts and holders for the digester that macerates sterilised fruit ahead of pressing.",
      image: "",
    },
    items: [
      {
        slug: "expeller-arm",
        name: "Expeller Arm",
        file: "19",
        alt: "Expeller arm for a palm oil digester",
        description:
          "Bottom stirring arm that pushes digested mash out of the digester towards the press.",
        application: "Discharge of digested fruit from the digester",
        details: [
          "Cast and machined for heavy stirring loads",
          "Bore matched to the digester square shaft",
          "Supplied as a direct replacement",
        ],
      },
      {
        slug: "long-arm",
        name: "Long Arm",
        file: "18",
        alt: "Long stirring arm for a palm oil digester",
        description:
          "Long stirring arm that breaks down fruit and separates pulp from the nut inside the digester.",
        application: "Fruit maceration in the digester",
        details: [
          "Wear-resistant material",
          "Machined square bore for a tight fit",
          "Available in sets with short arms",
        ],
      },
      {
        slug: "shaft-holder",
        name: "Shaft Holder",
        file: "17",
        alt: "Shaft holder for a palm oil digester",
        description: "Locates and supports the digester shaft so the arms run true.",
        application: "Digester shaft support and alignment",
        details: [
          "Machined to the original mounting",
          "Built for continuous running",
          "Manufactured from sample or drawing",
        ],
      },
      {
        slug: "short-arm",
        name: "Short Arm",
        file: "16",
        alt: "Short stirring arm for a palm oil digester",
        description:
          "Short stirring arm working with the long arms to keep the digester charge moving.",
        application: "Fruit maceration in the digester",
        details: [
          "Cast and machined in-house",
          "Matched to your digester shaft size",
          "Supplied individually or in sets",
        ],
      },
      {
        slug: "digester-square-shaft",
        name: "Square Shaft",
        file: "15",
        alt: "Square drive shaft for a palm oil digester",
        description:
          "Central square shaft that carries the stirring arms and takes drive from the digester gearbox.",
        application: "Digester arm drive",
        details: [
          "Machined square section over full length",
          "Heat treated for torsional load",
          "Made to original digester dimensions",
        ],
      },
      {
        slug: "v-block",
        name: "V Block",
        file: "14",
        alt: "V block component for a palm oil digester assembly",
        description:
          "Locating block that positions and secures components on the digester assembly.",
        application: "Component location within the digester",
        details: [
          "Machined locating faces",
          "Durable material for mill conditions",
          "Made to match existing parts",
        ],
      },
    ],
  },
  {
    category: {
      slug: "ripple-mill",
      name: "Ripple Mill",
      description:
        "Rotor discs, rods, shafts and spacers for ripple mills that crack palm nuts to release the kernel.",
      image: "",
    },
    items: [
      {
        slug: "rotor-disc-end-plate",
        name: "Rotor Disc End Plate",
        file: "11",
        alt: "Rotor disc end plate for a ripple mill",
        description:
          "End plate that holds the rotor rods in position within the ripple mill rotor.",
        application: "Rotor assembly in nut cracking ripple mills",
        details: [
          "Laser-cut and machined plate",
          "Hole pattern matched to your rotor",
          "Supplied as a replacement part",
        ],
      },
      {
        slug: "rotor-disc-end-plate-heavy",
        name: "Rotor Disc End Plate (Heavy Duty)",
        file: "12",
        alt: "Heavy duty rotor disc end plate for a ripple mill rotor",
        description:
          "Thicker end plate variant for ripple mill rotors running at higher throughput.",
        application: "Rotor assembly in nut cracking ripple mills",
        details: [
          "Increased plate thickness",
          "Machined rod seats",
          "Manufactured from your sample",
        ],
      },
      {
        slug: "rotor-disc-plate-tapper",
        name: "Rotor Disc Plate Tapper",
        file: "13",
        alt: "Tapered rotor disc plate for a ripple mill",
        description: "Tapered rotor disc plate used to build up the ripple mill rotor stack.",
        application: "Ripple mill rotor build-up",
        details: [
          "Tapered profile machined to spec",
          "Wear-resistant material",
          "Available in sets",
        ],
      },
      {
        slug: "rotor-hardened-rod",
        name: "Rotor Hardened Rod",
        file: "10",
        alt: "Hardened rotor rods for a ripple mill",
        description:
          "Hardened rods that strike the nuts against the ripple plate to crack the shell.",
        application: "Nut cracking in ripple mills",
        details: [
          "Hardened for long service life",
          "Ground to consistent diameter",
          "Supplied in full rotor sets",
        ],
      },
      {
        slug: "rotor-shaft",
        name: "Rotor Shaft",
        file: "9",
        alt: "Rotor shaft for a ripple mill",
        description: "Central shaft carrying the ripple mill rotor assembly.",
        application: "Rotor drive in ripple mills",
        details: [
          "Turned and ground bearing seats",
          "Dynamically checked for run-out",
          "Made to original dimensions",
        ],
      },
      {
        slug: "ripple-mill-spacer",
        name: "Spacer",
        file: "7",
        alt: "Spacer rings for a ripple mill rotor assembly",
        description: "Spacers that set the gap between rotor discs along the ripple mill shaft.",
        application: "Rotor disc spacing in ripple mills",
        details: ["Machined to required widths", "Consistent parallel faces", "Supplied in sets"],
      },
    ],
  },
  {
    category: {
      slug: "ffb-cage",
      name: "FFB Cage",
      description:
        "Cages, wheels, bushes and bearing blocks for fresh fruit bunch sterilizer cages and their tracks.",
      image: "",
    },
    items: [
      {
        slug: "bearing-block",
        name: "Bearing Block",
        file: "1",
        alt: "Cast bearing block for an FFB cage wheel",
        description: "Houses the cage wheel bearing and carries the loaded cage on its axle.",
        application: "Wheel mounting on FFB sterilizer cages",
        details: [
          "Cast and machined housing",
          "Bore sized to your bearing",
          "Direct replacement fit",
        ],
      },
      {
        slug: "bearing-block-heavy",
        name: "Bearing Block (Heavy Duty)",
        file: "26",
        alt: "Heavy duty bearing block for an FFB cage",
        description: "Reinforced bearing block for cages handling heavier bunch loads.",
        application: "Wheel mounting on high-load FFB cages",
        details: [
          "Thicker section for higher loads",
          "Machined mounting faces",
          "Made from your sample",
        ],
      },
      {
        slug: "bearing-block-flanged",
        name: "Bearing Block (Flanged)",
        file: "24",
        alt: "Flanged bearing block for an FFB cage assembly",
        description:
          "Flange-mounted bearing block variant used where the cage frame is bolted rather than welded.",
        application: "Bolt-on wheel mounting for FFB cages",
        details: [
          "Machined flange and bolt holes",
          "Matched to existing frames",
          "Supplied in pairs",
        ],
      },
      {
        slug: "ci-bush",
        name: "CI Bush",
        file: "25",
        alt: "Cast iron bush for an FFB cage wheel",
        description:
          "Cast iron bush providing a replaceable wearing surface between wheel and axle.",
        application: "Wheel and axle wear protection on FFB cages",
        details: [
          "Cast iron for good wear behaviour",
          "Machined to your axle size",
          "Economical replacement item",
        ],
      },
      {
        slug: "cage-wheels",
        name: "Cage Wheels",
        file: "23",
        alt: "Cast cage wheels for FFB sterilizer cages",
        description: "Flanged wheels that carry the FFB cage along the mill rail track.",
        application: "Cage movement along sterilizer rails",
        details: [
          "Cast and machined tread and flange",
          "Sized to your rail profile",
          "Supplied with or without bushes",
        ],
      },
      {
        slug: "ffb-cage",
        name: "FFB Cage",
        file: "20",
        alt: "Fabricated FFB cage for palm fruit sterilization",
        description: "Fabricated cage that carries fresh fruit bunches through the sterilizer.",
        application: "Bunch transport and sterilization",
        details: [
          "Fabricated to your mill capacity",
          "Perforated body for steam circulation",
          "Wheels and bearings fitted on request",
        ],
      },
      {
        slug: "gm-bush",
        name: "GM Bush",
        file: "22",
        alt: "Gun metal bush for an FFB cage wheel",
        description:
          "Gun metal bush used where a softer, self-lubricating bearing surface is preferred.",
        application: "Cage wheel bearing surface",
        details: [
          "Gun metal construction",
          "Machined to your axle diameter",
          "Long wear life under load",
        ],
      },
      {
        slug: "cage-wheels-machined",
        name: "Cage Wheels (Machined Set)",
        file: "21",
        alt: "Machined cage wheel set for FFB sterilizer cages",
        description: "Finish-machined cage wheel set supplied ready for fitting to existing axles.",
        application: "Replacement wheel sets for FFB cages",
        details: [
          "Bores finished to size",
          "Matched sets for even running",
          "Bushes fitted if required",
        ],
      },
    ],
  },
  {
    category: {
      slug: "kernel",
      name: "Kernel",
      description: "Kernel plant wear parts used in nut cracking and kernel recovery equipment.",
      image: "",
    },
    items: [
      {
        slug: "nihard-cone",
        name: "Ni-Hard Cone",
        file: "kernal-1",
        alt: "Ni-hard cast cone for palm kernel cracking equipment",
        description:
          "Ni-hard cast cone that provides the hard cracking surface in kernel recovery equipment.",
        application: "Nut cracking and kernel recovery",
        details: [
          "Ni-hard casting for abrasion resistance",
          "Machined to original profile",
          "Supplied as a wear replacement",
        ],
      },
    ],
  },
  {
    category: {
      slug: "sludge-pump",
      name: "Sludge Pump",
      description:
        "Impellers and casings for sludge pumps handling oil-bearing effluent in the mill.",
      image: "",
    },
    items: [
      {
        slug: "closed-impeller",
        name: "Closed Impeller",
        file: "s-1",
        alt: "Closed impeller casting for a palm oil mill sludge pump",
        description:
          "Closed impeller for higher-efficiency pumping of relatively clean sludge streams.",
        application: "Sludge transfer in palm oil mills",
        details: [
          "Cast and machined impeller",
          "Balanced before dispatch",
          "Made to your pump model",
        ],
      },
      {
        slug: "enclosed-impeller",
        name: "Enclosed Impeller",
        file: "s-2",
        alt: "Enclosed impeller for a palm oil mill sludge pump",
        description: "Fully shrouded impeller giving stable flow and reduced recirculation losses.",
        application: "Continuous sludge pumping duty",
        details: [
          "Shrouded vane construction",
          "Machined hub and keyway",
          "Manufactured from your sample",
        ],
      },
      {
        slug: "open-impeller",
        name: "Open Impeller",
        file: "s-3",
        alt: "Open impeller for a palm oil mill sludge pump",
        description:
          "Open impeller suited to thicker sludge with fibre and solids that would block a closed design.",
        application: "Pumping heavy or fibrous sludge",
        details: [
          "Open vane design resists clogging",
          "Wear-resistant casting",
          "Sized to your pump casing",
        ],
      },
      {
        slug: "pump-casing",
        name: "Pump Casing",
        file: "s-7",
        alt: "Sludge pump casing for a palm oil mill",
        description:
          "Volute casing that houses the impeller and directs sludge to the pump discharge.",
        application: "Sludge pump housing",
        details: [
          "Cast and machined volute",
          "Matched to impeller clearances",
          "Replacement for worn casings",
        ],
      },
    ],
  },
  {
    category: {
      slug: "efb-shredder-machinery",
      name: "EFB Shredder Machinery",
      description: "Cutting, wear and structural parts for empty fruit bunch shredders.",
      image: "",
    },
    items: [
      {
        slug: "efb-bearing-blocks",
        name: "Bearing Blocks",
        file: "efb-1",
        alt: "Bearing blocks for an EFB shredder rotor",
        description:
          "Support the shredder rotor shaft and absorb the shock loads of bunch shredding.",
        application: "Rotor shaft support on EFB shredders",
        details: [
          "Heavy fabricated and machined blocks",
          "Bores sized to your bearings",
          "Built for shock loading",
        ],
      },
      {
        slug: "efb-bearing-housings",
        name: "Bearing Housings",
        file: "efb-2",
        alt: "Bearing housings for an EFB shredder machine",
        description: "Machined housings that hold and seal the shredder rotor bearings.",
        application: "Bearing mounting on EFB shredders",
        details: [
          "Machined split housings",
          "Seal grooves cut to size",
          "Made to existing machine dimensions",
        ],
      },
      {
        slug: "efb-bottom-cover",
        name: "Bottom Cover",
        file: "efb-3",
        alt: "Bottom cover plate for an EFB shredder machine",
        description:
          "Lower body cover that contains shredded material and protects the machine frame.",
        application: "EFB shredder body enclosure",
        details: [
          "Fabricated from heavy plate",
          "Drilled to your bolt pattern",
          "Replaces worn or corroded covers",
        ],
      },
      {
        slug: "efb-cutter-plate",
        name: "Cutter Plate",
        file: "efb-4",
        alt: "Cutter plate for an EFB shredder machine",
        description:
          "Fixed cutting plate that works against the rotating knives to tear bunches apart.",
        application: "Bunch cutting inside the EFB shredder",
        details: [
          "Wear-resistant plate material",
          "Cut and machined to profile",
          "Supplied in matched sets",
        ],
      },
      {
        slug: "efb-knife-bars",
        name: "Knife Bars",
        file: "efb-5",
        alt: "Knife bars for an EFB shredder rotor",
        description:
          "Rotating knife bars that shred empty fruit bunches into loose, uniform fibre.",
        application: "Primary shredding element on EFB shredders",
        details: [
          "Hardened cutting edges",
          "Drilled for direct bolt-on fitting",
          "Supplied as full rotor sets",
        ],
      },
      {
        slug: "efb-scraper-blade",
        name: "Scraper Blade",
        file: "efb-6",
        alt: "Scraper blade for an EFB shredder machine",
        description:
          "Keeps the shredder body clear by scraping away material that sticks to the housing.",
        application: "Housing cleaning inside the EFB shredder",
        details: [
          "Wear-resistant blade steel",
          "Profiled to the shredder body",
          "Easily replaceable",
        ],
      },
      {
        slug: "efb-spacer-plate",
        name: "Spacer Plate",
        file: "efb-7",
        alt: "Spacer plates for an EFB shredder rotor assembly",
        description: "Sets the spacing between knife bars along the shredder rotor.",
        application: "Knife spacing on EFB shredder rotors",
        details: [
          "Cut and machined to thickness",
          "Consistent set-to-set accuracy",
          "Supplied in full sets",
        ],
      },
      {
        slug: "efb-top-cover",
        name: "Top Cover",
        file: "efb-8",
        alt: "Top cover for an EFB shredder machine",
        description: "Upper body cover giving access to the rotor for knife changes and cleaning.",
        application: "EFB shredder access and enclosure",
        details: [
          "Fabricated heavy plate cover",
          "Hinged or bolted as required",
          "Made to your machine",
        ],
      },
      {
        slug: "efb-square-shafts",
        name: "Square Shafts",
        file: "efb-9",
        alt: "Square shafts for an EFB shredder machine",
        description:
          "Square-section shafts that carry the knife and spacer stack on the shredder rotor.",
        application: "Rotor assembly on EFB shredders",
        details: [
          "Machined square section",
          "Heat treated for torsional load",
          "Made to original lengths",
        ],
      },
      {
        slug: "efb-tightening-nut",
        name: "Tightening Nut",
        file: "efb-10",
        alt: "Tightening nuts for an EFB shredder rotor assembly",
        description: "Clamps the knife and spacer stack tight on the shredder rotor shaft.",
        application: "Rotor stack clamping on EFB shredders",
        details: [
          "Machined heavy-duty nut",
          "Thread cut to match the shaft",
          "Supplied with the shaft or separately",
        ],
      },
    ],
  },
  {
    category: {
      slug: "hanger-bearing",
      name: "Hanger Bearing",
      description:
        "Hanger bearings and bushes that support screw conveyor shafts across long spans.",
      image: "",
    },
    items: [
      {
        slug: "gun-metal-half-bush",
        name: "Gun Metal Half Bush",
        file: "hanger-1",
        alt: "Gun metal half bush for a screw conveyor hanger bearing",
        description:
          "Split gun metal bush that carries the conveyor shaft inside the hanger bearing.",
        application: "Screw conveyor shaft support",
        details: [
          "Gun metal for low-friction running",
          "Split design for quick replacement",
          "Machined to your shaft diameter",
        ],
      },
      {
        slug: "hanger-bearing",
        name: "Hanger Bearing",
        file: "hanger-2",
        alt: "Hanger bearing assembly for a screw conveyor",
        description:
          "Complete hanger bearing assembly supporting screw conveyor shafts at intermediate points.",
        application: "Intermediate support in screw conveyors",
        details: [
          "Machined to match your conveyor",
          "Accepts gun metal or CI bushes",
          "Supplied as new-build or replacement",
        ],
      },
    ],
  },
  {
    category: {
      slug: "machines",
      name: "Machines",
      description: "Complete machines manufactured in our workshop for palm oil mills.",
      image: "",
    },
    items: [
      {
        slug: "efb-shredder-machine",
        name: "EFB Shredder Machine",
        file: "machine-1",
        alt: "EFB shredder machine manufactured by SSLVEW for palm oil mills",
        description:
          "Heavy-duty shredder that tears empty fruit bunches into loose, uniform fibre for composting, boiler fuel or mulching.",
        application: "Empty fruit bunch shredding, composting and biomass preparation",
        details: [
          "Rotor fitted with hardened knife bars and spacer plates",
          "Fixed cutter plate for consistent shredding",
          "Fabricated frame built for continuous mill duty",
        ],
        featured: true,
      },
      {
        slug: "nut-cracker-machine",
        name: "Nut Cracker Machine",
        file: "machine-2",
        alt: "Palm nut cracker machine manufactured by SSLVEW",
        description:
          "Cracks palm nuts against a hardened ripple surface to release whole kernels with minimum kernel breakage.",
        application: "Cracking palm nuts ahead of kernel and shell separation",
        details: [
          "Hardened rotor rods and cracking ring",
          "Balanced rotor for smooth, low-vibration running",
          "Easy access for cleaning and wear part changes",
        ],
        featured: true,
      },
      {
        slug: "p15-screw-press-machine",
        name: "P15 Screw Press Machine",
        file: "machine-3",
        alt: "P15 twin screw press machine manufactured by SSLVEW",
        description:
          "Twin screw press that squeezes digested palm fruit against a strainer cage to extract crude palm oil and discharge press cake.",
        application: "Crude palm oil extraction from digested fruit",
        details: [
          "Hardened worm screws and strainer cage",
          "Adjustable cone for back-pressure control",
          "All wear parts manufactured in-house",
        ],
        featured: true,
      },
    ],
  },
  {
    category: {
      slug: "fabrication",
      name: "Fabrication",
      description:
        "Custom fabricated equipment — cages, drums, conveyors and strippers built to your drawings.",
      image: "",
    },
    items: [
      {
        slug: "ffb-cages-fabrication",
        name: "FFB Cages",
        file: "F-1",
        alt: "Fabricated FFB cages in the SSLVEW workshop",
        description: "Fresh fruit bunch cages fabricated complete with body, wheels and fittings.",
        application: "Bunch transport through the sterilizer",
        details: [
          "Fabricated to your capacity and rail gauge",
          "Wheels and bearing blocks fitted",
          "Batch quantities available",
        ],
      },
      {
        slug: "nut-polishing-drum",
        name: "Nut Polishing Drum",
        file: "f-2",
        alt: "Fabricated nut polishing drum for a palm oil mill",
        description: "Rotating drum that removes residual fibre from nuts before cracking.",
        application: "Nut cleaning ahead of the cracker",
        details: [
          "Perforated drum body",
          "Drive and support rollers supplied",
          "Built to your throughput",
        ],
      },
      {
        slug: "screw-flight",
        name: "Screw Flight",
        file: "f-3",
        alt: "Formed screw flights for conveyors",
        description: "Formed helical flights for screw conveyors, made to your pitch and diameter.",
        application: "Screw conveyor manufacture and repair",
        details: [
          "Cold-formed flights",
          "Any pitch and diameter to order",
          "Welded to shaft on request",
        ],
      },
      {
        slug: "ss-screw-conveyor",
        name: "SS Screw Conveyor",
        file: "f-4",
        alt: "Stainless steel screw conveyor fabricated by SSLVEW",
        description:
          "Stainless steel screw conveyor for applications requiring corrosion-resistant contact surfaces.",
        application: "Bulk transfer where stainless contact surfaces are required",
        details: [
          "Stainless trough and flights",
          "Hanger bearings fitted as needed",
          "Designed around your layout",
        ],
      },
      {
        slug: "stripper",
        name: "Stripper",
        file: "f-5",
        alt: "Fabricated threshing stripper drum for a palm oil mill",
        description: "Threshing drum that strips sterilised fruit from the bunch stalk.",
        application: "Fruit separation from sterilised bunches",
        details: [
          "Fabricated drum and stripper bars",
          "Drive arrangement supplied",
          "Built to mill capacity",
        ],
      },
    ],
  },
];

export const categories: Category[] = catalogue.map(({ category, items }) => ({
  slug: category.slug,
  name: category.name,
  description: category.description,
  image: img(items[0]?.file ?? ""),
}));

export const products: Product[] = catalogue.flatMap(({ category, items }) =>
  items.map((item) => ({
    slug: item.slug,
    name: item.name,
    category: category.name,
    categorySlug: category.slug,
    image: img(item.file),
    alt: item.alt,
    description: item.description,
    application: item.application,
    details: item.details,
    ...(item.featured ? { featured: true as const } : {}),
  })),
);

export const featuredProducts = products.filter((p) => p.featured);

export const productsByCategory = (slug: string) => products.filter((p) => p.categorySlug === slug);
