import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { desktopOutline, pawOutline, statsChartOutline } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

interface MainTabsProps {}

const MainTabs: React.FC<MainTabsProps> = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/tab1" />
        {/* <Route path="" element={<Main/>}</Route> */}

        <Route exact path="/tabs/tab1" component={Tab1} />
        <Route exact path="/tabs/tab2" component={Tab2} />
        <Route exact path="/tabs/tab3" component={Tab3} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/tab1">
          <IonIcon icon={desktopOutline} />
          <IonLabel>영상분석</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/tab2">
          <IonIcon icon={statsChartOutline} />
          <IonLabel>분석결과</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/tab3">
          <IonIcon icon={pawOutline} />
          <IonLabel>마이페이지</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;
