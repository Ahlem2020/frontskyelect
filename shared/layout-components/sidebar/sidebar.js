import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { MENUITEMS } from "./nav";
import { horizontalmenusticky } from "../../../shared/data/switcherdata/switcherdata";
import authService from "../../services/authService";

// Images
import logolight from "../../../public/assets/img/brand/logo-light.png";
import iconlight from "../../../public/assets/img/brand/icon-light.png";
import logo from "../../../public/assets/img/brand/logo.png";
import icon from "../../../public/assets/img/brand/icon.png";

// Constants
const DESKTOP_BREAKPOINT = 992;
const LOGO_WIDTH = 100;
const ICON_WIDTH = 45;

// Filter menu items based on user roles
const filterMenuItemsByRole = (menuItems, user) => {
  if (!user) return menuItems;

  return menuItems.filter(section => {
    // Check if section requires a specific role
    if (section.requiredRole && !authService.hasRole(section.requiredRole)) {
      return false;
    }

    // Filter items within the section
    if (section.Items) {
      section.Items = section.Items.filter(item => {
        // Check if item requires a specific role
        if (item.requiredRole && !authService.hasRole(item.requiredRole)) {
          return false;
        }

        // Recursively filter children if they exist
        if (item.children) {
          item.children = item.children.filter(child => {
            if (child.requiredRole && !authService.hasRole(child.requiredRole)) {
              return false;
            }
            return true;
          });
        }

        return true;
      });
    }

    return true;
  });
};

