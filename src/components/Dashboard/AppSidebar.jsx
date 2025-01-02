import React from 'react'
import  NavMain  from "@/components/Dashboard/NavMain"
  import  TeamSwitcher  from "@/components/Dashboard/TeamSwitcher"
  import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
  } from "@/components/ui/sidebar"

  import { GoHomeFill } from "react-icons/go";
  import { FaUserGroup } from "react-icons/fa6";
  import { IoSettingsSharp } from "react-icons/io5";
import { useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";



const AppSidebar = ({ ...props }) => {
  const [isCollapsed,setIsCollapsed]=useState(false)

  const toggleSidebar=()=>{
    console.log("Toggling sidebar:", isCollapsed);
    setIsCollapsed((prevState)=>!prevState)
  }

    const data = {
        navMain: [
          {
            title: "Dashboard",
            url: "/main/dashboard",
            icon: GoHomeFill,
          },
          {
            title: "Staff Info",
            url: "/main/staff/manage",
            icon: FaUserGroup,
            items: [
              // {
              //   title: "Add Stuff",
              //   url: "/dashboard/staff/add",
              // },
              {
                title: "Manage Staff",
                url: "/main/staff/manage",
              },
              // {
              //   title: "Staff Role",
              //   url: "/main/staff/role",
              // },
            ],
          },
          {
            title: "Client Info",
            url: "/main/client",
            icon: FaUserGroup,
            items: [
              {
                title: "Add Client",
                url: "/main/client/add",
              },
              {
                title: "Manage Client",
                url: "/main/client/manage",
              },
              {
                title: "Update Client",
                url: "/main/client/update",
              },
            ],
          },
          // {
            // title: "Setting",
            // url: "#",
            // icon: IoSettingsSharp,
            // items: [
            //   {
            //     title: "Service Type",
            //     url: "/main/setting/service-type",
            //   },
              // {
              //   title: "Call Type",
              //   url: "/main/setting/call-type",
              // },
              // {
              //   title: "Default Remark",
              //   url: "/main/setting/default-remark",
              // },
              // {
              //   title: "Company Information",
              //   url: "/main/setting/company-information",
              // },
          //   ],
          // },
        ],
      }


  return (<>
   <Sidebar collapsible="icon" {...props} variant="sidebar"
    >
     <SidebarHeader className="text-white"> 
      <TeamSwitcher  /> 
    </SidebarHeader> 
    <SidebarContent>
      <NavMain items={data.navMain}  />
    </SidebarContent>
  </Sidebar>


  </>
   
// {
  /* <Sidebar
      {...props}
      className={`transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
      // Only pass `collapsed` as a string, or conditionally omit it.
      {...(isCollapsed ? { collapsed: "true" } : {})}
    >
  
  {/* Header Section */
// }
  // <SidebarHeader className="text-white flex items-center justify-between px-4 py-3">
    // <TeamSwitcher />
    
    // <button onClick={toggleSidebar} className="text-white">
      // {isCollapsed ? <BsArrowRightCircle size={20} /> : <BsArrowLeftCircle size={20} />}
    // </button>
  // </SidebarHeader>

 
  // <SidebarContent>
    // <NavMain items={data.navMain} />
  // </SidebarContent>
//  </Sidebar> 

  )
}

export default AppSidebar

// import React, { useState } from "react";
// import NavMain from "@/components/Dashboard/NavMain";
// import TeamSwitcher from "@/components/Dashboard/TeamSwitcher";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarHeader,
// } from "@/components/ui/sidebar";

// import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
//   import { GoHomeFill } from "react-icons/go";
//     import { FaUserGroup } from "react-icons/fa6";

// import React from 'react'
// import  NavMain  from "@/components/Dashboard/NavMain"
//   import  TeamSwitcher  from "@/components/Dashboard/TeamSwitcher"
//   import {
//     Sidebar,
//     SidebarContent,
//     SidebarHeader,
//   } from "@/components/ui/sidebar"

//   import { GoHomeFill } from "react-icons/go";
//   import { FaUserGroup } from "react-icons/fa6";
//   import { IoSettingsSharp } from "react-icons/io5";
// import { useState } from 'react';
// import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

// const AppSidebar = ({ ...props }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     setIsCollapsed((prevState) => !prevState);
//   };

//   // const data = {
//   //   navMain: [
//   //     {
//   //       title: "Dashboard",
//   //       url: "/main/dashboard",
//   //     },
//   //     {
//   //       title: "Staff Info",
//   //       url: "/main/staff",
//   //     },
//   //   ],
//   // };

//       const data = {
//         navMain: [
//           {
//             title: "Dashboard",
//             url: "/main/dashboard",
//             icon: GoHomeFill,
//           },
//           {
//             title: "Staff Info",
//             url: "/main/staff",
//             icon: FaUserGroup,
//             items: [
//               // {
//               //   title: "Add Stuff",
//               //   url: "/dashboard/staff/add",
//               // },
//               {
//                 title: "Manage Staff",
//                 url: "/main/staff/manage",
//               },
//               // {
//               //   title: "Staff Role",
//               //   url: "/main/staff/role",
//               // },
//             ],
//           },
//           {
//             title: "Client Info",
//             url: "/main/client",
//             icon: FaUserGroup,
//             items: [
//               {
//                 title: "Add Client",
//                 url: "/main/client/add",
//               },
//               {
//                 title: "Manage Client",
//                 url: "/main/client/manage",
//               },
//               {
//                 title: "Update Client",
//                 url: "/main/client/update",
//               },
//             ],
//           },
//           // {
//             // title: "Setting",
//             // url: "#",
//             // icon: IoSettingsSharp,
//             // items: [
//             //   {
//             //     title: "Service Type",
//             //     url: "/main/setting/service-type",
//             //   },
//               // {
//               //   title: "Call Type",
//               //   url: "/main/setting/call-type",
//               // },
//               // {
//               //   title: "Default Remark",
//               //   url: "/main/setting/default-remark",
//               // },
//               // {
//               //   title: "Company Information",
//               //   url: "/main/setting/company-information",
//               // },
//           //   ],
//           // },
//         ],
//       }


//   // return (
//   //   // <Sidebar
//   //   //   {...props}
//   //   //   className={`transition-all duration-300 ${
//   //   //     isCollapsed ? "w-16" : "w-64"
//   //   //   }`}
//   //   //   // Only pass `collapsed` as a string, or conditionally omit it.
//   //   //   {...(isCollapsed ? { collapsed: "true" } : {})}
//   //   // >
//   //   //   {/* Header */}
//   //   //   <SidebarHeader className="flex items-center justify-between px-4 py-3">
//   //   //     <TeamSwitcher />
//   //   //     <button onClick={toggleSidebar}   className="font-bold">
//   //   //       {isCollapsed ? (
//   //   //         <BsArrowRightCircle size={20} />
//   //   //       ) : (
//   //   //         <BsArrowLeftCircle size={20} />
//   //   //       )}
//   //   //     </button>
//   //   //   </SidebarHeader>

//   //   //   {/* Content */}
//   //   //   <SidebarContent>
//   //   //     <NavMain items={data.navMain} />
//   //   //   </SidebarContent>
//   //   // </Sidebar>
//   // );
// };

// export default AppSidebar;
