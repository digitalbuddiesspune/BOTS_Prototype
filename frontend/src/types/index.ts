export interface Competition {
  id: number;
  title: string;
  image: string;
  price: string;
  entriesSold: number;
  totalEntries: number;
  category?: string;
}

export interface Winner {
  name: string;
  prize: string;
  image: string;
  cashPrize?: string;
}





