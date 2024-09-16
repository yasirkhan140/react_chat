

export interface BasicDetailsTypes {
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  fullName: string;
  email: string;
  location: string;
  avatar: string;
  coverImage: string;
}

export interface MediaListItemTypes {
  id: number;
  url: string;
}
export interface MediaTypes {
  total: number;
  list: MediaListItemTypes[];
}

export interface AttachedfileTypes {
  total: number;
  list: AttachedfileItemTypes[];
}

export interface AttachedfileItemTypes {
  id: number;
  fileName: string;
  size: string;
  downloadUrl: string;
  icon: string;
}
export interface ProfileDetailsTypes {
  basicDetails: BasicDetailsTypes;
  media: MediaTypes;
  attachedFiles: AttachedfileTypes;
}

const profileDetails: ProfileDetailsTypes = {
  basicDetails: {
    firstName: "Adam ",
    lastName: "Zampa",
    title: "Front end Developer",
    description:
      "If several languages coalesce, the grammar of the resulting language is more simple.",
    fullName: "Adam Zampa",
    email: "admin@themesbrand.com",
    location: "California, USA",
    avatar: "avatar1",
    coverImage: "image4",
  },
  media: {
    total: 17,
    list: [
      {
        id: 1,
        url: "avatar5",
      },
      {
        id: 2,
        url: "img2",
      },
      {
        id: 3,
        url: "img4",
      },
      {
        id: 4,
        url: "avatar5",
      },
      {
        id: 5,
        url: "avatar5",
      },
      {
        id: 6,
        url: "avatar5",
      },
      {
        id: 7,
        url: "avatar5",
      },
      {
        id: 8,
        url: "avatar5",
      }, {
        id: 9,
        url: "avatar5",
      }, {
        id: 10,
        url: "avatar5",
      }, {
        id: 11,
        url: "avatar5",
      }, {
        id: 12,
        url: "avatar5",
      }, {
        id: 13,
        url: "avatar5",
      }, {
        id: 14,
        url: "avatar5",
      }, {
        id: 15,
        url: "avatar5",
      }, {
        id: 16,
        url: "avatar5",
      }, {
        id: 17,
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
};

let user: any = localStorage.getItem("authUser");
user = JSON.parse(user);

const myData = {
  uid: user && user.uid ? user.uid : 1,
  username: "admin",
  role: "admin",
  password: "123456",
  email: profileDetails.basicDetails.email,
  profileImage: profileDetails.basicDetails.avatar,
};

export { profileDetails, myData };
