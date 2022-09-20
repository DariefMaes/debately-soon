export interface Info {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "info";
  _updatedAt: string;
  logo: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  slogan: string;
}

export interface Social {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "socials";
  _updatedAt: string;
  image: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  socialName: string;
  url: string;
}
