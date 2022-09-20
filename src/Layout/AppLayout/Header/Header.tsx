import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// @styled-component
import {
  Layout,
  MainLayout,
  LogoContainer,
  Menu,
  MenuItem,
  MobileLayout,
  MobileMainLayout,
  MenuButton,
  ButtonGroup,
  MobileMenu,
  MobileMenuItem,
} from "./Header.styled";

// @assets
import LogoImage from "assets/png/Logo.png";
import LogoBg from "assets/png/Logo-bg.png";
import { BiMenu } from "react-icons/bi";

// @component
import { ConnectButton } from "components/Button";
import Container from "components/Container/Container";

// --------------------------------------------------------------

const Header: React.FC = () => {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  const [show, setShow] = useState(-1);

  const dropMenuRef = useRef<any>(null);
  const menuButtonRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickOutside = (e: any) => {
    if (dropMenuRef.current.contains(e.target)) {
      return;
    } else {
      if (menuButtonRef.current.contains(e.target)) {
        return;
      } else {
        setShow(-1);
      }
    }
  };

  useEffect(() => {
    if (show > 0) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <>
      <Layout>
        <Container>
          <MainLayout>
            <LogoContainer
              onClick={() => {
                router.push("/");
              }}
              back={LogoBg.src}
              top={scrollY == 0}
            >
              <Image src={LogoImage} alt="No Image" layout="fill" />
            </LogoContainer>
            <Menu>
              <MenuItem
                onClick={() => {
                  router.push("#about");
                }}
              >
                About
              </MenuItem>

              <MenuItem
                onClick={() => {
                  router.push("#mint");
                }}
              >
                Mint
              </MenuItem>

              <MenuItem
                onClick={() => {
                  router.push("#roadmap");
                }}
              >
                Roadmap
              </MenuItem>

              <MenuItem
                onClick={() => {
                  router.push("#team");
                }}
              >
                Team
              </MenuItem>
              <MenuItem
                onClick={() => {
                  router.push("#faq");
                }}
              >
                FAQ
              </MenuItem>
            </Menu>
            <ConnectButton />
          </MainLayout>
        </Container>
      </Layout>
      <MobileLayout>
        <Container>
          <MobileMainLayout>
            <LogoContainer back={LogoBg.src} top={scrollY == 0}>
              <Image src={LogoImage} alt="No Image" layout="fill" />
            </LogoContainer>

            <ButtonGroup>
              <ConnectButton />
              <MenuButton
                onClick={() => {
                  setShow(show * -1);
                }}
                ref={menuButtonRef}
              >
                <BiMenu size={24} />
              </MenuButton>
            </ButtonGroup>
          </MobileMainLayout>
          <MobileMenu show={show > 0} ref={dropMenuRef}>
            <MobileMenuItem
              onClick={() => {
                router.push("#about");
                setShow(-1);
              }}
            >
              About
            </MobileMenuItem>
            <MobileMenuItem
              onClick={() => {
                router.push("#mint");
                setShow(-1);
              }}
            >
              Mint
            </MobileMenuItem>
            <MobileMenuItem
              onClick={() => {
                router.push("#roadmap");
                setShow(-1);
              }}
            >
              Roadmap
            </MobileMenuItem>
            <MobileMenuItem
              onClick={() => {
                router.push("#team");
                setShow(-1);
              }}
            >
              Team
            </MobileMenuItem>
            <MobileMenuItem
              onClick={() => {
                router.push("#faq");
                setShow(-1);
              }}
            >
              FAQ
            </MobileMenuItem>
          </MobileMenu>
        </Container>
      </MobileLayout>
    </>
  );
};
export default Header;
