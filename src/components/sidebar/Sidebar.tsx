
import Image from "next/image";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { IoBrowsersOutline, IoCalculator, IoFootball,  IoHeartOutline, IoLogoReact } from "react-icons/io5";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subTitle: "Visualización",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subTitle: "Contador Client Side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={40} />,
    title: "Pokemons",
    subTitle: "Generación Estática",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeartOutline size={40} />,
    title: "Favoritos",
    subTitle: "Global State",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300  left-0  w-[400px] "
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
      </div>
      <div id="nav" className="w-full px-6">
        
        {
            menuItems.map( item =>(
                
                <SidebarMenuItem
                    key={item.path}
                    {...item} 
                />
            ))
        }
        
      </div>
    </div>
  );
};
