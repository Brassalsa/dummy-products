type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type CartType = ProductType & {
  quantity: 1;
};

type ManyProducts = {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
};

type UserType = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};
