import { FaDiscord, FaUserFriends } from "react-icons/fa";
import { BsGearFill,BsWind,BsFillFilePlusFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col
    text-white shadow-lg bg-gray-900 
    ">
      <SideBarIcon icon={<FaDiscord size="28" />} />
      <SideBarIcon icon={<BsFillFilePlusFill size="32" />} />
      <SideBarIcon icon={<BsWind size="20" />} />
      <SideBarIcon icon={<FaUserFriends size="20" />} />
      <SideBarIcon icon={<BsGearFill size="22" />} />


</div>
  )
}

const SideBarIcon = ({ icon, text = 'Hellow Word, This tooltip works 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

export default Sidebar;
