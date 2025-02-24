import axios from 'axios';

enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

interface UserData {
  id: number,
  firstName: string,
  lastName: string,
  maidenName: string,
  age: number,
  gender: Gender,
  email: string,
  phone: string,
  username: string,
  password: string,
  birthDate: string,
  image: string,
  bloodGroup: string,
  height: number,
  weight: number,
  eyeColor: string,
  hair: {
    color: string,
    type: string,
  },
  ip: string,
  address: {
    address: string,
    city: string,
    state: string,
    stateCode: string,
    postalCode: string,
    coordinates: {
      lat: number,
      lng: number
    },
    country: string
  },
  macAddress: string,
  university: string,
  bank: {
    cardExpire: string,
    cardNumber: string,
    cardType: string,
    currency: string,
    iban: string
  },
  company: {
    department: string,
    name: string,
    title: string,
    address: {
      address: string,
      city: string,
      state: string,
      stateCode: string,
      postalCode: string,
      coordinates: {
        lat: number,
        lng: number
      },
      country: string
    }
  },
  ein: string,
  ssn: string,
  userAgent: string,
  crypto: {
    coin: string,
    wallet: string,
    network: string
  },
  role: string
} 

interface UserResponse {
  users: UserData[];
  total: number;
  skip: number;
  limit: number;
}

const api = 'https://dummyjson.com/users';

const fetchUsers = async (): Promise<UserResponse | null> => {
  try {
    const res = await axios.get<UserResponse>(api);
    return res.data;
  } catch(error) {
    if (axios.isAxiosError(error)) {
      console.error('ошибка запроса: ', error.message)
    } else {
      console.error('ошибка', error)
    }
    return null;
  }
}

const getUsers = async () => {
  const userResponse = await fetchUsers();
  if (userResponse) {
    console.log('список пользователей: ', userResponse.users)
  } else {
    console.log('ошибка получения пользователей')
  }
}

getUsers();