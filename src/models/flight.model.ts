export interface Flight {
  from: Airport;
  to: Airport;
  date: Date;
}

export interface Airport {
  code: string;
  city: string;
  country: string;
}

// TODO: remove me ASAP
export const RIX = {
  code: 'RIX',
  city: 'Riga',
  country: 'Latvia'
}