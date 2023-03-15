import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Button,
  Grid,
  GridItem,
  Spacer,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
} from "@chakra-ui/react";
import { FaBeer, FaCartArrowDown } from "react-icons/fa";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./midnav.module.css";
import { ImMenu } from "react-icons/im";
const MenSubNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Box
        w="100%"
        h={"50px"}
        bg={"linear-gradient(#FFE000,#799F0C)"}
        className={styles.nav}
      >
        <Box className={styles.wrapper}>
          <ul className={styles.navLink}>
            <li>
              <Flex
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
                alignItems={"center"}
                w="120px"
                justifyContent={"center"}
                h="49px"
              >
                <Link className={styles.Link} to="/foundation">
                  <Text className={styles.text}>MAKEUP</Text>
                  <ChevronDownIcon />
                </Link>
              </Flex>
              <div className={styles.megaBox}>
                <div
                  className={styles.content}
                  // style={{ border: "1px solid red" }}
                >
                  <div className={styles.row}>
                    <header>Face</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <Link to="/foundation">BB Cream</Link>
                      </li>
                      <li>
                        <Link to={"/hair_oil"}>Blush</Link>
                      </li>
                      <li>
                        <Link>Bronzers</Link>
                      </li>
                      <li>
                        <Link to="/foundation">CC Cream</Link>
                      </li>
                      <li>
                        <Link to="/foundation">Countour</Link>
                      </li>
                      <li>
                        <Link to="/foundation">Concealer</Link>
                      </li>
                      <li>
                        <Link to="/foundation">Compact</Link>
                      </li>
                      <li>
                        <Link to="/foundation">Face Primer</Link>
                      </li>
                      <li>
                        <Link to="/foundation">Foundation</Link>
                      </li>
                      <li>
                        <Link to="/foundation">Highlighters</Link>
                      </li>
                      <li>
                        <Link to="/foundation">Loose Powder</Link>
                      </li>
                      <li>
                        <Link to="/foundation">Makeup Kits</Link>
                      </li>
                      <li>
                        <Link to="/foundation">Makeup</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <header>EYE</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <Link to="#">Contact Lenses</Link>
                      </li>
                      <li>
                        <Link to={"/faceWash"}>Eye Liner</Link>
                      </li>
                      <li>
                        <Link>Eye Shadow</Link>
                      </li>
                      <li>
                        <Link to="#">Eye Primer</Link>
                      </li>
                      <li>
                        <Link to="#">Eye-Pallets</Link>
                      </li>
                      <li>
                        <Link to="#">Eye Makeup Remover</Link>
                      </li>
                      <li>
                        <Link to="#">EyeBrow Enhancer</Link>
                      </li>
                      <li>
                        <Link to="#">False Eyelashes</Link>
                      </li>
                      <li>
                        <Link to="#">Kajal</Link>
                      </li>
                      <li>
                        <Link to="#">Masacara</Link>
                      </li>
                      <li>
                        <Link to="#">Under Eye Concealer</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <header>Lips</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <Link to="#">Lipsticks</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Liquid Sticks</Link>
                      </li>
                      <li>
                        <Link>Lip Liner</Link>
                      </li>
                      <li>
                        <Link to="#">Lip Gloss</Link>
                      </li>
                      <li>
                        <Link to="#">Lip Balm</Link>
                      </li>
                      <li>
                        <Link to="#">Lip Crayon</Link>
                      </li>
                      <li>
                        <Link to="#">Lip Stain</Link>
                      </li>
                      <li>
                        <Link to="#">Lip Plumber</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <header>NAILS</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <Link to="#">Mainicure & Pedicure</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Nail Polish</Link>
                      </li>
                      <li>
                        <Link>Nail Arts Kits</Link>
                      </li>
                      <li>
                        <Link to="#">Nail Care</Link>
                      </li>
                      <li>
                        <Link to="#">Nail Polish Sets</Link>
                      </li>
                      <li>
                        <Link to="#">Nail Polish Remover</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <header>TOOL BRUSHES</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <Link to="#">Blush Brush</Link>
                      </li>
                      <li>
                        <Link>Eyelash Curls</Link>
                      </li>
                      <li>
                        <Link to="#">Eye Brush</Link>
                      </li>
                      <li>
                        <Link to="#">Face Brush</Link>
                      </li>
                      <li>
                        <Link to="#">Lip Brush</Link>
                      </li>
                      <li>
                        <Link to="#">Makeup Pouches</Link>
                      </li>
                      <li>
                        <Link to="#">Mirrors</Link>
                      </li>
                      <li>
                        <Link to="#">Sponges</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}></div>
                </div>
              </div>
            </li>
            {/*skin care */}
            <li>
              <Flex
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
                bg={"linear-gradient(#FFE000,#799F0C)"}
                alignItems={"center"}
                w="120px"
                justifyContent={"center"}
                h="49px"
              >
                <Link className={styles.Link} to="/foundation">
                  <Text className={styles.text}>SKIN</Text>
                  <ChevronDownIcon />
                </Link>
              </Flex>
              <div className={styles.megaBox}>
                <div
                  className={styles.content}
                  // style={{ border: "1px solid red" }}
                >
                  <div className={styles.row}>
                    <header>EYE CARE</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <Link to="#">Dark Circle</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Eye Contour Care</Link>
                      </li>
                      <li>
                        <Link>Eye Cream</Link>
                      </li>
                      <li>
                        <Link to="#">Eye Mask</Link>
                      </li>
                      <li>
                        <Link to="#">Eye Serums</Link>
                      </li>
                      <li>
                        <Link to="#">Pffiness</Link>
                      </li>
                      <li>
                        <Link to="#">Under Eye Creams</Link>
                      </li>
                      <li>
                        <Link to="#">Under Eye Wrinkles</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <header>FACE CARE</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <Link to="#">Anti-Aging Creams</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Bleach Creams</Link>
                      </li>
                      <li>
                        <Link>Face Wash</Link>
                      </li>
                      <li>
                        <Link to="#">Facial Wipes</Link>
                      </li>
                      <li>
                        <Link to="#">Face Oil</Link>
                      </li>
                      <li>
                        <Link to="#">Face Cleansers</Link>
                      </li>
                      <li>
                        <Link to="#">Face Kits</Link>
                      </li>
                      <li>
                        <Link to="#">Face Tools</Link>
                      </li>
                      <li>
                        <Link to="#">Moisturisers</Link>
                      </li>
                      <li>
                        <Link to="#">Mask and Peels</Link>
                      </li>
                      <li>
                        <Link to="#">Serum</Link>
                      </li>
                      <li>
                        <Link to="#">Toner</Link>
                      </li>
                      <li>
                        <Link to="#">Cleanser</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <header>BODY CARE</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <Link to="#">All Creams</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Body Mosturizers</Link>
                      </li>
                      <li>
                        <Link>Body Toners</Link>
                      </li>
                      <li>
                        <Link to="#">Body Sun Care</Link>
                      </li>
                      <li>
                        <Link to="#">Brightening Lotions</Link>
                      </li>
                      <li>
                        <Link to="#">Wrinkles</Link>
                      </li>
                      <li>
                        <Link to="#">Hand Creams</Link>
                      </li>
                      <li>
                        <Link to="#">Hand and Feet</Link>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.midNavImg}>
                      <div>
                        <img
                          src="https://media.istockphoto.com/id/1320934166/photo/cosmetic-skin-care-foundation-on-green-leaves.jpg?b=1&s=170667a&w=0&k=20&c=dc-QT1-XScBSIvYwtM9_rmMwq1ke1QOAFuxXoYFM7Mo="
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* hair */}
            <li>
              <Flex
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
                alignItems={"center"}
                w="120px"
                justifyContent={"center"}
                h="49px"
              >
                <Link className={styles.Link} to="/">
                  <Text className={styles.text}>HAIR</Text>
                  <ChevronDownIcon />
                </Link>
              </Flex>
              <div className={styles.megaBox}>
                <div
                  className={styles.content}
                  // style={{ border: "1px solid red" }}
                >
                  <div className={styles.row}>
                    <header>HAIR CARE</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <Link to="#">Color Protection</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Dandruff</Link>
                      </li>
                      <li>
                        <Link>Dry Shampoo</Link>
                      </li>
                      <li>
                        <Link to="#">Gels & Waxes</Link>
                      </li>
                      <li>
                        <Link to="#">Hair Spray</Link>
                      </li>
                      <li>
                        <Link to="#">Hair Dye</Link>
                      </li>
                      <li>
                        <Link to="#">Hair Creams</Link>
                      </li>
                      <li>
                        <Link to="#">Hair Styling</Link>
                      </li>
                      <li>
                        <Link to="#">Hairfall & Thinning</Link>
                      </li>
                      <li>
                        <Link to="#">Straightners</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <header>HAIR LOSS</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <Link to="#">Conditioners</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Hair Oil</Link>
                      </li>
                      <li>
                        <Link>Hair Serum</Link>
                      </li>
                      <li>
                        <Link to="#">Hair Growth Solutions</Link>
                      </li>
                      <li>
                        <Link to="#">Shampoo</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <div
                      className={styles.midNavImg}
                      style={{ width: "760px" }}
                    >
                      <div>
                        <img
                          src="https://www.beautybebo.com/pub/media/mega-menu/hair_cata.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* personal care  */}

            <li>
              <Flex
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
                alignItems={"center"}
                w="180px"
                justifyContent={"center"}
                h="49px"
              >
                <Link className={styles.Link} to="/">
                  <Text className={styles.text}>PERSONAL CARE</Text>
                  <ChevronDownIcon />
                </Link>
              </Flex>
              <div className={styles.megaBox}>
                <div
                  className={styles.content}
                  // style={{ border: "1px solid red" }}
                >
                  <div className={styles.row}>
                    <header>BATH & BODY</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <Link to="#">Body Cleansers</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Body Massage Oil</Link>
                      </li>
                      <li>
                        <Link>Body Wash</Link>
                      </li>
                      <li>
                        <Link to="#">Essential Oil</Link>
                      </li>
                      <li>
                        <Link to="#">Foot Cream</Link>
                      </li>
                      <li>
                        <Link to="#">Scrubs & Exfolitants</Link>
                      </li>
                      <li>
                        <Link to="#">Ubtan and Face Packs</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <header>BATH ACCESSORIES</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <Link to="#">Bath & Brushes</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Loofaas</Link>
                      </li>
                      <li>
                        <Link>Shower Caps</Link>
                      </li>
                      <li>
                        <Link to="#">Sponges</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <header>BATH & SHOWER</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <Link to="#">Body Soaps</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Shower Gel</Link>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.row}>
                    <div
                      className={styles.midNavImg}
                      style={{ width: "580px" }}
                    >
                      <div>
                        <img
                          src="https://www.beautybebo.com/pub/media/mega-menu/personal_cata.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* mom and care */}
            <li>
              <Flex
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
                alignItems={"center"}
                w="120px"
                justifyContent={"center"}
                h="49px"
              >
                <Link className={styles.Link} to="/">
                  <Text className={styles.text}>HAIR</Text>
                  <ChevronDownIcon />
                </Link>
              </Flex>
              <div className={styles.megaBox}>
                <div
                  className={styles.content}
                  // style={{ border: "1px solid red" }}
                >
                  <div className={styles.row}>
                    <header>BABY CARE</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <Link to="#">Bath Time</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Diapers</Link>
                      </li>
                      <li>
                        <Link>Lotions</Link>
                      </li>
                      <li>
                        <Link to="#">Powder</Link>
                      </li>
                      <li>
                        <Link to="#">Shmapoos</Link>
                      </li>
                      <li>
                        <Link to="#">Soaps</Link>
                      </li>
                      <li>
                        <Link to="#">Sterilizers</Link>
                      </li>
                      <li>
                        <Link to="#">Rash Creams</Link>
                      </li>
                      <li>
                        <Link to="#">Wipes</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <header>MOM CARE</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <Link to="#">Lotion & Creams</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Personal Care</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <div
                      className={styles.midNavImg}
                      style={{ width: "760px" }}
                    >
                      <div>
                        <img
                          src="https://www.beautybebo.com/pub/media/mega-menu/mom_baby_cata.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/*fragrances */}
            <li>
              <Flex
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
                alignItems={"center"}
                w="120px"
                justifyContent={"center"}
                h="49px"
              >
                <Link className={styles.Link} to="/">
                  <Text className={styles.text}>FRAGRANCE</Text>
                  <ChevronDownIcon />
                </Link>
              </Flex>
              <div className={styles.megaBox} style={{ height: "auto" }}>
                <div>
                  <br />
                  <Flex gap={4}>
                    <Button colorScheme="green" width="400px">
                      LAKME
                    </Button>
                    <Button colorScheme="green" width="400px">
                      L-OREAL-PARIS
                    </Button>
                    <Button colorScheme="green" width="400px">
                      JOY
                    </Button>
                  </Flex>
                </div>
              </div>
            </li>
            {/*Ayurveda */}
            <li>
              <Flex
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
                alignItems={"center"}
                w="120px"
                justifyContent={"center"}
                h="49px"
              >
                <Link className={styles.Link} to="/">
                  <Text className={styles.text}>AYURVEDA</Text>
                  <ChevronDownIcon />
                </Link>
              </Flex>
              <div className={styles.megaBox}>
                <div
                  className={styles.content}
                  // style={{ border: "1px solid red" }}
                >
                  <div className={styles.row}>
                    <header>NATURAL SKIN</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <Link to="/ayurvedic">Body Wash</Link>
                      </li>
                      <li>
                        <Link to={"/ayurvedic"}>Body Lotion</Link>
                      </li>
                      <li>
                        <Link>Cleanser</Link>
                      </li>
                      <li>
                        <Link to="/ayurvedic">Cream</Link>
                      </li>
                      <li>
                        <Link to="/ayurvedic">Eye Care</Link>
                      </li>
                      <li>
                        <Link to="/ayurvedic">Face Wash</Link>
                      </li>
                      <li>
                        <Link to="/ayurvedic">Gel</Link>
                      </li>
                      <li>
                        <Link to="/ayurvedic">Lip Care</Link>
                      </li>
                      <li>
                        <Link to="#">Mask</Link>
                      </li>
                      <li>
                        <Link to="#">Pack</Link>
                      </li>
                      <li>
                        <Link to="#">Scrub</Link>
                      </li>
                      <li>
                        <Link to="#">Sun Protection</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <header>NAURAL HAIR</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <Link to="#">Conditioners</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Hair Oils</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Hair Serum</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Hair Hair Gel</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Shampoo</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <div
                      className={styles.midNavImg}
                      style={{ width: "760px" }}
                    >
                      <div>
                        <img
                          src="https://www.beautybebo.com/pub/media/mega-menu/ayurveda_cata.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/*Brands */}
            <li>
              <Flex
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
                alignItems={"center"}
                w="120px"
                justifyContent={"center"}
                h="49px"
              >
                <Link className={styles.Link} to="/">
                  <Text className={styles.text}>BRANDS</Text>
                  <ChevronDownIcon />
                </Link>
              </Flex>
              <div className={styles.megaBox} style={{ height: "auto" }}>
                <div>
                  <Flex>
                    <Heading size="lg">Top Brands</Heading>
                    <Spacer />
                    <Button colorScheme="red">VIEW ALL</Button>
                  </Flex>
                  <br />
                  <Grid templateColumns="repeat(6, 1fr)" gap={4}>
                    <Button colorScheme="green">LAKME</Button>
                    <Button colorScheme="green">L-OREAL-PARIS</Button>
                    <Button colorScheme="green">JOY</Button>
                    <Button colorScheme="green">AROMA MAGIC</Button>
                    <Button colorScheme="green">LOTUS HERBERLS</Button>
                    <Button colorScheme="green">BIOTIQUE</Button>
                    <Button colorScheme="green">VLCC</Button>
                    <Button colorScheme="green">VEGA</Button>
                    <Button colorScheme="green">MAYBELLINE</Button>
                    <Button colorScheme="green">MAMAEARTH</Button>
                    <Button colorScheme="green">CHICCO</Button>
                    <Button colorScheme="green">NEUTROGENA</Button>
                  </Grid>
                </div>
              </div>
            </li>
          </ul>
          <ul className={styles.navLink}>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="120px"
              justifyContent={"center"}
              h="49px"
            >
              <Link to="/cart">
                <div className={styles.Link}>
                  <Text className={styles.text}>STORE</Text>
                  <div style={{ position: "relative" }}>
                    <FaCartArrowDown />
                  </div>
                </div>
              </Link>
            </Flex>
          </ul>
        </Box>
      </Box>

      <Box
        w="100%"
        h={"50px"}
        bg={"linear-gradient(#FFE000,#799F0C)"}
        className={styles.navtwo}
      >
        <Box className={styles.wrapper}>
          <ul className={styles.navLink}>
            <Button colorScheme="light" onClick={onOpen}>
              <ImMenu />
            </Button>
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">CATEGORIES</DrawerHeader>
                <DrawerBody>
                  <div>
                    <Menu>
                      <Link to="/foundation" onClick={onClose}>
                        {" "}
                        <MenuButton rightIcon={<ChevronDownIcon />}>
                          MAKEUP
                        </MenuButton>
                      </Link>
                    </Menu>
                  </div>
                  <div>
                    <Menu>
                      <Link to="/hair brush" onClick={onClose}>
                        {" "}
                        <MenuButton rightIcon={<ChevronDownIcon />}>
                          HAIR CARE
                        </MenuButton>
                      </Link>
                    </Menu>
                  </div>
                  <div>
                    <Menu>
                      <Link to="/face wash" onClick={onClose}>
                        {" "}
                        <MenuButton rightIcon={<ChevronDownIcon />}>
                          SKIN CARE
                        </MenuButton>
                      </Link>
                    </Menu>
                  </div>
                  <div>
                    <Menu>
                      <Link to="/wallet" onClose={onClose}>
                        {" "}
                        <MenuButton rightIcon={<ChevronDownIcon />}>
                          WALLET
                        </MenuButton>
                      </Link>
                    </Menu>
                  </div>
                  <div>
                    <Menu onClose={onClose}>
                      <Link to="/ayurvedic">
                        {" "}
                        <MenuButton rightIcon={<ChevronDownIcon />}>
                          AYURVEDIC
                        </MenuButton>
                      </Link>
                    </Menu>
                  </div>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </ul>
          <ul className={styles.navLink}>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="120px"
              justifyContent={"center"}
              h="49px"
              textDecoration="none"
            >
              <Link className={styles.Link} to="/cart">
                <Text className={styles.text}>STORE</Text>
                <div style={{ position: "relative" }}>
                  <FaCartArrowDown />
                </div>
              </Link>
            </Flex>
          </ul>
        </Box>
      </Box>
    </div>
  );
};

export default MenSubNav;
