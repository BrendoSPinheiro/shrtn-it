import {
  FiUser as UserIcon,
  FiMail as MailIcon,
  FiUnlock as UnlockIcon,
} from 'react-icons/fi';
export default [
  {
    id: 1,
    children: 'Nome',
    type: 'text',
    icon: <UserIcon />,
    alternativeText: null,
  },
  {
    id: 2,
    children: 'Email',
    type: 'email',
    icon: <MailIcon />,
    alternativeText: null,
  },
  {
    id: 3,
    children: 'Senha',
    type: 'password',
    icon: <UnlockIcon />,
    alternativeText: null,
  },
];
