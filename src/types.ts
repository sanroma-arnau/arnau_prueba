export type Expedition = {
  city: string;
  client: {
    username: string;
    profile: {
      emails: string[];
      name: string;
      // assuming phone numbers are given as strings
      phones: string[];
    };
  };
  country: string;
  // createdAt and updatedAt are timestamps w/ format yyyy-MM-ddTHH:mm:ssZ
  createdAt: string;
  updatedAt: string;
  date: number;
  id: number;
  postalCode: string;
  reference: string;
  // TODO: improve statusCode to a better type like "created" | "incidence" | "something_else"
  statusCode: string;
  street: string;
  // TODO: improve statusCode to a better type like "delivery" | "pickup" | "something_else"
  type: string;
};
