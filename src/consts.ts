import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Aaron Network",
  EMAIL: "aaronetwork@proton.me",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Aaron Network Blog — your go-to source for the latest updates, insights, and discussions on " +
      "decentralized communication, blockchain transparency, and our mission to create a secure and open " +
      "ecosystem. Stay informed about new features, community updates, and all things Aaron Network!",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Aaron Network Blog — your go-to source for the latest updates, insights, and discussions on " +
      "decentralized communication, blockchain transparency, and our mission to create a secure and open " +
      "ecosystem. Stay informed about new features, community updates, and all things Aaron Network!",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter",
    HREF: "https://x.com/aaronetwork",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/aaronetwork"
  },
];
