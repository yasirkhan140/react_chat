// interfaces
import { contacts } from "./contacts.ts";
import { MediaTypes, AttachedfileTypes } from "./myProfile";


// interface
import { ContactTypes } from "./contacts";
interface MemberTypes extends ContactTypes {
  isAdmin?: boolean;
}
interface ChannelDataTypes {
  id: number | string;
  name: string;
  about?: string;
  members: Array<MemberTypes>;
  media?: MediaTypes;
  attachedFiles?: AttachedfileTypes;
  isArchived?: boolean;
}
let userChannels: ChannelDataTypes[] = [
  {
    id: "61665bcb9a456823e282afa7",
    name: "Landing Design",
    about: "The Channel Created For Designers.",
    members: [{ ...contacts[0], isAdmin: true }, { ...contacts[1] }],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: "img1",
        },
        {
          id: 2,
          url: "img2",
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
    id: "61665bcb9a41b4e8352ba610",
    name: "Design Phase 2",
    isArchived: true,
    members: [{ ...contacts[3] }, { ...contacts[4] }],
  },
  {
    id: "61665bcbd226d0502768b6f3",
    name: "Brand Suggestion",
    members: [{ ...contacts[2] }, { ...contacts[3] }],
  },
  {
    id: "61665bcbc0f86d33164365c8",
    name: "Reporting",
    members: [{ ...contacts[0] }, { ...contacts[1] }],
  },
];

const onChangeUserChannels = (newData: Array<ChannelDataTypes>) => {
  userChannels = newData;
};

export { userChannels, onChangeUserChannels };
