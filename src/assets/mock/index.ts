import { userRole } from '../../consts';

export const organizeUsers = [
  {
    name: 'john',
    email: 'john@gmail.com',
    password: 'admin12345',
    role: userRole.ADMIN,
  },
  {
    name: 'chris',
    email: 'chris@gmail.com',
    password: 'moderator12345',
    role: userRole.MODERATOR,
  },
];

export const organizationList = [
  {
    name: 'Game development',
    phone_number: '+994552251215',
    id: 'game_development',
    address: 'Raccoon City 2561/67',
  },
  {
    name: 'Web development',
    phone_number: '+994552251215',
    id: 'web_development',
    address: 'Raccoon City 2561/67',
  },
];

export const taskList = [
  {
    title: 'Ui structure',
    description: 'We have to designed page on the figma',
    deadline: new Date().getTime(),
    status: 'pending',
    assign: ['Chris', 'Leon'],
  },
  {
    title: 'View template',
    description: 'We have to designed page on the figma',
    deadline: new Date().getTime(),
    status: 'pending',
    assign: ['Albert', 'Barry'],
  },
];

export const users = [
  {
    name: 'user',
    surname: 'Surname',
    email: 'user@gmail.com',
    password: 'password',
    organize_id: 'game_development',
  },
];