const SideBar = () => {
  const router = useRouter();
  const [menuitems, setMenuitems] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [user, setUser] = useState(null);

  // Initialize user and filtered menu items
  useEffect(() => {
    // Clean up any invalid localStorage data first
    authService.cleanupInvalidData();
    
    const currentUser = authService.getUser();
    setUser(currentUser);
    
    // Filter menu items based on user roles
    const filteredMenuItems = filterMenuItemsByRole([...MENUITEMS], currentUser);
    setMenuitems(filteredMenuItems);
  }, []);

  // Determine menu icon type based on body class
  const menuIconType = useMemo(() => {
    if (typeof document !== 'undefined') {
      return document.body.classList.contains("horizontalmenu") 
        ? "hor-icon" 
        : "sidemenu-icon";
    }
    return "sidemenu-icon";
  }, []);

  // Main content click handler
  const handleMainContentClick = useCallback(() => {
    if (
      document.body.classList.contains("horizontalmenu") &&
      window.innerWidth >= DESKTOP_BREAKPOINT
    ) {
      // Clear menu active state if needed
    }
  }, []);

  // Initialize sidebar menu based on current route
  const initializeSidebarMenu = useCallback(() => {
    const currentPath = router.pathname;
    
    setMenuitems(prevItems => {
      return prevItems.map(mainLevel => ({
        ...mainLevel,
        Items: mainLevel.Items?.map(item => {
          const resetItem = {
            ...item,
            active: false,
            selected: false,
          };

          // Check if current path matches item path
          if (currentPath === item.path) {
            resetItem.active = true;
            resetItem.selected = true;
          }

          // Handle children items
          if (item.children) {
            let parentShouldBeActive = false;
            
            resetItem.children = item.children.map(subItem => {
              const resetSubItem = {
                ...subItem,
                active: false,
                selected: false,
              };

              if (currentPath === subItem.path) {
                resetSubItem.active = true;
                resetSubItem.selected = true;
                parentShouldBeActive = true;
              }

              // Handle nested children
              if (subItem.children) {
                resetSubItem.children = subItem.children.map(nestedItem => {
                  const resetNestedItem = {
                    ...nestedItem,
                    active: false,
                    selected: false,
                  };

                  if (currentPath === nestedItem.path) {
                    resetNestedItem.active = true;
                    resetNestedItem.selected = true;
                    parentShouldBeActive = true;
                    resetSubItem.active = true;
                    resetSubItem.selected = true;
                  }

                  return resetNestedItem;
                });
              }

              return resetSubItem;
            });

            if (parentShouldBeActive) {
              resetItem.active = true;
              resetItem.selected = true;
            }
          }

          return resetItem;
        }) || []
      }));
    });
  }, [router.pathname]);

  // Toggle submenu visibility
  const toggleSidemenu = useCallback((targetItem) => {
    if (
      document.body.classList.contains("horizontalmenu-hover") &&
      window.innerWidth >= DESKTOP_BREAKPOINT
    ) {
      return;
    }

    setMenuitems(prevItems => {
      return prevItems.map(mainLevel => ({
        ...mainLevel,
        Items: mainLevel.Items?.map(item => {
          if (item === targetItem) {
            return { ...item, active: !item.active };
          }

          // Close other items if opening a new one
          if (!targetItem.active && item.active) {
            return { ...item, active: false };
          }

          // Handle nested items
          if (item.children) {
            const updatedChildren = item.children.map(child => {
              if (child === targetItem) {
                return { ...child, active: !child.active };
              }
              
              if (child.children) {
                const updatedNestedChildren = child.children.map(nested => {
                  if (nested === targetItem) {
                    return { ...nested, active: !nested.active };
                  }
                  return nested;
                });
                
                return { ...child, children: updatedNestedChildren };
              }
              
              return child;
            });

            return { ...item, children: updatedChildren };
          }

          return item;
        }) || []
      }));
    });
  }, []);

  // Hover handlers
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    const mainBody = document.querySelector(".main-body");
    if (mainBody?.classList.contains("main-sidebar-hide")) {
      mainBody.classList.add("main-sidebar-open");
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    document.querySelector(".main-body")?.classList.remove("main-sidebar-open");
  }, []);

  // Effects
  useEffect(() => {
    initializeSidebarMenu();
  }, [initializeSidebarMenu]);

  useEffect(() => {
    const mainContent = document.querySelector(".main-content");
    if (mainContent) {
      mainContent.addEventListener("click", handleMainContentClick);
      return () => {
        mainContent.removeEventListener("click", handleMainContentClick);
      };
    }
  }, [handleMainContentClick]);

  // Render menu item
  const renderMenuItem = (menuItem, index) => {
    const isActive = menuItem.selected ? "active" : "";
    
    return (
      <li key={`menu-${index}`} className={`nav-item ${isActive}`}>
        {menuItem.type === "sub" ? (
          <a
            href="#!"
            className="nav-link with-sub"
            onClick={(e) => {
              e.preventDefault();
              toggleSidemenu(menuItem);
            }}
          >
            <span className="shape1"></span>
            <span className="shape2"></span>
            <i className={`${menuItem.icon} ${menuIconType} menu-icon`}></i>
            <span className="sidemenu-label">{menuItem.title}</span>
            {menuItem.badge && (
              <label className={menuItem.badge}>{menuItem.badgetxt}</label>
            )}
            <div className="according-menu">
              <i className={`fa angle fa-angle-${menuItem.active ? 'down' : 'right'}`}></i>
            </div>
          </a>
        ) : menuItem.type === "link" ? (
          <Link href={menuItem.path} className={`nav-link ${isActive}`}>
            <span className="shape1"></span>
            <span className="shape2"></span>
            <i className={`${menuItem.icon} ${menuIconType} menu-icon`}></i>
            <span className="sidemenu-label">{menuItem.title}</span>
            {menuItem.badge && (
              <label className={menuItem.badge}>{menuItem.badgetxt}</label>
            )}
          </Link>
        ) : null}
        
        {menuItem.children && (
          <ul 
            className={`nav-sub ${menuItem.active ? "open" : ""}`}
            style={{ display: menuItem.active ? "block" : "none" }}
          >
            {menuItem.children.map((child, childIndex) => 
              renderSubMenuItem(child, childIndex, menuItem)
            )}
          </ul>
        )}
      </li>
    );
  };

  // Render submenu item
  const renderSubMenuItem = (childItem, index, parentItem) => {
    const isActive = childItem.selected ? "active show" : "";
    
    return (
      <li key={`submenu-${index}`} className={`nav-sub-item ${isActive}`}>
        {childItem.type === "sub" ? (
          <a
            href="#!"
            className="nav-sub-link sub-with-sub"
            onClick={(e) => {
              e.preventDefault();
              toggleSidemenu(childItem);
            }}
          >
            <span className="sidemenu-label">{childItem.title}</span>
            <i className={`fa angle fa-angle-${childItem.active ? 'down' : 'right'}`}></i>
          </a>
        ) : childItem.type === "link" ? (
          <Link 
            href={childItem.path} 
            className={`nav-sub-link ${childItem.selected ? "active" : ""}`}
          >
            {childItem.title}
          </Link>
        ) : null}
        
        {childItem.children && (
          <ul 
            className="sub-nav-sub"
            style={{ display: childItem.active ? "block" : "none" }}
          >
            {childItem.children.map((nestedItem, nestedIndex) => (
              <li 
                key={`nested-${nestedIndex}`} 
                className={`nav-sub-item ${nestedItem.selected ? "active" : ""}`}
              >
                <Link 
                  href={nestedItem.path} 
                  className={`nav-sub-link ${nestedItem.selected ? "active" : ""}`}
                >
                  {nestedItem.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      <div 
        className="sticky" 
        style={{ marginBottom: "-64px" }}
        onScroll={horizontalmenusticky}
      >
        <div className="main-menu main-sidebar main-sidebar-sticky side-menu">
          <PerfectScrollbar 
            options={{ 
              suppressScrollX: true, 
              useBothWheelAxes: false 
            }}
          >
            <div className="main-container-1 active main-sidebar-header">
              <div className="sidemenu-logo">
               <Link className="main-logo" href={`/dashboard`}>
                  <img
                    src={logolight.src}
                    className="header-brand-img desktop-logo"
                    alt={"logo1"}
                    style={{ width: "100px" }}
                  />

                  <img
                    src={iconlight.src}
                    className="header-brand-img icon-logo"
                    style={{ width: "45px" }}
                    alt={"logo-2"}
                  />

                  <img
                    src={logo.src}
                    className="header-brand-img desktop-logo theme-logo"
                    alt={"logo-3"}
                  />
                  <img
                    src={icon.src}
                    className="header-brand-img icon-logo theme-logo"
                    alt={"logo-4"}
                  />
                </Link>
              </div>
              
              <div
                className="main-body-1 main-sidebar-body"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="slide-left" id="slide-left">
                  <i className="fe fe-chevron-left"></i>
                </div>

                <ul className="menu-nav nav" style={{ marginLeft: "0px" }}>
                  {menuitems.map((section, sectionIndex) => (
                    <React.Fragment key={`section-${sectionIndex}`}>
                      <li className="nav-header">
                        <span className="nav-label">{section.menutitle}</span>
                      </li>
                      {section.Items?.map((menuItem, itemIndex) => 
                        renderMenuItem(menuItem, itemIndex)
                      )}
                    </React.Fragment>
                  ))}
                </ul>

                <div className="slide-right" id="slide-right">
                  <i className="fe fe-chevron-right"></i>
                </div>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </div>
      <div className="jumps-prevent" style={{ paddingTop: "64px" }}></div>
    </>
  );
};

export default SideBar;