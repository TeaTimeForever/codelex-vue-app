export interface Flight {
  from: Airport;
  to: Airport;
  date: Date;
}

export interface Airport {
  airportCode: string;
  city: string;
  country: string;
}

// TODO: remove me ASAP
export const RIX = {
  airportCode: 'RIX',
  city: 'Riga',
  country: 'Latvia'
}