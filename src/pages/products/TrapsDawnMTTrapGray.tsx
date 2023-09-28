import { useState } from 'react';
import { ProductSectionCart } from '../../components';
import { products, productCard } from '../../dammyDB/dammyProducts';

import {
   NavProducts,
   NavProductsNext,
   HighLightsSection,
   DetailsSection,
   ReviwesSection,
   MoreSection,
   ProductCard,
} from '../../components/product/index';

import { Button, Typography } from '@material-tailwind/react';

import { NavLink } from 'react-router-dom';

import { nanoid } from '@reduxjs/toolkit';

interface SimilarProductProps {
   children?: React.ReactNode;
}

const TrapsDawnMTTrapGray = () => {
   const [bottomElement, setBottomElement] = useState<number>(0);
   const [highLight, setHighLight] = useState(false);
   const [details, setDetails] = useState(false);
   const [review, setReview] = useState(false);

   const highLightsSectionHandler = (event: boolean) => setHighLight(event);
   const detailsSectionHandler = (event: boolean) => setDetails(event);
   const reviwesSectionHandler = (event: boolean) => setReview(event);

   const elementBotton = (element: number) => {
      setBottomElement(element - 65);
   };

   const clickHandler = () => {
      window.scrollTo(0, 0);
   };

   const SimilarProduct: React.FC<SimilarProductProps> = ({ children }) => (
      <section className="wrapper">
         <div className="w-full flex justify-between items-center">
            <Typography className="sm:text-4xl text-3xl font-normal">
               SIMILAR PRODUCTS
            </Typography>
            <NavLink
               className="sm:block hidden"
               to="/products/dawn-m-tarp-grey"
            >
               <Button
                  onClick={clickHandler}
                  color="gray"
                  size="lg"
                  className="
                  px-5 
                  py-3 
                  text-black 
                  rounded-none 
                  bg-white 
                  border-[1px] 
                  border-black
                  transition
                  hover:bg-black
                  hover:text-white
               "
               >
                  DISCOVER
               </Button>
            </NavLink>
         </div>
         {children}
      </section>
   );

   return (
      <>
         <NavProducts
            content={[
               {
                  title: 'Home',
                  link: '/',
               },
               {
                  title: 'Traps',
                  link: '/collections/tarps',
               },
               {
                  title: 'Dawn M Tarp, grey',
                  link: '/products/dawn-m-tarp-grey',
               },
            ]}
         />
         <ProductSectionCart
            elementBotton={elementBotton}
            product={products.cotegory.tarps.dawnMTarpGray.mainSection}
         />
         <NavProductsNext
            beforeBottmElement={bottomElement}
            product={products.cotegory.tarps.dawnMTarpGray.mainSection}
            highLight={highLight}
            details={details}
            review={review}
         />
         <HighLightsSection
            product={products.cotegory.tarps.dawnMTarpGray.maketSection}
            highLightsSectionHandler={highLightsSectionHandler}
            pin0="
               2xl:top-[330px] 2xl:left-[321px] 
               xl:top-[237px] xl:left-[256px]
               lg:top-[194px] lg:left-[207px]
               md:top-[207px] md:left-[216px] 
               sm:top-[282px] sm:left-[290px] 
               top-[139px] left-[140px]
               "
            pin1="
               2xl:top-[387px] 2xl:left-[182px] 
               xl:top-[280px] xl:left-[128px]
               lg:top-[236px] lg:left-[105px]
               md:top-[253px] md:left-[116px] 
               sm:top-[327px] sm:left-[150px] 
               top-[158px] left-[71px]
               "
            pin2="
               2xl:top-[100px] 2xl:left-[388px] 
               xl:top-[69px] xl:left-[267px]
               lg:top-[54px] lg:left-[241px]
               md:top-[55px] md:left-[257px] 
               sm:top-[87px] sm:left-[323px] 
               top-[41px] left-[157px]
               "
            pin3="
               2xl:top-[223px] 2xl:left-[197px] 
               xl:top-[183px] xl:left-[153px]
               lg:top-[153px] lg:left-[130px]
               md:top-[158px] md:left-[133px] 
               sm:top-[219px] sm:left-[184px] 
               top-[104px] left-[87px]
            "
         />
         <DetailsSection
            detailsSectionHandler={detailsSectionHandler}
            product={products.cotegory.tarps.dawnMTarpGray.details}
         />

         <ReviwesSection reviwesSectionHandler={reviwesSectionHandler} />

         <SimilarProduct>
            <div className="w-full flex flex-wrap gap-5">
               {[productCard[2]].map((item) => (
                  <ProductCard
                     key={nanoid()}
                     img1={item.mainImg2}
                     img2={item.mainImg1}
                     title={item.title}
                     type={item.type}
                     price={item.price}
                     src={item.src}
                  />
               ))}
            </div>
         </SimilarProduct>
         <MoreSection />
      </>
   );
};

export default TrapsDawnMTTrapGray;
