

// interfaces
import { ChannelTypes } from "./chat";
import { MediaTypes, AttachedfileTypes } from "./myProfile";
import { STATUS_TYPES } from "../constant/settings.ts";
export interface ContactTypes {
  id: string | number;
  firstName: string;
  lastName: string;
  profileImage?: any;
  about?: string;
  email: string;
  location: string;
  channels?: Array<ChannelTypes>;
  media?: MediaTypes;
  attachedFiles?: AttachedfileTypes;
  status?: STATUS_TYPES;
  isFavourite?: boolean;
  isArchived?: boolean;
}
let contacts: ContactTypes[] = [
  {
    id: "614ecab426f59ce2863e106e",
    firstName: "Sanford",
    lastName: "Phelps",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab4aeecaa03e8244d57",
    firstName: "Carla",
    lastName: "Serrano",
    profileImage: "avatar5",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },

        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab44abffd0867521196",
    firstName: "Alvarez",
    lastName: "Luna",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },

        {
          id: 4,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
        {
          id: 2,
          fileName: "Image-1.jpg",
          size: "4.2 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
      ],
    },
  },
  {
    id: "614ecab463eda97c2df4fe9a",
    firstName: "Norris",
    lastName: "Decker",
    profileImage: "avatar5",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
        {
          id: 2,
          fileName: "Image-1.jpg",
          size: "4.2 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
      ],
    },
  },
  {
    id: "614ecab4ac946a9bdafa4e3b",
    isFavourite: true,
    firstName: "Marguerite",
    lastName: "Campbell",
    profileImage: "avatar5",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "Marguerite@Campbell.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
        {
          id: 3,
          url: "avatar5",
        },
        {
          id: 4,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
        {
          id: 2,
          fileName: "Image-1.jpg",
          size: "4.2 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab41f60c4fdffe639c8",
    firstName: "Katrina",
    lastName: "Winters",
    profileImage: "avatar5",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.AWAY,
    isFavourite: true,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
        {
          id: 3,
          url: "avatar5",
        },
        {
          id: 4,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
        {
          id: 2,
          fileName: "Image-1.jpg",
          size: "4.2 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab400931b0aba9d0d76",
    firstName: "Miranda",
    lastName: "Valentine",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    isArchived: true,
    isFavourite: true,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
        {
          id: 3,
          url: "avatar5",
        },
        {
          id: 4,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
        {
          id: 2,
          fileName: "Image-1.jpg",
          size: "4.2 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab4c2a5e35f32f78659",
    firstName: "Faulkner",
    lastName: "Benjamin",
    profileImage: "avatar5",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    isFavourite: true,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
        {
          id: 3,
          url: "avatar5",
        },
        {
          id: 4,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
        {
          id: 2,
          fileName: "Image-1.jpg",
          size: "4.2 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab4fd445a537e2bb2b5",
    firstName: "Dean",
    lastName: "Vargas",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    isArchived: true,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
        {
          id: 3,
          url: "avatar5",
        },
        {
          id: 4,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
        {
          id: 2,
          fileName: "Image-1.jpg",
          size: "4.2 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab4ebb18e740e372e80",
    firstName: "Earnestine",
    lastName: "Sears",
    profileImage: "avatar5",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
        {
          id: 3,
          url: "avatar5",
        },
        {
          id: 4,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
        {
          id: 2,
          fileName: "Image-1.jpg",
          size: "4.2 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab4fec7ab1ffb2a497d",
    firstName: "Melody",
    lastName: "Montoya",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    isArchived: true,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
        {
          id: 3,
          url: "avatar5",
        },
        {
          id: 4,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
        {
          id: 2,
          fileName: "Image-1.jpg",
          size: "4.2 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab4363b167c147a422b",
    firstName: "Zimmerman",
    lastName: "Langley",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
        {
          id: 3,
          url: "avatar5",
        },
        {
          id: 4,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
        {
          id: 2,
          fileName: "Image-1.jpg",
          size: "4.2 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab44fe4db874560b822",
    firstName: "Wallace",
    lastName: "Lane",
    profileImage: "avatar5",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
        {
          id: 3,
          url: "avatar5",
        },
        {
          id: 4,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
        {
          id: 2,
          fileName: "Image-1.jpg",
          size: "4.2 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab49b13ce36ad017914",
    firstName: "Jennifer",
    lastName: "Ramirez",
    profileImage: "avatar5",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
        {
          id: 3,
          url: "avatar5",
        },
        {
          id: 4,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
        {
          id: 2,
          fileName: "Image-1.jpg",
          size: "4.2 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab48c8cc404a0604fc4",
    firstName: "Heath",
    lastName: "Jarvis",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
        {
          id: 3,
          url: "avatar5",
        },
        {
          id: 4,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
        {
          id: 2,
          fileName: "Image-1.jpg",
          size: "4.2 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab45f5f3e45d25d5bbd",
    firstName: "Kitty",
    lastName: "Cannon",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,

    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
        {
          id: 3,
          url: "avatar5",
        },
        {
          id: 4,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
        {
          id: 2,
          fileName: "Image-1.jpg",
          size: "4.2 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab49785656f162d67db",
    firstName: "Tonia",
    lastName: "Clay",
    profileImage: "avatar5",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,

    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
        {
          id: 3,
          url: "avatar5",
        },
        {
          id: 4,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
        {
          id: 2,
          fileName: "Image-1.jpg",
          size: "4.2 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab4a4666b6ff5f7864f",
    firstName: "Hendrix",
    lastName: "Martin",
    profileImage: "avatar5",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.DO_NOT_DISTURB,

    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
        {
          id: 3,
          url: "avatar5",
        },
        {
          id: 4,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
        {
          id: 2,
          fileName: "Image-1.jpg",
          size: "4.2 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab43dbce45d6d996d9f",
    firstName: "Donaldson",
    lastName: "Riddle",
    profileImage: "avatar5",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
        {
          id: 3,
          url: "avatar5",
        },
        {
          id: 4,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
        {
          id: 2,
          fileName: "Image-1.jpg",
          size: "4.2 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab41b1f288b60a9f5c9",
    firstName: "Daniels",
    lastName: "Webster",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
        {
          id: 3,
          url: "avatar5",
        },
        {
          id: 4,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
        {
          id: 2,
          fileName: "Image-1.jpg",
          size: "4.2 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab413673c7385945500",
    firstName: "Shawna",
    lastName: "Wright",
    about: "Nothind to Display!",
    email: "ShawnaWright@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
      {
        id: 3,
        name: "Brand Suggestion",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "avatar5",
        },
        {
          id: 2,
          url: "avatar5",
        },
        {
          id: 3,
          url: "avatar5",
        },
        {
          id: 4,
          url: "avatar5",
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 1,
          fileName: "design-phase-1-approved.pdf",
          size: "12.5 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
        {
          id: 2,
          fileName: "Image-1.jpg",
          size: "4.2 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
];

const onChangeContacts = (newData: Array<ContactTypes>) => {
  contacts = newData;
};
export { contacts, onChangeContacts };
