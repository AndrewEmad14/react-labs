 const mockData = [
  {
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=John',
    title: 'Admin',
    name: 'John Anderson',
    email: 'john.anderson@example.com',
    phone: '+1-555-0101',
    birthdate: '1985-03-15'
  },
  {
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Sarah',
    title: 'Moderator',
    name: 'Sarah Mitchell',
    email: 'sarah.mitchell@example.com',
    phone: '+1-555-0102',
    birthdate: '1990-07-22'
  },
  {
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Michael',
    title: 'Client',
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    phone: '+1-555-0103',
    birthdate: '1988-11-08'
  },
  {
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Emily',
    title: 'Admin',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@example.com',
    phone: '+1-555-0104',
    birthdate: '1992-05-30'
  },
  {
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=David',
    title: 'Client',
    name: 'David Thompson',
    email: 'david.thompson@example.com',
    phone: '+1-555-0105',
    birthdate: '1987-09-12'
  },
  {
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Jessica',
    title: 'Moderator',
    name: 'Jessica Lee',
    email: 'jessica.lee@example.com',
    phone: '+1-555-0106',
    birthdate: '1993-01-25'
  },
  {
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Daniel',
  title: 'Client',
  name: 'Daniel Harris',
  email: 'daniel.harris@example.com',
  phone: '+1-555-0107',
  birthdate: '1991-04-18'
},
{
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Olivia',
  title: 'Admin',
  name: 'Olivia Carter',
  email: 'olivia.carter@example.com',
  phone: '+1-555-0108',
  birthdate: '1986-12-03'
},
{
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=James',
  title: 'Moderator',
  name: 'James Walker',
  email: 'james.walker@example.com',
  phone: '+1-555-0109',
  birthdate: '1994-08-14'
},
{
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Sophia',
  title: 'Client',
  name: 'Sophia Martinez',
  email: 'sophia.martinez@example.com',
  phone: '+1-555-0110',
  birthdate: '1989-02-27'
},
{
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Ethan',
  title: 'Client',
  name: 'Ethan Brown',
  email: 'ethan.brown@example.com',
  phone: '+1-555-0111',
  birthdate: '1995-06-09'
},
{
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Ava',
  title: 'Moderator',
  name: 'Ava Wilson',
  email: 'ava.wilson@example.com',
  phone: '+1-555-0112',
  birthdate: '1990-10-21'
},
{
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Liam',
  title: 'Admin',
  name: 'Liam Johnson',
  email: 'liam.johnson@example.com',
  phone: '+1-555-0113',
  birthdate: '1983-07-05'
},
{
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Isabella',
  title: 'Client',
  name: 'Isabella White',
  email: 'isabella.white@example.com',
  phone: '+1-555-0114',
  birthdate: '1997-03-30'
},
{
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Noah',
  title: 'Moderator',
  name: 'Noah Taylor',
  email: 'noah.taylor@example.com',
  phone: '+1-555-0115',
  birthdate: '1992-11-16'
},
{
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Mia',
  title: 'Client',
  name: 'Mia Anderson',
  email: 'mia.anderson@example.com',
  phone: '+1-555-0116',
  birthdate: '1996-05-08'
},
{
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Lucas',
  title: 'Admin',
  name: 'Lucas Garcia',
  email: 'lucas.garcia@example.com',
  phone: '+1-555-0117',
  birthdate: '1984-09-23'
},
{
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Charlotte',
  title: 'Client',
  name: 'Charlotte Moore',
  email: 'charlotte.moore@example.com',
  phone: '+1-555-0118',
  birthdate: '1993-01-11'
},
{
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Mason',
  title: 'Moderator',
  name: 'Mason Davis',
  email: 'mason.davis@example.com',
  phone: '+1-555-0119',
  birthdate: '1988-06-29'
},
{
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Amelia',
  title: 'Client',
  name: 'Amelia Jackson',
  email: 'amelia.jackson@example.com',
  phone: '+1-555-0120',
  birthdate: '1991-12-17'
},
{
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Logan',
  title: 'Admin',
  name: 'Logan Thomas',
  email: 'logan.thomas@example.com',
  phone: '+1-555-0121',
  birthdate: '1985-04-02'
},
{
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Harper',
  title: 'Moderator',
  name: 'Harper Lewis',
  email: 'harper.lewis@example.com',
  phone: '+1-555-0122',
  birthdate: '1994-08-25'
},
{
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Elijah',
  title: 'Client',
  name: 'Elijah Robinson',
  email: 'elijah.robinson@example.com',
  phone: '+1-555-0123',
  birthdate: '1987-02-14'
},
{
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Evelyn',
  title: 'Client',
  name: 'Evelyn Clark',
  email: 'evelyn.clark@example.com',
  phone: '+1-555-0124',
  birthdate: '1998-07-07'
},
{
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Aiden',
  title: 'Moderator',
  name: 'Aiden Scott',
  email: 'aiden.scott@example.com',
  phone: '+1-555-0125',
  birthdate: '1990-03-19'
},
{
  image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Scarlett',
  title: 'Admin',
  name: 'Scarlett Young',
  email: 'scarlett.young@example.com',
  phone: '+1-555-0126',
  birthdate: '1986-10-31'
}
];

export default mockData;