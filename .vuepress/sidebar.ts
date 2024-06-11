import {SidebarConfig4Multiple} from "vuepress/config";

import roadmapSideBar from "./sidebars/roadmapSideBar";
import aiTutorialsSideBar from "./sidebars/aiTutorialsSideBar";
import fomecardSideBar from "./sidebars/fomecardSideBar";
// @ts-ignore
export default {
    // "/学习路线/": roadmapSideBar,
    "/AI升级教程/": aiTutorialsSideBar,
    "/FomeCard虚拟卡/": fomecardSideBar,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
