// Gradients taken from: https://webgradients.com/
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import {FaGithubSquare, SiMinutemailer} from 'react-icons/all'

export default [
  {
    name: 'Facebook',
    description: '#a8edea → #fed6e3',
    css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    height: 200,
    contactIcon: <FaFacebook/>,
    target: "https://www.facebook.com/mariana.frentsos/"
  },
  {
    name: 'LinkedIn',
    description: '#f5f7fa → #c3cfe2',
    css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    height: 200,
    contactIcon: <FaLinkedinIn/>,
    target: "https://www.linkedin.com/in/mariana-f-4a6473178/"
  },
  {
    name: 'Git',
    description: '#e0c3fc → #8ec5fc',
    css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    height: 200,
    contactIcon: <FaGithubSquare/>,
    target: "https://github.com/marianafrentsos"
  },
  {
    name: 'Email',
    description: '#f093fb → #f5576c',
    css: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    height: 200,
    contactIcon: <SiMinutemailer/>,
    target: "mailto: marianafrentsos@yahoo.com"
  }
]
