export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Time: { input: any; output: any; }
  Date: { input: any; output: any; }
  UUID: { input: any; output: any; }
  BigInt: { input: any; output: any; }
};

export type INode = {
  id: Scalars['UUID']['output'];
};

export type IMetaNode = {
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  description: Scalars['String']['output'];
  image: Image;
  album?: Maybe<Array<Image>>;
  minAge?: Maybe<Scalars['Int']['output']>;
  maxAge?: Maybe<Scalars['Int']['output']>;
  minCapacity: Scalars['Int']['output'];
  maxCapacity: Scalars['Int']['output'];
};

export type IEvent = {
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  date: Scalars['Date']['output'];
  startTime: Scalars['Time']['output'];
  endTime?: Maybe<Scalars['Time']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
};

export type IProduct = {
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
};

export type Image = {
  __typename?: 'Image';
  imageSrc: Scalars['String']['output'];
  imageAlt: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
};

export type Client = {
  __typename?: 'Client';
  id: Scalars['UUID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  avatarSrc: Scalars['String']['output'];
  telegramId: Scalars['BigInt']['output'];
};

export type Event = IEvent & {
  __typename?: 'Event';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  date: Scalars['String']['output'];
  startTime: Scalars['Time']['output'];
  endTime?: Maybe<Scalars['Time']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['Time']['output'];
  updatedAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['Time']['output']>;
};

export type Product = IProduct & {
  __typename?: 'Product';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  createdAt: Scalars['Time']['output'];
  updatedAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['Time']['output']>;
};

export type Lesson = IMetaNode & {
  __typename?: 'Lesson';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  description: Scalars['String']['output'];
  minCapacity: Scalars['Int']['output'];
  maxCapacity: Scalars['Int']['output'];
  minAge?: Maybe<Scalars['Int']['output']>;
  maxAge?: Maybe<Scalars['Int']['output']>;
  image: Image;
  album?: Maybe<Array<Maybe<Image>>>;
  createdAt: Scalars['Time']['output'];
  updatedAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['Time']['output']>;
};

export type Show = IMetaNode & {
  __typename?: 'Show';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  description: Scalars['String']['output'];
  minCapacity: Scalars['Int']['output'];
  maxCapacity: Scalars['Int']['output'];
  duration: Scalars['Int']['output'];
  href: Scalars['String']['output'];
  minAge?: Maybe<Scalars['Int']['output']>;
  maxAge?: Maybe<Scalars['Int']['output']>;
  image: Image;
  album: Array<Image>;
  requirements?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  showItems: Array<ShowItem>;
  faqs?: Maybe<Array<Faq>>;
  createdAt: Scalars['Time']['output'];
  updatedAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['Time']['output']>;
};

export type ShowItem = {
  __typename?: 'ShowItem';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  description: Scalars['String']['output'];
};

export type Faq = {
  __typename?: 'FAQ';
  question: Scalars['String']['output'];
  answer: Scalars['String']['output'];
};

export type Course = IMetaNode & {
  __typename?: 'Course';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  description: Scalars['String']['output'];
  lessons: Array<Lesson>;
  createdAt: Scalars['Time']['output'];
  updatedAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['Time']['output']>;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['UUID']['output'];
  clientID: Scalars['UUID']['output'];
  client: Client;
  productID: Scalars['UUID']['output'];
  product: Product;
  createdAt: Scalars['Time']['output'];
  updatedAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['Time']['output']>;
};

export enum ProductType {
  LessonEventProduct = 'LessonEventProduct',
  CourseEventProduct = 'CourseEventProduct',
  ShowEventProduct = 'ShowEventProduct'
}

export enum EventType {
  LessonEvent = 'LessonEvent',
  CourseEvent = 'CourseEvent',
  ShowEvent = 'ShowEvent'
}

export type CourseEventProduct = IEventProduct & {
  __typename?: 'CourseEventProduct';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  item: Course;
  event?: Maybe<Array<Event>>;
  product: Product;
};

export type LessonEventProduct = IEventProduct & {
  __typename?: 'LessonEventProduct';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  startTime: Scalars['Time']['output'];
  price: Scalars['Float']['output'];
  item: Lesson;
  event: Event;
  product: Product;
};

export type ShowEventProduct = IEventProduct & {
  __typename?: 'ShowEventProduct';
  id: Scalars['UUID']['output'];
  item: Show;
  event: Event;
  product: Product;
  reviews: Array<Review>;
  createdAt: Scalars['Time']['output'];
  updatedAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['Time']['output']>;
};

export type IEventProduct = {
  item?: Maybe<Show>;
  event?: Maybe<Event>;
  product: Product;
  reviews?: Maybe<Array<Review>>;
  createdAt: Scalars['Time']['output'];
  updatedAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['Time']['output']>;
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['UUID']['output'];
  rating: Scalars['Int']['output'];
  content: Scalars['String']['output'];
  client: Client;
  createdAt: Scalars['Time']['output'];
  updatedAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['Time']['output']>;
};

export type Query = {
  __typename?: 'Query';
  lessons: Array<Lesson>;
  lessonByID?: Maybe<Lesson>;
  clients: Array<Client>;
  clientByID?: Maybe<Client>;
  courses: Array<Course>;
  courseByID?: Maybe<Course>;
  orders: Array<Order>;
  orderByID?: Maybe<Order>;
  products: Array<Product>;
  productByID?: Maybe<Product>;
};


export type QueryLessonByIdArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryClientsArgs = {
  input?: InputMaybe<ClientsSearchInput>;
};


export type QueryClientByIdArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryCourseByIdArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryOrdersArgs = {
  input?: InputMaybe<OrdersSearchInput>;
};


export type QueryOrderByIdArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryProductsArgs = {
  input?: InputMaybe<ProductsSearchInput>;
};


export type QueryProductByIdArgs = {
  id: Scalars['UUID']['input'];
};

export type NewLessonInput = {
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  capacity: Scalars['Int']['input'];
};

export type OrdersSearchInput = {
  clientID?: InputMaybe<Scalars['UUID']['input']>;
};

export type ClientsSearchInput = {
  telegramId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ProductsSearchInput = {
  productType?: InputMaybe<ProductType>;
};

export type UpdateLessonInput = {
  id: Scalars['UUID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  capacity?: InputMaybe<Scalars['Int']['input']>;
};

export type NewClientInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  telegramId: Scalars['BigInt']['input'];
};

export type UpdateClientInput = {
  id: Scalars['UUID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
};

export type NewCourseInput = {
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  datetime: Scalars['Time']['input'];
  lessonEvents?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type UpdateCourseInput = {
  id: Scalars['UUID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  datetime?: InputMaybe<Scalars['Time']['input']>;
};

export type NewLessonEventInput = {
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  datetime: Scalars['Time']['input'];
  lessonID: Scalars['UUID']['input'];
  capacity: Scalars['Int']['input'];
};

export type UpdateLessonEventInput = {
  id: Scalars['UUID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  datetime?: InputMaybe<Scalars['Time']['input']>;
  capacity?: InputMaybe<Scalars['Int']['input']>;
};

export type NewOrderInput = {
  clientID: Scalars['UUID']['input'];
  productID: Scalars['UUID']['input'];
};

export type NewProductInput = {
  productType: ProductType;
  refID: Scalars['UUID']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createLesson: Lesson;
  updateLesson: Lesson;
  deleteLesson?: Maybe<Scalars['Boolean']['output']>;
  createClient: Client;
  updateClient: Client;
  deleteClient?: Maybe<Scalars['Boolean']['output']>;
  createCourse: Course;
  updateCourse: Course;
  deleteCourse?: Maybe<Scalars['Boolean']['output']>;
  deleteLessonEvent?: Maybe<Scalars['Boolean']['output']>;
  createOrder: Order;
  deleteOrder?: Maybe<Scalars['Boolean']['output']>;
  createProduct: Product;
  deleteProduct?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateLessonArgs = {
  input: NewLessonInput;
};


export type MutationUpdateLessonArgs = {
  input: UpdateLessonInput;
};


export type MutationDeleteLessonArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationCreateClientArgs = {
  input: NewClientInput;
};


export type MutationUpdateClientArgs = {
  input: UpdateClientInput;
};


export type MutationDeleteClientArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationCreateCourseArgs = {
  input: NewCourseInput;
};


export type MutationUpdateCourseArgs = {
  input: UpdateCourseInput;
};


export type MutationDeleteCourseArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteLessonEventArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationCreateOrderArgs = {
  input: NewOrderInput;
};


export type MutationDeleteOrderArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationCreateProductArgs = {
  input: NewProductInput;
};


export type MutationDeleteProductArgs = {
  id: Scalars['UUID']['input'];
};
