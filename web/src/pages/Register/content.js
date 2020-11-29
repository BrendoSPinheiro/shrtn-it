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
    nameState: 'name',
    icon: <UserIcon />,
    placeholder: 'Fulano Cicrano',
    alternativeText: null,
  },
  {
    id: 2,
    children: 'Email',
    type: 'email',
    nameState: 'email',
    icon: <MailIcon />,
    placeholder: 'mail@mail.com',
    alternativeText: null,
  },
  {
    id: 3,
    children: 'Senha',
    type: 'password',
    nameState: 'password',
    icon: <UnlockIcon />,
    placeholder: 'Sua melhor senha',
    alternativeText: null,
  },
];
