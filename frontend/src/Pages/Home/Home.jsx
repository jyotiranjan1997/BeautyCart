import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Homepage.module.css";
import LastPara from "./LastPara/LastPara";
import Sidebar from "./Sidebar/Sidebar";
import Makeup from "./SidebarHover/Makeup";
import Hair from "./SidebarHover/Hair";
import Skin from "./SidebarHover/Skin";
import Category from "./Category/Category";
import MakeupCategory from "./MakeupCategory/MakeupCategory";
import Aos from "aos";


 function Home() {
  const [makeup, setMakeup] = useState(false);
  const [skin, setSkin] = useState(false);
  const [hair, setHair] = useState(false);
  const [category,setCategory]=useState("foundation")

  useEffect(() => {
    Aos.init();
  }, [category]);
   
   console.log(category)
  return (
    <div id={style.main_container_div}>
      <div id={style.fst_main_div} data-aos="fade-up" data-aos-duration="2000">
        <div id={style.upper_sidebar}>
          <Sidebar
            makeup={makeup}
            skin={skin}
            hair={hair}
            setMakeup={setMakeup}
            setSkin={setSkin}
            setHair={setHair}
          />
        </div>
        <div style={{ position: "fixed", left: "25%", zIndex: 1 }}>
          {makeup ? <Makeup /> : null}
          {skin ? <Skin /> : null}
          {hair ? <Hair /> : null}
        </div>
        <div id={style.fst_carousel_div}>
          <Carousel>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                className="d-block w-100"
                src="https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div
        id={style.upto_40_off_div}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <img
          src="https://images-static.nykaa.com/uploads/54f95a28-bd9e-4418-8ae3-5c3e8f422ab6.png?tr=w-1200,cm-pad_resize"
          alt=""
        />
      </div>

      <div id={style.joy_lotus_div}>
        <img
          src="https://images-static.nykaa.com/uploads/1e35fb54-1b23-4f7a-863c-6b8ec4545e25.jpg?tr=w-600,cm-pad_resize"
          alt=""
        />
        <img
          src="https://images-static.nykaa.com/uploads/c9e66343-a5a9-45b1-b0e1-81b9ea237d0c.jpg?tr=w-600,cm-pad_resize"
          alt=""
        />
      </div>

      <div data-aos="fade-up" data-aos-duration="2000">
        <Category setCategory={setCategory} />
      </div>

      <div data-aos="fade-up" data-aos-duration="2000">
        <MakeupCategory category={category} />
      </div>

      <div id={style.joy_lotus_div}>
        <img
          src="https://images-static.nykaa.com/uploads/b0e2225b-7016-4571-91ea-8b53ee8174fd.jpg?tr=w-600,cm-pad_resize"
          alt=""
        />
        <img
          src="https://images-static.nykaa.com/uploads/d0a2fd63-9395-4a8b-9d8a-f5c3d54b380d.jpg?tr=w-600,cm-pad_resize"
          alt=""
        />
      </div>

      <div>
        <LastPara />
      </div>
    </div>
  );
}
export default React.memo(Home)