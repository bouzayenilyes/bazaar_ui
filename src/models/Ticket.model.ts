import User from "./User.model";

type Message = {
  name: string;
  date: string;
  text: string;
  imgUrl: string;
};

interface Ticket {
  user: User;
  id: string;
  slug: string;
  type: string;
  date: string;
  title: string;
  status: string;
  category: string;
  conversation: null | Message[];
}

export default Ticket;
