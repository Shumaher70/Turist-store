import { Card, List, ListItem } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const SidebarAboutUs = () => {
   return (
      <Card
         className={
            'fixed translate-x-[100%] rounded-none xl:w-1/6 lg:w-1/4 w-2/6 h-full z-20'
         }
      >
         <List className="absolute top-[15%] pl-[10%]">
            <NavLink to="/pages/unternehmen-store">
               <ListItem className="cursor-pointer rounded-none">
                  OUR HISTORY
               </ListItem>
            </NavLink>
            <NavLink to="/pages/unternehmen-store">
               <ListItem className="cursor-pointer rounded-none">
                  HPT - HAMBURG
               </ListItem>
            </NavLink>
            <NavLink to="/pages/karriere">
               <ListItem className="cursor-pointer rounded-none">
                  CAREER / JOBS
               </ListItem>
            </NavLink>
         </List>
      </Card>
   );
};

export default SidebarAboutUs;
