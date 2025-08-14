export const MENUITEMS = [
  {
    menutitle: "DASHBOARD",
    Items: [
      {
        path: "/dashboard",
        icon: "ti-home",
        type: "link",
        active: false,
        selected: false,
        title: "Dashboard",
      },
      {
        path: "/candidats",
        type: "link",
        icon: "ti-user",
        active: false,
        selected: false,
        title: "Candidat",
      },
      {
        path: "/bureaux",
        type: "link",
        icon: "ti-briefcase",
        active: false,
        selected: false,
        title: "Bureau de Votes",
      },
      {
        path: "/vote",
        type: "link",
        icon: "ti-briefcase",
        active: false,
        selected: false,
        title: "Votes",
      },
    ]
  },
  {
    menutitle: "ADMINISTRATION",
    requiredRole: "superadmin",
    Items: [
      {
        path: "/admin",
        icon: "ti-shield",
        type: "link",
        active: false,
        selected: false,
        title: "Admin Dashboard",
        requiredRole: "superadmin",
      },
    ]
  }
]


