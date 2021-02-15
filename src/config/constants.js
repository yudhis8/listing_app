import configJson from '../../config';
import images from './images';
const generalConfig = configJson.general;

const modeConfig = __DEV__
  ? true
  : false
  ? configJson.development
  : configJson.production;

export const config = Object.assign({}, generalConfig, modeConfig);
export const dummyDataListing = [
  {
    name: 'Henry Scott',
    profile: images.profile,
    image: images.place,
    from: 'Century 21 BSD City',
    place: 'Nava Park BSD City',
    address: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
    price: 'Rp 6.500.000.000',
    type: 'Rumah',
    status: 0,
    rent: 0,
    sold: 0,
    private: false,
    room: '3+1',
    bathroom: '3+1',
    area: '300m',
  },
  {
    name: 'Henry Scott',
    profile: images.profile,
    image: images.place1,
    from: 'Century 21 BSD City',
    place: 'Woody Residence Foresta',
    address: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
    price: 'Rp 10.000.000/Bulan',
    type: 'Rumah',
    status: 1,
    rent: 0,
    sold: 0,
    private: true,
    room: '4',
    bathroom: '4',
    area: '275m',
  },
];

export const dummyDataFavorite = [
  {
    name: 'Andrea Collins',
    profile: images.profile1,
    image: images.place2,
    from: 'Century 21 BSD City',
    place: 'B Residence BSD Signature Lotus',
    address: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
    price: 'Rp 2.500.000.000',
    type: 'Rumah',
    status: 0,
    rent: 0,
    sold: 0,
    private: false,
    room: '3+1',
    bathroom: '2+1',
    area: '118m',
  },
  {
    name: 'Stewart Vale',
    profile: images.profile2,
    image: images.place3,
    from: 'Century 21 BSD City',
    place: 'The Branz Apartment BSD City',
    address: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
    price: 'Rp 2.250.000.000',
    type: 'Rumah',
    status: 0,
    rent: 0,
    sold: 0,
    private: false,
    room: '3+1',
    bathroom: '2+1',
    area: '85m',
  },
];

export const dummyDataArsip = [
  {
    name: 'Andrea Collins',
    profile: images.profile,
    image: images.place4,
    from: 'Century 21 BSD City',
    place: 'B Residence BSD Signature Lotus',
    address: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
    price: 'Rp 2.500.000.000',
    type: 'Rumah',
    status: 1,
    rent: 1,
    sold: 0,
    private: true,
    room: '3+1',
    bathroom: '2+1',
    area: '118m',
  },
  {
    name: 'Henry Scott',
    profile: images.profile,
    image: images.place5,
    from: 'Century 21 BSD City',
    place: 'Foresta Ultimo BSD City',
    address: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
    price: 'Rp 2.500.000.000',
    type: 'Rumah',
    status: 0,
    rent: 0,
    sold: 1,
    private: false,
    room: '3+1',
    bathroom: '2+1',
    area: '118m',
  },
];
