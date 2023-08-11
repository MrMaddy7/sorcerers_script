import React from 'react';
import NavbarView from "./navbar/NavbarView";
import SidebarView from "./sidebar/SidebarView";
import FooterView from "./footer/FooterView";
import CardContinerView from "./cardContainer/CardContainerView";

function DashboardView() {
    return (
        <div>
            <NavbarView />
            <SidebarView />
            <CardContinerView />
            <FooterView />
        </div>
    );
}

export default DashboardView;