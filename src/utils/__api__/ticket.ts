import { cache } from "react";
import axios from "../../utils/axiosInstance";
// CUSTOM DATA MODEL
import Ticket from "models/Ticket.model";
import { SlugParams } from "models/Common";

export const getTicketList = cache(async (): Promise<Ticket[]> => {
  const response = await axios.get("/api/tickets");
  return response.data;
});

export const getTicket = cache(async (slug: string): Promise<Ticket> => {
  const response = await axios.get("/api/tickets/single", { params: { slug } });
  return response.data;
});

export const getSlugs = cache(async (): Promise<SlugParams[]> => {
  const response = await axios.get("/api/tickets/slugs");
  return response.data;
});

export default { getTicketList, getTicket, getSlugs };
