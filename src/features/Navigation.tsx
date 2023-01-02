import {  Flex, HStack , chakra } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Logo from '@images/logo.svg';
import styles from "@scss/nav.module.scss";
import 'material-symbols';

const navLinks = [
  {
    label: "State",
    icon: "hourglass_empty",
    href: "/state"
  },  
  {
    label: "Recoil",
    icon: "move_down",
    href: "/recoil"
  },  
  {
    label: "Selectors",
    icon: "move_up",
    href: "/selectors"
  }, 
  {
    label: "Form",
    icon: "edit_note",
    href: "/form"
  },
  {
    label: "Fetch",
    icon: "web",
    href: "/fetch"
  },
  {
    label: "Axios",
    icon: "web_asset",
    href: "/axios"
  },
  {
    label: "Array",
    icon: "list",
    href: "/array"
  },
  {
    label: "Props",
    icon: "details",
    href: "/props"
  },
  {
    label: "Profile",
    icon: "person",
    href: "/profile"
  },
  {
    label: "Button",
    icon: "push_pin",
    href: "/button"
  },
  {
    label: "Connect",
    icon: "connect_without_contact",
    href: "/connect"
  },
  {
    label: "404",
    icon: "cancel",
    href: "/missing"
  },
  {
    label: "Home",
    icon: "home",
    href: "/"
  }
];

export default function Navigation() {
  return (
    <chakra.header id="header" className={styles.navHeader}>
      <Flex
        align="center"
        justify={{ base: 'space-between', md: 'space-around' }}
      >
        <img src={Logo} className={styles.navLogo} alt="logo" />
        <HStack as="nav" spacing="5">
          {navLinks.map((item, i) => (
            <Link key={i} className={styles.navLink} to={item.href}>
              <i className="material-symbols-sharp">{item.icon}</i>
              <br />
              {item.label}
            </Link>
          ))}
        </HStack>
      </Flex>
    </chakra.header>
  );
};
