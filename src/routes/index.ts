import React, { ReactNode } from "react";

import { Home } from "@/pages";

interface IRoute {
  path: string;
  component: React.FC;
  layout?: React.FC<{ children: ReactNode }>;
}

const publicRoutes: IRoute[] = [
  {
    path: "/",
    component: Home,
  },
];

const privateRoutes: IRoute[] = [];

export { privateRoutes, publicRoutes };

