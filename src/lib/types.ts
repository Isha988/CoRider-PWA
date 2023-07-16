export type HeaderType = {
  name: String;
  from: String;
  to: String;
};

export type SenderType = {
  user_id: String;
  image: URL;
  is_kyc_type: boolean;
  self: boolean;
};

export type ChatType = {
  id: String;
  message: String;
  sender: SenderType;
  time: Date;
};
