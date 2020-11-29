import { FiMail as MainIcon, FiLock as LockIcon } from 'react-icons/fi';
export default [
  {
    id: 1,
    children: 'Email',
    type: 'mail',
    nameState: 'email',
    icon: <MainIcon />,
    placeholder: 'mail@mail.com',
    alternativeText: null,
  },
  {
    id: 2,
    children: 'Senha',
    type: 'text',
    nameState: 'password',
    icon: <LockIcon />,
    placeholder: 'Sua melhor senha',

    alternativeText: null,
  },
];
