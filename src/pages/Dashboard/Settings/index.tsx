import React, { useState, useEffect } from "react";
import { Button, Collapse } from "reactstrap";
import classnames from "classnames";
import { createSelector } from "reselect";
// hooks
import { useRedux } from "../../../hooks/index.ts";

// actions
import { getSettings, updateSettings } from "../../../redux/settings/actions.ts";

// constants
import { SETTINGS_COLLAPSES } from "../../../constant/settings.ts";

// interface
import { SettingsTypes } from "../../../data/settings.ts";

// components
import Loader from "../../../components/Loader.tsx";
import AppSimpleBar from "../../../components/AppSimpleBar.tsx";
import UserCoverImage from "./UserCoverImage.tsx";
import UserProfile from "./UserProfile.tsx";
import PersonalInfo from "./PersonalInfo.tsx";
import ThemeSettings from "./ThemeSettings.tsx";
import Privacy from "./Privacy.tsx";
import Security from "./Security.tsx";
import Help from "./Help.tsx";

interface CollapseItemTypes {
  value:
    | SETTINGS_COLLAPSES.PROFILE
    | SETTINGS_COLLAPSES.HELP
    | SETTINGS_COLLAPSES.PRIVACY
    | SETTINGS_COLLAPSES.SECURITY
    | SETTINGS_COLLAPSES.THEME;
  label: string;
  icon: string;
  component: any;
}

interface AccordianItemProps {
  item: CollapseItemTypes;
  onChange: (
    id:
      | null
      | SETTINGS_COLLAPSES.PROFILE
      | SETTINGS_COLLAPSES.HELP
      | SETTINGS_COLLAPSES.PRIVACY
      | SETTINGS_COLLAPSES.SECURITY
      | SETTINGS_COLLAPSES.THEME
  ) => void;
  selectedMenu:
    | null
    | SETTINGS_COLLAPSES.PROFILE
    | SETTINGS_COLLAPSES.HELP
    | SETTINGS_COLLAPSES.PRIVACY
    | SETTINGS_COLLAPSES.SECURITY
    | SETTINGS_COLLAPSES.THEME;
}
const AccordianItem = ({
  item,
  selectedMenu,
  onChange,
}: AccordianItemProps) => {
  const isOpen: boolean =
    selectedMenu && selectedMenu === item.value ? true : false;
  const toggleCollapse = () => {
    if (isOpen) {
      onChange(null);
    } else {
      onChange(item.value);
    }
  };
  return (
    <div className="accordion-item">
      <div className="accordion-header" id="headerpersonalinfo">
        <Button
          color="none"
          className={classnames(
            "accordion-button",
            "font-size-14",
            "fw-medium",
            { collapsed: !isOpen }
          )}
          onClick={toggleCollapse}
          type="button"
        >
          <i className={classnames("text-muted", "me-3", item.icon)}></i>{" "}
          {item.label}
        </Button>
      </div>
      <Collapse
        isOpen={isOpen}
        id="personalinfo"
        className="accordion-collapse"
      >
        {item.component}
      </Collapse>
    </div>
  );
};
interface IndexProps {}
const Index = (props: IndexProps) => {
  // global store
  const { dispatch, useAppSelector } = useRedux();


  const errorData = createSelector(
    (state : any) => state.Settings,
    (state : any) => state.Profile,
    (state) => ({
    settingsData: state.settings,
    getSettingsLoading: state.getSettingsLoading,
    isSettingsFetched: state.isSettingsFetched,
    })
  );
  // Inside your component
  const { settingsData,getSettingsLoading } = useAppSelector(errorData);

  // get user settings
  useEffect(() => {
    dispatch(getSettings());
  }, [dispatch]);

  const [settings, setSettings] = useState<SettingsTypes>(settingsData);
  useEffect(() => {
    setSettings(settingsData);
  }, [settingsData]);

  /*
  api calling
  */
  const onChangeData = (field: string, value: any) => {
    dispatch(updateSettings(field, value));
  };

  /*
  collapse handeling
  */
  const [selectedMenu, setSelectedMenu] = useState<
    | null
    | SETTINGS_COLLAPSES.PROFILE
    | SETTINGS_COLLAPSES.HELP
    | SETTINGS_COLLAPSES.PRIVACY
    | SETTINGS_COLLAPSES.SECURITY
    | SETTINGS_COLLAPSES.THEME
  >(null);

  const collapseItems: CollapseItemTypes[] = [
    {
      value: SETTINGS_COLLAPSES.PROFILE,
      label: "Personal Info",
      icon: "bx bxs-user",
      component: <PersonalInfo basicDetails={settings.basicDetails} />,
    },
    {
      value: SETTINGS_COLLAPSES.THEME,
      label: "Themes",
      icon: "bx bxs-adjust-alt",
      component: (
        <ThemeSettings theme={settings.theme} onChangeData={onChangeData} />
      ),
    },
    {
      value: SETTINGS_COLLAPSES.PRIVACY,
      label: "Privacy",
      icon: "bx bxs-lock",
      component: (
        <Privacy privacy={settings.privacy} onChangeSettings={onChangeData} />
      ),
    },
    {
      value: SETTINGS_COLLAPSES.SECURITY,
      label: "Security",
      icon: "bx bxs-check-shield",
      component: (
        <Security
          security={settings.security}
          onChangeSettings={onChangeData}
        />
      ),
    },
    {
      value: SETTINGS_COLLAPSES.HELP,
      label: "Help",
      icon: "bx bxs-help-circle",
      component: <Help />,
    },
  ];

  const onChangeCollapse = (
    id:
      | null
      | SETTINGS_COLLAPSES.PROFILE
      | SETTINGS_COLLAPSES.HELP
      | SETTINGS_COLLAPSES.PRIVACY
      | SETTINGS_COLLAPSES.SECURITY
      | SETTINGS_COLLAPSES.THEME
  ) => {
    setSelectedMenu(id);
  };

  return (
    <div className="position-relative">
      {getSettingsLoading && <Loader />}
      <UserCoverImage basicDetails={settings.basicDetails} />

      <UserProfile
        basicDetails={settings.basicDetails}
        status={settings.status}
      />
      {/* Start User profile description */}
      <AppSimpleBar className="user-setting">
        <div id="settingprofile" className="accordion accordion-flush">
          {(collapseItems || []).map((item: CollapseItemTypes, key: number) => (
            <AccordianItem
              item={item}
              key={key}
              selectedMenu={selectedMenu}
              onChange={onChangeCollapse}
            />
          ))}
        </div>
        {/* end profile-setting-accordion */}
      </AppSimpleBar>
    </div>
  );
};

export default Index;
